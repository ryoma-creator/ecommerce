import React, { useContext } from 'react'
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import components
import Product from '../components/Product';
import Hero from '../components/Hero';

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
  return (
    <div>
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
          max-w-sm mx-auto md:max-w-none mad:mx-0'>
            {filteredProducts.map((product)=>{
              return (
                // In order to Edit Individual Mapping by another file(Product.jsx)
                <Product product={product} key={product.id}/>
                // <div 
                // className='w-full h-[300px] bg-pink-200 mb-4'
                // key={product.id}
                // >
                //   {product.title}
                // </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;