/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Dummy initial cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Organic Wildflower Honey',
      price: 12.99,
      quantity: 1,
      imageGradient: 'from-amber-200 to-yellow-400'
    },
    {
      id: 2,
      name: 'Artisanal Sourdough Bread',
      price: 6.50,
      quantity: 2,
      imageGradient: 'from-orange-200 to-amber-500'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      // Add new item (with a quantity of 1) and default gradient if missing
      setCartItems([...cartItems, { 
        ...product, 
        quantity: 1,
        imageGradient: product.imageGradient || 'from-indigo-200 to-indigo-400',
        price: parseFloat(product.price.replace('$', '')) // Convert price string to number if needed
      }]);
    }
    // Automatically open sidebar when adding an item
    setIsCartOpen(true);
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    addToCart,
    totalItemsCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

