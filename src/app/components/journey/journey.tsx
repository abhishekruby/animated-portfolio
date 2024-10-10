'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import HeadText from '../common/head-text';
import ScrollSvg from '../ui/scroll-svg';
import JourneyDetail from './journey-detail';
import IconPointer from './icon-pointer';
import { useAppSelector } from '../../store/hooks';

function Journey() {
    const PathRef = useRef<HTMLDivElement>(null);
    const [pathRefHeight, setPathRefHeight] = useState(0);

    // Get scroll progress
    const { scrollYProgress } = useScroll({
        target: PathRef,
        offset: ['start start', 'end end'],
    });

    const scrollY = useTransform(scrollYProgress, [0, 1], [0, pathRefHeight * 2 - 210]);

    useEffect(() => {
        if (PathRef.current) {
            setPathRefHeight(PathRef.current.getBoundingClientRect().height);
        }
    }, [PathRef]);
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
            >
                {Array(4).fill(" ").map((value, key) => {
                    return (
                        <div
                            className={`flex justify-start ${key % 2 === 0 ? "md:justify-start" : "md:justify-end"} items-center relative z-10 mb-12 md:mb-0`}
                            key={key}
                        >
                            <JourneyDetail journeyKey={key} />
                            <IconPointer />
                        </div>
                    )
                })}

                {/* Static Scroll bar */}
                <div ref={PathRef} className="absolute top-10 md:top-28 left-[90%] md:left-1/2 w-1 h-[90%] bg-slate-100 rounded-full overflow-hidden"></div>

                {/* Moving Scroll Thumb */}
                <motion.div
                    className="absolute top-10 md:top-28 left-[90%] md:left-1/2 w-1 rounded-full"
                    style={{
                        y: scrollY,
                        height: "10%",
                        background: "linear-gradient(180deg, #06B6D4 0%, #3B82F6 100%)",
                        boxShadow: '0px 0px 15px 5px rgba(6, 182, 212, 0.4), 0px 0px 30px 10px rgba(59, 130, 246, 0.3)',
                        clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
                    }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                        delay: 0.2,
                        y: {
                            duration: 0.5,
                            ease: 'easeInOut',
                        },
                    }}
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

