import { useState, useEffect, useCallback } from 'react';

const CART_STORAGE_KEY = 'foodDeliveryCart';

// Create a custom event for cart updates
const CART_UPDATE_EVENT = 'CART_UPDATE';

const useCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Function to update cart and notify all components
  const updateCartAndNotify = useCallback((newCart) => {
    setCart(newCart);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
    // Dispatch a custom event to notify all components
    window.dispatchEvent(new CustomEvent(CART_UPDATE_EVENT));
  }, []);

  // Listen for cart updates from other components
  useEffect(() => {
    const handleCartUpdate = () => {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };

    window.addEventListener(CART_UPDATE_EVENT, handleCartUpdate);
    return () => window.removeEventListener(CART_UPDATE_EVENT, handleCartUpdate);
  }, []);

  const addToCart = useCallback((item) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(cartItem => cartItem.id === item.id);
      
      const newCart = existingItem
        ? currentCart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...currentCart, { ...item, quantity: 1 }];
      
      updateCartAndNotify(newCart);
      return newCart;
    });
  }, [updateCartAndNotify]);

  const removeFromCart = useCallback((itemId) => {
    setCart(currentCart => {
      const newCart = currentCart.filter(item => item.id !== itemId);
      updateCartAndNotify(newCart);
      return newCart;
    });
  }, [updateCartAndNotify]);

  const updateQuantity = useCallback((itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }

    setCart(currentCart => {
      const newCart = currentCart.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      );
      updateCartAndNotify(newCart);
      return newCart;
    });
  }, [removeFromCart, updateCartAndNotify]);

  const clearCart = useCallback(() => {
    updateCartAndNotify([]);
    setCart([]);
  }, [updateCartAndNotify]);

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount
  };
};

export default useCart;
