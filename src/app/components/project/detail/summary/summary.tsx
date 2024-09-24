import React from 'react'
import { motion } from 'framer-motion';

import Card from './card';
import CardContent from './card-content';


function Summary() {
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
                className="text-2xl text-zinc-200 font-semibold mb-4"
            >
                Summary Quotes
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-2"
            >
                {[
                    {
                        quote: "Project Aurora is set to revolutionize customer engagement in the digital age.",
                        author: "Tech Innovators Magazine",
                    },
                    {
                        quote: "The potential impact of this AI platform on business efficiency is immense.",
                        author: "Global Business Review",
                    },
                ].map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key={index}
                    >
                        <Card>
                            <CardContent className="">
                                <blockquote className="text-lg text-zinc-300 font-medium italic mb-2">&quot; {item.quote} &quot;</blockquote>
                                <p className="text-base text-muted-foreground text-amber-500">- {item.author}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Summary