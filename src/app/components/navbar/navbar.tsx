"use client";

import Link from "next/link";
import NavLink from "./navLink";
import { motion } from "framer-motion";

import NavMenu from "./navMenu";


const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/project", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center gap-[15%] items-center py-4">
      {/* LINKS */}
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="hidden md:flex gap-3 ring-1 ring-slate-600 bg-slate-700 rounded-full p-4"
      >
        {links.map((link) => (
          <li key={link.title}>
            <NavLink link={link} />
          </li>
        ))}
      </motion.ul>
      {/* Button */}
      <motion.button
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="p-4 rounded-lg bg-teal-600 text-white hover:bg-teal-700 ring-1 ring-teal-400 font-medium text-sm"
      >
        <Link href="/project">Download CV</Link>
      </motion.button>
      {/* RESPONSIVE MENU */}
      <NavMenu links={links} />
    </nav>
  );
};

export default Navbar;