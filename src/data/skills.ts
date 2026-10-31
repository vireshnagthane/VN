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
      { name: "HTML5", level: "Proficient" },
      { name: "CSS3", level: "Proficient" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Relational and NoSQL database engines for persistent, performant application state.",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "Firebase Firestore", level: "Intermediate" },
      { name: "MongoDB", level: "Exploring" },
      { name: "SQLite / Room", level: "Intermediate" },
      { name: "PostgreSQL", level: "Exploring" },
    ],
  },
  {
    title: "Development & Backend",
    description: "Frameworks, web technologies, runtime environments, and version control tools.",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Android Studio", level: "Intermediate" },
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
    ],
  },
  {
    title: "Data Science & Analytics",
    description: "Scientific libraries and methodologies for exploratory data analysis and ML experimentation.",
    skills: [
      { name: "pandas", level: "Intermediate" },
      { name: "NumPy", level: "Intermediate" },
      { name: "Matplotlib", level: "Intermediate" },
      { name: "scikit-learn", level: "Exploring" },
      { name: "Exploratory Data Analysis", level: "Intermediate" },
      { name: "Data Cleaning & Preprocessing", level: "Intermediate" },
    ],
  },
  {
    title: "Cloud & Areas of Interest",
    description: "Strategic domains and future specializations guiding continuous technical growth.",
    skills: [
      { name: "Cloud Computing", level: "Exploring" },
      { name: "Amazon Web Services (AWS)", level: "Exploring" },
      { name: "Docker Fundamentals", level: "Exploring" },
      { name: "Machine Learning Concepts", level: "Exploring" },
      { name: "Internet of Things (IoT)", level: "Exploring" },
      { name: "Linux / Bash", level: "Intermediate" },
    ],
  },
];
