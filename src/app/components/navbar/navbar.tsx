"use client";

import { useState, useEffect } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";


const links = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "project", title: "Projects" },
  { id: "contribution", title: "Contribution" },
  { id: "contact", title: "Contact" },
];

const Navbar = ({setShowNavbar}:any) => {
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false); // Scroll down - hide navbar
    } else {
      setShowNavbar(true); // Scroll up - show navbar
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
      <nav className="w-full flex justify-center gap-[15%] items-center py-4">
        {/* LINKS */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="flex gap-3 ring-1 ring-slate-600 bg-slate-700 rounded-full p-4"
        >
          {links.map((link) => (
            <li key={link.title}>
              <NavLink link={link} />
            </li>
          ))}
        </motion.ul>
      </nav>
  );
};

export default Navbar;
