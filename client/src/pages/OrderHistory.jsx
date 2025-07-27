import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/useAuth';
import { orderAPI } from '../services/api';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const fetchOrders = useCallback(async () => {
    try {
      const response = user.role === 'restaurant' 
        ? await orderAPI.getRestaurantOrders()
        : await orderAPI.getUserOrders();
        
      const sortedOrders = response.data.sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      setOrders(sortedOrders);
    } catch (error) {
      setError('Failed to fetch orders');
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  }, [user.role]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  const filteredOrders = orders.filter(order => {
    if (filter === 'active') return order.status !== 'completed';
    if (filter === 'completed') return order.status === 'completed';
    return true;
  });

console.log('Filtered Orders:', filteredOrders);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Order History</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md ${
              filter === 'all' 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Orders
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-md ${
              filter === 'active' 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Active Orders
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-md ${
              filter === 'completed' 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Completed Orders
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No orders found</p>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                  <p className="text-gray-500">
                    {new Date(order.created_at).toLocaleString()}
                  </p>
                  {order.restaurant && (
                    <p className="text-sm text-gray-600 mt-1">
                      From: {order.restaurant.name}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'preparing' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'ready' ? 'bg-purple-100 text-purple-800' :
                    order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    <span className={`w-2 h-2 mr-2 rounded-full ${
                      order.status === 'completed' ? 'bg-green-600' :
                      order.status === 'preparing' ? 'bg-blue-600' :
                      order.status === 'ready' ? 'bg-purple-600' :
                      order.status === 'delivered' ? 'bg-green-600' :
                      order.status === 'pending' ? 'bg-yellow-600' :
                      'bg-gray-600'
                    }`}></span>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                  <p className="text-sm text-gray-500 mt-2">
                    {order.status === 'pending' && 'Waiting for restaurant confirmation'}
                    {order.status === 'preparing' && 'Your order is being prepared'}
                    {order.status === 'ready' && 'Ready for pickup/delivery'}
                    {order.status === 'delivered' && 'Order has been delivered'}
                    {order.status === 'completed' && 'Order completed'}
                  </p>
                </div>
              </div>

              <div className="mb-6 px-2">
                <div className="relative flex items-center justify-between w-full">
                  {/* Background line that spans the entire width */}
                  <div className="absolute h-0.5 bg-gray-300 left-0 right-0 top-4 w-full" />
                  
                  {/* Progress line that fills based on current progress */}
                  <div className={`absolute h-0.5 bg-green-500 left-0 top-4 transition-all duration-300`} style={{
                    width: `${(['pending', 'preparing', 'ready', 'delivered', 'completed'].indexOf(order.status) / 4) * 100}%`
                  }} />

                  {['pending', 'preparing', 'ready', 'delivered', 'completed'].map((status, index, array) => (
                    <div key={`${order.id}-${status}`} className="flex flex-col items-center z-10">
                      <div key={`${order.id}-${status}-circle`} className={`w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white ${
                        order.status === status ? 'border-orange-500 bg-orange-50' :
                        array.indexOf(order.status) > index ? 'border-green-500 bg-green-50' :
                        'border-gray-300'
                      }`}>
                        <div key={`${order.id}-${status}-dot`} className={`w-4 h-4 rounded-full ${
                          order.status === status ? 'bg-orange-500' :
                          array.indexOf(order.status) > index ? 'bg-green-500' :
                          'bg-gray-300'
                        }`} />
                      </div>
                      <p key={`${order.id}-${status}-label`} className="text-xs mt-1 font-medium text-gray-600">
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-4 mb-4">
                {order.items && order.items.map((item) => (
                  <div key={`${order.id}-item-${item.food_id}`} className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-medium">{item.food_name}</p>
                      <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">
                      ${(parseFloat(item.food_price || 0) * parseFloat(item.quantity || 0)).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <p className="text-gray-500">Subtotal</p>
                  <p className="text-gray-700">
                    ${order.items?.reduce((sum, item) => 
                      sum + (parseFloat(item.food_price || 0) * parseFloat(item.quantity || 0)), 
                      0
                    ).toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-gray-500">Delivery Fee</p>
                  <p className="text-gray-700">$2.99</p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <p className="font-medium text-gray-700">Total</p>
                  <p className="text-xl font-bold text-orange-600">
                    ${parseFloat(order.total || 0).toFixed(2)}
                  </p>
                </div>
                {order.delivery_address && (
                  <div className="text-sm text-gray-600 border-t pt-2 mt-2">
                    <p className="font-medium">Delivery Address:</p>
                    <p>{order.delivery_address}</p>
                  </div>
                )}
                {order.special_instructions && (
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">Special Instructions:</p>
                    <p>{order.special_instructions}</p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
