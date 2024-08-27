import React, { useContext } from 'react';
// import Link
import { Link } from 'react-router-dom';
// import icons
// BsPlus is a "plus" icon, typically used for actions like "add to cart" buttons.
// BsEyeFill is an "eye" icon, usually used for purposes like "view details" or "preview."
import { BsPlus, BsEyeFill } from 'react-icons/bs'


// Fake Store Api Data = product 
const Product = ({product}) => {
  console.log(product);

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
        <div className='border border-[#e4e4e4] h-[300px] mb-4
        relative overflow-hidden group transition'>
            <div className='w-full h-full flex justify-center
            items-center'>
                {/* image */}
                <div className='w-[200px] mx-auto flex
                 justify-center items-center'>
                    <img
                       className='max-h-[160px] group-hover:scale-110
                       transition duration-300'
                       src={image} alt="" />
                </div>
                {/* button */}
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
        <div>2</div>
    </div>
  );
};

export default Product;