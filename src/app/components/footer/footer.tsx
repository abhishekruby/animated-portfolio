"use client"

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import SocialIcon from "../common/social-icons"
import { SparklesCore } from "../ui/sparkles"

export default function Footer() {
  const links = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-b from-slate-800 to-slate-900 text-zinc-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
            >
              <MountainIcon className="h-8 w-8" />
              <span>Abhishek Ruby</span>
            </Link>
            <p className="mt-2 text-sm text-zinc-400">&copy; 2024 All rights reserved.</p>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:my-auto"
          >
            {links.map((link, index) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-100}
                spy={true}
                activeClass="text-cyan-400"
                className="cursor-pointer text-zinc-300 hover:text-white transition-colors duration-300"
              >
                {link.title}
              </Link>
            ))}
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <SocialIcon className="w-9 h-9 text-zinc-400 hover:text-cyan-400 transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-zinc-700 text-center text-sm text-zinc-500"
        >
          <p>Designed and built with passion by <span className='text-cyan-500'>Abhishek Ruby</span></p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

function MountainIcon(props:any) {
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
  )
}