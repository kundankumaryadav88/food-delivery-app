-- Pizza Restaurant Menus
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
-- Pizza Express
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Margherita Pizza', 'Classic tomato and mozzarella', 14.99, 'pizza', true, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Pepperoni Pizza', 'Loaded with pepperoni', 16.99, 'pizza', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'BBQ Chicken Pizza', 'Grilled chicken with BBQ sauce', 17.99, 'pizza', false, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Veggie Supreme', 'Loaded with fresh vegetables', 15.99, 'pizza', true, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Meat Lovers', 'All meat toppings', 18.99, 'pizza', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Hawaiian Pizza', 'Ham and pineapple', 16.99, 'pizza', false, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Buffalo Chicken', 'Spicy buffalo chicken', 17.99, 'pizza', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Four Cheese', 'Blend of four cheeses', 16.99, 'pizza', true, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Mushroom Truffle', 'Mushrooms and truffle oil', 19.99, 'pizza', true, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Spinach & Feta', 'Fresh spinach and feta cheese', 16.99, 'pizza', true, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Supreme Pizza', 'Everything on it', 19.99, 'pizza', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Pesto Chicken', 'Pesto base with grilled chicken', 17.99, 'pizza', false, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Mediterranean', 'Olives, feta, and sun-dried tomatoes', 16.99, 'pizza', true, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Spicy Italian', 'Italian sausage and peppers', 17.99, 'pizza', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Garlic Knots', 'Garlic butter bread knots', 6.99, 'pizza', true, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500');
