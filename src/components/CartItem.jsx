import React from 'react';
// import Link
import { Link } from 'react-router-dom';
// import icons
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';

const CartItem = ({ item }) => {
  // destructure item
  const { id, image, category, title, price, amount } = item;


  return (
    <div className='flex'>
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
                    <div className='text-xl cursor-pointer'>
                      <IoMdClose
                        className='text-gray-500 hover:text-red-500 transition'
                      />
                    </div>
                </div>
                   <div className='bg-pink-200 flex gap-x-2 h-[36px] text-sm'>
                      {/* quantity */}
                      <div className='flex flex-1 max-w-[100px]
                      bg-blue-400 items-center h-full border
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
                          <div className='flex-1 center-flex
                          cursor-pointer'>
                            <IoMdAdd />
                          </div>
                      </div>

                      {/* item price */}
                      <div>item price</div>
                      {/* final price */}
                      <div>final price</div>
                  </div>
            </div>
      </div>
    </div>
  );
};

export default CartItem;