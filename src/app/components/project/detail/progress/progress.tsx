import React from 'react'
import { motion } from 'framer-motion';

import ProgressBar from '@components/common/progress-bar'

function Progress() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                className="text-2xl font-semibold mb-5 text-zinc-200"
            >
                Project Progress
            </motion.h2>
            <ProgressBar value={75} className="w-full bg-neutral-500" />
            <motion.p className="text-sm md:text-lg mt-2 text-zinc-300">75% Complete</motion.p>
        </motion.section>
    )
}

export default Progress