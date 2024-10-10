import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const ThreeScene = lazy(() => import('@components/home/three-scene'))
import IntroBox from './intro-box'
import ScrollSvg from '../ui/scroll-svg'
import SquareBounceLoader from '../loader/square-bounce-loader'


function Spotlight() {
  return (
    <div id='home' className="h-full lg:h-screen py-28 flex flex-col gap-5 lg:flex-row-reverse p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="h-96 lg:h-full lg:w-1/2"
      >
        <Suspense fallback={<SquareBounceLoader />}>
          <ThreeScene />
        </Suspense>
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
