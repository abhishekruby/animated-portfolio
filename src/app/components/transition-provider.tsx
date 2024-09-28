'use client'

import { ReactNode, useEffect, useRef, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import CustomScrollbar from './ui/custom-scroll-bar';
import HamsterWheelLoader from "@components/loader/hamster-wheel-loader";

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const ScrollbarRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate a 2-second delay before loading finishes
  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 2000);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <HamsterWheelLoader />
      ) : (
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
      )}
    </AnimatePresence>
  );
};

export default TransitionProvider;