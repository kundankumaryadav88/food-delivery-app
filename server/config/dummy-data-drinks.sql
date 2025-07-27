-- Drinks Menu
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
-- Beverage Bar
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Fresh Orange Juice', 'Freshly squeezed orange juice', 4.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Mango Smoothie', 'Fresh mango blended smoothie', 5.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Iced Coffee', 'Cold brewed coffee', 3.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Green Tea', 'Traditional Japanese green tea', 2.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Strawberry Milkshake', 'Creamy strawberry shake', 5.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Lemonade', 'Fresh squeezed lemonade', 3.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Chocolate Milkshake', 'Rich chocolate shake', 5.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Iced Tea', 'Fresh brewed iced tea', 2.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Berry Blast', 'Mixed berry smoothie', 5.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Coconut Water', 'Fresh coconut water', 4.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Vanilla Shake', 'Classic vanilla milkshake', 5.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Fruit Punch', 'Mixed fruit juice blend', 4.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Hot Chocolate', 'Rich hot chocolate', 3.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Espresso', 'Single shot espresso', 2.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500'),
((SELECT id FROM users WHERE email = 'beverage.bar@example.com'), 'Fresh Lime Soda', 'Sweet and salty lime soda', 3.99, 'drinks', true, 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500');
