-- Menu items for Italian Restaurants

-- Pizza Express Menu
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Margherita Pizza', 'Classic tomato and mozzarella', 14.99, 'italian', true, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Pepperoni Pizza', 'Spicy pepperoni with cheese', 16.99, 'italian', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Quattro Formaggi', 'Four cheese pizza', 17.99, 'italian', true, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Vegetarian Pizza', 'Mixed vegetables', 15.99, 'italian', true, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'BBQ Chicken Pizza', 'BBQ sauce and chicken', 16.99, 'italian', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Hawaiian Pizza', 'Ham and pineapple', 15.99, 'italian', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Mushroom Pizza', 'Assorted mushrooms', 15.99, 'italian', true, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Meat Lovers Pizza', 'Various meats', 18.99, 'italian', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Garlic Bread', 'Classic garlic bread', 5.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Caesar Salad', 'Fresh romaine lettuce', 8.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Calzone', 'Folded pizza with filling', 14.99, 'italian', false, 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Bruschetta', 'Tomato topped bread', 7.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Caprese Salad', 'Tomato and mozzarella', 9.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Spinach Pizza', 'Spinach and ricotta', 15.99, 'italian', true, 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Supreme Pizza', 'Everything on it', 19.99, 'italian', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Buffalo Wings', 'Spicy chicken wings', 11.99, 'italian', false, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Tiramisu', 'Classic Italian dessert', 7.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Cannoli', 'Sweet Italian pastry', 6.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Italian Soda', 'Flavored sparkling drink', 3.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pizza.express@example.com'), 'Gelato', 'Italian ice cream', 5.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500');

-- Pasta House Menu
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Lasagna', 'Traditional meat lasagna', 16.99, 'italian', false, 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Vegetable Lasagna', 'Meat-free lasagna', 15.99, 'italian', true, 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Ravioli', 'Stuffed pasta', 16.99, 'italian', false, 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Gnocchi', 'Potato dumplings', 14.99, 'italian', true, 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Seafood Linguine', 'Mixed seafood pasta', 18.99, 'italian', false, 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Minestrone Soup', 'Vegetable soup', 7.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Italian Salad', 'Mixed greens', 8.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Chicken Parmigiana', 'Breaded chicken', 17.99, 'italian', false, 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Eggplant Parmigiana', 'Vegetarian parm', 15.99, 'italian', true, 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Risotto', 'Creamy rice dish', 16.99, 'italian', true, 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Tortellini', 'Ring-shaped pasta', 15.99, 'italian', false, 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Antipasto', 'Appetizer platter', 13.99, 'italian', false, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Focaccia', 'Italian bread', 5.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Panna Cotta', 'Italian dessert', 6.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Affogato', 'Coffee dessert', 5.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Italian Coffee', 'Espresso', 3.99, 'italian', true, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'),
((SELECT id FROM users WHERE email = 'pasta.house@example.com'), 'Zuppa Toscana', 'Tuscan soup', 7.99, 'italian', false, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500');
