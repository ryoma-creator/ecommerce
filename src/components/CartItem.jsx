import React, { useContext } from 'react';
// import Link
import { Link } from 'react-router-dom';
// import icons
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';
// import cart context
import { CartContext } from '../contexts/CartContext'; 

const CartItem = ({ item }) => {
  const { cart, addToCart, removeFromCart, incrementCartItemQuantity } = useContext(CartContext)

  // destructure item
  const { id, image, category, title, price, amount } = item;


  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b
    border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
          {/* image */}
            <Link to={`/product/${id}`}>
              <img className='max-w-[80px]' src={image} alt="item image" />
            </Link>
            <div className='w-full flex flex-col'>
            {/* title & remove icon */}
                <div className='flex justify-between'>
                    {/* title */}
                    <Link
                      to={`/product/${id}`}
                      className='text-sm font-medium max-w-[240px] text-primary hover:underline'
                    >
                      {title}
                    </Link>
                    {/* remove icon */}
                    <div 
                    onClick={()=> removeFromCart(id)}
                    className='text-xl cursor-pointer'>
                      <IoMdClose
                        className='text-gray-500 hover:text-red-500 transition'
                      />
                    </div>
                </div>
                   <div className='flex gap-x-2 h-[36px] text-sm'>
                      {/* quantity */}
                      <div className='flex flex-1 max-w-[100px]
                      items-center h-full border
                      text-primary font-medium'>
                          {/* minus icon */}
                          <div className='flex-1 center-flex cursor-pointer'>
                            <IoMdRemove />
                          </div>
                          {/* amount */}
                          <div className='center-flex px-2'>
                            {amount}
                          </div>
                          {/* plus icon */}
                          <div
                          onClick={()=>incrementCartItemQuantity(id)}
                          className='flex-1 center-flex
                          cursor-pointer'>
                            <IoMdAdd />
                          </div>
                      </div>

                      {/* item price */}
                      <div className='flex-1 flex items-center justify-around'>$ {price}</div>
                      {/* final price */}
                      {/* .toFixed(2) ➡️ make the price at 2 decimal(小数点以下2桁まで表示) */}
                      {/* parseFloat()➡️ A number with a decimal point(小数点). */}
                      <div className='flex-1 flex justify-end items-center
                      text-primary font-medium'>
                        {`${parseFloat(price * amount).toFixed(
                        2
                      )}`}</div>
                  </div>
            </div>
      </div>
    </div>
  );
};

export default CartItem;