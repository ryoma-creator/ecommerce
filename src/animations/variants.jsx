import React,{  useState } from 'react';
import { motion } from 'framer-motion';


// AnimatedComponent
const AnimatedComponent = ({ image1, image2 }) => {
  const [currentImage, setCurrentImage] = useState(image1);
  // const [isRotated, setIsRotated] = useState(false);


  const handleClick = () => {
    // setIsRotated(!isRotated);
    setCurrentImage(currentImage === image1 ? image2 : image1);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0.2, x: -100 }}
      animate={{ 
        opacity: 1, 
        x: 0
        // rotateY: isRotated ? 0 : 360
      }}
      transition={{ duration: 2, ease: "easeOut" }}
      onClick={handleClick}
      // style={{ perspective: '1000px' }} // 3D effect
      className="overflow-hidden"
    >
      <motion.img
        src={currentImage}
        alt="Animated"
        className="w-full h-full object-cover"
        style={{ width: '100%', height: '100%' }}
      />
    </motion.div>
  );
};

export { AnimatedComponent };
