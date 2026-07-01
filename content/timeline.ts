export type TimelineEntry = {
  type: "work" | "education";
  org: string;
  role: string;
  logo: string;
  start: string;
  end: string;
  description: string;
  bullets?: string[];
};

export const timeline: TimelineEntry[] = [
  {
    type: "work",
    org: "Neudesic",
    role: "Senior Software Consultant",
    logo: "/images/NeudesicLogo.png",
    start: "Dec 2021",
    end: "Present",
    description:
      "Lead full-stack development of enterprise applications using C#, .NET Core, Python, and Angular. Drive architecture decisions and mentor junior developers."
  },
  {
    type: "work",
    org: "Numerator",
    role: "Software Engineer II",
    logo: "/images/Numerator.png",
    start: "Jan 2019",
    end: "Feb 2021",
    description:
      "Built 100+ automated web crawlers using Python, C#, and Angular to deliver real-time pricing intelligence at scale.",
    bullets: [
      "Participated in 5+ hackathons and designed 3 internal productivity tools"
    ]
  },
  {
    type: "work",
    org: "Odysseus Solutions",
    role: "Junior Software Developer",
    logo: "/images/OdyLogo.jpg",
    start: "June 2017",
    end: "Jan 2019",
    description:
      "Integrated 5+ third-party web services into a travel booking platform and maintained automated data pipelines.",
    bullets: [
      "Contributed across the full SDLC — from requirements to production releases"
    ]
  },
  {
    type: "education",
    org: "Gujarat Technological University",
    role: "Bachelor of Engineering — Computer Science",
    logo: "/images/GTU.png",
    start: "June 2013",
    end: "May 2017",
    description:
      "Focused on core computer science fundamentals and competitive programming.",
    bullets: ["Secured 1st Rank in GTU Zonal-level coding competition"]
  }
];
