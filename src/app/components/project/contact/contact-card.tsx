import React from 'react'
import { motion } from 'framer-motion';

function ContactCard() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-200 p-8 rounded-lg text-center"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-semibold mb-4"
                >
                    Interested in Project Aurora?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    Get in touch with our team to learn more about how we can transform your business.
                </motion.p>
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    href="/?scroll=contact"
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 text-sm bg-neutral-800 text-zinc-200"
                >
                    Contact Us
                </motion.a>
            </motion.div>
        </motion.section>
    )
}

export default ContactCard