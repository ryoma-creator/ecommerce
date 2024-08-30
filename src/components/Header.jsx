import React, { useState, useContext, useEffect } from 'react'
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
// import icons
import { BsBag } from 'react-icons/bs';
// import Link
import { Link } from 'react-router-dom'
// import Logo
import  Logo  from '../img/logo.svg';

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  // event Listener
  useEffect(()=>{
    
  });
  return (
    <header className={`${isActive ? 'bg-pink-200' : 'bg-blue-300'}`}>
      <div className='container mx-auto flex items-center
      justify-between h-full'>
          {/* Logo */}
          <Link to={'/'}>
            <div>
              <div>
                <img className='w-[40px]' src={Logo} alt="" />
              </div>
            </div>
          </Link>
        
        {/* cart */}
        <div onClick={()=> setIsOpen(!isOpen)}
        className='cursor-pointer flex relative max-w-[50px]'
        >
          <BsBag className='text-2xl'/>
          <div className='bg-red-500 absolute -right-2
          -bottom-2 text-[12px] w-[18px] h-[18px] text-white
          rounded-full center-flex'>{itemAmount}</div>
        </div>
      </div>
    </header>
  )
}
;
export default Header;