export type ProjectCategory =
  | "Business websites"
  | "AI & computer vision"
  | "AI-powered applications"
  | "Mobile applications"
  | "Personal portfolio";

export type Project = {
  title: string;
  type: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  contributions: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Green Arch Builders",
    type: "Business website",
    category: "Business websites",
    description:
      "A responsive website for a construction and architecture business, organizing service and project information for visitors.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Supabase"],
    contributions: [
      "Structured service and project information.",
      "Used AI tools for planning, code generation, debugging, and content creation.",
      "Applied SEO fundamentals across service content, metadata, headings, internal links, and mobile layouts.",
    ],
    github: "https://github.com/ashiq-ash029/green-arch-builds",
  },
  {
    title: "Invendo AI Academy",
    type: "Corporate AI training website",
    category: "Business websites",
    description:
      "A website project for corporate AI training services, planned around search intent and useful, answer-focused content.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    contributions: [
      "Planned website information architecture and content.",
      "Applied on-page SEO practices and considered technical SEO, crawlability, mobile usability, and URL structure.",
      "Organized FAQ-style content supporting AEO and GEO principles.",
    ],
    github: "https://github.com/ashiq-ash029/invendo-ai-craft",
  },
  {
    title: "Highway FR Detection Web Application",
    type: "Computer vision web application",
    category: "AI & computer vision",
    description:
      "A web application concept for video uploads and automated video analysis using computer vision.",
    technologies: ["Python", "FastAPI", "React", "YOLO", "OpenCV", "SQLite"],
    contributions: [
      "Used YOLO for vehicle and person detection and OpenCV for frame processing.",
      "Implemented face detection, snapshot extraction, and annotated video output.",
      "Created API workflows for uploads, processing jobs, and results; stored metadata with SQLite and local storage.",
      "Displayed processed videos and snapshots in the web interface.",
    ],
    github: "https://github.com/ashiq-ash029/Highway-web-app",
  },
  {
    title: "AI-Based Question Paper Generation",
    type: "AI-powered educational application",
    category: "AI-powered applications",
    description:
      "An AI-assisted workflow concept for generating questions from study materials and assembling customized question papers.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AI / NLP"],
    contributions: [
      "Designed question customization by subject, topic, marks, difficulty, and question type.",
      "Organized a reusable question bank and paper assembly workflow.",
      "Connected backend processing concepts with a user-focused interface.",
    ],
  },
  {
    title: "RationKart",
    type: "Public distribution system application",
    category: "Mobile applications",
    description:
      "A mobile application concept covering ration booking, stock management, and doorstep delivery workflows.",
    technologies: ["React Native", "JavaScript", "Firebase"],
    contributions: [
      "Explored customer ration-booking and stock-management workflows.",
      "Considered Firebase authentication and customer- and delivery-related operations.",
    ],
  },
  {
    title: "Salon Form Web Application",
    type: "Business form web application",
    category: "Business websites",
    description:
      "A responsive salon form application for collecting and submitting salon-related information.",
    technologies: ["Next.js", "Tailwind CSS", "Backend integration"],
    contributions: [
      "Designed a clean, responsive interface with a focus on form usability.",
      "Integrated the application with its backend workflow.",
    ],
    live: "https://form.invendoi.com/",
  },
  {
    title: "Personal Portfolio Website",
    type: "Portfolio website",
    category: "Personal portfolio",
    description:
      "A portfolio project presenting technical skills, projects, and professional profile through responsive layouts and clear navigation.",
    technologies: ["React", "HTML5", "CSS3", "JavaScript", "Supabase"],
    contributions: [
      "Organized project and professional information.",
      "Used AI-assisted development for code generation, debugging, content preparation, and refinement.",
    ],
  },
];

export const education = [
  {
    title: "B.Tech, Computer Science and Engineering",
    institution: "Younus College of Engineering and Technology",
    location: "Kollam, Kerala",
    period: "2022–2026",
    description:
      "Undergraduate studies providing an academic foundation for software development, artificial intelligence, computer vision, databases, and web applications.",
  },
  {
    title: "Higher Secondary Education",
    institution: "Government Model H.S.S.",
    location: "Vettikavala P.O., Kottarakkara, Kerala",
    period: "2020–2022",
  },
  {
    title: "SSLC",
    institution: "St. Mary's HSS",
    location: "Kizhakkekara, Kottarakkara",
    period: "2019–2020",
  },
];

export const workshops = [
  {
    title: "Android Application Design and UI/UX Design",
    organization: "Internship",
    location: "Kochi",
    period: "May–June 2025",
    description:
      "Learned Android design principles and UI/UX concepts.",
  },
  {
    title: "Machine Learning Workshop",
    organization: "ICT Academy of Kerala",
    location: "Trivandrum",
    period: "July 2024",
    description:
      "Gained practical exposure to machine learning, data analysis, and model optimization.",
  },
  {
    title: "Embedded Systems and Robotics",
    organization: "Internship",
    location: "Kochi",
    period: "May 2023",
    description:
      "Gained foundational exposure to embedded systems and robotics concepts.",
  },
];

export const skillGroups = [
  {
    category: "Digital marketing",
    skills: [
      "Content marketing",
      "Social media marketing",
      "Brand visibility",
      "Online promotional content",
    ],
  },
  {
    category: "SEO, AEO & GEO",
    skills: [
      "Keyword research",
      "Search intent analysis",
      "On-page SEO",
      "Off-page SEO fundamentals",
      "Technical SEO fundamentals",
      "Metadata optimization",
      "Heading and content structure",
      "Internal linking",
      "Answer-focused content",
    ],
  },
  {
    category: "Frontend development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & databases",
    skills: [
      "Python",
      "Node.js",
      "Express.js",
      "FastAPI",
      "MySQL",
      "Supabase",
      "Firebase",
      "MongoDB",
      "SQLite",
      "REST APIs",
    ],
  },
  {
    category: "AI & development tools",
    skills: [
      "ChatGPT",
      "Google Gemini",
      "Claude",
      "Lovable",
      "Prompt engineering",
      "AI-assisted coding",
      "Code generation",
      "Debugging",
      "Website prototyping",
    ],
  },
  {
    category: "Creative tools",
    skills: [
      "Canva",
      "Runway",
      "Kling AI",
      "Pika",
      "Luma Dream Machine",
      "HeyGen",
      "DALL·E",
      "CapCut",
      "Adobe Premiere Pro",
    ],
  },
  {
    category: "SEO & analytics tools",
    skills: [
      "Google Search Console",
      "Google Analytics 4",
      "Google Keyword Planner",
      "Ahrefs",
      "Semrush",
      "Screaming Frog",
      "PageSpeed Insights",
    ],
  },
  {
    category: "Professional skills",
    skills: [
      "Analytical thinking",
      "Problem-solving",
      "Creativity",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Time management",
    ],
  },
  {
    category: "Languages",
    skills: ["English", "Malayalam", "Tamil"],
  },
];

export const socialLinks = {
  github: "https://github.com/muhammadashiqsa",
  linkedin: "https://www.linkedin.com/in/muhammadashiqsashiq",
  email: "muhammadashiqsa@gmail.com",
  phone: "+91 9037317540",
};
