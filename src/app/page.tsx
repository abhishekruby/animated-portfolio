"use client";

import React, { Suspense, lazy, useState } from 'react';
import { motion } from "framer-motion";
import Navbar from '@components/navbar/navbar';
import SquareBounceLoader from './components/loader/square-bounce-loader';

const Spotlight = lazy(() => import("@components/home/spotlight"));
const About = lazy(() => import("@components/about/about"));
const Project = lazy(() => import("@components/project/project"));
const Contribution = lazy(() => import("@components/contribution/contribution"));
const Contact = lazy(() => import("@components/contact/contact"));
const Footer = lazy(() => import("@components/footer/footer"));

const Homepage = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="h-full"
    >
      <Suspense fallback={<SquareBounceLoader />}>
        {showNavbar && (
          <Navbar setShowNavbar={setShowNavbar} />
        )}
        <Spotlight />
        <About />
        <Project />
        <Contribution />
        <Contact />
        <Footer />
      </Suspense>
    </motion.div>
  );
};

export default Homepage;
