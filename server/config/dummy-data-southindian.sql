-- Menu items for South Indian Restaurants

-- Taj Spice South Indian Menu
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Masala Dosa', 'Crispy crepe with potato filling', 9.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Plain Dosa', 'Crispy rice crepe', 7.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Idli Sambar', 'Steamed rice cakes with lentil soup', 8.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Vada', 'Crispy lentil donuts', 6.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Uttapam', 'Thick rice pancake with toppings', 10.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Pongal', 'Rice and lentil porridge', 9.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Mysore Masala Dosa', 'Spicy variant of masala dosa', 11.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Rava Dosa', 'Crispy semolina crepe', 10.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Coconut Chutney', 'Fresh coconut condiment', 2.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Sambar', 'Lentil vegetable stew', 4.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Paper Dosa', 'Extra crispy thin crepe', 8.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Onion Uttapam', 'Onion topped rice pancake', 11.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Medu Vada', 'Spiced lentil donuts', 7.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Upma', 'Semolina breakfast dish', 8.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Tomato Bath', 'Spiced tomato rice', 9.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Curd Rice', 'Yogurt rice', 7.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Filter Coffee', 'Traditional South Indian coffee', 3.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Kesari Bath', 'Sweet semolina dessert', 6.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Lemon Rice', 'Tangy lemon flavored rice', 8.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Thali', 'Complete meal platter', 14.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500');

-- Additional Taj Spice South Indian Menu Items
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Chicken Chettinad', 'Spicy Chettinad style chicken', 15.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Fish Curry', 'Traditional fish curry', 16.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Prawn Masala', 'Spiced prawns curry', 17.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Mutton Curry', 'Traditional mutton curry', 18.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Egg Curry', 'South Indian style egg curry', 12.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Vegetable Curry', 'Mixed vegetable curry', 11.99, 'indian', true, 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Plain Dosa', 'Crispy rice crepe', 7.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Masala Dosa', 'Stuffed rice crepe', 9.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Idli', 'Steamed rice cakes', 7.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Vada', 'Fried lentil donuts', 6.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Pongal', 'Rice and lentil porridge', 9.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Uttapam', 'Rice pancake', 10.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Sambar', 'Lentil soup', 4.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Rasam', 'Tangy soup', 4.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Coconut Chutney', 'Coconut condiment', 2.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Tomato Chutney', 'Spicy tomato condiment', 2.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Filter Coffee', 'Traditional coffee', 3.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Madras Thali', 'Complete meal', 15.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Curd Rice', 'Yogurt rice', 7.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500'),
((SELECT id FROM users WHERE email = 'chennai.express@example.com'), 'Payasam', 'Sweet milk dessert', 5.99, 'indian', true, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500');
