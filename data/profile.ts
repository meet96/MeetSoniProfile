// Single source of truth for all site content.
// Wrap text in **double asterisks** to highlight it.

export const profile = {
  name: "Meet Soni",
  title: "Senior Software Engineer",
  location: "Vadodara, Gujarat, India",
  yearsOfExperience: "9.5+",
  email: "dev.meetsoni@gmail.com",
  resume: "/Meet_Soni_Resume.pdf",
  siteUrl: "https://meetsoni.netlify.app",
  tagline:
    "Senior .NET full-stack engineer building scalable, secure, high-performance enterprise and cloud-native systems.",
  summary: [
    "Senior .NET Full Stack Engineer with **9.5+ years** of experience building scalable, secure, and high-performance enterprise applications and cloud-native solutions.",
    "Strong hands-on experience in system design, application architecture, technical leadership, cloud-native development, performance optimization, and engineering best practices. Experienced in leading technical initiatives, mentoring engineers, conducting code reviews, driving architecture decisions, and collaborating with customers and cross-functional stakeholders."
  ],
  highlights: [
    {value: "9.5+", label: "Years of experience"},
    {value: "5", label: "Cloud certifications"},
    {value: "480+", label: "Hours saved yearly via automation"},
    {value: "~30%", label: "Stability & quality uplift"}
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/meet-soni-755774a6/"
    },
    {label: "GitHub", href: "https://github.com/meet96"},
    {label: "Medium", href: "https://medium.com/@mksoni1627"},
    {
      label: "Stack Overflow",
      href: "https://stackoverflow.com/users/8405818/meet-soni"
    }
  ]
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "HCLSoftware",
    title: "Senior Software Engineer 3",
    period: "Aug 2024 — Present",
    location: "Remote",
    points: [
      "**Led and mentored team members**, providing technical guidance, resolving complex engineering challenges, and promoting engineering best practices.",
      "Contributed to **technical architecture and design decisions**, evaluating trade-offs and driving scalable, maintainable solutions for the product.",
      "Worked on HCL AppScan A360, a security product focused on **Dynamic Application Security Testing (DAST)**, delivering enterprise-grade security capabilities.",
      "Translated customer requirements and product needs into technical solutions, collaborating with stakeholders to deliver new features and product enhancements.",
      "Drove engineering initiatives and internal tooling, including an **Argo CD-based release validation tool** and a centralized dashboard for product release versions.",
      "Performed **code reviews and technical assessments**, ensuring code quality, maintainability, security, and alignment with architectural standards."
    ]
  },
  {
    company: "Neudesic",
    title: "Senior Consultant 1",
    period: "Mar 2023 — Aug 2024",
    location: "Remote",
    points: [
      "Delivered enterprise **application enhancements and new features using C#, .NET Core, Angular, Python, and SQL Server** across multiple client applications.",
      "Led customer requirement gathering and technical discussions, translating business requirements into actionable technical solutions and plans.",
      "Designed and implemented a Python-based automated data-fix application, **saving 480+ man-hours annually** by eliminating repetitive manual corrections.",
      "Improved **system stability and code quality by ~30%** through deployment automation, engineering process improvements, and development best practices.",
      "Collaborated with cross-functional and customer teams to **troubleshoot production issues** and ensure successful delivery."
    ]
  },
  {
    company: "Neudesic",
    title: "Consultant 2",
    period: "Dec 2021 — Feb 2023",
    location: "Remote",
    points: [
      "Implemented deployment automation and DevOps improvements, enhancing stability, deployment consistency, and overall code quality.",
      "Worked with **AWS and Azure environments**, contributing to CI/CD, deployment, and cloud-based application delivery.",
      "Contributed to application **observability and monitoring**, helping teams identify, troubleshoot, and resolve production issues.",
      "Participated in peer code reviews, applying coding standards and best practices to improve maintainability and reliability."
    ]
  },
  {
    company: "Radixweb",
    title: "Senior Software Engineer",
    period: "Feb 2021 — Dec 2021",
    location: "Ahmedabad, India",
    points: [
      "Built and delivered a machine learning application serving **1,000+ users** using Python, Flask, and TensorFlow across the end-to-end lifecycle.",
      "Improved **project delivery speed by 30%** by implementing Google Cloud deployment practices and adopting Agile methodologies.",
      "**Mentored 5 junior developers**, providing technical guidance and knowledge sharing."
    ]
  },
  {
    company: "Numerator",
    title: "Engineer 1",
    period: "Jan 2019 — Feb 2021",
    location: "Vadodara, India",
    points: [
      "Developed and maintained **100+ automated price-tracking web crawlers** using C#/.NET, Angular, and Python for large-scale competitive pricing data.",
      "Built scalable web scraping and data extraction solutions handling dynamic content, varying page structures, validation, and high-volume pipelines.",
      "Led internal hackathons and built automation solutions to address business challenges."
    ]
  },
  {
    company: "Odysseus Solutions",
    title: "Junior Software Developer",
    period: "Jun 2017 — Jan 2019",
    location: "Vadodara, India",
    points: [
      "Built and enhanced backend services using **C#, .NET, and ASP.NET Web API** for travel technology solutions.",
      "Integrated **five+ third-party travel and booking APIs**, handling communication, data transformation, validation, and error handling.",
      "Worked extensively with XSLT and XML-based data transformation across external systems."
    ]
  }
];

export const skills: {group: string; items: string[]}[] = [
  {group: "Languages", items: ["C#", "Python", "JavaScript", "SQL"]},
  {
    group: "Backend",
    items: [
      ".NET 8+",
      "ASP.NET Core",
      "ASP.NET MVC",
      "Web API",
      "Entity Framework Core",
      "Flask",
      "REST",
      "Microservices"
    ]
  },
  {group: "Frontend", items: ["Angular", "HTML5", "CSS", "JavaScript"]},
  {group: "Data", items: ["SQL Server", "MongoDB"]},
  {
    group: "Architecture",
    items: [
      "System Design",
      "Microservices",
      "Design Patterns",
      "SOLID",
      "Clean Architecture",
      "TDD",
      "Performance Optimization"
    ]
  },
  {group: "Cloud", items: ["Microsoft Azure", "AWS", "GCP"]},
  {
    group: "DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "Azure CI/CD",
      "Argo CD",
      "Git"
    ]
  },
  {group: "Security", items: ["DAST", "HCL AppScan"]},
  {
    group: "Automation",
    items: ["Python Automation", "Web Scraping", "Data Extraction"]
  }
];

export const certifications = [
  {
    name: "Azure AI Engineer Associate",
    code: "AI-102",
    issuer: "Microsoft",
    date: "Nov 2025"
  },
  {
    name: "AWS Certified Developer – Associate",
    code: "DVA-C02",
    issuer: "AWS",
    date: "Dec 2024"
  },
  {
    name: "Developing Solutions for Microsoft Azure",
    code: "AZ-204",
    issuer: "Microsoft",
    date: "Apr 2023"
  },
  {
    name: "Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    date: "Aug 2022"
  },
  {
    name: "Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    date: "Mar 2022"
  }
];

export const education = [
  {
    school: "Parul Institute of Engineering & Technology",
    degree: "Bachelor of Engineering, Computer Science",
    period: "2013 — 2017",
    location: "Vadodara, India"
  }
];
