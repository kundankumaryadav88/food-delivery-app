-- Menu items for Fast Food Restaurants

-- Burger Express Menu
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Classic Burger', 'Beef patty with fresh veggies', 8.99, 'fast-food', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Cheese Burger', 'Classic with cheese', 9.99, 'fast-food', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Veggie Burger', 'Plant-based patty', 8.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Chicken Burger', 'Grilled chicken breast', 9.99, 'fast-food', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'French Fries', 'Crispy potato fries', 3.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Onion Rings', 'Battered onion rings', 4.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Milkshake', 'Various flavors', 4.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Chicken Wings', 'Spicy wings', 7.99, 'fast-food', false, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Chicken Nuggets', '6 piece nuggets', 5.99, 'fast-food', false, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Fish Burger', 'Crispy fish fillet', 9.99, 'fast-food', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Double Cheese Burger', 'Double patty with cheese', 12.99, 'fast-food', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Coleslaw', 'Fresh cabbage salad', 3.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Soft Drinks', 'Various sodas', 2.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Ice Cream Cone', 'Vanilla or chocolate', 2.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Bacon Burger', 'Burger with crispy bacon', 10.99, 'fast-food', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Sweet Potato Fries', 'Healthy alternative', 4.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Kids Meal', 'Small burger with fries', 6.99, 'fast-food', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Apple Pie', 'Warm dessert', 3.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Coffee', 'Hot or iced', 2.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'BBQ Burger', 'Burger with BBQ sauce', 10.99, 'fast-food', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500');

-- Additional Burger Express Menu Items
INSERT INTO food_items (user_id, name, description, price, category, is_veg, image_url) VALUES
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Hot Dog', 'Classic hot dog', 5.99, 'fast-food', false, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Corn Dog', 'Battered hot dog', 4.99, 'fast-food', false, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'burger.express@example.com'), 'Nachos', 'With cheese sauce', 6.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Pretzel', 'Soft baked pretzel', 3.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Chicken Sandwich', 'Grilled chicken', 8.99, 'fast-food', false, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Pizza Slice', 'Cheese or pepperoni', 3.99, 'fast-food', false, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Mozzarella Sticks', 'With marinara sauce', 5.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Jalapeno Poppers', 'Stuffed peppers', 6.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Cotton Candy', 'Sweet treat', 3.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Popcorn', 'Butter or caramel', 4.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Slushie', 'Various flavors', 3.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Churros', 'Cinnamon sugar', 4.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Ice Cream Sundae', 'With toppings', 5.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Candy Bar', 'Various options', 2.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Chips', 'Assorted flavors', 1.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Fruit Cup', 'Fresh cut fruit', 4.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Chicken Tenders', 'With dipping sauce', 7.99, 'fast-food', false, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Fish and Chips', 'Classic combo', 9.99, 'fast-food', false, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Veggie Wrap', 'Healthy option', 7.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500'),
((SELECT id FROM users WHERE email = 'snack.shack@example.com'), 'Cookie', 'Freshly baked', 1.99, 'fast-food', true, 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500');
