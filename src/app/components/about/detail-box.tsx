import React from 'react';
import { motion } from 'framer-motion';

function DetailBox() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col justify-center items-center rounded-tl-2xl rounded-br-2xl ring-2 ring-slate-400 h-4/5 gap-10"
    >
      {
        Array(3).fill(1).map((_, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0.7, y: 0 }}
            whileHover={{ opacity: 1, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="text-neutral-200 text-3xl w-4/5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </motion.p>
        ))
      }

    </motion.div>
  );
}

export default DetailBox;