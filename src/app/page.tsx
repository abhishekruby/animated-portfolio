"use client";

import React, { lazy, Suspense, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@app/lib/utils";
import { useProfileData } from "@api/profile/get/profileDataApi";
import TransitionProvider from "@components/transition-provider";
import SquareBounceLoader from "@components/loader/square-bounce-loader";
import HamsterWheelLoader from "@components/loader/hamster-wheel-loader";
import Footer from "@components/footer/footer";
import Navbar from "@components/navbar/navbar";
import GlobalErrorPage from "./global-error";
import Spotlight from "@components/home/spotlight";
import About from "@components/about/about";
import Project from "@components/project/project";
import Contribution from "@components/contribution/contribution";
import Contact from "@components/contact/contact";


const Homepage = () => {
  const { data, error, isLoading } = useProfileData();
  console.log(data, error, isLoading, 'homepage');

  if (isLoading) {
    return <HamsterWheelLoader />
  }
  if (error) {
    return <GlobalErrorPage error={error} />;
  }

  return (
    <TransitionProvider>
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
            <Spotlight/>
            <About/>
            <Project/>
            <Contribution/>
            <Contact/>
            <Footer />
        </motion.div>
      </AnimatePresence>
    </TransitionProvider>
  );
};

export default Homepage;

