import React, { createContext, useState } from 'react';

// "The purpose of this code is:
// ✅ When adding an item to the cart, increase the quantity 
//    if the item already exists.
// ✅ If the item does not exist, add it as a new item."

// create context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  
  // add to cart
  const addToCart = (product, id) => {

    const newItem = { ...product, amount: 1}; 
      // console.log(newItem)

  //  Check if cart item is already in the Cart / In order to Not making duplicate.
    const existingItem = cart.find((item) => {
      return item.id === id;
    });
    
    if (existingItem) {
  //  if its existing item, just add amount   
    //  This map make the necessary updates
      const updatedCart = cart.map((item)=>{
        if (item.id === id){
          return { ...item, amount: item.amount + 1 };
        }
      });
      setCart(updatedCart);
    } else {
  // If it's a new product: add it to the cart(not just only as amount)   
      setCart([...cart, newItem]);
    }
  };
  console.log(cart)

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

