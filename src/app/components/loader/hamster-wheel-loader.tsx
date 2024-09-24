'use client'

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Container = styled.div`
  --color: rgba(114, 114, 114, 0.3);
  background-color: #191a1a;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;
`;
const WheelAndHamster = styled.div`
  --dur: 1s;
  position: relative;
  width: 12em;
  height: 12em;
  font-size: 14px;
`;

const Wheel = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(100% 100% at center,hsla(0,0%,60%,0) 47.8%,hsl(0,0%,60%) 48%);
  z-index: 2;
`;

const Hamster = styled(motion.div)`
  position: absolute;
  top: 65%;
  left: calc(50% - 4.0em);
  width: 7em;
  height: 3.75em;
  transform: rotate(4deg) translate(-0.8em,1.85em);
  transform-origin: 50% 0;
  z-index: 1;
`;

const HamsterBody = styled(motion.div)`
  position: absolute;
  background: hsl(30,90%,90%);
  border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
  box-shadow: 0.1em 0.75em 0 hsl(30,90%,55%) inset,
    0.15em -0.5em 0 hsl(30,90%,80%) inset;
  top: 0.25em;
  left: 2em;
  width: 4.5em;
  height: 3em;
  transform-origin: 17% 50%;
  transform-style: preserve-3d;
`;

const HamsterHead = styled(motion.div)`
  position: absolute;
  background: hsl(30,90%,55%);
  border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
  box-shadow: 0 -0.25em 0 hsl(30,90%,80%) inset,
    0.75em -1.55em 0 hsl(30,90%,90%) inset;
  top: 0;
  left: -2em;
  width: 2.75em;
  height: 2.5em;
  transform-origin: 100% 50%;
`;

const HamsterEar = styled(motion.div)`
  position: absolute;
  background: hsl(0,90%,85%);
  border-radius: 50%;
  box-shadow: -0.25em 0 hsl(30,90%,55%) inset;
  top: -0.25em;
  right: -0.25em;
  width: 0.75em;
  height: 0.75em;
  transform-origin: 50% 75%;
`;

const HamsterEye = styled(motion.div)`
  position: absolute;
  background-color: hsl(0,0%,0%);
  border-radius: 50%;
  top: 0.375em;
  left: 1.25em;
  width: 0.5em;
  height: 0.5em;
`;

const HamsterNose = styled.div`
  position: absolute;
  background: hsl(0,90%,75%);
  border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
  top: 0.75em;
  left: 0;
  width: 0.2em;
  height: 0.25em;
`;

const HamsterLimb = styled(motion.div)`
  position: absolute;
  clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
  top: 2em;
  left: 0.5em;
  width: 1em;
  height: 1.5em;
  transform-origin: 50% 0;
`;

const HamsterLimbFR = styled(HamsterLimb)`
  background: linear-gradient(hsl(30,90%,80%) 80%,hsl(0,90%,75%) 80%);
  transform: rotate(15deg) translateZ(-1px);
`;

const HamsterLimbFL = styled(HamsterLimb)`
  background: linear-gradient(hsl(30,90%,90%) 80%,hsl(0,90%,85%) 80%);
  transform: rotate(15deg);
`;

const HamsterLimbBR = styled(HamsterLimb)`
  border-radius: 0.75em 0.75em 0 0;
  clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
  top: 1em;
  left: 2.8em;
  width: 1.5em;
  height: 2.5em;
  transform-origin: 50% 30%;
  background: linear-gradient(hsl(30,90%,80%) 90%,hsl(0,90%,75%) 90%);
  transform: rotate(-25deg) translateZ(-1px);
`;

const HamsterLimbBL = styled(HamsterLimb)`
  border-radius: 0.75em 0.75em 0 0;
  clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
  top: 1em;
  left: 2.8em;
  width: 1.5em;
  height: 2.5em;
  transform-origin: 50% 30%;
  background: linear-gradient(hsl(30,90%,90%) 90%,hsl(0,90%,85%) 90%);
  transform: rotate(-25deg);
`;

const HamsterTail = styled(motion.div)`
  position: absolute;
  background: hsl(0,90%,85%);
  border-radius: 0.25em 50% 50% 0.25em;
  box-shadow: 0 -0.2em 0 hsl(0,90%,75%) inset;
  top: 1.5em;
  right: -0.5em;
  width: 1em;
  height: 0.5em;
  transform: rotate(30deg) translateZ(-1px);
  transform-origin: 0.25em 0.25em;
`;

const Spoke = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(100% 100% at center,hsl(0,0%,60%) 4.8%,hsla(0,0%,60%,0) 5%),
    linear-gradient(hsla(0,0%,55%,0) 46.9%,hsl(0,0%,65%) 47% 52.9%,hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat;
`;

const HamsterWheelLoader = () => {
  return (
    <Container className="h-screen w-screen flex items-center justify-center">
      <WheelAndHamster aria-label="Orange and tan hamster running in a metal wheel" role="img">
        <Wheel animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
        <Hamster
          animate={{
            rotate: [4, 0, 4],
            y: [0, -2, 0]
          }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <HamsterBody animate={{ rotate: [0, -2, 0, -2, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}>
            <HamsterHead animate={{ rotate: [0, 8, 0, 8, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}>
              <HamsterEar animate={{ rotate: [0, 12, 0, 12, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} />
              <HamsterEye animate={{ scaleY: [1, 1, 1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.9, 0.95, 0.95, 1] }} />
              <HamsterNose />
            </HamsterHead>
            <HamsterLimbFR animate={{ rotate: [50, -30, 50] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
            <HamsterLimbFL animate={{ rotate: [-30, 50, -30] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
            <HamsterLimbBR animate={{ rotate: [-60, 20, -60] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
            <HamsterLimbBL animate={{ rotate: [20, -60, 20] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
            <HamsterTail animate={{ rotate: [30, 10, 30] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} />
          </HamsterBody>
        </Hamster>
        <Spoke animate={{ rotate: -360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
      </WheelAndHamster>
    </Container>
  );
};

export default HamsterWheelLoader;