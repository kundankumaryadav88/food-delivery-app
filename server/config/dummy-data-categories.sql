-- Clear existing data
TRUNCATE users, food_items, orders, order_items CASCADE;

-- Insert restaurant users (password is 'password123' for all users)
INSERT INTO users (name, email, password, role) VALUES
-- Pizza Restaurants
('Pizza Express', 'pizza.express@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Burger Restaurants
('Burger Express', 'burger.express@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Sushi Restaurants
('Sushi Master', 'sushi.master@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Indian Restaurants
('Taj Spice', 'taj.spice@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Chinese Restaurants
('Dragon Wok', 'dragon.wok@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Dessert Places
('Sweet Treats', 'sweet.treats@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Beverage Places
('Beverage Bar', 'beverage.bar@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant');

-- Insert customer users (password is 'password123' for all users)
INSERT INTO users (name, email, password, role) VALUES
('John Customer', 'john@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'customer'),
('Alice User', 'alice@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'customer');

-- Include menu items from all categories
\i config/dummy-data-pizza.sql
\i config/dummy-data-burger.sql
\i config/dummy-data-sushi.sql
\i config/dummy-data-northindian.sql
\i config/dummy-data-chinese.sql
\i config/dummy-data-dessert.sql
\i config/dummy-data-drinks.sql
