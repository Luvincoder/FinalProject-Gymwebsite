// components/CartContext.js

import React, { createContext, useState } from 'react';

// Create a Context for the cart
export const CartContext = createContext();

// Create a Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log('Added to Cart:', product);
  };

  // Remove item from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
