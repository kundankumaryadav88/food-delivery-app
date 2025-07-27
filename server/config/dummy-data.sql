-- Clear existing data
TRUNCATE users, food_items, orders, order_items CASCADE;

-- Insert restaurant users
INSERT INTO users (name, email, password, role) VALUES
('Multi Cuisine Restaurant', 'abc@gmail.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant');

-- Insert customer users (password is 'password123' for all users)
INSERT INTO users (name, email, password, role) VALUES
('John Customer', 'john@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'customer'),
('Alice User', 'alice@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'customer');

-- Insert menu items (Multi Cuisine)
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
-- Indian Category
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Butter Chicken', 'Creamy tomato-based curry with tender chicken pieces', 15.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Paneer Tikka', 'Grilled cottage cheese with spices', 13.99, 'indian', true, 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Dal Makhani', 'Creamy black lentils', 11.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Chicken Biryani', 'Fragrant rice dish with spiced chicken', 16.99, 'indian', false, 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Vegetable Biryani', 'Aromatic rice with mixed vegetables', 14.99, 'indian', true, 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500'),

-- Chinese Category
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Kung Pao Chicken', 'Spicy diced chicken with peanuts', 14.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Vegetable Noodles', 'Stir-fried noodles with mixed vegetables', 12.99, 'chinese', true, 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Fried Rice', 'Classic Chinese style fried rice', 11.99, 'chinese', true, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Sweet and Sour Pork', 'Crispy pork in sweet and sour sauce', 15.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Spring Rolls', 'Crispy vegetable spring rolls', 8.99, 'chinese', true, 'https://images.unsplash.com/photo-1606503153255-59d5e77be00c?w=500'),

-- Italian Category
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Margherita Pizza', 'Classic tomato and mozzarella pizza', 13.99, 'italian', true, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Pepperoni Pizza', 'Pizza with spicy pepperoni', 15.99, 'italian', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Pasta Carbonara', 'Creamy pasta with bacon', 14.99, 'italian', false, 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Penne Arrabbiata', 'Spicy tomato pasta', 13.99, 'italian', true, 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Tiramisu', 'Classic Italian coffee-flavored dessert', 7.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),

-- Mexican Category
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Chicken Tacos', 'Soft tacos with grilled chicken', 12.99, 'mexican', false, 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Vegetarian Quesadilla', 'Grilled tortilla with cheese and vegetables', 11.99, 'mexican', true, 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Beef Burrito', 'Large burrito with seasoned beef', 14.99, 'mexican', false, 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Nachos Supreme', 'Loaded nachos with all toppings', 13.99, 'mexican', false, 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500'),
((SELECT id FROM users WHERE email = 'abc@gmail.com'), 'Guacamole & Chips', 'Fresh guacamole with tortilla chips', 8.99, 'mexican', true, 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=500');

-- Insert menu items for Pizza Heaven
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'pizza@example.com'), 'Margherita Pizza', 'Classic tomato and mozzarella', 14.99, 'pizza', true, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'pizza@example.com'), 'Pepperoni Pizza', 'Spicy pepperoni with cheese', 16.99, 'pizza', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza@example.com'), 'Veggie Supreme', 'Loaded with fresh vegetables', 15.99, 'pizza', true, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500');

-- Insert menu items for Sushi Master
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'sushi@example.com'), 'California Roll', 'Crab, avocado and cucumber', 12.99, 'sushi', false, 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500'),
((SELECT id FROM users WHERE email = 'sushi@example.com'), 'Veggie Roll', 'Cucumber, avocado and carrot', 11.99, 'sushi', true, 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500'),
((SELECT id FROM users WHERE email = 'sushi@example.com'), 'Salmon Nigiri', 'Fresh salmon on rice', 13.99, 'sushi', false, 'https://images.unsplash.com/photo-1633478062482-3358e83356fc?w=500');

-- Insert menu items for Burger Joint
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'burger@example.com'), 'Classic Cheeseburger', 'Beef patty with cheese and fresh veggies', 12.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger@example.com'), 'Veggie Burger', 'Plant-based patty with fresh toppings', 11.99, 'burger', true, 'https://images.unsplash.com/photo-1585238341267-1cfec2046a55?w=500'),
((SELECT id FROM users WHERE email = 'burger@example.com'), 'Chicken Burger', 'Grilled chicken with special sauce', 13.99, 'burger', false, 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500');

-- Insert sample orders with delivery addresses
INSERT INTO orders (customer_id, total, status, delivery_address) VALUES
((SELECT id FROM users WHERE email = 'john@example.com'), 45.97, 'delivered', '123 Main St, Anytown, USA'),
((SELECT id FROM users WHERE email = 'alice@example.com'), 38.97, 'preparing', '456 Oak Ave, Somewhere, USA');

-- Insert order items
INSERT INTO order_items (order_id, food_id, quantity) VALUES
((SELECT max(id) - 1 FROM orders), (SELECT id FROM food_items WHERE name = 'Butter Chicken'), 2),
((SELECT max(id) - 1 FROM orders), (SELECT id FROM food_items WHERE name = 'Paneer Tikka'), 1),
((SELECT max(id) FROM orders), (SELECT id FROM food_items WHERE name = 'Margherita Pizza'), 1),
((SELECT max(id) FROM orders), (SELECT id FROM food_items WHERE name = 'Pepperoni Pizza'), 1);
