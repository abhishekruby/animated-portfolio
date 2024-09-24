import React from 'react'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  value: number
  className?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, className }) => {
  return (
    <motion.div
      className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary ${className}`}
      initial={{ width: 0 }}
      animate={{ width: `${value || 0}%` }}
      transition={{ duration: 0.1 }}
    >
      <motion.div
        className="h-full w-full flex-1 bg-primary transition-all bg-cyan-500"
        initial={{ width: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        whileInView={{ width: `${value || 0}%` }}
      />
    </motion.div>
  )
}

export default ProgressBar
