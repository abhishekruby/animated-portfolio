import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


function IconPointer() {
    return (

        <div className='absolute top-5 left-[90%] md:left-1/2 w-1 h-fit rounded'>
            <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                }}
                whileHover={{
                    scale: 1.05,
                    transition: {
                        duration: 0.2,
                        ease: 'easeInOut',
                    },
                }}
                className="relative left-[-2px] md:left-[-20px] flex items-center bg-slate-100 ring-4 ring-cyan-600 justify-center w-9 h-9 md:w-12 md:h-12 rounded-full overflow-hidden shadow-md"
            >
                <Image
                    src="/coding.png"
                    alt="pointer-icon"
                    className="w-full h-auto object-cover transition-all duration-300"
                    width={500}
                    height={500}
                    style={{
                        borderRadius: '1rem',
                    }}
                />
            </motion.div>
        </div>
    )
}

export default IconPointer