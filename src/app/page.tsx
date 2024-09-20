"use client";

import React, { Suspense, lazy } from 'react';
import { motion } from "framer-motion";

const Spotlight = lazy(() => import("@components/home/spotlight"));
const About = lazy(() => import("@components/about/about"));
const Project = lazy(() => import("./components/project/project"));
const Contribution = lazy(() => import("./components/contribution/contribution"));
const Contact = lazy(() => import("./components/contact/contact"));
const Footer = lazy(() => import("./components/footer/footer"));


const Homepage = () => {
  return (
    <motion.div className="h-full">
      <Suspense fallback={<div>Loading Spotlight...</div>}>
        <Spotlight />
      </Suspense>

      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div>Loading Projects...</div>}>
        <Project />
      </Suspense>

      <Suspense fallback={<div>Loading Contributions...</div>}>
        <Contribution />
      </Suspense>

      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </motion.div>
  );
};

export default Homepage;
