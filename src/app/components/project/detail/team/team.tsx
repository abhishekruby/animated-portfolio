import React from 'react'
import { motion } from 'framer-motion';
import Avatar from './avatar';
import AvatarFallback from './avatar-fallback';

function Team() {
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
                className="text-2xl font-semibold mb-4 text-zinc-200"
            >
                Team
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-4"
            >
                {[
                    { name: "Alex Johnson", role: "Project Lead", bg: 'bg-zinc-200' },
                    { name: "Samantha Lee", role: "AI Specialist", bg: 'bg-amber-200' },
                    { name: "Michael Chen", role: "Full-stack Developer", bg: 'bg-red-200' },
                    { name: "Emily Taylor", role: "UX Designer", bg: 'bg-orange-200' },
                ].map((member, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key={index}
                        className="flex items-center bg- gap-2"
                    >
                        <Avatar className={member.bg}>
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium text-zinc-300 ">{member.name}</p>
                            <p className="text-sm text-muted-foreground text-zinc-400">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Team