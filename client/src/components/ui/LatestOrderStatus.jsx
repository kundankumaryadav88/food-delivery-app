import React, { useState, useEffect } from 'react';
import { orderAPI } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const LatestOrderStatus = () => {
  const [latestOrder, setLatestOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLatestOrder();
    // Refresh order status every 30 seconds
    const interval = setInterval(fetchLatestOrder, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchLatestOrder = async () => {
    try {
      const response = await orderAPI.getUserOrders();
      const orders = response.data;
      if (orders && orders.length > 0) {
        const activeOrder = orders.find(order => 
          order.status !== 'completed' && order.status !== 'cancelled'
        );
        setLatestOrder(activeOrder || orders[0]);
      }
    } catch (error) {
      console.error('Error fetching latest order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;
  if (!latestOrder) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'preparing': return 'bg-blue-100 text-blue-800';
      case 'ready': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusMessage = (status) => {
    switch (status) {
      case 'pending': return 'Restaurant is reviewing your order';
      case 'preparing': return 'Your food is being prepared';
      case 'ready': return 'Your order is ready for pickup/delivery';
      case 'delivered': return 'Order has been delivered';
      case 'completed': return 'Order completed';
      default: return 'Order status unknown';
    }
  };

  if (latestOrder.status === 'completed') return null;

  return (
    <div 
      onClick={() => navigate('/orders')}
      className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow max-w-sm w-full sm:w-96 border border-gray-200"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">Latest Order Status</h3>
          <p className="text-sm text-gray-500">Order #{latestOrder.id}</p>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(latestOrder.status)}`}>
          {latestOrder.status.charAt(0).toUpperCase() + latestOrder.status.slice(1)}
        </span>
      </div>

      <div className="mt-4">
        <div className="relative">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
            {['pending', 'preparing', 'ready', 'delivered'].map((status, index, arr) => {
              const currentIndex = arr.indexOf(latestOrder.status);
              const isActive = index <= currentIndex;
              return (
                <div
                  key={status}
                  className={`transition-all duration-500 ease-in-out shadow-none flex flex-col text-center whitespace-nowrap justify-center ${
                    isActive ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  style={{ width: `${100 / arr.length}%` }}
                />
              );
            })}
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{getStatusMessage(latestOrder.status)}</p>
        
        {latestOrder.restaurant && (
          <p className="mt-1 text-xs text-gray-500">
            From: {latestOrder.restaurant.name}
          </p>
        )}

        <p className="mt-2 text-xs text-blue-600">
          Click to view details →
        </p>
      </div>
    </div>
  );
};

export default LatestOrderStatus;
