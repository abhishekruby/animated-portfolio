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
      className="bg-slate-800 py-12 text-zinc-200 bg-opacity-50 rounded-tl-xl rounded-tr-xl relative"
    >
      <SparklesCore className="absolute w-full h-full top-0 rounded-tl-xl rounded-tr-xl" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto flex flex-col items-center justify-between gap-8 md:flex-row relative z-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className="flex flex-col items-center gap-2 md:items-start"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            activeClass="active bg-slate-200 text-neutral-900"
            className="flex gap-2 items-center justify-center rounded-lg p-2 text-neutral-200 hover:bg-slate-200 hover:bg-opacity-60 hover:text-slate-900"
          >
            <MountainIcon className="h-6 w-6" />
            <span className="text-2xl font-bold">Abhishek Ruby</span>
          </Link>
          <p className="text-base font-semibold text-cyan-500">&copy; 2024 All rights reserved.</p>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className="flex flex-col items-center gap-4 md:flex-row">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active underline"
              className="text-lg text-zinc-300 font-medium hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 whileInView-fade-in-up"
        >
          <SocialIcon size={42} />
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
      width="24"
      height="24"
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
