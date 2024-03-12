"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Navigating the Web: A Guide to Next.js Routing",
    description:
      "Embark on a journey through the intricacies of web development routing with Next.js. From dynamic page routing to nested routes and client-side navigation, this comprehensive guide explores the power and flexibility of Next.js routing.",
  },
  {
    title: "Mastering Next.js Routing for Seamless User Experiences",
    description:
      "Dive deep into the art of creating seamless user experiences with Next.js routing. Discover advanced techniques for handling navigation, including dynamic route parameters, route prefetching, and navigation guards.",
  },
  {
    title: "Architecting Web Applications with Next.js Routing",
    description:
      "Architect robust web applications with Next.js routing as your foundation. Explore best practices for structuring routes, organizing page components, and optimizing performance to create scalable and maintainable web apps.",
  },
  {
    title: "Next.js Routing Demystified: From Basics to Beyond",
    description:
      "Demystify Next.js routing and unlock its full potential for your web projects. Whether you're new to routing or a seasoned developer, this guide covers everything you need to know, from basic route setup to advanced routing strategies.",
  },
  {
    title: "The Power of Next.js Routing: Crafting Dynamic Web Experiences",
    description:
      "Harness the power of Next.js routing to craft dynamic and engaging web experiences. Learn how to leverage dynamic routes, nested routing structures, and client-side navigation to create immersive user journeys that keep visitors coming back for more.",
  },
];

export default function AboutUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
