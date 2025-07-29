-- Menu items for Chinese and Asian Fusion Restaurants

-- Dragon Wok Menu
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Kung Pao Chicken', 'Spicy diced chicken with peanuts', 14.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Sweet and Sour Pork', 'Classic pork in tangy sauce', 15.99, 'chinese', false, 'https://images.unsplash.com/photo-1561626423-a51b45dc0e76?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Mapo Tofu', 'Spicy tofu dish', 12.99, 'chinese', true, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Spring Rolls', 'Crispy vegetable rolls', 6.99, 'chinese', true, 'https://images.unsplash.com/photo-1606503153255-59d5e77be00c?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Fried Rice', 'Classic Chinese fried rice', 11.99, 'chinese', true, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Chow Mein', 'Stir-fried noodles', 12.99, 'chinese', true, 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Beef with Broccoli', 'Stir-fried beef and broccoli', 16.99, 'chinese', false, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Dim Sum Platter', 'Assorted dumplings', 15.99, 'chinese', false, 'https://images.unsplash.com/photo-1606503153255-59d5e77be00c?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Hot and Sour Soup', 'Classic spicy soup', 6.99, 'chinese', true, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Sesame Chicken', 'Sweet crispy chicken', 14.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Vegetable Dumplings', 'Steamed veggie dumplings', 8.99, 'chinese', true, 'https://images.unsplash.com/photo-1606503153255-59d5e77be00c?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'General Tso Chicken', 'Spicy sweet chicken', 15.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Lo Mein', 'Soft noodles with vegetables', 11.99, 'chinese', true, 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Mongolian Beef', 'Stir-fried beef with scallions', 16.99, 'chinese', false, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Egg Drop Soup', 'Classic Chinese soup', 5.99, 'chinese', false, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Buddha Delight', 'Mixed vegetable dish', 12.99, 'chinese', true, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Peking Duck', 'Classic roasted duck', 24.99, 'chinese', false, 'https://images.unsplash.com/photo-1561626423-a51b45dc0e76?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Shrimp with Lobster Sauce', 'Seafood special', 18.99, 'chinese', false, 'https://images.unsplash.com/photo-1561626423-a51b45dc0e76?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Chinese Broccoli', 'Stir-fried greens', 10.99, 'chinese', true, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Fortune Cookies', 'Classic cookies', 2.99, 'chinese', true, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500');

-- Additional Dragon Wok Menu Items
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Orange Chicken', 'Crispy chicken in orange sauce', 14.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Beef Lo Mein', 'Noodles with beef', 13.99, 'chinese', false, 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Vegetable Fried Rice', 'Rice with mixed vegetables', 11.99, 'chinese', true, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Steamed Dumplings', 'Choice of pork or vegetable', 8.99, 'chinese', false, 'https://images.unsplash.com/photo-1606503153255-59d5e77be00c?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Sesame Tofu', 'Crispy tofu in sweet sauce', 12.99, 'chinese', true, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Chicken Chow Mein', 'Noodles with chicken', 13.99, 'chinese', false, 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Wonton Soup', 'Clear soup with dumplings', 6.99, 'chinese', false, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Kung Pao Shrimp', 'Spicy shrimp dish', 16.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Mixed Vegetables', 'Stir-fried vegetables', 10.99, 'chinese', true, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Sweet and Sour Chicken', 'Classic chicken dish', 14.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Beef with Mushrooms', 'Stir-fried beef dish', 15.99, 'chinese', false, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Vegetable Spring Rolls', 'Crispy appetizer', 6.99, 'chinese', true, 'https://images.unsplash.com/photo-1606503153255-59d5e77be00c?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'House Special Soup', 'Rich broth with meat', 7.99, 'chinese', false, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Chicken Wings', 'Chinese style wings', 11.99, 'chinese', false, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Garlic Eggplant', 'Spicy eggplant dish', 11.99, 'chinese', true, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Salt and Pepper Squid', 'Crispy seasoned squid', 16.99, 'chinese', false, 'https://images.unsplash.com/photo-1561626423-a51b45dc0e76?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Singapore Noodles', 'Curry flavored noodles', 13.99, 'chinese', false, 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Ma Po Tofu', 'Spicy tofu with pork', 12.99, 'chinese', false, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Chinese Sausage Fried Rice', 'Special fried rice', 13.99, 'chinese', false, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'),
((SELECT id FROM users WHERE email = 'dragon.wok@example.com'), 'Green Tea Ice Cream', 'Traditional dessert', 5.99, 'chinese', true, 'https://images.unsplash.com/photo-1582452725016-949329778bdd?w=500');
