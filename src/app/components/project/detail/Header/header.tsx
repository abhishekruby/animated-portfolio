import React from 'react'
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GitBranch } from "lucide-react"


function Header() {
  return (
    <motion.header
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-primary text-primary-foreground py-12 px-4 md:px-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow-lg"
  >
    <div className="container mx-auto flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-zinc-100"
      >
        Project Aurora
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className="text-base md:text-lg max-w-2xl text-zinc-200"
      >
        A revolutionary AI-powered platform designed to transform the way businesses interact with their customers,
        enhancing engagement and driving growth through intelligent automation.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        className="flex gap-4 mt-8"
      >
        <motion.a
          href="https://github.com/abhishek-ruby/project-aurora"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="bg-zinc-200 rounded-lg shadow-lg text-neutral-800 text-base font-medium px-4 md:px-8 py-3 flex items-center gap-2 flex-wrap md:flex-nowrap"
        >
          <GitBranch size={32} className='w-5 h-5' />
          <span className="font-semibold">
            GitHub
          </span>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/posts/abhishek-ruby_project-aurora-revolutionizing-ai-activity-6983116515716453120-IT5Q"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="bg-blue-600 text-zinc-200 text-base font-medium px-4 md:px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 flex-wrap md:flex-nowrap"
        >
          <ExternalLinkIcon size={32} className='w-5 h-5' />
          Live Preview
        </motion.a>
      </motion.div>
    </div>
  </motion.header>
  )
}

export default Header