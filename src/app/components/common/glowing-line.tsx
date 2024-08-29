import React from 'react'
import { motion } from 'framer-motion'

function GlowingLine({className="h-0.5 w-1/2"}:{className: string}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
            className={"line rounded-full bg-neutral-500 m-auto relative overflow-hidden "+className}
        >
            <motion.div
                className="absolute left-0 h-full w-5 bg-white rounded-full"
                animate={{ x: 350 }}
                transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                style={{ boxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.8)" }} // Glowing effect
            />
        </motion.div>
    )
}

export default GlowingLine