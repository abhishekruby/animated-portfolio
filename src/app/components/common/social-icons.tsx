import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TwitterIcon, LinkedinIcon, GithubIcon } from "next-share";


function SocialIcon() {
  return (
    <div className="flex items-center justify-start gap-8 w-full">
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <GithubIcon size={55} round />
      </Link>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <LinkedinIcon size={50} round />
      </Link>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <TwitterIcon size={50} round />
      </Link>
    </motion.div>
  </div>
  )
}

export default SocialIcon