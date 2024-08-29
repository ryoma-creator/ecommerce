import React from 'react';

const CartItem = ({ item }) => {
  // destructure item
  const { id, image, category, title, price, amount } = item;


  return (
    <div>
      <div className=''>
        {/* image */}
        <div>
          <img className='max-w-[80px]' src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;