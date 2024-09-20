import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TwitterIcon, LinkedinIcon, GithubIcon } from "next-share";

function SocialIcon({className}:{className:string}) {
  const size = 30

  return (
    <div className="flex items-center justify-start gap-5 md:gap-8 w-full">
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <GithubIcon size={size} round className={className} />
      </Link>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <LinkedinIcon size={size} round className={className} />
      </Link>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <TwitterIcon size={size} round className={className} />
      </Link>
    </motion.div>
  </div>
  )
}

export default SocialIcon

