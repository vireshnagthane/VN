export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  grade: string;
  location: string;
  status: string;
  coursework: string[];
  skills: string[];
  description?: string;
  logoUrl?: string;
}

export const educationData: EducationItem[] = [
  {
    id: "sanjivani-it",
    institution: "Sanjivani College of Engineering",
    degree: "Bachelor of Technology - B.Tech",
    fieldOfStudy: "Information Technology",
    period: "2024 – 2028 (Expected)",
    status: "Third Year Student",
    grade: "7.30 / 10 CGPA",
    location: "Kopargaon, Maharashtra, India",
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Object Oriented Programming (Java/C++)",
      "Computer Networks & Protocols",
      "Operating Systems & Linux",
      "Software Engineering & Agile",
      "Data Science & Statistical Modeling",
      "Theory of Computation"
    ],
    skills: [
      "Java",
      "Python",
      "C / C++",
      "SQL / MySQL",
      "Data Structures",
      "Computer Networks",
      "Cloud Fundamentals",
      "Data Science"
    ],
    description: "Pursuing in-depth academic studies and hands-on laboratory work in software development, data systems, cloud architectures, and algorithmic problem-solving. Active contributor to technical student projects and academic innovation initiatives."
  },
  {
    id: "indirabai-hsc",
    institution: "KAI INDIRABAI HIGHSCHOOL",
    degree: "Senior Secondary (XII)",
    fieldOfStudy: "Science Stream",
    period: "Completed 2024",
    status: "Higher Secondary Certificate (HSC)",
    grade: "81.00%",
    location: "Kopargaon, Maharashtra, India",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science / Information Technology",
      "English"
    ],
    skills: [
      "Mathematics & Calculus",
      "Analytical Problem Solving",
      "Basic Computing Principles",
      "Physics Mechanics"
    ],
    description: "Completed higher secondary education in the Science stream with distinction (81.00%), developing strong mathematical reasoning, scientific curiosity, and foundational computing skills."
  },
  {
    id: "shastri-ssc",
    institution: "Lal Bahadur Shastri School",
    degree: "Secondary School Certificate (X)",
    fieldOfStudy: "General Secondary Curriculum",
    period: "Completed 2022",
    status: "Secondary School Certificate (SSC)",
    grade: "92.40%",
    location: "Kopargaon, Maharashtra, India",
    coursework: [
      "Mathematics",
      "General Science",
      "Social Sciences",
      "English & Languages"
    ],
    skills: [
      "Mathematical Foundations",
      "Logical Aptitude",
      "Academic Excellence"
    ],
    description: "Graduated secondary schooling with high distinction (92.40%), establishing a consistent record of academic excellence, discipline, and interest in technology."
  }
];
