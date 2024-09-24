import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

function Gallery() {
    return (
        <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2
                className="text-zinc-200 text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
                <span className="block text-center">Gallery of Work</span>
                <span className="block text-center text-lg font-light">A glimpse into my project</span>
            </motion.h2>
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8"
            >
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                        key={index}
                        className="w-full h-64"
                    >
                        <Image
                            height={600}
                            width={600}
                            src={`/experience1.png`}
                            alt={`Project Aurora image ${index}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Gallery