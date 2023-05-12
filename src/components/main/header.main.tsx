"use client";

import Typewriter from "typewriter-effect";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FadeInEffect from "../FadeInEffect";

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

  if (height > windowHeight * 2 + 100) {
    return <HeaderBox2 />;
  } else {
    return <HeaderBox />;
  }
}

function HeaderBox() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
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
      <span className="mt-5">
        A very young, talented and passioned developer.
      </span>
      <span className="absolute bottom-0 mb-2 opacity-70 text-sm">
        Scroll down!
      </span>
      <div className="h-screen w-screen absolute top-0 left-0 right-0 -z-10">
        <video
          autoPlay
          loop
          className="h-full w-full overflow-hidden object-cover"
        >
          <source src="/vid-1.mp4" />
        </video>
      </div>
    </div>
  );
}

function HeaderBox2() {
  const ref = useRef(null);

  return (
    <div className="flex justify-center items-center h-screen">
      <FadeInEffect>
        <h1>Hello world!</h1>
      </FadeInEffect>
    </div>
  );
}
