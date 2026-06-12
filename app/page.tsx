import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Showcase3D } from "@/components/sections/showcase-3d";
import { GameDev } from "@/components/sections/gamedev";
import { Timeline } from "@/components/sections/timeline";
import { Stack } from "@/components/sections/stack";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Showcase3D />
      <GameDev />
      <Timeline />
      <Stack />
      <Contact />
    </>
  );
}
