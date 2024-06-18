'use client';

import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";
import { TwitterIcon, LinkedinIcon, GithubIcon } from 'next-share';
import Link from 'next/link';


const NavMenu = ({links}) => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="md:hidden fixed w-screen h-screen left-0 top-0 bottom-0">
    {open &&
        <motion.div 
        variants={listVariants}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex absolute z-20 top-36 left-28 items-center justify-center gap-8 w-1/3">
          <Link href="/">
          <GithubIcon size={55} round />
          </Link>
          <Link href="/">
            <LinkedinIcon size={35} round />
          </Link>
          <Link href="/">
          <TwitterIcon size={35} round />
          </Link>
        </motion.div>
  }
    {/* MENU BUTTON */}
    <button
      className="w-10 h-8 flex flex-col justify-between absolute z-20 right-8 top-6"
      onClick={() => setOpen((prev) => !prev)}
    >
      <motion.div
        variants={topVariants}
        animate={open ? "opened" : "closed"}
        className="w-10 h-1 bg-white rounded origin-left"
      ></motion.div>
      <motion.div
        variants={centerVariants}
        animate={open ? "opened" : "closed"}
        className="w-10 h-1 bg-white rounded"
      ></motion.div>
      <motion.div
        variants={bottomVariants}
        animate={open ? "opened" : "closed"}
        className="w-10 h-1 bg-white rounded origin-left"
      ></motion.div>
    </button>
    {/* MENU LIST */}
    {open && (
      <motion.div
        variants={listVariants}
        initial="closed"
        animate="opened"
        className="absolute top-0 left-0 w-[100vw] h-[110vh] bg-gray-900 text-white flex flex-col items-center justify-center gap-8 text-4xl"
      >
        {links.map((link) => (
          <motion.div
            variants={listItemVariants}
            className=""
            key={link.title}
          >
            <Link href={link.url}>{link.title}</Link>
          </motion.div>
        ))}
      </motion.div>
    )}
  </div>
  )
}

export default NavMenu;