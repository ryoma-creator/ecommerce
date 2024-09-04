import React, { useContext } from 'react'
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import components
import Product from '../components/Product';
import Hero from '../components/Hero';
import { motion } from 'framer-motion' 

// Get Data from ProductContext(API Data) for Mapping.
const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  console.log(products);
  // get only men's & women's clothing category
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || 
           item.category === "Mens Casual Slim Fit" || 
           item.category === "women's clothing"
  });
  console.log(filteredProducts)

// framer motion / animation for products on map
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 3,
        staggerChildren: 2
      }
    }
  };
  
  const item = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay:3,
      duration: 2  
    }
  };

  return (
    <div>
      <Hero />
      <section> 
        <div className='container mx-auto'>
          <motion.div 
          className='grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
          max-w-sm mx-auto md:max-w-none mad:mx-0'
          variants={container}
          initial="hidden"
          animate="visible"
          >
            {filteredProducts.map((product)=>{
              return (
                // In order to Edit Individual Mapping by another file(Product.jsx)
              <motion.div
              className='py-16'
              key={product.id} variants={item}
              >
                <Product product={product} />
              </motion.div>
                // <div 
                // className='w-full h-[300px] bg-pink-200 mb-4'
                // key={product.id}
                // >
                //   {product.title}
                // </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home;