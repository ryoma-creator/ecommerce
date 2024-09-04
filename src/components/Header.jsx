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
import ButtonEffect from './ButtonEffect';

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);

  // event Listener
  useEffect(() => {
    // 60 = 60px (The default unit of measurement is px)
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    //Using `removeEventListener` is necessary instead of just 
    // toggling true/false to properly clean up and prevent memory leaks 
    // when the component unmounts.
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   // The target element of the event Listener
    <header className={`${
      isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
    } fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center
      justify-between h-full'>
          {/* Logo */}
          
          <Link to={'/'}>
            <div>
              <ButtonEffect>
                <img className='w-[40px]' src={Logo} alt="" />
              </ButtonEffect>
            </div>
          </Link>
        
        {/* cart */}
        <div onClick={()=> setIsOpen(!isOpen)}
        className='cursor-pointer flex relative max-w-[50px]'
        >
          <BsBag className='text-2xl'/>
          <div className='bg-accent absolute -right-2
          -bottom-2 text-[12px] w-[18px] h-[18px] text-white
          rounded-full center-flex'>{itemAmount}</div>
        </div>
      </div>
    </header>
  )
}
;
export default Header;