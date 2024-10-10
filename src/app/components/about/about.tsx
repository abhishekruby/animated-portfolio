import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

import ProfileImage from './profile-image'
import DetailBox from './detail-box'
import HeadText from '../common/head-text'
import ScrollSvg from '../ui/scroll-svg'
import SquareBounceLoader from '../loader/square-bounce-loader';

const Skill = lazy(() => import("../skill/skill"));
const Journey = lazy(() => import("../journey/journey"));


function About() {
  return (
    <div id='about'>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, ease: 'easeInOut' }}
        className='h-full lg:h-screen px-4 py-24 md:py-20 md:px-20 xl:px-36 xl:py-36 relative'
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.2 }}
          className='flex justify-start items-center md:flex-row md:h-40'
        >
          <HeadText text='Get to Know' highlight='Me' />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.4 }}
          className='flex flex-col justify-center items-start h-fit w-full pt-0 md:pt-16 lg:flex-row md:justify-start gap-16'
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.6 }}
            className='flex justify-center items-start h-2/3 w-full lg:w-1/2'
          >
            <ProfileImage />
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
            className='flex justify-center items-start h-2/3 w-full lg:w-1/2'
          >
            <DetailBox />
          </motion.div>
        </motion.div>
        {/* Scroll Svg */}
        <ScrollSvg />
      </motion.div>

      {/* Skills */}
      <Suspense fallback={<SquareBounceLoader/>}>
        <Skill />
      </Suspense>

      {/* Journey */}
      <Suspense fallback={<SquareBounceLoader/>}>
        <Journey />
      </Suspense>
    </div>
  )
}

export default About
