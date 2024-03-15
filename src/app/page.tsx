import TypewriterEffect from "@/components/TypeWriter";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.05]">
      <TypewriterEffect />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    </main>
  );
}
