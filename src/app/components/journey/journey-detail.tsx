import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import GreenTick from '../common/green-tick'


function JourneyDetail() {
    return (
        <div className="w-2/5">
            {/* Logo */}
            <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
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
                className="relative flex items-center bg-slate-100 justify-center w-16 h-16 rounded-2xl overflow-hidden shadow-md mb-8"
            >
                <Image
                    src="/amazon.png"
                    alt="company-logo"
                    className="w-full h-auto object-cover transition-all duration-300"
                    width={500}
                    height={500}
                    style={{
                        borderRadius: '1rem',
                    }}
                />
            </motion.div>
            {/* JOB TITLE */}
            <div className="bg-slate-100 text-neutral-900 p-3 text-2xl font-semibold rounded-b-lg rounded-s-lg mb-5">
                Senior JavaScript Engineer
            </div>
            {/* JOB DESC */}
            {
                Array(3).fill(0).map((_, index) => {
                    return (
                        <div key={index} className="flex  gap-5 items-center justify-center p-3 text-lg italic text-slate-200">
                            {/* icon */}
                            <GreenTick />
                            I led web development, offering expertise in JavaScript
                            frameworks.{" "}
                        </div>
                    )
                })
            }


            {/* JOB DATE */}
            <div className="p-3 text-cyan-500 text-lg font-semibold">
                2024 - Present
            </div>
            {/* JOB COMPANY */}
            <div className="p-1 px-2 rounded text-neutral-900 bg-slate-100 text-lg font-semibold w-fit mt-2">
                Apple
            </div>
        </div>

    )
}

export default JourneyDetail