import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  addresses: [],
  selectedAddress: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = {
          ...action.payload,
          price: parseFloat(action.payload.price),
          quantity: 1
        };
        state.items.push(newItem);
      }
      state.total = state.items.reduce((total, item) => 
        total + (parseFloat(item.price) * item.quantity), 0
      );
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = state.items.reduce((total, item) => 
        total + (item.price * item.quantity), 0
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = Math.max(0, quantity);
        if (item.quantity === 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
      state.total = state.items.reduce((total, item) => 
        total + (item.price * item.quantity), 0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
    addAddress: (state, action) => {
      const newAddress = {
        ...action.payload,
        id: Date.now(),
        isDefault: state.addresses.length === 0,
      };
      state.addresses.push(newAddress);
      if (state.addresses.length === 1) {
        state.selectedAddress = newAddress;
      }
    },
    updateAddress: (state, action) => {
      const index = state.addresses.findIndex(addr => addr.id === action.payload.id);
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
    deleteAddress: (state, action) => {
      state.addresses = state.addresses.filter(addr => addr.id !== action.payload);
      if (state.selectedAddress?.id === action.payload) {
        state.selectedAddress = state.addresses.find(addr => addr.isDefault) || state.addresses[0] || null;
      }
    },
    setSelectedAddress: (state, action) => {
      state.selectedAddress = state.addresses.find(addr => addr.id === action.payload) || null;
    },
    setDefaultAddress: (state, action) => {
      state.addresses = state.addresses.map(addr => ({
        ...addr,
        isDefault: addr.id === action.payload
      }));
    }
  }
});

export const { 
  addItem, 
  removeItem, 
  updateQuantity, 
  clearCart,
  addAddress,
  updateAddress,
  deleteAddress,
  setSelectedAddress,
  setDefaultAddress
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartItemCount = (state) => 
  state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const selectAddresses = (state) => state.cart.addresses;
export const selectSelectedAddress = (state) => state.cart.selectedAddress;

export default cartSlice.reducer;
