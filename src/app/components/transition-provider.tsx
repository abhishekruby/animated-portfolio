'use client'

import { ReactNode, useRef } from 'react';
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import CustomScrollbar from './ui/custom-scroll-bar';


const TransitionProvider = ({ children }: { children: ReactNode }) => {

  const ScrollbarRef = useRef(null);

  return (
    <AnimatePresence mode="wait">
      <div
        className="w-full h-auto bg-slate-900 relative"
      >
        <motion.div
          className="h-screen w-screen fixed bg-slate-800 rounded-b-[100px] z-20"
          animate={{ height: "0vh" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          className="h-screen w-screen fixed bottom-0 bg-slate-800 rounded-b-[60px] z-20"
          animate={{ height: "0vh" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <CustomScrollbar ScrollbarRef={ScrollbarRef} />
        <div ref={ScrollbarRef} className="h-auto">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;