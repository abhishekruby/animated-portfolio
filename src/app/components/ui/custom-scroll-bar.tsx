"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { AiFillBug } from "react-icons/ai";

const CustomScrollbar = ({ScrollbarRef}:any) => {
  
  const [iconColor, setIconColor] = useState('#fff');


    // Get scroll progress
    const { scrollYProgress } = useScroll({
        target: ScrollbarRef,
        offset: ['start start', 'end end'],
    });

    const scrollY = useTransform(scrollYProgress, [0, 1], [1, 150]);

  return (
    <div
      className="fixed right-5 top-1/3 z-10 h-[180px] w-2 rounded-full bg-slate-600 ring-1 ring-slate-800"
    >
      <motion.div
        className="rounded-full relative left-[-10px]"
        style={{ y: scrollY }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AiFillBug color={iconColor} size={28} className="rotate-180" 
          onMouseOver={() => setIconColor('#FF0000')}
          onMouseOut={() => setIconColor('#fff')} 
          />
      </motion.div>
    </div>
  );
};

export default CustomScrollbar;
