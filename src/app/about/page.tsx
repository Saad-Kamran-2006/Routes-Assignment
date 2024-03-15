import AboutUs from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assignment About",
};

export default function About() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <AboutUs />
    </main>
  );
}
