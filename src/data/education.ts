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
  websiteUrl?: string;
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
    logoUrl: "/assets/sanjivani-logo.png",
    websiteUrl: "https://sanjivanicoe.org.in/",
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Object Oriented Programming (Java/C++)",
      "Computer Networks & Protocols",
      "Operating Systems & Linux",
      "Software Engineering",
      "Data Science Fundamentals"
    ],
    skills: [
      "Java",
      "Python",
      "C / C++",
      "SQL / MySQL",
      "Data Structures",
      "Computer Networks",
      "Cloud Fundamentals"
    ]
  },
  {
    id: "indirabai-hsc",
    institution: "KAI INDIRABAI HIGHSCHOOL",
    degree: "Higher Secondary (HSC - XII)",
    fieldOfStudy: "Science Stream",
    period: "Completed 2024",
    status: "HSC Science",
    grade: "81.40%",
    location: " Maharashtra",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "English"
    ],
    skills: [
      "Mathematics & Calculus",
      "Analytical Problem Solving",
      "Computing Principles"
    ]
  },
  {
    id: "shastri-ssc",
    institution: "Lal Bahadur Shastri School",
    degree: "Secondary School Certificate (X)",
    fieldOfStudy: "General Secondary Curriculum",
    period: "Completed 2022",
    status: "SSC Board",
    grade: "92.40%",
    location: "Udgir, Maharashtra",
    coursework: [
      "Mathematics",
      "General Science",
      "Social Sciences",
      "Languages"
    ],
    skills: [
      "Mathematical Foundations",
      "Logical Aptitude",
      "Academic Discipline"
    ]
  }
];
