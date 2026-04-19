export const personalInfo = {
  name: "Pinisetty Hanumath Satya Kiran",
  location: "Vijayawada, India",
  phone: "9989455477",
  email: "kiranpinisetty@gmail.com",
  linkedin: "https://linkedin.com/in/kiranpinisetty",
  github: "https://github.com/kiranpinisetty",
  typingText: "Fresher Seeking Opportunities in IT Domain",
};

export const quickFacts = [
  "Open to Work",
  "2026 Graduate",
  "Entry-Level IT Roles",
];

export const objective =
  "Computer Science and Engineering graduate (2026) with hands-on experience building full-stack applications using ASP.NET Core, C#, React, and MySQL. Experienced in RESTful API design and frontend development through academic projects and active internships. Seeking an entry-level Software Engineer or .NET Developer role to contribute and grow within a product-driven team.";

export const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    year: "2022 - 2026",
    institution:
      "Andhra Loyola Institute of Engineering and Technology, Vijayawada",
    score: "CGPA: 7.33",
  },
  {
    title: "Intermediate (State Board)",
    year: "2022",
    institution: "Ignite Junior College, Hyderabad",
    score: "Percentage: 82%",
  },
  {
    title: "Class X (CBSE)",
    year: "2020",
    institution: "Vasavi Ideal Public School",
    score: "Percentage: 79%",
  },
];

export const skills = [
  {
    category: "Programming",
    items: [
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    category: "Frameworks",
    items: [
      {
        name: "ASP.NET Core",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    category: "Web",
    items: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Swagger",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
      },
      {
        name: "Wireshark",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg",
      },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      {
        name: "REST API Design",
        icon: "https://img.icons8.com/fluency/96/source-code.png",
      },
      {
        name: "OOP",
        icon: "https://img.icons8.com/fluency/96/data-configuration.png",
      },
      {
        name: "Data Structures",
        icon: "https://img.icons8.com/fluency/96/tree-structure.png",
      },
      {
        name: "MVC Architecture",
        icon: "https://img.icons8.com/fluency/96/layers.png",
      },
      {
        name: "Dependency Injection",
        icon: "https://img.icons8.com/fluency/96/settings.png",
      },
      {
        name: "Operating Systems",
        icon: "https://img.icons8.com/fluency/96/monitor.png",
      },
    ],
  },
];

export const experiences = [
  {
    role: "Software Intern (.NET & Frontend)",
    duration: "Dec 2025 – Present",
    company: "Svestran IT Solutions, Vijayawada",
    points: [
      "Developed and enhanced frontend UI components for SvesFit, a gym management platform, as part of a 6–8 member development team.",
      "Integrated OTP-based authentication flow on the backend, contributing to secure user verification.",
      "Collaborated in redesigning the company landing page, improving visual structure and responsive layout.",
      "Tested and validated REST API functionality using Postman, supporting QA and feature delivery cycles.",
    ],
  },
  {
    role: "Summer Intern – Artificial Intelligence",
    duration: "May 2025 – Jul 2025",
    company: "Amiers Society, Vijayawada",
    points: [
      "Built and fine-tuned NLP chatbot models using Hugging Face Transformers for conversational query handling.",
      "Developed a real-time object detection system using YOLOv5 and OpenCV for live video stream analysis.",
      "Gained hands-on exposure to AI workflows including text generation and image classification pipelines.",
    ],
  },
  {
    role: "Summer Intern – Cybersecurity",
    duration: "May 2024 – Jul 2024",
    company: "Amiers Society, Vijayawada",
    points: [
      "Performed web application security testing and hands-on network traffic analysis using Wireshark.",
      "Gained practical understanding of common web vulnerabilities and secure application practices.",
    ],
  },
];
export const projects = [
  {
    title: "Text-to-SQL Query Execution System",
    tech: "ASP.NET Core · React · MySQL · Groq AI · NLP",
    //status: "Published",
    github: "https://github.com/kiranpinisetty",
    publication: "https://zenodo.org/records/19613206",
    image: `${import.meta.env.BASE_URL}textSQL.png`,
    points: [
      "Built a full-stack AI-integrated web application that converts plain English queries into secure, executable SQL statements using LLM-based natural language processing.",
      "Designed a three-tier RESTful ASP.NET Core backend handling schema mapping, query processing, and result delivery with support for multiple live database connections.",
      "Implemented schema-aware prompting, read-only query validation, and SQL trace transparency to ensure secure and reliable data retrieval.",
      "Developed an interactive React frontend with session-based query history, schema explorer, and CSV export functionality.",
      "Research paper published and submitted to the Journal of Computer and Electrical Sciences (JCES).",
    ],
  },
  {
    title: "Telegram Chatbot with Multi-AI Engine",
    tech: "Java · Telegram Bot API · OpenAI API · Gemini API · Hugging Face",
    github: "https://github.com/kiranpinisetty/telegram-bot.git",
    image: `${import.meta.env.BASE_URL}Chatbot.png`,
    points: [
      "Developed a Java-based Telegram bot supporting menu-driven commands and natural language query handling across multiple AI engines.",
      "Integrated OpenAI, Gemini, and Hugging Face APIs with automatic engine fallback logic to ensure high availability.",
      "Implemented per-user AI engine selection and conversation reset with no database dependency, keeping the system lightweight and stateless.",
    ],
  },
  {
    title: "Umpire Gesture Detection System",
    tech: "Python · YOLOv5 · PyTorch · OpenCV · NumPy",
    linkedin:
      "https://www.linkedin.com/posts/kiranpinisetty_ai-machinelearning-deeplearning-ugcPost-7341340282707202049-Mf7P",
    image: `${import.meta.env.BASE_URL}umpire.png`,
    points: [
      "Developed a real-time computer vision system to detect and classify cricket umpire gestures from live video streams.",
      "Trained a deep learning pipeline using YOLOv5, achieving accurate multi-class gesture recognition with high precision.",
    ],
  },
  {
    title: "Rock-Paper-Scissors Game",
    tech: "HTML · CSS · JavaScript",
    live: "https://kiranpinisetty.github.io/rock-paper-scissors/",
    image: `${import.meta.env.BASE_URL}RockPaper.png`,
    points: [
      "Developed a browser-based Rock-Paper-Scissors game with clean UI and responsive design.",
      "Implemented game logic to evaluate user and system moves with score tracking.",
      "Added reset functionality for repeat play sessions.",
    ],
  },
];
export const achievements = [
  "Best Student - Cybersecurity Level 1 Hackathon (Supraja Technologies)",
];

export const certifications = [
  "Introduction to AI - Infosys Springboard",
  "Introduction to NLP - Infosys Springboard",
];

export const languages = ["English (Professional)", "Telugu (Native)"];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
