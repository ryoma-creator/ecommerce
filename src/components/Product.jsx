import React, { useContext } from 'react';
// import Link
import { Link } from 'react-router-dom';
// import icons
// BsPlus is a "plus" icon, typically used for actions like "add to cart" buttons.
// BsEyeFill is an "eye" icon, usually used for purposes like "view details" or "preview."
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

// The Data by Mapping from Home.jsx
// Fake Store Api Data = product（the item map name）
// This file purpose is Editing Mapping Individual Data from Home.jsx
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  // console.log(product);

// destructure product
// Take the properties and create variables with the same names.
  const { id, image, category, title, price} = product;
// const id = product.id;
// const image = product.image;
// const category = product.category;
// const title = product.title;
// const price = product.price;


  return (
    <div>
        {/* group  */}
        <div className='border border-[#e4e4e4] h-[300px] mb-4
        relative overflow-hidden group transition'>
            <div className='w-full h-full center-flex'>
                {/* image */}
                <div className='w-[200px] mx-auto center-flex'>
                    <img
                       className='max-h-[160px] group-hover:scale-110
                       transition duration-300'
                       src={image} alt="item image" />
                </div>
                {/* button */}
                <div className='absolute top-6 -right-11 group-hover:right-5 bg-red-500/40
                p-2 flex flex-col items-center justify-center gap-y-2
                opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <button onClick={()=> addToCart(product, id)}>
                        <div className='center-flex w-12 h-12 text-white
                        bg-red-500 '>
                            <BsPlus className='text-3xl' />
                        </div>
                    </button>
                    <Link
                        to={`/product/${id}`}
                        className='center-flex w-12 h-12 bg-white
                      text-primary drop-shadow-xl'
                    >
                        <BsEyeFill />
                    </Link>
                </div>
            </div>
        </div>
        {/* category & title & price */}
        <div>
            <div className='text-sm capitalize text-gray-500 
            mb-1'>{category}</div>
            <Link to={`/product/${id}`}>
                <h2 className='font-semibold mb-1'>{title}</h2>
            </Link>
            <div className='font-semibold'>$ {price}</div>
        </div>
    </div>
  );
};

export default Product;