import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import GlowingLine from '../common/glowing-line';

const ProjectCard: FC = () => {

  const router = useRouter();

  const [techStack, setTechStack] = useState([
    {
      id: 1,
      path: 'M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z',
      width: 40,
      height: 40,
    },
    {
      id: 2,
      path: 'M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z',
      width: 40,
      height: 40,
    },
    {
      id: 3,
      path: 'M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z',
      width: 40,
      height: 40,
    },
  ]);

  return (
    <motion.div
      className="bg-slate-800 bg-opacity-75 rounded-lg shadow-lg max-w-sm mx-auto cursor-pointer"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => router.push('/project/slug/')}
    >
      {/* Image Slider */}
      <motion.div
        className="w-full h-40 md:h-48 bg-primary rounded-lg overflow-hidden mb-4"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src="/experience1.png" height={600} width={600} alt="Project Image" className="w-full h-full object-cover" />
      </motion.div>

      <div className="p-4">
        <motion.h2
          className="text-lg md:text-xl font-medium text-slate-200 mb-2"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        >
          Project Name
        </motion.h2>

        {/* Description */}
        <motion.div
          className="text-slate-300 mb-4 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        >
          <p>
            This is a brief description of the project. It includes the key highlights and features that make this
            project stand out.
          </p>
        </motion.div>

        {/* Line */}
        <GlowingLine className='w-[90%] h-0.5 mb-4 ' />

        {/* Tech Stack */}
        <motion.div
          className="flex justify-start items-center gap-1 mb-2 md:mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        >
          {techStack.map(icon => (
            <motion.svg
              key={icon.id}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              whileHover={{ scale: 1.2 }}
              className={'w-9 h-9 md:w-10 md:h-10'}
            >
              <path fill="#000" d={icon.path}></path>
            </motion.svg>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex gap-2 md:gap-5 mb-2 md:mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        >
          <motion.a
            href="#"
            className="bg-secondary text-xs md:text-sm font-medium text-slate-200 py-2 px-3 md:py-1 md:px-4 rounded-lg transition duration-300 hover:bg-opacity-80 flex gap-2 justify-center items-center ring-1"
            whileHover={{ scale: 1.1 , backgroundColor: '#e2e8f0' , color : '#171717'}}
          >
            <AiOutlineGlobal size={20} fill='#06B6D4' /> Website
          </motion.a>
          <motion.a
            href="#"
            className="bg-secondary text-xs md:text-sm font-medium text-slate-200 py-2 px-3 md:py-3 md:px-4 rounded-lg transition duration-300 hover:bg-opacity-80 flex gap-2 justify-center items-center bg-neutral-900"
            whileHover={{ scale: 1.1 }}
          >
            GitHub
            <FaGithub size={20} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
