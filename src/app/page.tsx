"use client";

import { motion } from "framer-motion";

import Spotlight from "@components/home/spotlight";
import About from "@components/about/about";
import Skill from "./components/skill/skill";
import Journey from "./components/journey/journey";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
    >
      <Spotlight />
      <About />
      <Skill />
      <Journey/>
    </motion.div>
  );
};

export default Homepage;
