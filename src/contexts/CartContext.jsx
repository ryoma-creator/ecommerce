import React, { createContext, useState, useEffect } from 'react';

// "The purpose of this code is:
// ✅ When adding an item to the cart, increase the quantity 
//    if the item already exists.
// ✅ If the item does not exist, add it as a new item."

// create context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = (0);


  // update item count amount/Quantity number (header.jsx red color number)
  useEffect(()=>{
    if (cart) {
      const amount = cart.reduce((accumulator, item) => {
        return accumulator + item.amount;
      }, 0);
      setItemAmount(amount);
    } 
  },[cart]);

  // 初期rendering時に localStorage からカートを取得
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  // cartが変わるたびに localStorage に保存
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);



  // add to cart
  const addToCart = (product, id) => {
  const newItem = { ...product, amount: 1}; 
  //  Check if cart item is already in the Cart / In order to Not making duplicate.
  const existingItem = cart.find((item) => {
      return item.id === id;
    });

  if (existingItem) {
  //  if its existing item, just add amount   
    //  This map make the necessary updates
      const updatedCart = cart.map((item)=> 
          item.id === id 
          ? {...item, amount: item.amount + 1} 
          : item
          // for Error
      );
      setCart(updatedCart);
      console.log('Updated cart', updatedCart);
    } else {
  // If it's a new product: add it to the cart(not just only as amount)   
      setCart([...cart, newItem]);
      console.log('Added new item:', newItem);
      console.log('Updated cart:', updatedCart);
    }
  };
  console.log(cart)

  // remove all from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

// clear cart
  const clearCart = () => {
    setCart([]);
  };

// increase amount
const incrementCartItemQuantity = (id) => {
  const item = cart.find((item)=>(item.id === id));
  addToCart(item,id);
};

// decrease amount
const decrementCartItemQuantity = (id) => {
  // const item = cart.find((item)=>(item.id === id));
  // Math.max ➡️ Returns the largest number among the given values
  const newCart = cart.map((item)=> 
  item.id === id 
  ? {...item, amount: Math.max(0, item.amount - 1)} 
  : item
);
//---------Choose from ① or ② by your preference and remove comment out-------------
// ①
// If you want to automatically remove items 
// when the quantity reaches 0, use the following code
  // const updatedItem = newCart.find(item => item.id === id);
  // if (updatedItem && updatedItem.amount === 0) {
  //   removeFromCart(id);
  // } else {
  //   setCart(newCart);
  // }
  // };
// ②
// If you want to display 0 and give the user a choice,
// use the following code.
  setCart(newCart);
}


  return (
    <CartContext.Provider 
      value={{
        cart,
        addToCart,
        removeFromCart, 
        clearCart, 
        incrementCartItemQuantity, 
        decrementCartItemQuantity,
        itemAmount 
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

