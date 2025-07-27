import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary-500">🍽️ FoodieHub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Search Bar */}
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search for food or restaurants..."
                className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-8">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                Home
              </button>
              {user && user.role === 'customer' && (
                <button 
                  onClick={() => navigate('/orders')}
                  className="text-gray-600 hover:text-primary-500 transition-colors flex items-center space-x-2"
                >
                  <span>Orders</span>
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                </button>
              )}
            </nav>

            {/* Profile */}
            <div className="flex items-center space-x-4">
              {!user ? (
                <button 
                  onClick={() => navigate('/login')}
                  className="inline-flex items-center justify-center px-4 py-2 border border-primary-500 text-primary-500 hover:bg-primary-50 rounded-full transition-colors"
                >
                  Sign In
                </button>
              ) : (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">
                    Welcome, {user.name}
                  </span>
                  <button
                    onClick={() => {
                      logout();
                      navigate('/login');
                    }}
                    className="text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-primary-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <input
                type="text"
                placeholder="Search for food or restaurants..."
                className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
              />
              <button className="block w-full px-3 py-2 text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-md">Home</button>
              <button className="block w-full px-3 py-2 text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-md">Menu</button>
              <button className="block w-full px-3 py-2 text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-md">About</button>
              <button className="block w-full px-3 py-2 text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-md">Contact</button>
              {!user ? (
                <button 
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full px-3 py-2 text-center mt-4 border border-primary-500 text-primary-500 hover:bg-primary-50 rounded-full"
                >
                  Sign In
                </button>
              ) : (
                <>
                  <div className="px-3 py-2 text-center mt-4 text-gray-700 border-t border-gray-200">
                    Welcome, {user.name}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full px-3 py-2 text-left text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
