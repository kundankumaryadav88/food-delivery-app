const fs = require('fs');
const path = require('path');
const pool = require('./database'); // Adjust path if needed

// Order matters! schema.sql first to create tables, then categories to create users, then other files
const sqlFiles = [
  'schema.sql',           // Create tables
  'dummy-data-categories.sql',  // Create restaurant users
  'dummy-data-burger.sql',      // Add menu items
  'dummy-data-pizza.sql',
  'dummy-data-sushi.sql',
  'dummy-data-northindian.sql',
  'dummy-data-southindian.sql',
  'dummy-data-chinese.sql',
  'dummy-data-italian.sql',
  'dummy-data-fastfood.sql',
  'dummy-data-dessert.sql',
  'dummy-data-drinks.sql'
];

const runSeeds = async () => {
  try {
    for (const file of sqlFiles) {
      const filePath = path.join(__dirname, file);
      const sql = fs.readFileSync(filePath, 'utf-8');
      await pool.query(sql);
      console.log(`✅ Executed: ${file}`);
    }

    console.log('🌱 All SQL seed files executed successfully!');
    pool.end();
  } catch (err) {
    console.error('❌ Error while seeding data:', err);
    pool.end();
  }
};

runSeeds();
