const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
const addressRoutes = require('./routes/addresses');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;
console.log('Environment PORT:', process.env.PORT);
console.log('Using PORT:', PORT);

// Test database connection
const pool = require('./config/database');
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    console.log('Please make sure PostgreSQL is running and the database exists.');
    console.log('You can create the database with: createdb food_delivery');
    console.log('For now, starting server without database...');
  } else {
    console.log('Database connected successfully');
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/addresses', addressRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Food Delivery API is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 