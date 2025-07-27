import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { menuAPI } from '../services/api';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useCartContext } from '../context/CartContext';

const MenuItemDetail = () => {
  const { id, itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addToCart } = useCartContext();

  useEffect(() => {
    fetchMenuItem();
  }, [id, itemId]);

  const fetchMenuItem = async () => {
    try {
      setLoading(true);
      const response = await menuAPI.getAllItems();
      const menuItem = response.data.find(item => 
        item.user_id === Number(id) && item.id === Number(itemId)
      );
      
      if (!menuItem) {
        throw new Error('Menu item not found');
      }

      setItem(menuItem);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Menu item not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {item.image_url && (
          <div className="relative h-96">
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{item.name}</h1>
            <div className="flex items-center">
              {item.isVeg ? (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Vegetarian
                </span>
              ) : (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Non-Vegetarian
                </span>
              )}
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>

          {/* Recipe Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recipe Details</h2>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-700">{item.recipe || 'Recipe details not available.'}</p>
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="border-t pt-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-3xl font-bold text-gray-900">${parseFloat(item.price).toFixed(2)}</p>
            </div>
            <button
              onClick={() => {
                addToCart(item);
                alert('Added to cart!');
              }}
              className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
            >
              Add to Cart
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetail;
