import React, { useState } from 'react'
import { motion } from 'framer-motion';

import ScrollSvg from '../ui/scroll-svg';
import HeadText from '../common/head-text';
import Navbar from './navbar';
import ProjectCard from './project-card';

function Project() {

    return (
        <motion.div
            id='project'
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='h-auto px-40 py-40 relative'
        >
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                className='flex justify-start items-center h-40'
            >
                <HeadText text='Technical ' highlight='Projects' />
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
                className='flex flex-col gap-24 justify-center items-center h-full w-full pt-16'
            >
                <Navbar/>
                <motion.div className='w-full flex flex-wrap gap-6 gap-y-20'>
                    {
                        Array(5).fill("").map((value,index)=>{
                            return (

                                <ProjectCard key={index}/>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
            {/* Scroll Svg */}
            <ScrollSvg />
        </motion.div>
    )
}

export default Project