import React from 'react';
import { motion } from 'framer-motion';


interface HeadTextProps{
  text: string;
  highlight: string;
}

function HeadText({text,highlight}:HeadTextProps) {
  return (
    <motion.div
      className="w-full"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.h2
        className="text-neutral-200 text-8xl font-extrabold mb-4"
        style={{
          textShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          letterSpacing: '-2px',
          cursor: 'pointer',
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        {text} <span className='text-cyan-600'>{highlight}</span>
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className="w-2/3 h-1.5 bg-primary bg-cyan-600 rounded-full mb-8"
        whileHover={{
          boxShadow: '0px 0px 30px 2px rgba(6, 182, 212, 0.2)',
          scaleY: 1.5,
          transition: { duration: 0.5 },
        }}
      />
    </motion.div>
  );
}

export default HeadText;