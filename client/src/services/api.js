import axios from 'axios';

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
};

// Menu API
export const menuAPI = {
  getAllItems: () => api.get('/menu'),
  addItem: (itemData) => api.post('/menu', itemData),
  updateItem: (id, itemData) => api.put(`/menu/${id}`, itemData),
  deleteItem: (id) => api.delete(`/menu/${id}`),
  getMyItems: () => api.get('/menu/my-items'),
  getRestaurantById: (id) => api.get(`/restaurant/${id}`),
  getRestaurantMenu: (id) => api.get(`/restaurant/${id}/menu`),
};

// Orders API
export const orderAPI = {
  placeOrder: (orderData) => api.post('/order', orderData),
  getUserOrders: () => api.get('/order/user'),
  getRestaurantOrders: () => api.get('/order/restaurant'),
  updateOrderStatus: async (id, status) => {
    return api.put(`/order/${id}/status`, { status: status.toLowerCase() });
  },
};

// Address API
export const addressAPI = {
  getAddresses: () => api.get('/addresses'),
  addAddress: (addressData) => api.post('/addresses', addressData),
  setDefaultAddress: (id) => api.put(`/addresses/${id}/default`),
  deleteAddress: (id) => api.delete(`/addresses/${id}`),
};

export default api; 