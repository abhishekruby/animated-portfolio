"use client";

import React, { lazy, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@app/lib/utils";
import Footer from "@components/footer/footer";
import Navbar from "@components/navbar/navbar";
import { useAllProjectData } from "./api/project/get/allProjectDataApi";
import { useAllContributionProjectData } from "./api/project/get/contributionProjectDataApi";
import { useProfileData } from "@api/profile/get/profileDataApi";

const Spotlight = lazy(() => import("@components/home/spotlight"));
const About = lazy(() => import("@components/about/about"));
const Project = lazy(() => import("@components/project/project"));
const Contribution = lazy(() => import("@components/contribution/contribution"));
const Contact = lazy(() => import("@components/contact/contact"));

const Homepage = () => {
  // const {
  //   data: profileData,
  //   error: profileError,
  //   isLoading: profileIsLoading,
  // } = useProjectData();
  // console.log(profileData, profileError,profileIsLoading , 'Projectstatus')

  return (
    <AnimatePresence>
      <motion.div
        key="homepage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn("h-full", "bg-background")}
      >
        <Navbar />
        <Spotlight />
        <About />
        <Project />
        <Contribution />
        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Homepage;

