"use client";

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import SocialIcon from "../common/social-icons";
import { SparklesCore } from "../ui/sparkles";

export default function Component() {
  const links = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "project", title: "Projects" },
    { id: "contribution", title: "Contribution" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-slate-800 py-12 text-zinc-200 bg-opacity-50 rounded-tl-xl rounded-tr-xl relative sm:px-12 md:px-20 lg:px-40 xl:px-48 overflow-hidden"
    >
      <SparklesCore className="absolute w-full h-full left-0 top-0 rounded-tl-xl rounded-tr-xl" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto flex flex-col items-center justify-between gap-8 md:flex-row relative z-20 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className="flex flex-col items-center gap-2 md:items-start sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            activeClass="active bg-slate-200 text-neutral-900"
            className="flex gap-1 md:gap-2 items-center justify-center rounded-lg p-2 text-neutral-200 hover:bg-slate-200 hover:bg-opacity-60 hover:text-slate-900"
          >
            <MountainIcon className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-xl md:text-2xl font-bold">Abhishek Ruby</span>
          </Link>
          <p className="text-sm md:text-base font-semibold text-cyan-500">&copy; 2024 All rights reserved.</p>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 md:flex-row sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5"
        >
          {links.map((link,index) => (
            <Link
              key={index}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active underline"
              className="text-base md:text-lg text-zinc-300 font-medium hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 whileInView-fade-in-up sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <SocialIcon className={'w-10 h-10 md:w-12 md:h-12'} />
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

