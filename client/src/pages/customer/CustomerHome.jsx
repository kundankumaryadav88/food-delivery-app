import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Categories from '../../components/ui/Categories';
import RestaurantCard from '../../components/ui/RestaurantCard';
import { menuAPI, orderAPI } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import useCart from '../../hooks/useCart';
import LatestOrderStatus from '../../components/ui/LatestOrderStatus';

const CustomerHome = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal, getItemCount } = useCart();

  // Scroll to menu section
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burger', name: 'Burgers', icon: '🍔' },
    { id: 'sushi', name: 'Sushi', icon: '🍱' },
    { id: 'indian', name: 'Indian', icon: '🍛' },
    { id: 'chinese', name: 'Chinese', icon: '🥡' },
    { id: 'dessert', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' },
  ];

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const response = await menuAPI.getAllItems();
      console.log('Restaurant API Response:', response);
      if (!response || !response.data) {
        throw new Error('Invalid response format');
      }
      
      // Group items by restaurant
      const restaurantMap = response.data.reduce((acc, item) => {
        if (!acc[item.user_id]) {
          acc[item.user_id] = {
            id: item.user_id,
            name: item.restaurant_name,
            image: item.image_url || 'https://via.placeholder.com/400x300?text=Restaurant',
            rating: (Math.random() * 2 + 3).toFixed(1),
            deliveryTime: Math.floor(Math.random() * 30 + 15),
            cuisineType: (item.category || 'Various').toLowerCase(),
            priceRange: '$$',
            items: []
          };
        }
        acc[item.user_id].items.push(item);
        return acc;
      }, {});

      const restaurantData = Object.values(restaurantMap);
      
      setRestaurants(restaurantData);
      console.log('Restaurants Set:', restaurantData);
    } catch (error) {
      setError('Failed to load restaurants: ' + error.message);
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;

    try {
      setPlacingOrder(true);
      const orderData = {
        items: cart.map(item => ({
          food_id: item.id,
          quantity: item.quantity
        })),
        total: getTotal()
      };

      await orderAPI.placeOrder(orderData);
      clearCart();
      setShowCart(false);
      alert('Order placed successfully!');
    } catch (error) {
      setError('Failed to place order');
      console.error('Error placing order:', error);
    } finally {
      setPlacingOrder(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  // Filter restaurants based on search query and category
  const filteredRestaurants = restaurants.filter(restaurant => {
    const searchLower = searchQuery.toLowerCase();
    const matchSearch = restaurant.name.toLowerCase().includes(searchLower) ||
                       restaurant.cuisineType.toLowerCase().includes(searchLower);
    const matchCategory = activeCategory === 'all' || 
                         restaurant.cuisineType.toLowerCase() === activeCategory.toLowerCase();
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onShowCart={() => setShowCart(true)} 
        cartItemCount={getItemCount()}
        onLocationChange={setLocation}
        onSearchChange={setSearchQuery}
        location={location}
        searchQuery={searchQuery}
      />
      
      <main className="pt-20">
        {/* Banner/Carousel */}
        <div className="relative overflow-hidden h-[400px] mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-[10px]">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200"
              alt="Delicious Food"
              className="w-full h-full object-cover opacity-50 rounded-[10px]"
            />
          </div>
          <div className="relative h-full flex items-center justify-center text-white text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Delicious Food Delivered</h1>
              <p className="text-xl md:text-3xl">Order from your favorite restaurants</p>
              <div className="mt-8">
                <button 
                  onClick={scrollToMenu}
                  className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white shadow-lg scale-105'
                      : 'bg-white hover:bg-orange-50 text-gray-700 hover:scale-105'
                  }`}
                >
                  <span className="text-2xl mb-2">{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Restaurants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No restaurants found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              filteredRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* <div className="absolute top-0 right-0 m-2">
                      <span className="bg-white text-orange-500 px-2 py-1 rounded-lg text-sm font-medium shadow-md">
                        {restaurant.priceRange}
                      </span>
                    </div> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
                      <div className="flex items-center text-orange-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 font-medium">{restaurant.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <span className="mr-4 capitalize">{restaurant.cuisineType}</span>
                      <span>•</span>
                      <span className="mx-4 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {restaurant.deliveryTime} mins
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Famous For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.items.slice(0, 3).map(item => (
                          <span key={item.id} className="inline-flex items-center bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded">
                            {item.isVeg ? 
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> :
                              <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                            }
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/restaurant/${restaurant.id}/menus`)}
                      className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group"
                    >
                      View Menu
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}
      </main>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md h-full overflow-hidden flex flex-col shadow-xl">
            <div className="p-6 bg-orange-500 text-white">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Your Cart
                </h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-white hover:text-orange-100 transition-colors rounded-full hover:bg-orange-600 p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-orange-100 mt-2">Items in cart: {getItemCount()}</p>
            </div>

            <div className="flex-1 overflow-y-auto bg-gray-50">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-blue-600 font-medium">${parseFloat(item.price).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-gray-100 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg text-gray-600">Subtotal</span>
                  <span className="text-2xl font-bold text-blue-600">${getTotal().toFixed(2)}</span>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  disabled={placingOrder}
                  className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 disabled:opacity-50 transition-all flex items-center justify-center gap-2 font-medium shadow-lg"
                >
                  {placingOrder ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Placing Order...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Place Order • ${getTotal().toFixed(2)}
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerHome;
