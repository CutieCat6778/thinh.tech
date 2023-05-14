"use client";

import Typewriter from "typewriter-effect";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const { scrollYProgress, scrollY } = useScroll({});
  const [pos, setPos] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPos(latest);
    console.log(pos);
  });

  return (
    <motion.div
      style={{ x: scrollYProgress }}
      className="fixed top-0 -z-10 left-0 right-0 h-screen"
    >
      <Wrapper height={pos} />
    </motion.div>
  );
}

function Wrapper({ height }: { height: number }) {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight / 3);
  }, [windowHeight, setWindowHeight]);

  if (height > windowHeight * 3) {
    return <HeaderBox2 />;
  } else {
    return <HeaderBox />;
  }
}

function HeaderBox() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="flex justify-center items-center flex-col md:d-bg md:d-text text-white p-10 md:bg-opacity-70 rounded-lg md:shadow-2xl">
        <h1 className="text-6xl">
          <Typewriter
            options={{
              strings: [
                "Hello world!",
                "I'm Thinh.",
                "A developer.",
                "A student.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        animate={{
          x: 0,
          opacity: 100,
        }}
        className="mt-5 text-center"
        >
          <span>
            A very young, talented and passioned developer.
          </span>
        </motion.div>
      </div>
      <span className="absolute bottom-0 mb-2 opacity-70 text-sm">
        Scroll down!
      </span>
      <div className="h-full absolute top-0 left-0 right-0 -z-10">
        <video autoPlay loop className="h-full overflow-hidden object-cover">
          <source src="/vid-2.mp4" />
        </video>
      </div>
    </div>
  );
}

function HeaderBox2() {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <h1 className="text-5xl px-10 py-4 bg-opacity-70 rounded-lg">
          My experiences
        </h1>
      </div>
      <div className="h-full absolute top-0 left-0 right-0 -z-10">
        <video autoPlay loop className="h-full overflow-hidden object-cover">
          <source src="/vid-1.mp4" />
        </video>
      </div>
    </div>
  );
}
