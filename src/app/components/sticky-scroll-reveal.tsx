"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HoverBorderGradient } from "./hover-border-gradient";

export const StickyScroll = ({
  contents,
  contentClassName,
  item
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = contents.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = contents.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });
  const lineX = useTransform(scrollYProgress, [0, 1], ['20%', '110%']);
  const backgroundColors = [
    "#0f172a",
    "#000",
    "#171717",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <>
      <div
        className={`h-screen w-screen flex items-center justify-center bg-[#1F2937] ml-24 mr-24`}
        key={item.id}
      >
        <div className="flex flex-col gap-10 text-white xl:w-[55%] md:w-[70%] w-[85%]">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl relative">
            {item.title}
            <motion.div
              className="ml-5 w-full h-1 bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] rounded absolute bottom-[-15%]"
              style={{ width: lineX }}
            ></motion.div>
          </h1>
          <motion.div
            animate={{
              backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
            ref={ref}
          >
            <div className="div relative flex items-start px-4">
              <div className="max-w-2xl">
                {contents.map((content, index) => (
                  <div key={content.title + index} className="my-20">
                              <div
                  style={{ background: backgroundGradient }}
                  className={cn(
                    "lg:hidden block h-64 my-8 w-full rounded-md bg-white overflow-hidden",
                    contentClassName
                  )}
                >
                  {contents[index]?.content ?? null}
                </div>
                    <motion.h2
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="text-2xl font-bold text-slate-100"
                    >
                      {content.title}
                    </motion.h2>
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="text-kg text-slate-300 max-w-sm mt-10"
                    >
                      {content.description}
                    </motion.p>
                  </div>
                ))}
                <div className="h-40" />
              </div>
            </div>
            <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {contents[activeCard].content ?? null}
      </div>
          </motion.div>
          <Link href={item.link} className="flex justify-end">
            <div className="flex justify-center text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-[#1F2937] p-4 text-white flex items-center space-x-2"
              >
                <span>Live Application </span>
              </HoverBorderGradient>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
