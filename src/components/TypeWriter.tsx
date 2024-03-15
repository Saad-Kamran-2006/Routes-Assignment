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
        Welcome to our website
      </p>
      <TypewriterEffectSmooth words={words} />
      <BgButtonGradientEffect />
      
    </div>
  );
}

export default TypewriterEffect;
