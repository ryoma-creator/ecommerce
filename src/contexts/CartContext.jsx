import React, { createContext, useState } from 'react';

// create context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  
  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1}; 
    console.log(newItem)
    console.log(`item ${product.title} added to the cart`);
  }

  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;