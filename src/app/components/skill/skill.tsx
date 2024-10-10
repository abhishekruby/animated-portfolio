import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import HeadText from '../common/head-text'
import SkillCategory from './skill-category'
import ScrollSvg from '../ui/scroll-svg'
import DetailPopUp from './detail-popup'
import SkillBox from './skill-box'
import { useAppSelector } from '@store/hooks'


interface SkillObject {
  id: string
  name: string
  progress: number
  priority: number
  category: {
    id: number
    name: string
    priority: number
  }
}


function Skill() {
  const [selectedSkill, setSelectedSkill] = useState<any | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)


  const profileData = useAppSelector((state: any) => state.data?.profileData?.data);
  const { skills } = profileData

  const categories: string[] = Array.from(new Set(skills.map((skill: SkillObject) => skill.category.name)))
  const filteredSkills = hoveredCategory
    ? skills.filter((skill: SkillObject) => skill.category.name === hoveredCategory)
    : skills

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='h-full px-4 py-24 md:py-20 md:px-20 xl:px-36 xl:py-36 relative'
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className='flex justify-start items-center md:h-40 mb-2 md:mb-8'
      >
        <HeadText text='Career' highlight='Essentials' />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        className="w-full h-full rounded-2xl bg-slate-800 bg-opacity-50"
      >
        <div className="w-full max-w-full mx-auto p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-2xl">
          <SkillCategory categories={categories} setHoveredCategory={setHoveredCategory} />
          <SkillBox filteredSkills={filteredSkills} setSelectedSkill={setSelectedSkill} />
          <DetailPopUp selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        </div>
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
