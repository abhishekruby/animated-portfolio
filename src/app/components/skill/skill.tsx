import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import HeadText from '../common/head-text'
import ScrollSvg from '../ui/scroll-svg'
import SkillBox from './skill-box'

function Skill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='px-40 py-40 relative'
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className='flex justify-start items-center h-40 mb-8'
      >
        <HeadText text='Career' highlight='Essentials' />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        className="flex flex-wrap h-full rounded-2xl bg-slate-800 bg-opacity-50"
      >
        <SkillBox title={"Front-End Tools"}/>
        <SkillBox title={"Back-End Tools"}/>
        <SkillBox title={"Devops Tools"}/>
        <SkillBox title={"Other Tools"}/>
      </motion.div>
      {/* Scroll Svg */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
      >
        <ScrollSvg />
      </motion.div>
    </motion.div>
  )
}

export default Skill