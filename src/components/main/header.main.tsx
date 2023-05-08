"use client";

import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen flex-col fixed top-0 -z-10 left-0 right-0">
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
      </div>
      <div className="h-screen opacity-0">

      </div>
    </div>
  );
}
