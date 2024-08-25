'use client'
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import HeadText from '../common/head-text';
import ScrollSvg from '../ui/scroll-svg';
import JourneyDetail from './journey-detail';
import IconPointer from './icon-pointer';

function Journey() {
    const JourneyRef = useRef(null);

    // Get scroll progress
    const { scrollYProgress } = useScroll({
        target: JourneyRef,
        offset: ['start start', 'end end'],
    });

    // Calculate the blue thumb's position based on scroll progress
    // Map the range to cover the white bar height (90% of the container)
    const scrollY = useTransform(scrollYProgress, [0, 1], ['0%', '1700%']);

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='px-40 py-40 relative'
        >
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                className='flex justify-start items-center h-40 mb-8'
            >
                <HeadText text='The Pursuit of' highlight='Growth' />
            </motion.div>
            <motion.div
                ref={JourneyRef}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
                className="h-full rounded-2xl bg-slate-800 bg-opacity-50 p-20 relative overflow-y-scroll"
            >
                {Array(4).fill("").map((value, key) => (
                    <div
                        className={`flex ${key % 2 === 0 ? "justify-start" : "justify-end"} items-center relative z-10`}
                        key={key}
                    >
                        <JourneyDetail />
                        <IconPointer />
                    </div>
                ))}

                {/* Static Scroll bar */}
                <div className="absolute top-28 left-1/2 w-1 h-[90%] bg-slate-100 rounded-full">
                
                </div>

                {/* Moving Scroll Thumb */}
                <motion.div
                    className="absolute top-28 left-1/2 w-1 bg-[#06B6D4] rounded-full"
                    style={{ y: scrollY, height: "5%", boxShadow: '0px 0px 20px 20px rgba(6, 182, 212, 0.2)' }}
                    transition={{ duration: 2, ease: 'easeInOut', delay: 0.4 }}
                />
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
