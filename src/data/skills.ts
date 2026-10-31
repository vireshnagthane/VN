export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Intermediate' | 'Exploring';
    icon?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems programming, backend logic, and application development.",
    skills: [
      { name: "Java", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "Kotlin", level: "Intermediate" },
      { name: "JavaScript", level: "Proficient" },
      { name: "PHP", level: "Intermediate" },
      { name: "HTML5", level: "Proficient" },
      { name: "CSS3", level: "Proficient" },
    ],
  },
  {
    title: "Frameworks & Backend",
    description: "Modern application frameworks, APIs, and runtime environments.",
    skills: [
      { name: "FastAPI", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Android Studio", level: "Intermediate" },
      { name: "Vercel", level: "Proficient" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Relational and NoSQL database engines for persistent, performant application state.",
    skills: [
      { name: "MySQL / MariaDB", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "Firebase Firestore", level: "Intermediate" },
      { name: "MongoDB", level: "Exploring" },
      { name: "SQLite / Room", level: "Intermediate" },
      { name: "PostgreSQL", level: "Exploring" },
    ],
  },
  {
    title: "Developer Tools & Design",
    description: "Development environments, version control, and UI/UX design tools.",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "VS Code", level: "Proficient" },
      { name: "Figma", level: "Intermediate" },
      { name: "Canva", level: "Intermediate" },
      { name: "Linux / Bash", level: "Intermediate" },
    ],
  },
  {
    title: "Data Science & Cloud",
    description: "Scientific libraries and cloud infrastructure domains guiding continuous growth.",
    skills: [
      { name: "pandas", level: "Intermediate" },
      { name: "NumPy", level: "Intermediate" },
      { name: "Matplotlib", level: "Intermediate" },
      { name: "scikit-learn", level: "Exploring" },
      { name: "Cloud Computing", level: "Exploring" },
      { name: "AWS Fundamentals", level: "Exploring" },
      { name: "Docker Basics", level: "Exploring" },
      { name: "IoT Architectures", level: "Exploring" },
    ],
  },
];
