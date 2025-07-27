-- Clear existing data
TRUNCATE users, food_items, orders, order_items CASCADE;

-- Insert restaurant users (password is 'password123' for all users)
INSERT INTO users (name, email, password, role) VALUES
-- Indian Restaurants
('Taj Spice Paradise', 'taj.spice@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Royal Indian Kitchen', 'royal.indian@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Curry House', 'curry.house@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Biryani Palace', 'biryani.palace@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Chinese Restaurants
('Dragon Wok', 'dragon.wok@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Panda Express', 'panda.express@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Golden Dynasty', 'golden.dynasty@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Szechuan Kitchen', 'szechuan@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Italian Restaurants
('Bella Italia', 'bella.italia@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Roma Pizza', 'roma.pizza@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Pasta Paradise', 'pasta.paradise@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Tuscany Treats', 'tuscany@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Mexican Restaurants
('Taco Fiesta', 'taco.fiesta@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Mexican Grill', 'mexican.grill@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Burrito Bros', 'burrito.bros@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Salsa Kitchen', 'salsa.kitchen@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),

-- Japanese Restaurants
('Sushi Master', 'sushi.master@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Ramen House', 'ramen.house@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Tokyo Kitchen', 'tokyo.kitchen@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant'),
('Bento Box', 'bento.box@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'restaurant');

-- Insert customer users (password is 'password123' for all users)
INSERT INTO users (name, email, password, role) VALUES
('John Customer', 'john@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'customer'),
('Alice User', 'alice@example.com', '$2a$10$BDjzyn8F3ZZU7XPOdQY3/OViIkj5aSGQj5cANXx46Do5XH8zE8Lw2', 'customer');

-- Insert menu items for Indian Restaurants
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
-- Taj Spice Paradise Menu
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Butter Chicken', 'Creamy tomato-based curry with tender chicken pieces', 15.99, 'indian', false, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Paneer Tikka', 'Grilled cottage cheese with spices', 13.99, 'indian', true, 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Dal Makhani', 'Creamy black lentils', 11.99, 'indian', true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Chicken Biryani', 'Fragrant rice with spiced chicken', 16.99, 'indian', false, 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500'),
((SELECT id FROM users WHERE email = 'taj.spice@example.com'), 'Malai Kofta', 'Vegetable dumplings in creamy sauce', 14.99, 'indian', true, 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500'),

-- Royal Indian Kitchen Menu
((SELECT id FROM users WHERE email = 'royal.indian@example.com'), 'Rogan Josh', 'Kashmiri lamb curry', 17.99, 'indian', false, 'https://images.unsplash.com/photo-1545247181-516773cae754?w=500'),
((SELECT id FROM users WHERE email = 'royal.indian@example.com'), 'Palak Paneer', 'Spinach curry with cottage cheese', 13.99, 'indian', true, 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500'),
((SELECT id FROM users WHERE email = 'royal.indian@example.com'), 'Chicken Tikka', 'Grilled marinated chicken pieces', 15.99, 'indian', false, 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500'),
((SELECT id FROM users WHERE email = 'royal.indian@example.com'), 'Vegetable Samosa', 'Crispy pastry with spiced potatoes', 6.99, 'indian', true, 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500'),
((SELECT id FROM users WHERE email = 'royal.indian@example.com'), 'Garlic Naan', 'Flatbread with garlic', 3.99, 'indian', true, 'https://images.unsplash.com/photo-1590502593353-2486aec1e2a2?w=500'),

-- Insert menu items for Chinese Restaurants
-- Dragon Wok Menu
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Kung Pao Chicken', 'Spicy diced chicken with peanuts', 14.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Sweet and Sour Pork', 'Crispy pork in tangy sauce', 15.99, 'chinese', false, 'https://images.unsplash.com/photo-1561626423-a51b45dc0e76?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Vegetable Spring Rolls', 'Crispy rolls with mixed vegetables', 7.99, 'chinese', true, 'https://images.unsplash.com/photo-1606503153255-59d5e77be00c?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Mapo Tofu', 'Spicy tofu with minced pork', 13.99, 'chinese', false, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Egg Fried Rice', 'Classic fried rice with egg', 11.99, 'chinese', false, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'),

-- Panda Express Menu
((SELECT id FROM users WHERE email = 'panda.express@example.com'), 'Orange Chicken', 'Crispy chicken in sweet orange sauce', 14.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'panda.express@example.com'), 'Chow Mein', 'Stir-fried noodles with vegetables', 12.99, 'chinese', true, 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'),
((SELECT id FROM users WHERE email = 'panda.express@example.com'), 'Beijing Beef', 'Crispy beef in sweet-spicy sauce', 15.99, 'chinese', false, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'panda.express@example.com'), 'Vegetable Spring Rolls', 'Crispy rolls with mixed vegetables', 7.99, 'chinese', true, 'https://images.unsplash.com/photo-1606503153255-59d5e77be00c?w=500'),
((SELECT id FROM users WHERE email = 'panda.express@example.com'), 'Fortune Cookies', 'Classic fortune cookies', 2.99, 'chinese', true, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),

-- Insert menu items for Italian Restaurants
-- Bella Italia Menu
((SELECT id FROM users WHERE email = 'bella.italia@example.com'), 'Margherita Pizza', 'Classic tomato and mozzarella', 14.99, 'italian', true, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'bella.italia@example.com'), 'Pepperoni Pizza', 'Spicy pepperoni with cheese', 16.99, 'italian', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'bella.italia@example.com'), 'Spaghetti Carbonara', 'Creamy pasta with pancetta', 15.99, 'italian', false, 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'),
((SELECT id FROM users WHERE email = 'bella.italia@example.com'), 'Lasagna', 'Classic meat lasagna', 17.99, 'italian', false, 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=500'),
((SELECT id FROM users WHERE email = 'bella.italia@example.com'), 'Tiramisu', 'Coffee-flavored dessert', 8.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),

-- Roma Pizza Menu
((SELECT id FROM users WHERE email = 'roma.pizza@example.com'), 'Four Cheese Pizza', 'Blend of four Italian cheeses', 17.99, 'italian', true, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'roma.pizza@example.com'), 'Meat Lovers Pizza', 'Loaded with various meats', 18.99, 'italian', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'roma.pizza@example.com'), 'Vegetarian Pizza', 'Fresh vegetables and mushrooms', 16.99, 'italian', true, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500'),
((SELECT id FROM users WHERE email = 'roma.pizza@example.com'), 'Calzone', 'Folded pizza with ricotta', 15.99, 'italian', false, 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=500'),
((SELECT id FROM users WHERE email = 'roma.pizza@example.com'), 'Garlic Bread', 'Italian bread with garlic butter', 5.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
