import React from 'react'
import { motion } from 'framer-motion';

import ProfileImage from './profile-image'
import DetailBox from './detail-box'
import HeadText from '../common/head-text'
import ScrollSvg from '../ui/scroll-svg'


function About() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='h-[125vh] px-40 py-40 relative'
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className='flex justify-start items-center h-40'
      >
        <HeadText text='Get to Know' highlight='Me' />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        className='flex justify-center items-center h-4/5 w-full'
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
          className='flex justify-center items-center h-full w-full'
        >
          <ProfileImage />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
          className='flex justify-center items-center h-full w-full'
        >
          <DetailBox />
        </motion.div>
      </motion.div>
      {/* Scroll Svg */}
      <ScrollSvg />
    </motion.div>
  )
}

export default About