const express = require('express');
const pool = require('../config/database');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get all food items (public)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT fi.*, u.name as restaurant_name 
      FROM food_items fi 
      JOIN users u ON fi.user_id = u.id 
      ORDER BY fi.created_at DESC
    `);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Get menu error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new food item (restaurant only)
router.post('/', authMiddleware, roleMiddleware(['restaurant']), async (req, res) => {
  try {
    const { name, description, price, image_url } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }

    const result = await pool.query(
      'INSERT INTO food_items (user_id, name, description, price, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.user.id, name, description, price, image_url]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Add food item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update food item (restaurant only)
router.put('/:id', authMiddleware, roleMiddleware(['restaurant']), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image_url } = req.body;

    // Check if food item exists and belongs to the user
    const checkResult = await pool.query(
      'SELECT id FROM food_items WHERE id = $1 AND user_id = $2',
      [id, req.user.id]
    );

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ message: 'Food item not found or not authorized' });
    }

    const result = await pool.query(
      'UPDATE food_items SET name = $1, description = $2, price = $3, image_url = $4 WHERE id = $5 RETURNING *',
      [name, description, price, image_url, id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update food item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete food item (restaurant only)
router.delete('/:id', authMiddleware, roleMiddleware(['restaurant']), async (req, res) => {
  try {
    const { id } = req.params;

    // Check if food item exists and belongs to the user
    const checkResult = await pool.query(
      'SELECT id FROM food_items WHERE id = $1 AND user_id = $2',
      [id, req.user.id]
    );

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ message: 'Food item not found or not authorized' });
    }

    await pool.query('DELETE FROM food_items WHERE id = $1', [id]);

    res.json({ message: 'Food item deleted successfully' });
  } catch (error) {
    console.error('Delete food item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get food items by restaurant (restaurant only)
router.get('/my-items', authMiddleware, roleMiddleware(['restaurant']), async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM food_items WHERE user_id = $1 ORDER BY created_at DESC',
      [req.user.id]
    );
    
    res.json(result.rows);
  } catch (error) {
    console.error('Get my items error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 