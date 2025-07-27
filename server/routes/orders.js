const express = require('express');
const pool = require('../config/database');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

const router = express.Router();

// Place new order (customer only)
router.post('/', authMiddleware, roleMiddleware(['customer']), async (req, res) => {
  try {
    const { items, total } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Items array is required' });
    }

    if (!total || total <= 0) {
      return res.status(400).json({ message: 'Valid total amount is required' });
    }

    const { delivery_address } = req.body;
    if (!delivery_address) {
      return res.status(400).json({ message: 'Delivery address is required' });
    }

    // Start transaction
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');

      // Create order with initial status 'pending'
      const orderResult = await client.query(
        'INSERT INTO orders (customer_id, total, status, delivery_address) VALUES ($1, $2, $3, $4) RETURNING id',
        [req.user.id, total, 'pending', delivery_address]
      );

      const orderId = orderResult.rows[0].id;

      // Add order items
      for (const item of items) {
        await client.query(
          'INSERT INTO order_items (order_id, food_id, quantity) VALUES ($1, $2, $3)',
          [orderId, item.id, item.quantity]
        );
      }

      await client.query('COMMIT');

      res.status(201).json({ 
        message: 'Order placed successfully',
        orderId 
      });
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Place order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's orders (customer only)
router.get('/user', authMiddleware, roleMiddleware(['customer']), async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        o.id,
        o.total,
        o.status,
        o.created_at,
        o.delivery_address,
        json_agg(
          json_build_object(
            'food_id', oi.food_id,
            'quantity', oi.quantity,
            'food_name', fi.name,
            'food_price', fi.price
          )
        ) as items,
        json_build_object(
          'id', u.id,
          'name', u.name,
          'email', u.email
        ) as restaurant
      FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      JOIN food_items fi ON oi.food_id = fi.id
      JOIN users u ON fi.user_id = u.id
      WHERE o.customer_id = $1
      GROUP BY o.id, o.total, o.status, o.created_at, o.delivery_address, u.id, u.name, u.email
      ORDER BY o.created_at DESC
    `, [req.user.id]);

    res.json(result.rows);
  } catch (error) {
    console.error('Get user orders error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get restaurant orders (restaurant only)
router.get('/restaurant', authMiddleware, roleMiddleware(['restaurant']), async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        o.id,
        o.total,
        o.status,
        o.created_at,
        o.delivery_address,
        json_agg(
          json_build_object(
            'food_id', oi.food_id,
            'quantity', oi.quantity,
            'food_name', fi.name,
            'food_price', fi.price
          )
        ) as items,
        json_build_object(
          'id', c.id,
          'name', c.name,
          'email', c.email
        ) as customer
      FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      JOIN food_items fi ON oi.food_id = fi.id
      JOIN users c ON o.customer_id = c.id
      WHERE fi.user_id = $1
      GROUP BY o.id, o.total, o.status, o.created_at, o.delivery_address, c.id, c.name, c.email
      ORDER BY o.created_at DESC
    `, [req.user.id]);

    res.json(result.rows);
  } catch (error) {
    console.error('Get restaurant orders error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update order status (restaurant only)
router.put('/:id/status', authMiddleware, roleMiddleware(['restaurant']), async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'Status is required' });
    }

    const newStatus = status.toLowerCase();

    // Get current order status first
    const currentOrder = await pool.query(
      'SELECT o.status, o.customer_id, u.id as restaurant_id FROM orders o ' +
      'JOIN order_items oi ON o.id = oi.order_id ' +
      'JOIN food_items fi ON oi.food_id = fi.id ' +
      'JOIN users u ON fi.user_id = u.id ' +
      'WHERE o.id = $1 ' +
      'LIMIT 1', 
      [id]
    );

    if (currentOrder.rows.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Check if this restaurant owns this order
    if (currentOrder.rows[0].restaurant_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this order' });
    }

    const currentStatus = currentOrder.rows[0].status.toLowerCase();

    // Define valid statuses and their order
    const STATUS_ORDER = ['pending', 'preparing', 'ready', 'delivered', 'completed'];
    
    // Validate new status
    if (!STATUS_ORDER.includes(newStatus)) {
      return res.status(400).json({ 
        message: 'Invalid status. Must be one of: ' + STATUS_ORDER.join(', ') 
      });
    }

    // Get indices to check if the transition is valid (can only move forward)
    const currentIndex = STATUS_ORDER.indexOf(currentStatus);
    const newIndex = STATUS_ORDER.indexOf(newStatus);

    // Can only move one step forward
    if (newIndex !== currentIndex + 1) {
      return res.status(400).json({ 
        message: `Invalid status transition. Can't change from ${currentStatus} to ${newStatus}. Next valid status is: ${STATUS_ORDER[currentIndex + 1]}`
      });
    }

    // Update the status
    await pool.query(
      'UPDATE orders SET status = $1 WHERE id = $2',
      [newStatus, id]
    );

    res.json({ 
      message: 'Order status updated successfully',
      orderId: id,
      newStatus
    });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get order by ID (for both customer and restaurant)
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query(`
      SELECT 
        o.id,
        o.total,
        o.status,
        o.created_at,
        o.delivery_address,
        json_agg(
          json_build_object(
            'food_id', oi.food_id,
            'quantity', oi.quantity,
            'food_name', fi.name,
            'food_price', fi.price
          )
        ) as items,
        json_build_object(
          'id', c.id,
          'name', c.name,
          'email', c.email
        ) as customer,
        json_build_object(
          'id', r.id,
          'name', r.name,
          'email', r.email
        ) as restaurant
      FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      JOIN food_items fi ON oi.food_id = fi.id
      JOIN users c ON o.customer_id = c.id
      JOIN users r ON fi.user_id = r.id
      WHERE o.id = $1
      GROUP BY o.id, o.total, o.status, o.created_at, o.delivery_address, c.id, c.name, c.email, r.id, r.name, r.email
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const order = result.rows[0];

    // Check if the user has permission to view this order
    if (req.user.role === 'customer' && order.customer.id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to view this order' });
    }
    if (req.user.role === 'restaurant' && order.restaurant.id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to view this order' });
    }

    res.json(order);
  } catch (error) {
    console.error('Get order by ID error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
