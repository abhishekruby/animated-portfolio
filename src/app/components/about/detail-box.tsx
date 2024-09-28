import React from 'react';
import { motion } from 'framer-motion';

function DetailBox() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="h-1/2 px-8 py-12 flex flex-col gap-5 lg:gap-8 justify-center items-center rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl"
    >
      {
        Array(3).fill(1).map((_, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0 }}
            whileHover={{ y: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="text-neutral-200 text-base md:text-2xl md:w-4/5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </motion.p>
        ))
      }

    </motion.div>
  );
}

export default DetailBox;