import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    // Redirect unauthorized users to their appropriate dashboard
    if (user.role === 'customer') {
      return <Navigate to="/customer" replace />;
    } else if (user.role === 'restaurant') {
      return <Navigate to="/restaurant" replace />;
    }
    return <Navigate to="/login" replace />;
  }

  // Support both render props and regular children
  return typeof children === 'function' ? children({ user }) : children;
};

export default ProtectedRoute;
