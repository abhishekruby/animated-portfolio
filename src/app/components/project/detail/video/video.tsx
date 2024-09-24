'use client'

import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

import PlayButton from '@components/video/play-button';


function Video() {
    const [played, setPlayed] = useState(0);

    const handleProgress = (progress: { played: number }) => {
        setPlayed(progress.played);
    };
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 w-full"
        >
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                className="text-2xl whitespace-nowrap font-semibold mb-4 text-zinc-200"
            >
                Project Preview
            </motion.h2>
            <motion.div
                className="relative aspect-video"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
                <ReactPlayer
                    url="https://youtu.be/EiOvxYja8GU?si=pV7n3ZNkxOty6Yk-"
                    playing={true}
                    controls={true}
                    muted={false}
                    width="100%"
                    height="100%"
                    onProgress={handleProgress}
                    className="rounded-lg overflow-hidden"
                    light="/profile.png"
                    fallback={
                        <VideoLoader />
                    }
                    playIcon={<PlayButton />}
                />
                <div className="absolute top-4 right-4 text-zinc-200 flex items-center space-x-4">
                    <p className="text-zinc-300">{Math.round(played * 100)}% watched</p>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Video

const VideoLoader = () => {
    return (<div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary">
            <div className="absolute inset-0 rounded-full border-2 border-primary opacity-25" />
        </div>
    </div>)
}