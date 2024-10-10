import React from 'react'
import Image from 'next/image'
import { motion, useTransform } from 'framer-motion'
import GreenTick from '../common/green-tick'
import { ExperienceListType } from './journey'

interface JourneyDetailProps {
    data: ExperienceListType
    index: number
    length: number
    scrollYProgress: any
}
function JourneyDetail({ data, index, length, scrollYProgress }: JourneyDetailProps) {
    return (
        <motion.div
            key={index}
            className={`mb-16 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-8' : 'md:ml-[50%] md:pl-8'} relative`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeInOut' }}
        >
            <motion.div
                className="absolute top-0 w-4 h-4 bg-purple-500 rounded-full z-10 md:block hidden"
                style={{
                    left: index % 2 === 0 ? 'calc(100% - 8px)' : '-8px',
                    boxShadow: useTransform(
                        scrollYProgress,
                        [0, (index + 0.5) / length],
                        ["0px 0px 0px 0px rgba(168, 85, 247, 0)", "0px 0px 20px 5px rgba(168, 85, 247, 0.5)"]
                    ),
                }}
            />
            <motion.div
                className="bg-slate-900 rounded-xl p-6 md:p-8 md:py-10 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="flex items-center mb-4">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="mr-4 bg-zinc-200 rounded-full p-1 overflow-hidden"
                    >
                        <Image
                            src={data.companyLogo}
                            alt={`${data.companyName} logo`}
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                    </motion.div>
                    <div>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            {data.designation}
                        </h3>
                        <h4 className="text-xl text-purple-300">{data.companyName}</h4>
                        <p className="text-gray-400">{data.startDate} - {data.endDate}</p>
                    </div>
                </div>
                <ul className="space-y-5">
                    {data.keyPoints.map((item, idx) => (
                        <motion.li
                            key={idx}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
                        >
                            <svg className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className='text-zinc-200'>{item.text}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>

    )
}

export default JourneyDetail