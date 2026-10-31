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
    grade: "7.3 CGPA",
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
  }
];
