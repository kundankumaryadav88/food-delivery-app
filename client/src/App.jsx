import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedLayout from './components/layout/ProtectedLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import CustomerHome from './pages/customer/CustomerHome';
import RestaurantDashboard from './pages/restaurant/RestaurantDashboard';
import OrderHistory from './pages/customer/OrderHistory';
import RestaurantMenus from './pages/restaurant/RestaurantMenus';
import MenuItemDetail from './pages/customer/MenuItemDetail';
import Checkout from './pages/customer/Checkout';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              {/* Auth Routes without Navbar */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
              {/* Default route - redirect based on auth state and role */}
              <Route path="/" element={
                <ProtectedRoute allowedRoles={['customer', 'restaurant']}>
                  {({ user }) => (
                    <Navigate 
                      to={user?.role === 'restaurant' ? '/restaurant' : '/customer'} 
                      replace 
                    />
                  )}
                </ProtectedRoute>
              } />

              {/* Protected Routes with Navbar */}
              <Route path="/customer" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <ProtectedLayout>
                    <CustomerHome />
                  </ProtectedLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/orders" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <ProtectedLayout>
                    <OrderHistory />
                  </ProtectedLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/restaurant" element={
                <ProtectedRoute allowedRoles={['restaurant']}>
                  <ProtectedLayout>
                    <RestaurantDashboard />
                  </ProtectedLayout>
                </ProtectedRoute>
              } />

              <Route path="/restaurant/:id/menus" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <ProtectedLayout>
                    <RestaurantMenus />
                  </ProtectedLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/restaurant/:id/menu/:itemId" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <ProtectedLayout>
                    <MenuItemDetail />
                  </ProtectedLayout>
                </ProtectedRoute>
              } />

              <Route path="/checkout" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <ProtectedLayout>
                    <Checkout />
                  </ProtectedLayout>
                </ProtectedRoute>
              } />

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
export default App;
