import type { Metadata } from "next";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { ProficiencyBars } from "@/components/sections/proficiency-bars";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";

export const metadata: Metadata = {
  title: "About",
  description: "Skills, proficiency, and career timeline for Meet Soni.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:py-24">
      <SkillsGrid />
      <ProficiencyBars />
      <ExperienceTimeline />
    </div>
  );
}
