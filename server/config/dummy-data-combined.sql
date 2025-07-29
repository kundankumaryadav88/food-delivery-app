-- Clear existing data
TRUNCATE users, food_items, orders, order_items CASCADE;

-- Insert restaurant users (password is 'password123' for all users)
INSERT INTO users (name, email, password, role) VALUES
-- North Indian Restaurants
('Royal Punjab', 'royal.punjab@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Taj Kitchen', 'taj.kitchen@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Delhi Darbar', 'delhi.darbar@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Punjabi Dhaba', 'punjabi.dhaba@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- South Indian Restaurants
('Dosa House', 'dosa.house@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Chennai Express', 'chennai.express@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Udupi Palace', 'udupi.palace@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Kerala Kitchen', 'kerala.kitchen@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Chinese and Asian Fusion
('Dragon Palace', 'dragon.palace@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Wok & Roll', 'wok.roll@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Asian Fusion', 'asian.fusion@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Oriental Bites', 'oriental.bites@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Italian and Continental
('Pizza Paradise', 'pizza.paradise@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Pasta House', 'pasta.house@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Continental Corner', 'continental@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Mediterranean Meals', 'mediterranean@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Fast Food & Snacks
('Burger King Plus', 'burger.plus@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Snack Shack', 'snack.shack@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Food Court', 'food.court@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Quick Bites', 'quick.bites@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant');

-- Insert customer users (password is 'password123' for all users)
INSERT INTO users (name, email, password, role) VALUES
('John Customer', 'john@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'customer'),
('Alice User', 'alice@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'customer');

-- Include menu items from all categories
-- Import northindian.sql content here
-- Import southindian.sql content here
-- Import chinese.sql content here
-- Import italian.sql content here
-- Import fastfood.sql content here
