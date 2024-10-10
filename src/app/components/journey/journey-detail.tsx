import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import GreenTick from '../common/green-tick'
import { ExperienceListType } from './journey'

interface JourneyDetailProps{
    data: ExperienceListType
    index: number
}
function JourneyDetail({data, index}:JourneyDetailProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x : index % 2 === 0 ? 40: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: 0.5
            }}
            className="w-[90%] md:w-2/5"
        >
            {/* Logo */}
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
                onClick={() => window.open(data.url, '_blank')}
                className="relative flex items-center bg-slate-100 justify-center h-14 w-14 md:w-16 md:h-16 rounded-2xl shadow-md mb-5 md:mb-8 cursor-pointer"
            >
                <Image
                    src={data.companyLogo}
                    alt={data.companyName}
                    className="w-full h-auto object-cover transition-all duration-300"
                    width={500}
                    height={500}
                    style={{
                        borderRadius: '1rem',
                    }}
                />
            </motion.div>
            {/* JOB TITLE */}
            <div className="bg-slate-100 text-neutral-900 p-2 md:p-3 text-base md:text-2xl font-semibold rounded-b-lg rounded-s-lg mb-2 md:mb-5">
                {data.designation}
            </div>
            {/* JOB DESC */}
            {
                data.keyPoints.map((item, index:number) => {
                    return (
                        <div key={index} className="flex gap-2 md:gap-5 items-center justify-center p-2 md:p-3 text-sm md:text-lg italic text-slate-200">
                            {/* icon */}
                            <GreenTick />
                            {item.text}{" "}
                        </div>
                    )
                })
            }


            {/* JOB DATE */}
            <div className="p-2 md:p-3 text-cyan-500 text-sm md:text-lg font-semibold">
                {data.startDate} - {data.endDate}
            </div>
            {/* JOB COMPANY */}
            <a href={data.url} target="_blank" rel="noopener noreferrer" className="p-1 px-2 rounded text-neutral-900 bg-slate-100 text-sm md:text-lg font-semibold w-fit mt-2">
                {data.companyName}
            </a>
        </motion.div>
    )
}

export default JourneyDetail