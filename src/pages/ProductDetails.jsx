import React, { useContext}  from 'react';
// import useParams
import { useParams } from 'react-router-dom';
// import cart context
import { CartContext } from '../contexts/CartContext';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import tap effect for button
import Ripples from 'react-ripples';
// import button Effect component
import ButtonEffect from '../components/ButtonEffect'; 


const ProductDetails = () => {
  // get the product id from the url
    const { id } = useParams();
    const { products } = useContext(ProductContext)
    const { addToCart } = useContext(CartContext)

  // get the single product based on the id
  const product = products.find(item => {
    return item.id === parseInt(id);
  })

  // if product is not found
  if(!product){
    return 
    <section className='h-screen center-flex'>
      Loading...
    </section>
  }
    // destructure product
    const { title, price, description, image } = product;
    return (
      <section className='pt-32 pb-12 lg:py-32 h-screen flex
      items-center'>
        <div className='container mx-auto'>
          {/* image & text wrapper */}
          <div className='flex flex-col lg:flex-row
          items-center'> 
            {/* image */}
            <div className='center-flex flex-1'>
              <img className='max-w-[200px] lg:max-w-sm'
              src={ image } alt="" />
            </div>
            {/* text */}
            <div className='flex-1 text-center lg:text-left'>
              <h1 className='text-[26px] font-medium mb-2 
              max-w-[450px] mx-auto lg:mx-0'>
                 {title}
              </h1>
              <div className='text-xl text-red-500 font-medium
              mb-6'>
                $ {parseFloat(price).toFixed(2)}
              </div>
              <p className='mb-8'>{description}</p>
              <Ripples>
              <ButtonEffect onClick={()=> addToCart(product, product.id)}
              className='bg-primary py-4 px-8 text-white'>
                Add to cart
              </ButtonEffect>
              </Ripples>
            </div>
        </div>
        </div>
      </section>

  );
};

export default ProductDetails;