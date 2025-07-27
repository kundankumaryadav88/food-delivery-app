import React from 'react';
import { useAuth } from '../../context/useAuth';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ item, onAddToCart, onViewDetails }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login', { state: { from: window.location.pathname } });
      return;
    }
    onAddToCart(item);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={item.image_url || 'https://via.placeholder.com/300x200?text=Food+Image'}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          {item.isVeg ? (
            <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              Veg
            </span>
          ) : (
            <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded-full flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
              Non-Veg
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <span className="text-orange-500 font-bold">${parseFloat(item.price).toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(item)}
            className="flex-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            View Recipe
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {user ? 'Add to Cart' : 'Login to Order'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
