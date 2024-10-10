import React from 'react'
import { motion } from 'framer-motion'

interface SkillCategoryProps {
  categories: string[]
  setHoveredCategory: React.Dispatch<React.SetStateAction<string | null>>
}
function SkillCategory({ categories, setHoveredCategory }: SkillCategoryProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category: string) => (
        <motion.button
          key={category}
          onMouseEnter={() => setHoveredCategory(category)}
          onMouseLeave={() => setHoveredCategory(null)}
          className="px-6 py-3 rounded-full shadow-2xl text-sm mb-4 font-medium transition-all duration-300 bg-gradient-to-br from-zinc-100 to-zinc-400 text-neutral-900 hover:bg-gray-300 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-zinc-600 w-full"
      />
    </div>
  )
}

export default SkillCategory
