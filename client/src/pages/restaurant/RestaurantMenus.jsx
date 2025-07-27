import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { menuAPI } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { useAuth } from '../../context/useAuth';
import { useCartContext } from '../../context/CartContext';

const RestaurantMenus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const { addToCart } = useCartContext();

  const handleAddToCart = useCallback((item) => {
    if (!user) {
      navigate('/login', { state: { from: window.location.pathname } });
      return;
    }
    if (restaurant) {
      addToCart({
        ...item,
        restaurant_id: restaurant.id
      });
    }
  }, [user, restaurant, addToCart, navigate]);

  useEffect(() => {
    fetchRestaurantMenus();
  }, [id]);

  const fetchRestaurantMenus = async () => {
    try {
      setLoading(true);
      const response = await menuAPI.getAllItems();
      const restaurantItems = response.data.filter(item => item.user_id === Number(id));
      
      if (restaurantItems.length === 0) {
        throw new Error('Restaurant not found');
      }

      setRestaurant({
        id: restaurantItems[0].user_id,
        name: restaurantItems[0].restaurant_name,
        items: restaurantItems
      });
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

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Restaurant not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Restaurant Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{restaurant.name}</h1>
        <p className="text-gray-600 mt-2">Menu Items</p>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurant.items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={item.image_url || 'https://via.placeholder.com/300x200?text=Food+Image'}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`text-xs px-2 py-1 rounded-full flex items-center ${
                  item.isVeg 
                    ? 'bg-green-50 text-green-700' 
                    : 'bg-red-50 text-red-700'
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-1 ${
                    item.isVeg ? 'bg-green-500' : 'bg-red-500'
                  }`}></span>
                  {item.isVeg ? 'Veg' : 'Non-Veg'}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-600 mt-1 line-clamp-2">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  ${parseFloat(item.price).toFixed(2)}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/restaurant/${id}/menu/${item.id}`)}
                    className="px-4 py-2 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                      user 
                        ? 'bg-orange-500 text-white hover:bg-orange-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                      />
                    </svg>
                    {user ? 'Add to Cart' : 'Login to Order'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenus;
