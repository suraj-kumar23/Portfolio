export const LINKS = {
  github: "https://github.com/suraj-kumar23",
  linkedin: "https://www.linkedin.com/in/suraj-kumar-biswas-00902b260/",
  instagram: "https://www.instagram.com/surajkrbiswas/",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=surajbiswasc@gmail.com&su=Project%20Inquiry%20-%20Suraj%20Kumar%20Biswas&body=Hi%20Suraj%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project%20or%20opportunity%20with%20you.%0A%0AI%20would%20be%20happy%20to%20share%20more%20details.%0A%0ABest%20regards%2C%0A",
  phone: "tel:+918918067883",
  resume: "/PortfolioNew/src/assets/resume.pdf",
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Films", href: "#films" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const DISCIPLINES = [
  { name: "Development", note: "Full-stack web apps with modern frameworks" },
  { name: "Video Editing", note: "Cinematic storytelling & colour grading" },
  { name: "Photography", note: "Street, travel & landscape photography" },
  { name: "Travel", note: "Exploring cultures & documenting journeys" },
];

export type Project = {
  code: string;
  title: string;
  role: string;
  dates: string;
  summary: string;
  stack: string[];
  github?: string;
  live?: string;
};

export type contact = {
  email: string;
  phone: string;
  resume: string;
};

export const CONTACT: contact = {
  email: "surajbiswasc@gmail.com",
  phone: "+91 8918067883",
  resume: "/PortfolioNew/src/assets/resume.pdf",
};

export const PROJECTS: Project[] = [
  {
    code: "P01",
    title: "AgriNova",
    role: "AI Smart Agriculture Platform",
    dates: "Dec 2025 — Present",
    summary:
      "Full-stack platform for crop disease detection, satellite crop-health analysis, weather forecasting and smart farming recommendations, with Flask microservices separating model inference from application logic.",
    stack: [
      "React",
      "Node.js",
      "Flask",
      "TensorFlow",
      "MongoDB",
      "Gemini API",
      "Earth Engine",
    ],
    github: "https://github.com/suraj-kumar23/AGRINOVA2.0",
  },
  {
    code: "P02",
    title: "VistaLex",
    role: "Neurodivergent EdTech Platform",
    dates: "Mar 2025 — Jun 2025",
    summary:
      "Personalised, adaptive learning platform for students with ADHD, dyslexia and autism, with computer-vision models enabling emotion-aware learning on a low-latency UI.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Supabase",
      "TensorFlow",
      "OpenCV",
    ],
    github: "https://github.com/suraj-kumar23/Vistalex2.0",
  },
  {
    code: "P03",
    title: "GestureTalk",
    role: "Real-Time Sign Interpreter",
    dates: "Feb 2025 — Apr 2025",
    summary:
      "An HCI system using computer vision and a CNN to translate sign language into multilingual real-time text and speech, and back again, through a direct interface.",
    stack: [
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Pyttsx3",
      "NumPy",
      "Pandas",
      "Flask",
    ],
    github: "https://github.com/suraj-kumar23/SilentSync_Main",
  },
  {
    code: "P04",
    title: "SageChain",
    role: "Modular DeFi Platform",
    dates: "May 2025 — Present",
    summary:
      "A modular DeFi app for lending, borrowing and swapping with smart-wallet integration, AI-assisted financial guidance and gamified learning.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Supabase",
      "Ethers.js",
      "Solidity",
    ],
    github:"https://github.com/suraj-kumar23/Final-Sage-Chain-Crypto-Revolution",
  },
];
export const ROSTER = [
  {
    label: "Experience",
    name: "Edunet Foundation",
    note: "Web Development Intern",
    meta: "Jun — Aug 2024",
  },
  {
    label: "Leadership",
    name: "GSSoC 2024",
    note: "Open-source Mentor",
    meta: "Aug — Nov 2024",
  },
  {
    label: "Hobby",
    name: "Cinematic Storyteller",
    note: "Concept to colour grade",
    meta: "Instagram",
    href: LINKS.instagram,
  },
  {
    label: "Hobby",
    name: "Traveller",
    note: "Cultures, documented",
    meta: "Instagram",
    href: LINKS.instagram,
  },
  {
    label: "Hobby",
    name: "Photography",
    note: "Light, shadow, in-between",
    meta: "Instagram",
    href: LINKS.instagram,
  },
];

export const ACHIEVEMENTS = [
  { name: "Prayas 2K25", result: "Winner", place: "Techno International Batanagar", date: "Apr 2025" },
  { name: "Hacktopus", result: "Winner", place: "Dr. B. C. Roy Engineering College", date: "Jul 2025" },
  {
    name: "East India Blockchain Summit 2.0",
    result: "Finalist",
    place: "IIT Kharagpur",
    date: "Jan 2026",
  },
  { name: "Hacksagon", result: "Finalist", place: "IIITM Gwalior", date: "Jun 2025" },
  { name: "Hack4Bengal'25", result: "Finalist", place: "Kolkata", date: "Jun 2025" },
  { name: "Hacktropica'25", result: "Finalist", place: "Asansol Engineering College", date: "Jun 2025" },
  { name: "HackFest 2025", result: "Qualified", place: "State Hub Round", date: "2025" },
];

export const EDUCATION = [
  {
    name: "B.Tech, Computer Science & Engineering",
    place: "Techno International Newtown (MAKAUT)",
    result: "CGPA 7.5 / 10",
    date: "2022 — 2026",
  },
  {
    name: "Higher Secondary (12th)",
    place: "Dhakuria High School (WBCHSE)",
    result: "77%",
    date: "2020 — 2022",
  },
  {
    name: "Secondary (10th)",
    place: "Chandpara Bani Vidya Bithi (H.S)",
    result: "62%",
    date: "2014 — 2020",
  },
];

export const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "SQL", "Java", "TypeScript", "JavaScript (ES6+)", "C", "C++"],
  },
  {
    group: "Data Analysis & Reporting",
    items: [
      "Advanced SQL (HackerRank Certified)",
      "Pandas",
      "NumPy",
      "MS Excel",
      "PowerPoint",
      "Power BI",
      "Qlik Sense",
      "Looker Studio",
    ],
  },
  {
    group: "Data Engineering & QA",
    items: [
      "ETL / ELT Pipelines",
      "Data Validation & QA",
      "Root-Cause Debugging",
      "dbt",
      "Databricks",
      "Snowflake",
      "MLOps & Model Deployment",
      "Machine Learning & Statistics",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL & NoSQL Data Modelling"],
  },
  {
    group: "Backend",
    items: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Flask",
      "Django",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "JWT / OAuth",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Angular",
      "Redux Toolkit",
      "Tailwind CSS",
      "Vite",
      "Responsive Design",
    ],
  },
  {
    group: "AI & Data",
    items: [
      "Generative AI",
      "LLM Integration",
      "RAG Systems",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "scikit-learn",
      "FAISS",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "Microsoft Azure (AZ-900 Certified)",
      "AWS",
      "Docker",
      "Git / GitHub",
      "Postman",
      "CI/CD",
      "Linux",
    ],
  },
  {
    group: "Tools & Practices",
    items: [
      "JIRA / Sprint Coordination",
      "Agile & Scrum",
      "TDD",
      "Tableau",
      "Stakeholder Communication",
      "Workflow Documentation",
    ],
  },
  {
    group: "Creative Tools",
    items: [
      "Premiere Pro",
      "DaVinci Resolve",
      "CapCut",
      "Colour Grading",
      "Figma",
      "Photoshop",
      "Canva",
    ],
  },
];

export type Video = {
  title: string;
  url: string;
  category: string;
  year: string;
};

export const VIDEOS: Video[] = [
  {
    title: "Cinematic Video 1",
    url: "https://res.cloudinary.com/dsg58qclf/video/upload/vc_h264/v1788592069/VID_20260901_081204_491_bsl.mp4",
    category: "Cinematic",
    year: "2026",
  },
  {
    title: "Cinematic Video 2",
    url: "https://res.cloudinary.com/dsg58qclf/video/upload/vc_h264/v1788593212/InShot_20260902_170059860.mp4",
    category: "Travel",
    year: "2026",
  },
  {
    title: "Cinematic Video 3",
    url: "https://res.cloudinary.com/dsg58qclf/video/upload/vc_h264/v1788593236/VID_20260321_211657_332_bsl.mp4",
    category: "Cinematic",
    year: "2026",
  },
  {
    title: "Cinematic Video 4",
    url: "https://res.cloudinary.com/dsg58qclf/video/upload/vc_h264/v1788593258/InShot_20260111_142854202.mp4",
    category: "Travel",
    year: "2026",
  },
  {
    title: "Cinematic Video 5",
    url: "https://res.cloudinary.com/dsg58qclf/video/upload/vc_h264/v1788593289/InShot_20260121_165327722.mp4",
    category: "Cinematic",
    year: "2026",
  },
];
