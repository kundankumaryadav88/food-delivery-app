-- Burger Restaurant Menus
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
-- Burger Express
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Classic Cheeseburger', 'Beef patty with cheese and vegetables', 8.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Double Bacon Burger', 'Double patty with crispy bacon', 12.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Veggie Burger', 'Plant-based patty with fresh toppings', 9.99, 'burger', true, 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Mushroom Swiss', 'Beef patty with mushrooms and swiss cheese', 10.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Spicy Chicken Burger', 'Spicy breaded chicken patty', 9.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'BBQ Burger', 'Beef patty with BBQ sauce and onion rings', 11.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Fish Burger', 'Crispy fish fillet with tartar sauce', 9.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Avocado Burger', 'Beef patty with fresh avocado', 11.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Black Bean Burger', 'Homemade black bean patty', 9.99, 'burger', true, 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Jalapeño Burger', 'Spicy burger with jalapeños', 10.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Hawaiian Burger', 'Beef patty with grilled pineapple', 11.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Portobello Burger', 'Grilled portobello mushroom', 9.99, 'burger', true, 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Triple Cheese Burger', 'Three cheese blend burger', 13.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Turkey Burger', 'Healthy turkey patty', 10.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Kids Burger', 'Small sized burger for kids', 6.99, 'burger', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500');
