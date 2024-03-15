"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Button } from "./ui/moving-border";

function BgButtonGradientEffect() {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <div>
        <Button
          className="bg-white dark:bg-slate-900 text-black dark:text-white"
        >
          Join now
        </Button>
      </div>
      <div>
        <BackgroundGradient>
          <button className="w-40 h-10 rounded-l-full rounded-r-full text-black  text-sm">
            Signup
          </button>
        </BackgroundGradient>
      </div>
    </div>
  );
}

function BgNavGradientEffect({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <BackgroundGradient>
        <Menu setActive={setActive}>
          <Link href={"/"} className="px-3">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link href={"/about"} className="px-3">
            <MenuItem
              setActive={setActive}
              active={active}
              item="About"
            ></MenuItem>
          </Link>
          <Link href={"/contact"} className="px-3">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact"
            ></MenuItem>
          </Link>
        </Menu>
      </BackgroundGradient>
    </div>
  );
}

export { BgNavGradientEffect, BgButtonGradientEffect };
