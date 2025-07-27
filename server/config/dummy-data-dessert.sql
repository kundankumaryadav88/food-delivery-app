-- Dessert Restaurant Menus
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
-- Sweet Treats
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Chocolate Cake', 'Rich chocolate layer cake', 6.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Cheesecake', 'New York style cheesecake', 7.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Apple Pie', 'Homemade apple pie', 5.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Ice Cream Sundae', 'Three scoops with toppings', 6.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Tiramisu', 'Italian coffee dessert', 7.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Brownie Sundae', 'Warm brownie with ice cream', 8.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Crème Brûlée', 'Classic French dessert', 7.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Fruit Tart', 'Fresh fruit with custard', 6.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Chocolate Mousse', 'Light and airy mousse', 5.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Red Velvet Cake', 'Classic red velvet', 6.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Key Lime Pie', 'Tangy lime dessert', 6.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Bread Pudding', 'Warm comfort dessert', 5.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Carrot Cake', 'Spiced cake with cream cheese', 6.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Banana Split', 'Classic ice cream dessert', 8.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'),
((SELECT id FROM users WHERE email = 'sweet.treats@example.com'), 'Chocolate Chip Cookies', 'Fresh baked cookies', 4.99, 'dessert', true, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500');
