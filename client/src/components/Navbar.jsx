import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { useCartContext } from '../context/CartContext';
import CartSidebar from './ui/CartSidebar';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { cart } = useCartContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  
  useEffect(() => {
    // Update item count whenever cart changes
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setItemCount(count);
  }, [cart]);

  if (!user) {
    return null; // Don't show navbar for unauthenticated users
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-orange-600 text-xl font-bold">FoodieHub</span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {user.role === 'customer' && (
              <>
                <Link
                  to="/customer"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Browse Restaurants
                </Link>
                <Link
                  to="/orders"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Order History
                </Link>
                <button
                  onClick={() => setShowCart(true)}
                  className="relative text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </button>
              </>
            )}

            {user.role === 'restaurant' && (
              <Link
                to="/restaurant"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>
            )}

            <span className="text-gray-700 px-3 py-2 text-sm font-medium border-l border-gray-200 ml-4 pl-4">
              {user.name}
            </span>

            <button
              onClick={handleLogout}
              className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100"
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white border-t border-gray-200`}>
        <div className="pt-2 pb-3 space-y-1">
          {user.role === 'customer' && (
            <>
              <Link
                to="/customer"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Restaurants
              </Link>
              <Link
                to="/orders"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Order History
              </Link>
              <button
                onClick={() => {
                  setShowCart(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600"
              >
                Cart
                {itemCount > 0 && (
                  <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
            </>
          )}

          {user.role === 'restaurant' && (
            <Link
              to="/restaurant"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}

          <div className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
            Signed in as <span className="font-medium">{user.name}</span>
          </div>

          <button
            onClick={() => {
              handleLogout();
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={showCart}
        onClose={() => setShowCart(false)}
      />
    </nav>
  );
};

export default Navbar;
