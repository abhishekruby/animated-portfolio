"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "next-share";
import { FlipWords } from "./components/ui/flip-words";

const Homepage = () => {
  const words = ["Software Engineer", "Full Stack Developer", "Freelancer",];
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[100vh] flex flex-col lg:flex-row-reverse px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/portfolio.png"
            alt="hero-image"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-neutral-100 h-32 text-4xl w-full md:text-5xl lg:text-6xl font-bold">
           I'm {" "}Abhishek Ruby <br />
           <FlipWords words={words} className="text-[#06B6D4] mt-4 h-16" />
          </h1>
          {/* DESC */}
          <p className="text-neutral-300 md:text-xl">
            Welcome to my digital, where innovation and converge. With a keen
            eye for aesthetics and a mastery of code, my portfolio showcases a
            diverse collection of projects that reflect my commitment to
            excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="p-4 px-6 rounded-lg ring-1 ring-neutral-300 bg-neutral-900 text-neutral-200 hover:bg-neutral-800 font-semibold"
            >
              <Link href="/project">Hire me</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="p-4 px-6 rounded-lg ring-1 text-neutral-200 ring-neutral-300 font-semibold"
            >
              <Link href="/contact">Explore</Link>
            </motion.button>
          </div>
          {/* SOCIAL */}
          <div className="flex items-center justify-start gap-8 w-full">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/">
                <GithubIcon size={68} round />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/">
                <LinkedinIcon size={45} round />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/">
                <TwitterIcon size={45} round />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
