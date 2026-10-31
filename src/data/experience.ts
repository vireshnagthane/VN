export interface MilestoneItem {
  id: string;
  category: 'Education' | 'Projects & Building' | 'Data Science' | 'Cloud & Systems';
  title: string;
  role: string;
  organization: string;
  period: string;
  duration: string;
  location: string;
  type: 'Degree Program' | 'Hands-on Building' | 'Technical Milestone' | 'Self-Directed Learning';
  summary: string;
  detailedPoints: string[];
  skills: string[];
}

export const journeyMilestones: MilestoneItem[] = [
  {
    id: "sanjivani-journey",
    category: "Education",
    title: "Sanjivani College of Engineering",
    role: "Information Technology Undergraduate",
    organization: "Sanjivani College of Engineering",
    period: "2024 – Present",
    duration: "Third Year",
    location: "Kopargaon, Maharashtra, India",
    type: "Degree Program",
    summary: "Pursuing Bachelor's in Information Technology with a strong focus on Data Structures, Database Systems, Computer Networks, and Cloud Infrastructure fundamentals.",
    detailedPoints: [
      "Maintaining consistent academic performance with current 7.3 CGPA.",
      "Engaged in university lab coursework covering Operating Systems, DBMS schema modeling, and OOP paradigms in Java and C++.",
      "Collaborating on engineering team projects and technical seminar presentations."
    ],
    skills: ["Data Structures", "Java", "C++", "DBMS", "Computer Networks", "Software Engineering"]
  },
  {
    id: "remanote-web-dev",
    category: "Projects & Building",
    title: "Full-Stack Web Development & Product Building",
    role: "Application Builder & Designer",
    organization: "Independent Projects",
    period: "2024 – Present",
    duration: "Ongoing",
    location: "Maharashtra, India",
    type: "Hands-on Building",
    summary: "Built and deployed Remanote, a live neo-brutalist personal notes and vault application, alongside the Kalpana Dental Hospital platform and SEMD LMS.",
    detailedPoints: [
      "Engineered Remanote with focus on rapid note capture, custom folder shelves, and instant copy/sharing capabilities.",
      "Developed responsive interfaces and frontend workflows using modern React, Tailwind CSS, and Vite tooling.",
      "Integrated RESTful APIs, local persistence patterns, and deployment pipelines on Vercel."
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "Vercel", "REST APIs", "UI/UX Design"]
  },
  {
    id: "data-science-dbms",
    category: "Data Science",
    title: "Data Science, Python & DBMS Solutions",
    role: "Data Science & Backend Enthusiast",
    organization: "Technical Research & Labs",
    period: "2024 – 2025",
    duration: "1 Year",
    location: "Kopargaon, Maharashtra",
    type: "Technical Milestone",
    summary: "Engineered database-driven healthcare tools like SmartBlood Emergency System and explored Python analytics libraries for predictive data modeling.",
    detailedPoints: [
      "Designed and normalized relational database schemas in MySQL for immediate emergency donor lookups.",
      "Performed Exploratory Data Analysis (EDA) using NumPy, pandas, and Matplotlib across academic datasets.",
      "Studied foundational Machine Learning pipelines, scikit-learn models, and evaluation metrics."
    ],
    skills: ["Python", "MySQL", "pandas", "NumPy", "Matplotlib", "Data Analysis"]
  },
  {
    id: "cloud-systems-iot",
    category: "Cloud & Systems",
    title: "Cloud Computing & Systems Exploration",
    role: "Aspiring Cloud Engineer",
    organization: "Self-Directed Learning",
    period: "2025 – Present",
    duration: "Continuous",
    location: "Remote / Campus",
    type: "Self-Directed Learning",
    summary: "Working towards long-term career ambition of becoming a Cloud Engineer through focused learning of AWS services, Linux environments, and IoT transit architectures.",
    detailedPoints: [
      "Conceptualized the Offline MSRTC Bus Tracking System researching cellular triangulation and offline route caching without 4G/5G dependance.",
      "Exploring AWS foundational services (EC2, S3, IAM, VPC) and basic containerization concepts with Docker.",
      "Practicing command-line tooling, bash automation, and Git version control workflows."
    ],
    skills: ["Cloud Computing", "AWS Fundamentals", "Linux", "Docker Basics", "IoT Architectures", "Git"]
  }
];
