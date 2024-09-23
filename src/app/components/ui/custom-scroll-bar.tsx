"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { AiFillBug } from "react-icons/ai";

const CustomScrollbar = ({ ScrollbarRef }: any) => {
  const [iconColor, setIconColor] = useState('#fff');

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: ScrollbarRef,
    offset: ['start start', 'end end'],
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [1, 150]);

  const handleClick = (e: any) => {
    // Get the position of the click on the scrollbar
    const clickY = e.nativeEvent.offsetY;
  
    // Get the height of the scrollbar div (for example, 180px in your case)
    const scrollbarHeight = e.currentTarget.clientHeight;
  
    // Calculate scroll progress percentage
    const scrollProgressPercentage = (clickY / scrollbarHeight) * 100;
  
    // Calculate the total scrollable height
    const totalScrollableHeight = document.body.scrollHeight - window.innerHeight;
  
    // Convert the scroll progress percentage to pixel value
    const scrollToY = (scrollProgressPercentage / 100) * totalScrollableHeight;
  
    // Scroll to the calculated position
    window.scrollTo({
      top: scrollToY,
      behavior: 'smooth',
    });
  };
  

  return (
    <motion.div
      className="fixed right-5 top-1/3 z-10 h-[180px] w-1 md:w-2 rounded-full bg-slate-600 ring-1 ring-slate-800 cursor-pointer"
      onClick={handleClick}
    >
      <motion.div
        className="rounded-full relative left-[-10px] md:left-[-11px] lg:left-[-12px]"
        style={{ y: scrollY }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AiFillBug
          color={iconColor}
          size={28}
          className="rotate-180 w-6 h-6 md:h-8 md:w-8 lg:h-8.5 lg:w-8.5"
          onMouseOver={() => setIconColor('#FF0000')}
          onMouseOut={() => setIconColor('#fff')}
        />
      </motion.div>
    </motion.div>
  );
};

export default CustomScrollbar;
