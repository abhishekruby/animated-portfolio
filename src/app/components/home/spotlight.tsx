import React from 'react'
import { motion } from 'framer-motion'

import ThreeScene from '@components/home/three-scene'
import IntroBox from './intro-box'
import ScrollSvg from '../ui/scroll-svg'


function Spotlight() {
  return (
    <div id='home' className="h-full lg:h-screen py-28 flex flex-col gap-5 lg:flex-row-reverse p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity : 1}}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="h-96 lg:h-full lg:w-1/2"
      >
        <ThreeScene />
      </motion.div>
      {/* INTRO CONTAINER */}
      <div className="h-full lg:h-full lg:w-1/2 flex items-center justify-center">
        <IntroBox />
      </div>
      {/* Scroll Svg */}
      <ScrollSvg />
    </div>
  )
}

export default Spotlight
