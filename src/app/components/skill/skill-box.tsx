import React from 'react'
import { motion } from 'framer-motion'
import SkillIcon from './skill-icon'
import GlowingLine from '../common/glowing-line'

function SkillBox({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="w-1/2 h-fit p-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
        className="w-full p-4 text-center"
      >
        <h2 className="text-4xl text-slate-200 font-medium">{title}</h2>
      </motion.div>
      <GlowingLine />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.6 }}
        className="p-5 px-14 flex flex-wrap gap-2 items-center justify-center"
      >
        {
          Array(10).fill("").map((value, key) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeInOut', delay: key * 0.1 }}
                key={key}
              >
                <SkillIcon />
              </motion.div>
            )
          })
        }
      </motion.div>
    </motion.div>
  )
}

export default SkillBox