import React from 'react';
import { motion } from 'framer-motion';

const ButtonEffect = ( {children, onClick, className} ) => {
  return (
  <motion.button
    whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    onClick={onClick}
    className={className}
  >
    { children }
  </motion.button>
  );
};

export default ButtonEffect;