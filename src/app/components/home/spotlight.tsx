import React from 'react'
import { motion } from 'framer-motion'

import ThreeScene from '@components/home/three-scene'
import IntroBox from './intro-box'
import ScrollSvg from '../ui/scroll-svg'


function Spotlight() {
  return (
    <div id='home' className="h-[100vh] flex flex-col lg:flex-row-reverse px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 relative">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity : 1}}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="h-1/2 lg:h-full lg:w-1/2"
    >
      <ThreeScene />
    </motion.div>
    {/* INTRO CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
      <IntroBox />
    </div>
      {/* Scroll Svg */}
      <ScrollSvg/>
  </div>
  )
}

export default Spotlight