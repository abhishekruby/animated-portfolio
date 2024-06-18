"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar/navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-full h-auto bg-[#1F2937]"
      >
        <motion.div
          className="h-screen w-screen fixed bg-[#fff] rounded-b-[100px] z-10"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-[#000] text-5xl md:text-6xl xl:text-8xl cursor-default z-30 w-fit h-fit"
          initial={{ opacity: 1 ,display :'block'}}
          animate={{ opacity: 0 ,display : 'none'}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName !== '/' ? pathName[1].toUpperCase() + pathName.substring(2) :""}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-[#fff] rounded-t-[100px] bottom-0 z-20"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-[10vh] sticky top-0 bg-[#1F2937] z-[2] w-full">
          <Navbar />
        </div>
        <div className="h-auto">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
