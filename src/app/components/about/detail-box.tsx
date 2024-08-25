import React from 'react';
import { motion } from 'framer-motion';

function DetailBox() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col justify-center items-center rounded-tl-2xl rounded-br-2xl ring-2 ring-slate-400 h-[70%] gap-10"
      style={{ boxShadow: "0px 0px 20px 1px rgba(255, 255, 255, 0.8)" }} // Glowing effect
    >
      {
        Array(3).fill(1).map((_, index) => (
          <motion.p
            key={index}
            initial={{ y: 0 }}
            whileHover={{ y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="text-neutral-200 text-2xl w-4/5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </motion.p>
        ))
      }

    </motion.div>
  );
}

export default DetailBox;