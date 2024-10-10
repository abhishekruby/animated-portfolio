"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AiOutlineGlobal } from "react-icons/ai"
import { FaGithub } from "react-icons/fa"
import type { ProjectDataType } from './project'

interface ProjectCardProps {
  index: number
  data: ProjectDataType
}

export default function ProjectCard({ data, index }: ProjectCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleClickProject = (slug:string,id:string) => {
    router.push(`/project/${slug}/`)
    
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-800/50 shadow-xl backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={data.image || ''}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
        <motion.div
          className="absolute z-20 w-full h-full inset-0 bg-gradient-to-t from-slate-900 to-slate-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute z-30 w-full h-full flex items-center justify-center gap-4"
          onClick={() => handleClickProject(data.slug,data.id)}
        >
          <motion.p
            className="text-2xl font-bold text-slate-100"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            View Details
          </motion.p>
          <motion.div
            className=""
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <motion.h2
          className="mb-3 text-2xl font-bold text-slate-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {data.title}
        </motion.h2>

        <motion.p
          className="mb-4 text-sm text-slate-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {data.shortText}
        </motion.p>

        <motion.div
          className="mb-6 flex flex-wrap gap-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {data.techStacks.map((item) => (
            <div
              key={item.id}
              className="flex items-center rounded-full bg-slate-700/50 px-3 py-1 text-xs text-slate-300 cursor-pointer"
            >
              <Image src={item.icon || ""} height={16} width={16} alt={item.name} className="mr-2 h-5 w-5" />
              {item.name}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href={data.websiteUrl}
            className="group flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-600 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AiOutlineGlobal className="text-white transition-transform group-hover:rotate-12" />
            Website
          </motion.a>
          <motion.a
            href={data.githubUrl}
            className="group flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-600 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-white transition-transform group-hover:rotate-12" />
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}