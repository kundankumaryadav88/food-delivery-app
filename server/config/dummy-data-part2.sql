-- Insert menu items for Mexican Restaurants
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
-- Taco Fiesta Menu
((SELECT id FROM users WHERE email = 'taco.fiesta@example.com'), 'Beef Tacos', 'Three soft tacos with seasoned beef', 12.99, 'mexican', false, 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500'),
((SELECT id FROM users WHERE email = 'taco.fiesta@example.com'), 'Chicken Quesadilla', 'Grilled tortilla with chicken and cheese', 13.99, 'mexican', false, 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500'),
((SELECT id FROM users WHERE email = 'taco.fiesta@example.com'), 'Veggie Burrito', 'Large burrito with mixed vegetables', 11.99, 'mexican', true, 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?w=500'),
((SELECT id FROM users WHERE email = 'taco.fiesta@example.com'), 'Nachos Supreme', 'Loaded nachos with all toppings', 14.99, 'mexican', false, 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500'),
((SELECT id FROM users WHERE email = 'taco.fiesta@example.com'), 'Guacamole', 'Fresh guacamole with chips', 7.99, 'mexican', true, 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=500'),

-- Mexican Grill Menu
((SELECT id FROM users WHERE email = 'mexican.grill@example.com'), 'Steak Fajitas', 'Sizzling steak with peppers and onions', 18.99, 'mexican', false, 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500'),
((SELECT id FROM users WHERE email = 'mexican.grill@example.com'), 'Enchiladas', 'Three cheese enchiladas with sauce', 14.99, 'mexican', true, 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500'),
((SELECT id FROM users WHERE email = 'mexican.grill@example.com'), 'Fish Tacos', 'Grilled fish tacos with slaw', 15.99, 'mexican', false, 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?w=500'),
((SELECT id FROM users WHERE email = 'mexican.grill@example.com'), 'Mexican Rice', 'Seasoned rice with vegetables', 4.99, 'mexican', true, 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500'),
((SELECT id FROM users WHERE email = 'mexican.grill@example.com'), 'Churros', 'Mexican cinnamon pastry', 6.99, 'mexican', true, 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=500'),

-- Insert menu items for Japanese Restaurants
-- Sushi Master Menu
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'California Roll', 'Crab, avocado and cucumber', 12.99, 'japanese', false, 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Salmon Nigiri', 'Fresh salmon on rice', 14.99, 'japanese', false, 'https://images.unsplash.com/photo-1633478062482-3358e83356fc?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Vegetable Roll', 'Assorted vegetables in rice', 11.99, 'japanese', true, 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Spicy Tuna Roll', 'Spicy tuna with cucumber', 13.99, 'japanese', false, 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Miso Soup', 'Traditional Japanese soup', 4.99, 'japanese', true, 'https://images.unsplash.com/photo-1633478062482-3358e83356fc?w=500'),

-- Ramen House Menu
((SELECT id FROM users WHERE email = 'ramen.house@example.com'), 'Tonkotsu Ramen', 'Pork bone broth with noodles', 15.99, 'japanese', false, 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=500'),
((SELECT id FROM users WHERE email = 'ramen.house@example.com'), 'Vegetable Ramen', 'Vegetable broth with tofu', 13.99, 'japanese', true, 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500'),
((SELECT id FROM users WHERE email = 'ramen.house@example.com'), 'Chicken Katsu', 'Breaded chicken cutlet', 14.99, 'japanese', false, 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500'),
((SELECT id FROM users WHERE email = 'ramen.house@example.com'), 'Gyoza', 'Pan-fried dumplings', 7.99, 'japanese', false, 'https://images.unsplash.com/photo-1633478062482-3358e83356fc?w=500'),
((SELECT id FROM users WHERE email = 'ramen.house@example.com'), 'Green Tea Ice Cream', 'Traditional matcha ice cream', 5.99, 'japanese', true, 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500');

-- Insert some sample orders
INSERT INTO orders (customer_id, total, status, delivery_address) VALUES
((SELECT id FROM users WHERE email = 'john@example.com'), 45.97, 'pending', '123 Main St, Anytown, USA'),
((SELECT id FROM users WHERE email = 'alice@example.com'), 38.97, 'preparing', '456 Oak Ave, Somewhere, USA');

-- Insert order items
INSERT INTO order_items (order_id, food_id, quantity) VALUES
((SELECT max(id) - 1 FROM orders), (SELECT id FROM food_items WHERE name = 'Butter Chicken'), 2),
((SELECT max(id) - 1 FROM orders), (SELECT id FROM food_items WHERE name = 'Paneer Tikka'), 1),
((SELECT max(id) FROM orders), (SELECT id FROM food_items WHERE name = 'Margherita Pizza'), 1),
((SELECT max(id) FROM orders), (SELECT id FROM food_items WHERE name = 'Pepperoni Pizza'), 1);
