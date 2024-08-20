import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
    className: string;
    link: string;
    text: string;
}
function Button({ className, link,text }: ButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className={className}
        >
            <Link href={link}>{text}</Link>
        </motion.button>
    )
}

export default Button