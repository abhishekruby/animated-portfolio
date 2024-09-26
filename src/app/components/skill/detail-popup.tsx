import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'


interface DetailProps{
    selectedSkill : {
        name: string
        level: number
        category: string
    }
    setSelectedSkill : React.Dispatch<React.SetStateAction<DetailProps['selectedSkill'] | null>>
}

function DetailPopUp({selectedSkill,setSelectedSkill}:DetailProps) {
  return (
    <AnimatePresence>
    {selectedSkill && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed z-50 inset-0 bg-neutral-900 bg-opacity-50 flex items-center justify-center p-4"
        onClick={() => {
          setSelectedSkill(null),
          document.body.style.overflow = 'auto';
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-gray-800 p-8 rounded-xl max-w-md w-full"
          onClick={e => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold text-white mb-4">{selectedSkill.name}</h3>
          <p className="text-gray-300 mb-4">
            Proficiency: {selectedSkill.level}% - {selectedSkill.category}
          </p>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            onClick={() => {
              setSelectedSkill(null)
              document.body.style.overflow = 'auto';
            }}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  )
}

export default DetailPopUp