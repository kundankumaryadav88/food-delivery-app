-- Menu items for North Indian Restaurants

-- Royal Punjab Menu
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Butter Chicken', 'Creamy tomato-based curry with tender chicken', 16.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Dal Makhani', 'Black lentils in creamy sauce', 12.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Paneer Butter Masala', 'Cottage cheese in rich tomato gravy', 14.99, 'indian', true, 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Chicken Tikka', 'Grilled marinated chicken pieces', 15.99, 'indian', false, 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Malai Kofta', 'Vegetable dumplings in creamy sauce', 13.99, 'indian', true, 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Tandoori Roti', 'Whole wheat flatbread', 2.99, 'indian', true, 'https://images.unsplash.com/photo-1590502593353-2486aec1e2a2?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Chicken Biryani', 'Fragrant rice with spiced chicken', 17.99, 'indian', false, 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Palak Paneer', 'Spinach curry with cottage cheese', 13.99, 'indian', true, 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Mutton Rogan Josh', 'Kashmiri style lamb curry', 18.99, 'indian', false, 'https://images.unsplash.com/photo-1545247181-516773cae754?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Jeera Rice', 'Cumin flavored rice', 5.99, 'indian', true, 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Onion Bhaji', 'Crispy onion fritters', 6.99, 'indian', true, 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Chicken Tikka Masala', 'Grilled chicken in spiced curry', 16.99, 'indian', false, 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Garlic Naan', 'Garlic flavored flatbread', 3.99, 'indian', true, 'https://images.unsplash.com/photo-1590502593353-2486aec1e2a2?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Mixed Vegetable Curry', 'Assorted vegetables in curry', 12.99, 'indian', true, 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Lamb Seekh Kebab', 'Minced lamb skewers', 15.99, 'indian', false, 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Raita', 'Yogurt with cucumber', 3.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Gulab Jamun', 'Sweet milk dumplings', 5.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Mango Lassi', 'Sweet mango yogurt drink', 4.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Chicken Korma', 'Mild chicken curry', 15.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'royal.punjab@example.com'), 'Veg Pakora', 'Mixed vegetable fritters', 6.99, 'indian', true, 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500');

-- Taj Kitchen Menu
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Chicken Curry', 'Traditional Indian chicken curry', 15.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Vegetable Biryani', 'Fragrant rice with mixed vegetables', 13.99, 'indian', true, 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Shahi Paneer', 'Royal cottage cheese curry', 14.99, 'indian', true, 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Fish Curry', 'Spiced fish curry', 16.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Dal Tadka', 'Yellow lentils with tempering', 11.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Butter Naan', 'Buttered flatbread', 3.99, 'indian', true, 'https://images.unsplash.com/photo-1590502593353-2486aec1e2a2?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Mutton Biryani', 'Fragrant rice with spiced lamb', 18.99, 'indian', false, 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Chana Masala', 'Spiced chickpea curry', 12.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Tandoori Chicken', 'Clay oven roasted chicken', 16.99, 'indian', false, 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Plain Rice', 'Steamed basmati rice', 4.99, 'indian', true, 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Samosa', 'Crispy potato pastries', 5.99, 'indian', true, 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Fish Tikka', 'Grilled spiced fish', 17.99, 'indian', false, 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Stuffed Naan', 'Stuffed flatbread', 4.99, 'indian', true, 'https://images.unsplash.com/photo-1590502593353-2486aec1e2a2?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Bhindi Masala', 'Spiced okra', 11.99, 'indian', true, 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Prawn Curry', 'Coastal style prawn curry', 18.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Green Salad', 'Fresh garden salad', 4.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Kheer', 'Rice pudding', 5.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Sweet Lassi', 'Sweet yogurt drink', 4.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Egg Curry', 'Spiced egg curry', 12.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'taj.kitchen@example.com'), 'Aloo Gobi', 'Potato and cauliflower curry', 11.99, 'indian', true, 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500');
