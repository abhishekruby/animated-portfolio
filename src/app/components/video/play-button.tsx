"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PlayIcon } from "lucide-react"

export default function PlayButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-full border border-primary"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1.5 + index * 0.3, opacity: [0, 0.5, 0] }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
      <motion.button
        className="relative w-16 h-16 rounded-full bg-zinc-100 text-primary-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <PlayIcon className="w-8 h-8 mx-auto" />
        </motion.div>
      </motion.button>
    </div>
  )
}