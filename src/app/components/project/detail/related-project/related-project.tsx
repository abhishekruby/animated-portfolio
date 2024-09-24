import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

function RelatedProject() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-1 text-zinc-200"
      >
        Related Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-zinc-600 w-full"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid gap-4 md:grid-cols-3"
    >
      {[
        { name: "Project Nexus", description: "Blockchain-based supply chain solution" },
        { name: "Project Quantum", description: "Quantum computing research initiative" },
        { name: "Project Gaia", description: "Sustainable energy management platform" },
      ].map((project, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          key={index}
          className="flex flex-col items-center bg-slate-800 p-4 rounded-lg"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              key={index}
              height={600}
              width={600}
              src={`/experience1.png`}
              alt={`Project Aurora image ${index}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-semibold mb-2 text-zinc-200"
          >
            {project.name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground text-zinc-200"
          >
            {project.description}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
  )
}

export default RelatedProject