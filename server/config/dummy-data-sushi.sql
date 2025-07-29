-- Sushi Restaurant Menus
-- Sushi Master Menu
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'California Roll', 'Crab, avocado, and cucumber', 8.99, 'sushi', false, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Spicy Tuna Roll', 'Fresh tuna with spicy mayo', 9.99, 'sushi', false, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Vegetable Roll', 'Assorted fresh vegetables', 7.99, 'sushi', true, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Dragon Roll', 'Eel and cucumber with avocado', 12.99, 'sushi', false, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Rainbow Roll', 'California roll topped with assorted fish', 13.99, 'sushi', false, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Philadelphia Roll', 'Smoked salmon and cream cheese', 9.99, 'sushi', false, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Tempura Roll', 'Shrimp tempura and vegetables', 10.99, 'sushi', false, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Avocado Roll', 'Fresh avocado roll', 7.99, 'sushi', true, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Salmon Nigiri', 'Fresh salmon over rice', 5.99, 'sushi', false, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Tuna Nigiri', 'Fresh tuna over rice', 5.99, 'sushi', false, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Cucumber Roll', 'Fresh cucumber roll', 6.99, 'sushi', true, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Spider Roll', 'Soft shell crab tempura', 13.99, 'sushi', false, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Eel Roll', 'Grilled eel with sweet sauce', 11.99, 'sushi', false, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Miso Soup', 'Traditional Japanese soup', 3.99, 'sushi', true, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500'),
((SELECT id FROM users WHERE email = 'sushi.master@example.com'), 'Edamame', 'Steamed soybeans', 4.99, 'sushi', true, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500');
