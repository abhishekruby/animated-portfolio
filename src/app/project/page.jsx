"use client";
import { SparklesCore } from "@/components/sparkles";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/profile-2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#f97316,#eab308)] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const ProjectPage = () => {
  const sectionRef = useRef(null);
  const projectRef = useRef(null);

  const sectionScroll = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const projectScroll = useScroll({
    target: projectRef,
  });

 
  const textY = useTransform(sectionScroll.scrollYProgress, [0, 1], ['0%', '1000%']);
  const bgY = useTransform(sectionScroll.scrollYProgress, [0, 1], ['0%', '100%']);
  const sunY = useTransform(sectionScroll.scrollYProgress, [0, 1], ['0%', '50%']);
  const projectX = useTransform(projectScroll.scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <motion.div
      className="h-full no-scrollbar"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="parallax w-screen h-[90vh] relative flex items-center justify-center"
        style={{
          background: "linear-gradient(180deg, #1F2937, #1F2937)",
        }}
        ref={sectionRef}
      >
        <motion.h1
          className="xl:text-8xl sm:text-6xl text-5xl text-[#fff] font-bold md:text-center"
          style={{ y: textY }}
        >
          Creations
        </motion.h1>
        <motion.div
          className="mountains bg-cover bg-bottom w-full h-full absolute z-[3] md:bg-no-repeat"
          style={{ backgroundImage: "url('/mountains.png')" }}
        ></motion.div>
        <motion.div
          className="planets bg-cover bg-bottom w-full h-full absolute md:bg-contain md:bg-no-repeat"
          style={{
            y: sunY,
            backgroundImage: `url(${"/sun.png"})`,
          }}
        ></motion.div>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="stars bg-cover bg-bottom w-full h-full absolute z-[1]"
          particleColor="#FFFFFF"
        />
        <motion.div
          className="stars bg-contain bg-bottom w-full h-full absolute"
          style={{ backgroundImage: "url('/stars.png')",y: bgY }}
        ></motion.div>
      </div>

      <div className="h-[600vh] relative bg-[#1F2937] pt-[5%] pb-[8%]" ref={projectRef}>
        <div className="sticky top-[5%] flex h-screen gap-4 items-center overflow-x-scroll no-scrollbar">
          <motion.div style={{ x:projectX }} className="flex bg-[#1F2937]">
            {/* <div className="h-screen w-screen flex items-center justify-center" /> */}
            {items.map((item) => (
              <StickyScroll contents={content} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center text-white bg-[#1F2937]">
        <h1 className="xl:text-8xl sm:text-6xl text-4xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#fff">
            <textPath xlinkHref="#circlePath" className="text-2xl">Python Full Stack Developer
            </textPath>
            </text>
          </motion.svg>
          <Link
  href="/contact"
  className="font-medium w-20 h-20  md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 absolute top-0 left-0 right-0 bottom-0 m-auto bg-white text-black rounded-full flex items-center justify-center"
>
  Hire Me
</Link>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
