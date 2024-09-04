import React from 'react';
// import images
import AiModelImg from '../img/Ai_model.png';
import AiModelImg2 from '../img/Ai_model2.png';
// import Link
import { Link } from 'react-router-dom';
// import pictures with motion
import { AnimatedComponent } from '../animations/variants';
// import motion
import { motion } from 'framer-motion';
// import tap effect for button
import Ripples from 'react-ripples';

// backgroundImage: {
//   hero: "url('./img/bg_hero.svg')",
const Hero = () => {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 5,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 20,
        duration: 0.8,
      }
    }
    };

// AUTUMN SALE STYLISH WOMENS variants
const titleVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,  
      duration: 2  
    }
  }
};

// SALE !important to give attention from customer mostly
const titleSaleVariants = {
  hidden: { opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.8,  
      duration: 4  
    }
  }
};

  return (
    <section className='bg-pink-200 h-[800px] overflow-hidden
    bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around
      h-full">
        {/* text */}
        <motion.div 
          className='flex flex-col justify-center
          variants={containerVariants}'
          initial='hidden'
          animate='visible'
        >
          {/* pre-title */}
          <motion.div className='font-semibold flex items-center
          uppercase' variants={itemVariants}>
              <div className='w-10 h-[2px] bg-accent mr-3 self-center'></div>
              New Trend
          </motion.div>
          {/* title */}
          <motion.h1 
          className='text-[70px] leading-[1.1]
          font-light mb-4 uppercase'
          variants={titleVariants}
          >
            AUTUMN<br />
           <span className=''>WOMENS</span><br />
           <span className='font-semibold'>Now on</span> <motion.span className='font-bold text-[80px] text-accent' variants={titleSaleVariants}>SALE</motion.span>
          </motion.h1>

         
          <motion.div variants={itemVariants}>
          <Link
            to={'/'}
            className='self-start uppercase font-semibold
            border-b-2 border-primary w-[10px]' 
            ><Ripples>Discover More </Ripples></Link>
          </motion.div>
         

        </motion.div>
        {/* image */}
        <div className='hidden lg:block mb-2'>
          <AnimatedComponent
             image1={AiModelImg} 
             image2={AiModelImg2}           
          />
          {/* <img src={WomanImg} alt="" /> */}
        </div>        
      </div>
    </section>
  );
};

export default Hero;