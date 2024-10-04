import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { useAppSelector } from '@store/hooks';


function ProfileImage() {
  const { photo } = useAppSelector((state: any) => state.data?.profileData?.data);

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      }}
      className="relative flex items-center justify-center max-w-1/2 rounded-2xl overflow-hidden shadow-md"
    >
      <Image
        src={photo}
        alt="Profile"
        className="w-full h-auto object-cover transition-all duration-300 "
        width={500}
        height={500}
        style={{
          borderRadius: '1rem',
        }}
        
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: 'easeInOut',
        }}
        whileHover={{
          opacity: 0
        }}
        className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
      />
    </motion.div>
  )
}

export default ProfileImage