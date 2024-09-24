import React from 'react'
import { motion } from 'framer-motion';
import { Clock, Users, Zap } from "lucide-react"

function Insight() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl text-zinc-200 font-semibold mb-4"
            >
                Insights
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid gap-4 md:grid-cols-5"
            >
                {[
                    {
                        icon: <Clock className="h-5 w-5 text-primary" />,
                        title: 'Duration',
                        description: '18 months',
                    },
                    {
                        icon: <Users className="h-5 w-5 text-primary" />,
                        title: 'Team Size',
                        description: '12 members',
                    },
                    {
                        icon: <Zap className="h-5 w-5 text-primary" />,
                        title: 'Technology',
                        description: 'AI, ML, Cloud',
                    },
                ].map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key={index}
                        className="flex items-center bg-zinc-200 p-4 rounded-lg"
                    >
                        {item.icon}
                        <div className="ml-4">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="font-medium"
                            >
                                {item.title}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-sm text-muted-foreground"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Insight