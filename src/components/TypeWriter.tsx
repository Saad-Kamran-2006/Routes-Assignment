"use client";
import { BgButtonGradientEffect } from "./GradientEffect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function TypewriterEffect() {
  const words = [
    {
      text: "This",
    },
    {
      text: "is",
    },
    {
      text: "Home",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "page.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Welcome to our site
      </p>
      <TypewriterEffectSmooth words={words} />
      <BgButtonGradientEffect />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
}

export default TypewriterEffect;
