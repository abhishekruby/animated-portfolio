"use client";

import { ReactNode, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Navbar from "@components/navbar/navbar";
import CustomScrollbar from './ui/custom-scroll-bar';


const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-full h-auto bg-slate-900 relative"
      >
        <motion.div
          className="h-screen w-screen fixed bg-slate-800 rounded-b-[100px] z-20"
          animate={{ height: "0vh" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          className="h-screen w-screen fixed bottom-0 bg-slate-800 rounded-b-[100px] z-20"
          animate={{ height: "0vh" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <CustomScrollbar/>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: showNavbar ? 0 : -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-5 z-10 w-full flex items-center"
        >
          <Navbar setShowNavbar={setShowNavbar} />
        </motion.div>
        <div className="h-auto">
          {children}
        </div>
      </div>

    </AnimatePresence >
  );
};

export default TransitionProvider;
