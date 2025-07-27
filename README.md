# 🍽️ Food Delivery System

A full-stack food delivery application built with React, Node.js, and PostgreSQL.

## 🚀 Features

### For Customers:
- User registration and login
- Browse food menu from all restaurants
- Add items to cart
- Place orders
- View order history and status

### For Restaurants:
- User registration and login
- Add, edit, and delete menu items
- View incoming orders
- Update order status (placed → preparing → ready → delivered)

## 🛠️ Tech Stack

- **Frontend**: React.js with Vite
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Authentication**: JWT + bcryptjs
- **Styling**: Tailwind CSS

## 📁 Project Structure

```
food-delivery-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API handlers
│   │   ├── context/       # React context providers
│   │   └── App.jsx        # Main app component
│   └── package.json
├── server/                 # Node.js backend
│   ├── config/            # Database configuration
│   ├── controllers/       # Business logic
│   ├── middleware/        # Auth middleware
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   └── server.js         # Entry point
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn

### 1. Database Setup

First, create a PostgreSQL database and update the connection details in `server/.env`:

```bash
# Create .env file in server directory
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=food_delivery
DB_PASSWORD=your_password
DB_PORT=5432
JWT_SECRET=your-super-secret-jwt-key
```

Then run the database schema:

```sql
-- Run the schema.sql file in your PostgreSQL database
-- Or use the schema from server/config/schema.sql
```

### 2. Backend Setup

```bash
cd server
npm install
npm run dev
```

The backend will start on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

The frontend will start on `http://localhost:5173`

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Menu
- `GET /api/menu` - Get all food items (public)
- `POST /api/menu` - Add new item (restaurant only)
- `PUT /api/menu/:id` - Update item (restaurant only)
- `DELETE /api/menu/:id` - Delete item (restaurant only)
- `GET /api/menu/my-items` - Get restaurant's items

### Orders
- `POST /api/order` - Place new order (customer only)
- `GET /api/order/user` - Get user's orders (customer only)
- `GET /api/order/restaurant` - Get restaurant orders (restaurant only)
- `PUT /api/order/:id/status` - Update order status (restaurant only)

## 👥 User Roles

### Customer Flow:
1. Register/Login as customer
2. Browse menu items
3. Add items to cart
4. Place order
5. View order history

### Restaurant Flow:
1. Register/Login as restaurant
2. Add menu items
3. View incoming orders
4. Update order status

## 🎨 Features

- **Responsive Design**: Works on desktop and mobile
- **Real-time Updates**: Order status updates
- **Secure Authentication**: JWT-based auth with role-based access
- **Cart Management**: Persistent cart with localStorage
- **Order Tracking**: Full order lifecycle management

## 🔧 Development

### Backend Development
```bash
cd server
npm run dev  # Starts with nodemon for auto-reload
```

### Frontend Development
```bash
cd client
npm run dev  # Starts Vite dev server
```

### Database Management
The application uses PostgreSQL with the following main tables:
- `users` - User accounts and roles
- `food_items` - Menu items
- `orders` - Order records
- `order_items` - Order line items

## 🚀 Deployment

### Backend Deployment (Render/Railway)
1. Push code to GitHub
2. Connect to Render/Railway
3. Set environment variables
4. Deploy

### Frontend Deployment (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Database Deployment
- Use managed PostgreSQL (AWS RDS, Railway, etc.)
- Update connection string in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify database connection
3. Ensure all environment variables are set
4. Check that PostgreSQL is running

---

**Happy coding! 🍕🍔🍜** 