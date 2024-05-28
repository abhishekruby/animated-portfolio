"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName,'++')
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-[#1F2937]"
      >
        <motion.div
          className="h-screen w-screen fixed bg-[#FFFFFF] rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-[#000] text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName !== '/' ? pathName[1].toUpperCase() + pathName.substring(2) :"Home"}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-[#FFFFFF] rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-10rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
