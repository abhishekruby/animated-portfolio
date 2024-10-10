'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import HeadText from '../common/head-text';
import ScrollSvg from '../ui/scroll-svg';
import JourneyDetail from './journey-detail';
import { useAppSelector } from '../../store/hooks';


export interface ExperienceListType {
    id: string
    companyLogo: string
    companyName: string
    designation: string
    keyPoints: {
        id: number
        text: string
    }[]
    url: string
    startDate: string
    endDate: string
}


function Journey() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const { experiences } = useAppSelector((state: any) => state.data?.profileData?.data);
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='h-full px-4 py-24 md:py-20 md:px-20 xl:px-36 xl:py-36 relative'
        >
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                className='flex justify-start items-center md:h-40 mb-2 md:mb-8'
            >
                <HeadText text='The Pursuit of' highlight='Growth' />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
                className="h-full rounded-2xl bg-slate-800 bg-opacity-50 p-5 md:p-10 lg:p-20 relative"
                ref={containerRef}
            >
                {experiences.map((data: ExperienceListType, key: number) => {
                    return (
                        <div
                            className={`flex justify-start ${key % 2 === 0 ? "md:justify-start" : "md:justify-end"} items-center relative z-10 mb-12 md:mb-0`}
                            key={key}
                        >
                            <JourneyDetail data={data} index={key} length={experiences.length} scrollYProgress={scrollYProgress} />
                        </div>
                    )
                })}

                {/* line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 md:block hidden" />
                <motion.div
                    className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-500 transform -translate-x-1/2 origin-top md:block hidden"
                    style={{ scaleY, opacity: useTransform(scaleY, [0, 0.9], [0, 1]) }}
                />
                <motion.div
                    className="absolute left-1/2 w-6 h-6 bg-purple-500 rounded-full transform -translate-x-1/2 z-10 md:block hidden"
                    style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', 'calc(100% - 24px)']) }}
                >
                    <motion.div
                        className="w-full h-full rounded-full bg-purple-300"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>

            </motion.div>
            {/* Scroll Svg */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
            >
                <ScrollSvg />
            </motion.div>
        </motion.div>
    );
}

export default Journey;

