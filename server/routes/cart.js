const express = require('express');
const { auth } = require('../middleware/auth');
const Cart = require('../models/Cart');
const MenuItem = require('../models/MenuItem');

const router = express.Router();

// Get user's cart
router.get('/', auth, async (req, res) => {
  try {
    const cartItems = await Cart.findAll({
      where: { user_id: req.user.id },
      include: [{
        model: MenuItem,
        attributes: ['id', 'name', 'price', 'description', 'image_url']
      }]
    });

    res.json({ cartItems });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add item to cart
router.post('/', auth, async (req, res) => {
  try {
    const { menu_item_id, quantity } = req.body;

    // Check if item exists
    const menuItem = await MenuItem.findByPk(menu_item_id);
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    // Check if item is already in cart
    let cartItem = await Cart.findOne({
      where: {
        user_id: req.user.id,
        menu_item_id
      }
    });

    if (cartItem) {
      // Update quantity if item exists
      cartItem = await cartItem.update({
        quantity: quantity || cartItem.quantity + 1
      });
    } else {
      // Create new cart item
      cartItem = await Cart.create({
        user_id: req.user.id,
        menu_item_id,
        quantity: quantity || 1
      });
    }

    res.status(201).json({
      message: 'Item added to cart',
      cartItem
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update cart item quantity
router.put('/:itemId', auth, async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await Cart.findOne({
      where: {
        id: req.params.itemId,
        user_id: req.user.id
      }
    });

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    if (quantity <= 0) {
      await cartItem.destroy();
      return res.json({ message: 'Item removed from cart' });
    }

    await cartItem.update({ quantity });
    res.json({
      message: 'Cart updated',
      cartItem
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remove item from cart
router.delete('/:itemId', auth, async (req, res) => {
  try {
    const result = await Cart.destroy({
      where: {
        id: req.params.itemId,
        user_id: req.user.id
      }
    });

    if (!result) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Clear cart
router.delete('/', auth, async (req, res) => {
  try {
    await Cart.destroy({
      where: { user_id: req.user.id }
    });

    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
