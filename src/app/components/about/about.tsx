import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

import ProfileImage from './profile-image'
import DetailBox from './detail-box'
import HeadText from '../common/head-text'
import ScrollSvg from '../ui/scroll-svg'
const Skill = lazy(() => import("../skill/skill"));
const Journey = lazy(() => import("../journey/journey"));


function About() {
  return (
    <div id='about'>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, ease: 'easeInOut' }}
        className='h-[105vh] px-40 py-40 relative'
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.2 }}
          className='flex justify-start items-center h-40'
        >
          <HeadText text='Get to Know' highlight='Me' />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.4 }}
          className='flex justify-center items-center h-full w-full pt-16'
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.6 }}
            className='flex justify-center items-start h-full w-full'
          >
            <ProfileImage />
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
            className='flex justify-center items-start h-full w-full'
          >
            <DetailBox />
          </motion.div>
        </motion.div>
        {/* Scroll Svg */}
        <ScrollSvg />
      </motion.div>

      {/* Skills */}
      <Suspense fallback={<div>Loading Skills...</div>}>
        <Skill />
      </Suspense>

      {/* Journey */}
      <Suspense fallback={<div>Loading Journey...</div>}>
        <Journey />
      </Suspense>
    </div>
  )
}

export default About