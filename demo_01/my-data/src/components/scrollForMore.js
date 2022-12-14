import React from 'react';
import { motion } from 'framer-motion';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const ScrollForMore = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1.2, ...transition },
      }}
      className='scroll-for-more'
    ></motion.div>
  );
};

export default ScrollForMore;
