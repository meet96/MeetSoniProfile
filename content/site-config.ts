export const siteConfig = {
  name: "Meet Soni",
  title: "Hello, I'm Meet Soni",
  tagline:
    "A Full Stack Software Developer building scalable web applications using .NET Core, Angular, React, and modern cloud technologies.",
  role: "Senior Software Consultant",
  company: "Neudesic",
  resumeLink:
    "https://drive.google.com/file/d/17YAAqH6J7NGj-ZXodQUpD8w1P7CTknqC/view?usp=sharing",
  contactEmail: "mksoni1627@gmail.com",
  isHireable: false,
  seo: {
    title: "Meet Soni — Full Stack Developer | .NET, Angular, React",
    description:
      "Meet Soni is a Full Stack Software Developer specializing in .NET Core, Angular, React, Python, and cloud technologies. Explore projects, blog posts, and professional experience.",
    ogDescription:
      "Full Stack Software Developer specializing in building scalable web applications with .NET Core, Angular, React, and cloud technologies.",
    keywords: [
      "Meet Soni",
      "Full Stack Developer",
      "Software Engineer",
      ".NET Core",
      "Angular",
      "React",
      "Python",
      "AWS",
      "Azure",
      "Web Developer",
      "Portfolio",
    ],
    siteUrl: "https://meetsoni.dev",
    themeColor: "#6366f1",
  },
} as const;

export const socialLinks = {
  github: "https://github.com/meet96",
  linkedin: "https://www.linkedin.com/in/meet-soni-755774a6/",
  email: "mailto:mksoni1627@gmail.com",
  medium: "https://medium.com/@mksoni1627",
  stackoverflow: "https://stackoverflow.com/users/8405818/meet-soni",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const skillsSection = {
  title: "What I Do",
  subtitle:
    "FULL STACK DEVELOPER PASSIONATE ABOUT BUILDING ROBUST & SCALABLE SOLUTIONS",
  bullets: [
    "Build responsive, high-performance front-end interfaces with modern frameworks",
    "Design and implement scalable backend architectures and RESTful APIs",
    "Deploy and manage cloud infrastructure on AWS, Azure & GCP",
  ],
  stack: [
    "HTML5",
    "CSS3",
    "Sass",
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "npm",
    "SQL",
    "AWS",
    "Azure",
    "Python",
    "Docker",
  ],
} as const;

export const proficiency = [
  { label: "Frontend / Design", percent: 90 },
  { label: "Backend Development", percent: 70 },
  { label: "Programming & Problem Solving", percent: 60 },
] as const;
