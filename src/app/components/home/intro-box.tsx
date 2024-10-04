import React from 'react'
import { motion } from "framer-motion";

import { FlipWords } from '@components/ui/flip-words'
import SocialIcon from '@components//common/social-icons'
import { Link } from 'react-scroll';
import { useAppSelector } from '@store/hooks';

const IntroBox = () => {

  const profileData = useAppSelector((state: any) => state.data?.profileData?.data);
  const { technicalExpertise, shortIntro, resume } = profileData

  return (
    <motion.div
      className="intro-box gap-5 md:gap-8 flex flex-col items-center justify-center md:justify-between md:items-start"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* TITLE */}
      <motion.h1
        className="text-neutral-100  text-4xl md:text-6xl lg:text-7xl font-bold flex-nowrap w-full overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        I&apos;m {" "}Abhishek Ruby <br />
        <FlipWords words={technicalExpertise} className="text-[#06B6D4] mt-4 text-3xl md:text-5xl lg:text-6xl " />
      </motion.h1>

      {/* DESC */}
      <motion.p
        className="text-neutral-300 text-base md:text-lg lg:text-xl pr-5 lg:pr-20 md:pr-14"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
       {shortIntro}
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        className="w-full flex gap-4 md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className={'p-4 px-4 lg:px-8 rounded-lg ring-1 ring-neutral-300 bg-neutral-900 text-neutral-200 hover:bg-neutral-950 font-semibold'}
        >
          <Link
            to={'contact'}
            smooth={true}
            duration={500}
            offset={-100}
          >
            Hire me
          </Link>
        </motion.button>

        <motion.a
          target={'_blank'}
          href={resume}
          download
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className={'p-4 px-3 lg:px-6 rounded-lg ring-1 cursor-pointer text-neutral-200 ring-neutral-300 font-semibold hover:bg-neutral-200 hover:text-neutral-900'}
        >
          Download CV
        </motion.a>
      </motion.div>

      {/* SOCIAL */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className='w-full md:w-1/2'
      >
        <SocialIcon className={'w-10 h-10 lg:w-14 lg:h-14'} />
      </motion.div>
    </motion.div>
  )
}

export default IntroBox

