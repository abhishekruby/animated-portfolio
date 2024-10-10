'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SkillObject } from './skill'

interface SkillBoxProps {
  filteredSkills: SkillObject[];
  setSelectedSkill: (skill: SkillObject) => void;
}

const SkillBox: React.FC<SkillBoxProps> = ({ filteredSkills, setSelectedSkill }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence>
        {filteredSkills.map(skill => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => {
              setSelectedSkill(skill);
              document.body.style.overflow = 'hidden';
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.progress}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{skill.category.name}</span>
              <span className="text-sm font-medium text-blue-400">{skill.progress}%</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default SkillBox