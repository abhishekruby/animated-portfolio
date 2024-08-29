import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TwitterIcon, LinkedinIcon, GithubIcon } from "next-share";


function SocialIcon({size=50}:{size:number}) {
  return (
    <div className="flex items-center justify-start gap-8 w-full">
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <GithubIcon size={size+5} round />
      </Link>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <LinkedinIcon size={size} round />
      </Link>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <TwitterIcon size={size} round />
      </Link>
    </motion.div>
  </div>
  )
}

export default SocialIcon