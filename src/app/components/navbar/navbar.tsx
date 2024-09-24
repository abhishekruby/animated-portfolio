"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./navLink";

const links = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "project", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      setIsScrollingDown(isScrollingDown);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {!isScrollingDown && (
        <motion.div
          key="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-5 z-50 w-full flex items-center"
        >
          <nav className="w-full flex justify-center gap-[15%] items-center py-4 lg:gap-12 lg:px-20 xl:gap-24 xl:px-48">
            {/* LINKS */}
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex cursor-pointer gap-2 ring-1 ring-slate-600 bg-slate-700 rounded-full p-2 md:p-3 lg:p-4 justify-around w-fit"
            >
              {links.map((link) => (
                <li key={link.title}>
                  <NavLink link={link} />
                </li>
              ))}
            </motion.ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;

