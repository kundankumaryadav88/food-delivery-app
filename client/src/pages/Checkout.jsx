import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { orderAPI, addressAPI } from '../services/api';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart: cartItems, getTotal, clearCart } = useCartContext();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const cartTotal = getTotal();
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    street: '',
    city: '',
    state: '',
    pincode: '',
    type: 'home', // home, work, other
  });

  useEffect(() => {
    // If cart is empty, redirect back to home
    if (cartItems.length === 0) {
      navigate('/customer');
    }
  }, [cartItems, navigate]);

  // Load saved addresses when component mounts
  useEffect(() => {
    const loadAddresses = async () => {
      try {
        console.log('Fetching addresses...');
        const token = localStorage.getItem('token');
        console.log('Token available:', !!token);
        const response = await addressAPI.getAddresses();
        console.log('Addresses response:', response.data);
        setAddresses(response.data);
        // Set selected address to default address if one exists
        const defaultAddress = response.data.find(addr => addr.is_default);
        console.log('Default address:', defaultAddress);
        setSelectedAddress(defaultAddress || null);
      } catch (error) {
        console.error('Error loading addresses:', error.response?.data || error.message);
      }
    };
    loadAddresses();
  }, []);

  const handleNewAddressSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addressAPI.addAddress(newAddress);
      setAddresses(prev => [...prev, response.data]);
      if (addresses.length === 0) {
        setSelectedAddress(response.data);
      }
      setShowNewAddressForm(false);
      setNewAddress({ street: '', city: '', state: '', pincode: '', type: 'home' });
    } catch (error) {
      console.error('Error adding address:', error);
      alert('Failed to add address. Please try again.');
    }
  };

  const handleSelectAddress = (addressId) => {
    const address = addresses.find(addr => addr.id === addressId);
    setSelectedAddress(address);
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      await addressAPI.deleteAddress(addressId);
      setAddresses(prev => prev.filter(addr => addr.id !== addressId));
      if (selectedAddress?.id === addressId) {
        setSelectedAddress(null);
      }
    } catch (error) {
      console.error('Error deleting address:', error);
      alert('Failed to delete address. Please try again.');
    }
  };

  const handleSetDefaultAddress = async (addressId) => {
    try {
      const response = await addressAPI.setDefaultAddress(addressId);
      const updatedAddress = response.data;
      setSelectedAddress(updatedAddress);
      setAddresses(prev => prev.map(addr => ({
        ...addr,
        is_default: addr.id === addressId
      })));
    } catch (error) {
      console.error('Error setting default address:', error);
      alert('Failed to set default address. Please try again.');
    }
  };

  const handleDeliverHere = async () => {
    if (!selectedAddress) {
      alert('Please select a delivery address');
      return;
    }
    
    try {
      const orderData = {
        items: cartItems.map(item => ({
          id: item.id,
          quantity: item.quantity,
          price: parseFloat(item.price),
          name: item.name,
          restaurant_id: item.restaurant_id
        })),
        delivery_address: `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state} - ${selectedAddress.pincode}`,
        total: parseFloat(cartTotal) + 2.99, // Including delivery fee
        status: 'pending'
      };

      await orderAPI.placeOrder(orderData);
      alert('Order placed successfully!');
      clearCart();
      navigate('/orders');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Addresses */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
              
              {/* Saved Addresses */}
              <div className="space-y-4 mb-4">
                {console.log('Rendering addresses:', addresses)}
                {addresses.map(address => (
                  <div
                    key={address.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedAddress?.id === address.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-500'
                    }`}
                    onClick={() => handleSelectAddress(address.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="capitalize px-2 py-1 text-sm rounded bg-gray-100">
                        {address.type}
                      </span>
                      <div className="flex gap-2">
                        {address.isDefault && (
                          <span className="text-sm text-orange-600">Default</span>
                        )}
                        {!address.isDefault && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSetDefaultAddress(address.id);
                            }}
                            className="text-sm text-gray-600 hover:text-orange-600"
                          >
                            Set as Default
                          </button>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteAddress(address.id);
                          }}
                          className="text-sm text-red-600 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="mt-2 font-medium">{address.street}</p>
                    <p className="text-gray-600">
                      {address.city}, {address.state} - {address.pincode}
                    </p>
                  </div>
                ))}
              </div>

              {/* Add New Address Button/Form */}
              {showNewAddressForm ? (
                <form onSubmit={handleNewAddressSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Street Address"
                      value={newAddress.street}
                      onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      required
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      required
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="PIN Code"
                      value={newAddress.pincode}
                      onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                      required
                      pattern="[0-9]{6}"
                      title="Please enter a valid 6-digit PIN code"
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <select
                      value={newAddress.type}
                      onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="home">Home</option>
                      <option value="work">Work</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Save Address
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowNewAddressForm(false)}
                      className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  onClick={() => setShowNewAddressForm(true)}
                  className="w-full border-2 border-dashed border-gray-300 p-4 rounded-lg text-gray-500 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  + Add New Address
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500">{item.quantity}x</span>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          ${parseFloat(item.price).toFixed(2)} each
                        </p>
                      </div>
                    </div>
                    <span className="font-medium">
                      ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${parseFloat(cartTotal).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span>$2.99</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2">
                    <span>Total</span>
                    <span>${(parseFloat(cartTotal) + 2.99).toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleDeliverHere}
                  disabled={!selectedAddress}
                  className={`w-full py-3 rounded-lg text-white font-medium ${
                    selectedAddress
                      ? 'bg-orange-500 hover:bg-orange-600'
                      : 'bg-gray-300 cursor-not-allowed'
                  } transition-colors`}
                >
                  Deliver Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
