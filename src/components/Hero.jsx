import React from 'react';
// import images
import AiModelImg from '../img/Ai_model.png';
import AiModelImg2 from '../img/Ai_model2.png';
// import Link
import { Link } from 'react-router-dom';
// import pictures with motion
import { AnimatedComponent } from '../animations/variants';


// backgroundImage: {
//   hero: "url('./img/bg_hero.svg')",
const Hero = () => {
  const items = [
    { id: 1, src: AiModelImg, alt: 'Anime style girl with pink hair' },
  ];

  return (
    <section className='bg-pink-200 h-[800px]
    bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around
      h-full">
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pre-title */}
          <div className='font-semibold flex items-center
          uppercase'>
              <div className='w-10 h-[2px] bg-red-500 mr-3 self-center'></div>
              New Trend
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1]
          font-light mb-4'>
            AUTUMN SALE STYLISH <br />
           <span className='font-semibold'>WOMENS</span>
          </h1>
          <Link
            to={'/'}
            className='self-start uppercase font-semibold
            border-b-2 border-primary'
            >Discover More</Link>
        </div>
        {/* image */}
        <div className='hidden lg:inline-block'>
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