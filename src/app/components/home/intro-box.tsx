import React from 'react'
import { motion } from "framer-motion";

import { FlipWords } from '@components/ui/flip-words'
import SocialIcon from '@components//common/social-icons'
import { Link } from 'react-scroll';


const IntroBox = () => {
  const words = ["Full Stack Developer", "Backend Specialist", "Freelancer", "Problem Solver"];

  return (
    <motion.div
      className="intro-box gap-8 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* TITLE */}
      <motion.h1
        className="text-neutral-100  text-5xl w-full md:text-6xl lg:text-7xl font-bold flex-nowrap"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        I&apos;m {" "}Abhishek Ruby <br />
        <FlipWords words={words} className="text-[#06B6D4] mt-4 lg:text-6xl" />
      </motion.h1>

      {/* DESC */}
      <motion.p
        className="text-neutral-300 text-xl pr-20"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        Welcome to my digital, where innovation and converge. With a keen
        eye for aesthetics and a mastery of code, my portfolio showcases a
        diverse collection of projects that reflect my commitment to
        excellence.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        className="w-full flex gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className={'p-4 px-8 rounded-lg ring-1 ring-neutral-300 bg-neutral-900 text-neutral-200 hover:bg-neutral-950 font-semibold'}
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

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className={'p-4 px-6 rounded-lg ring-1 text-neutral-200 ring-neutral-300 font-semibold hover:bg-neutral-200 hover:text-neutral-900'}
        >
          <a href={'#'}>Download CV</a>
        </motion.button>
      </motion.div>

      {/* SOCIAL */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className='w-full'
      >
        <SocialIcon />
      </motion.div>
    </motion.div>
  )
}

export default IntroBox