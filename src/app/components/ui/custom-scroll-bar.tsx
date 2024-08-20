"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillBug } from "react-icons/ai";

const CustomScrollbar = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [iconColor, setIconColor] = useState('#fff');

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollTop / docHeight;
    const scrollbarHeight = 180 - 30; // Height of the scrollbar container minus 30
    const thumbHeight = 24; // Height of the scrollbar thumb

    // Calculate the translateY value based on scroll progress and the height of the container minus the height of the thumb
    const translateY = scrollProgress * (scrollbarHeight - thumbHeight);
    setScrollYPosition(translateY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed right-5 top-1/3 z-10 h-[180px] w-2 rounded-full bg-slate-600 ring-1 ring-slate-800"
    >
      <motion.div
        className="rounded-full relative left-[-10px] hover:text-red-700"
        style={{ translateY: `${scrollYPosition}%` }}
        initial={{ y: 0 }}
        animate={{ y: scrollYPosition }}
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
