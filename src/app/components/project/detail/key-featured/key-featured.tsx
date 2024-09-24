import React from 'react'
import { motion } from 'framer-motion';
import { Zap } from "lucide-react"

function KeyFeature() {
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
                className="text-2xl font-semibold mb-5 text-zinc-200">Key Features</motion.h2>
            <ul className="grid gap-4 md:grid-cols-2">
                {[
                    "Advanced natural language processing for human-like interactions",
                    "Real-time sentiment analysis for improved customer satisfaction",
                    "Seamless integration with existing CRM systems",
                    "Customizable AI models tailored to specific industry needs",
                    "Multi-language support for global businesses",
                    "Comprehensive analytics dashboard for actionable insights",
                ].map((feature, index) => (
                    <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                        key={index} className="flex items-start">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                        >
                            <Zap className="mr-2 h-5 w-5 text-primary text-amber-400" />
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: '100%' }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                            className='text-zinc-300 text-base md:text-lg'
                        >
                            {feature}
                        </motion.span>
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    )
}

export default KeyFeature