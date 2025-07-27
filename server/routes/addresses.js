const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { authMiddleware: auth } = require('../middleware/auth');

// Get all addresses for a customer
router.get('/', auth, async function(req, res) {
  try {
    console.log('Getting addresses for user:', req.user.id);
    const addresses = await db.query(
      'SELECT * FROM addresses WHERE user_id = $1 ORDER BY is_default DESC, created_at DESC',
      [req.user.id]
    );
    // console.log('Found addresses:', addresses.rows);
    res.json(addresses.rows);
  } catch (error) {
    // console.error('Error fetching addresses:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new address
router.post('/', auth, async function(req, res) {
  const { street, city, state, pincode, type } = req.body;
  
  // Validate required fields
  if (!street || !city || !state || !pincode || !type) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate address type
  const validTypes = ['home', 'work', 'other'];
  if (!validTypes.includes(type)) {
    return res.status(400).json({ message: 'Invalid address type' });
  }

  // Validate pincode format (6 digits)
  if (!/^\d{6}$/.test(pincode)) {
    return res.status(400).json({ message: 'Invalid pincode format' });
  }

  try {
    await db.query('BEGIN');

    // If this is the first address, make it default
    const addressCount = await db.query(
      'SELECT COUNT(*) FROM addresses WHERE user_id = $1',
      [req.user.id]
    );
    
    const isDefault = parseInt(addressCount.rows[0].count) === 0;

    const result = await db.query(
      'INSERT INTO addresses (user_id, street, city, state, pincode, type, is_default) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [req.user.id, street, city, state, pincode, type, isDefault]
    );

    await db.query('COMMIT');
    res.json(result.rows[0]);
  } catch (error) {
    await db.query('ROLLBACK');
    console.error('Error adding address:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Set address as default
router.put('/:id/default', auth, async function(req, res) {
  try {
    await db.query('BEGIN');
    
    // First verify the address exists and belongs to the user
    const checkResult = await db.query(
      'SELECT * FROM addresses WHERE id = $1 AND user_id = $2',
      [req.params.id, req.user.id]
    );

    if (checkResult.rows.length === 0) {
      await db.query('ROLLBACK');
      return res.status(404).json({ message: 'Address not found' });
    }

    // Remove default from all other addresses for this user in a single query
    await db.query(
      'UPDATE addresses SET is_default = CASE WHEN id = $1 THEN true ELSE false END WHERE user_id = $2',
      [req.params.id, req.user.id]
    );

    // Get the updated address
    const result = await db.query(
      'SELECT * FROM addresses WHERE id = $1',
      [req.params.id]
    );

    await db.query('COMMIT');
    res.json(result.rows[0]);
  } catch (error) {
    await db.query('ROLLBACK');
    console.error('Error setting default address:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete an address
router.delete('/:id', auth, async function(req, res) {
  try {
    await db.query('BEGIN');

    // First check if the address exists and belongs to the user
    const checkResult = await db.query(
      'SELECT * FROM addresses WHERE id = $1 AND user_id = $2',
      [req.params.id, req.user.id]
    );

    if (checkResult.rows.length === 0) {
      await db.query('ROLLBACK');
      return res.status(404).json({ message: 'Address not found' });
    }

    const address = checkResult.rows[0];

    // Delete the address
    await db.query(
      'DELETE FROM addresses WHERE id = $1',
      [req.params.id]
    );

    // If deleted address was default, set a new default if other addresses exist
    if (address.is_default) {
      const remainingAddresses = await db.query(
        'SELECT id FROM addresses WHERE user_id = $1 ORDER BY created_at ASC LIMIT 1',
        [req.user.id]
      );

      if (remainingAddresses.rows.length > 0) {
        await db.query(
          'UPDATE addresses SET is_default = true WHERE id = $1',
          [remainingAddresses.rows[0].id]
        );
      }
    }

    await db.query('COMMIT');
    res.json({ 
      message: 'Address deleted successfully',
      wasDefault: address.is_default
    });
  } catch (error) {
    await db.query('ROLLBACK');
    console.error('Error deleting address:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
