import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// import components
import CartItem from '../components/CartItem';
// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// import cart context
import { CartContext } from '../contexts/CartContext';


const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext)
  // console.log(useContext(CartContext));
  const { cart } = useContext(CartContext);

  return (
    // 30vw (30% of the viewport width).
    <div className={`${
      isOpen ? 'right-0' : '-right-full'
  } w-full bg-white fixed top-0 h-full
    shadow-2xl md:w-[35vw] xl:max-w-[30vw]  z-20 px-4 lg:px-[35px]`}>
      {/* transition-all
    duration-300 after edit, give it back to ⇧ */}
      <div className='flex items-center justify-between py-6
      border-b'>
        {/* icon */}
        <div className='uppercase text-sm
        font-semibold'>Shopping Bag (0)</div>

        <div
         onClick={handleClose}
         className='cursor-pointer w-8 h-8 center-flex'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;