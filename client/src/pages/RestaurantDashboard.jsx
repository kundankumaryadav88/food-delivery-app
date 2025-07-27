import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/useAuth';
import { menuAPI, orderAPI } from '../services/api';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const RestaurantDashboard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image_url: '',
    isVeg: true,
    image: null // for file upload
  });

  const { user } = useAuth();

  useEffect(() => {
    fetchMenuItems();
    fetchOrders();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await menuAPI.getMyItems();
      setMenuItems(response.data);
    } catch (error) {
      setError('Failed to fetch menu items');
      console.error('Error fetching menu items:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await orderAPI.getRestaurantOrders();
      // Map 'placed' status to 'PENDING' and ensure all statuses are uppercase
      const normalizedOrders = response.data.map(order => ({
        ...order,
        status: order.status.toUpperCase() === 'PLACED' ? 'PENDING' : order.status.toUpperCase()
      }));
      console.log('Normalized orders:', normalizedOrders);
      setOrders(normalizedOrders);
    } catch (error) {
      setError('Failed to fetch orders');
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (file) => {
    try {
      // You would typically upload to a cloud storage service here
      // This is a placeholder that creates a data URL
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const handleNewItemSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = newItem.image_url;
      
      // If there's a new image file, upload it
      if (newItem.image) {
        imageUrl = await handleImageUpload(newItem.image);
      }

      // Validate and format the price
      const formattedItem = {
        ...newItem,
        image_url: imageUrl,
        price: typeof newItem.price === 'number' ? newItem.price : parseFloat(newItem.price),
        isVeg: Boolean(newItem.isVeg)
      };

      if (isNaN(formattedItem.price)) {
        setError('Please enter a valid price');
        return;
      }

      await menuAPI.addItem(formattedItem);
      setNewItem({
        name: '',
        description: '',
        price: '',
        category: '',
        image_url: ''
      });
      fetchMenuItems();
      setError(''); // Clear any previous errors
    } catch (error) {
      setError('Failed to add menu item');
      console.error('Error adding menu item:', error);
    }
  };

  const handleEditClick = (item) => {
    setEditingItem(item);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedItem = {
        ...editingItem,
        price: typeof editingItem.price === 'number' ? editingItem.price : parseFloat(editingItem.price)
      };

      if (isNaN(formattedItem.price)) {
        setError('Please enter a valid price');
        return;
      }

      await menuAPI.updateItem(editingItem.id, formattedItem);
      setIsEditModalOpen(false);
      setEditingItem(null);
      fetchMenuItems();
      setError('');
    } catch (error) {
      setError('Failed to update menu item');
      console.error('Error updating menu item:', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await menuAPI.deleteItem(itemId);
        fetchMenuItems();
        setError('');
      } catch (error) {
        setError('Failed to delete menu item');
        console.error('Error deleting menu item:', error);
      }
    }
  };

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    console.log('Updating order status:', { orderId, newStatus });
    try {
      setError(''); // Clear any previous errors
      
      const order = orders.find(o => o.id === orderId);
      if (!order) {
        setError('Order not found');
        return;
      }

      // Don't do anything if status hasn't changed
      if (newStatus === order.status) {
        return;
      }

      // No client-side validation - let the server handle it
      const currentStatus = order.status.toLowerCase();
      const nextStatus = newStatus.toLowerCase();

      // Attempt to update the status
      console.log('Attempting to update order status:', {
        orderId,
        currentStatus,
        nextStatus
      });

      try {
        await orderAPI.updateOrderStatus(orderId, nextStatus);
        console.log('Status update successful');
        await fetchOrders(); // Refresh the orders list
      } catch (apiError) {
        console.error('API Error:', apiError);
        if (apiError.response?.data?.message) {
          setError(`Server Error: ${apiError.response.data.message}`);
        } else {
          setError('Failed to update order status. Please try again.');
        }
        // Reset the select element to the current status
        const selectElement = document.querySelector(`select[value="${currentStatus}"]`);
        if (selectElement) {
          selectElement.value = currentStatus;
        }
      }

      // Already fetched orders in the try block above, no need for another fetch
    } catch (error) {
      console.error('Error updating order status:', error);
      // Show more detailed error message
      if (error.response) {
        console.log('Error response:', error.response);
        const errorMessage = error.response.data.message || 
                           (typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data)) ||
                           'Unknown error';
        setError(`Failed to update order status: ${errorMessage}`);
      } else {
        setError('Failed to update order status. Please try again.');
      }
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{user.name}'s Restaurant Dashboard</h1>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Menu Management Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Menu Management</h2>
          
          {/* Add New Item Form */}
          <form onSubmit={handleNewItemSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-medium mb-4">Add New Menu Item</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={newItem.name}
                  onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newItem.description}
                  onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  rows="3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  value={newItem.price}
                  onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  step="0.01"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={newItem.category}
                  onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="pizza">Pizza</option>
                  <option value="burger">Burger</option>
                  <option value="sushi">Sushi</option>
                  <option value="indian">Indian</option>
                  <option value="chinese">Chinese</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Item Type</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="itemType"
                      checked={newItem.isVeg}
                      onChange={() => setNewItem({...newItem, isVeg: true})}
                      className="mr-2"
                    />
                    <span className="flex items-center">
                      <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                      Vegetarian
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="itemType"
                      checked={!newItem.isVeg}
                      onChange={() => setNewItem({...newItem, isVeg: false})}
                      className="mr-2"
                    />
                    <span className="flex items-center">
                      <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                      Non-Vegetarian
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setNewItem({ 
                        ...newItem, 
                        image: file,
                        image_url: URL.createObjectURL(file)
                      });
                    }
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                {newItem.image_url && (
                  <div className="mt-2 relative w-20 h-20">
                    <img
                      src={newItem.image_url}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => setNewItem({ 
                        ...newItem, 
                        image: null, 
                        image_url: '' 
                      })}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                Add Item
              </button>
            </div>
          </form>

          {/* Menu Items List */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Current Menu Items</h3>
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.id} className="flex items-start justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{item.name}</h4>
                        <span className={`w-5 h-5 ${item.isVeg ? 'bg-green-500' : 'bg-red-500'} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-xs">
                            {item.isVeg ? 'V' : 'N'}
                          </span>
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <p className="text-orange-600 font-medium">
                        ${typeof item.price === 'number' ? item.price.toFixed(2) : parseFloat(item.price).toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {isEditModalOpen && editingItem && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Edit Menu Item</h3>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    value={editingItem.description}
                    onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    rows="3"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={editingItem.price}
                    onChange={(e) => setEditingItem({...editingItem, price: parseFloat(e.target.value) || ''})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="pizza">Pizza</option>
                    <option value="burger">Burger</option>
                    <option value="sushi">Sushi</option>
                    <option value="indian">Indian</option>
                    <option value="chinese">Chinese</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Item Type</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="editItemType"
                        checked={editingItem.isVeg}
                        onChange={() => setEditingItem({...editingItem, isVeg: true})}
                        className="mr-2"
                      />
                      <span className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        Vegetarian
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="editItemType"
                        checked={!editingItem.isVeg}
                        onChange={() => setEditingItem({...editingItem, isVeg: false})}
                        className="mr-2"
                      />
                      <span className="flex items-center">
                        <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                        Non-Vegetarian
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setEditingItem({ 
                            ...editingItem, 
                            image: file,
                            image_url: URL.createObjectURL(file)
                          });
                        }
                      }}
                      className="flex-1 p-2 border rounded-md"
                    />
                    {editingItem.image_url && (
                      <div className="relative w-20 h-20">
                        <img
                          src={editingItem.image_url}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => setEditingItem({ 
                            ...editingItem, 
                            image: null, 
                            image_url: '' 
                          })}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Orders Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium">Order #{order.id}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(order.created_at).toLocaleString()}
                    </p>
                    {order.user && (
                      <div className="mt-2 text-sm">
                        <p className="font-medium text-gray-700">Customer Details:</p>
                        <p>{order.user.name}</p>
                        <p>{order.user.email}</p>
                        {order.delivery_address && (
                          <p className="text-gray-600 mt-1">
                            Delivery to: {order.delivery_address}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <select
                    value={order.status}
                    onChange={(e) => {
                      const newStatus = e.target.value;
                      const currentStatus = order.status;

                      // Don't do anything if status hasn't changed
                      if (newStatus === currentStatus) {
                        return;
                      }
                      
                      // Define valid transitions with uppercase values to match the backend
                      const validTransitions = {
                        'PENDING': ['PREPARING'],
                        'PREPARING': ['READY'],
                        'READY': ['DELIVERED'],
                        'DELIVERED': ['COMPLETED'],
                        'COMPLETED': []
                      };

                      // Check if transition is valid
                      const upperCurrentStatus = currentStatus.toUpperCase();
                      const upperNewStatus = newStatus.toUpperCase();

                      console.log('Validating status transition:', {
                        currentStatus: upperCurrentStatus,
                        newStatus: upperNewStatus
                      });

                      if (!validTransitions[upperCurrentStatus]?.includes(upperNewStatus)) {
                        alert(`Cannot change status to ${newStatus}. The order must follow: PENDING → PREPARING → READY → DELIVERED → COMPLETED`);
                        e.target.value = currentStatus; // Reset select to current status
                        return; // Important: prevent invalid transitions
                      }

                      // Ask for confirmation when completing an order
                      if (upperNewStatus === 'COMPLETED') {
                        if (window.confirm('Are you sure you want to mark this order as completed? This action cannot be undone.')) {
                          handleUpdateOrderStatus(order.id, upperNewStatus);
                        } else {
                          e.target.value = currentStatus; // Reset if user cancels
                        }
                      } else {
                        handleUpdateOrderStatus(order.id, upperNewStatus);
                      }
                    }}
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      order.status.toLowerCase() === 'completed' ? 'bg-green-100 text-green-800' :
                      order.status.toLowerCase() === 'preparing' ? 'bg-blue-100 text-blue-800' :
                      order.status.toLowerCase() === 'ready' ? 'bg-purple-100 text-purple-800' :
                      order.status.toLowerCase() === 'delivered' ? 'bg-green-100 text-green-800' :
                      order.status.toLowerCase() === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}
                    disabled={order.status.toLowerCase() === 'completed'}
                  >
                    <option value="PENDING">Pending</option>
                    <option value="PREPARING">Preparing</option>
                    <option value="READY">Ready</option>
                    <option value="DELIVERED">Delivered</option>
                    <option value="COMPLETED">Completed</option>
                  </select>
                </div>

                <div className="space-y-2">
                  {order.items && order.items.map((item, index) => {
                    // Handle both menu_item and direct food_ prefixed properties
                    const itemName = item.menu_item?.name || item.food_name;
                    const rawPrice = item.menu_item?.price || item.food_price;
                    
                    if (!itemName || !rawPrice) {
                      console.error('Invalid item data:', item);
                      return null;
                    }

                    // Parse price consistently
                    const itemPrice = typeof rawPrice === 'string' 
                      ? parseFloat(rawPrice.replace(/[^0-9.]/g, '')) 
                      : parseFloat(rawPrice) || 0;
                    const quantity = parseInt(item.quantity) || 0;
                    const total = itemPrice * quantity;

                    // console.log('Item calculation:', { 
                    //   name: itemName,
                    //   originalPrice: rawPrice,
                    //   parsedPrice: itemPrice,
                    //   quantity: quantity,
                    //   total: total 
                    // });

                    return (
                      <div key={`${order.id}-item-${index}`} className="flex justify-between text-sm">
                        <span>{quantity}x {itemName}</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="text-lg font-bold text-orange-600">
                    ${(() => {
                      if (!order.items || !Array.isArray(order.items)) return '0.00';
                      const total = order.items.reduce((sum, item) => {
                        const rawPrice = item?.menu_item?.price || item?.food_price;
                        if (!rawPrice) return sum;
                        
                        const itemPrice = typeof rawPrice === 'string'
                          ? parseFloat(rawPrice.replace(/[^0-9.]/g, ''))
                          : parseFloat(rawPrice) || 0;
                        const quantity = parseInt(item.quantity) || 0;
                        return sum + (itemPrice * quantity);
                      }, 0);
                      
                      // console.log('Order total calculation:', {
                      //   orderId: order.id,
                      //   items: order.items.length,
                      //   calculatedTotal: total
                      // });
                      
                      return total.toFixed(2);
                    })()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;