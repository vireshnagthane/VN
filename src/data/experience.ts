export interface MilestoneItem {
  id: string;
  category: 'Education' | 'Projects & Building' | 'Data Science' | 'Cloud & Systems' | 'Leadership & Media' | 'Certifications';
  title: string;
  role: string;
  organization: string;
  period: string;
  duration: string;
  location: string;
  type: 'Degree Program' | 'Hands-on Building' | 'Technical Milestone' | 'Self-Directed Learning' | 'Campus Leadership' | 'Certification';
  summary: string;
  detailedPoints: string[];
  skills: string[];
}

export const journeyMilestones: MilestoneItem[] = [
  {
    id: "iste-techfest",
    category: "Leadership & Media",
    title: "ISTE National Level TechFest",
    role: "Social Media Handler & Digital Lead",
    organization: "ISTE Student Chapter",
    period: "Jan 2025 – Present",
    duration: "Ongoing",
    location: "Kopargaon, Maharashtra",
    type: "Campus Leadership",
    summary: "Leading digital outreach, design campaigns, and social media branding for the annual National Level TechFest.",
    detailedPoints: [
      "Orchestrated cross-platform social media campaigns, designing banners and promo announcements to drive student registrations.",
      "Spearheaded attendee registration drives across Maharashtra colleges resulting in widespread participation.",
      "Coordinated with student organizing committees and event speakers for real-time announcements."
    ],
    skills: ["Social Media Strategy", "Digital Marketing", "Content Creation", "Graphic Design", "Event Promotion"]
  },
  {
    id: "cisco-networking",
    category: "Certifications",
    title: "Cisco Networking Academy",
    role: "Networking Basics Virtual Trainee",
    organization: "NetAcad Cisco Virtual",
    period: "Jan 2026 – Apr 2026",
    duration: "4 Months",
    location: "Virtual / Online",
    type: "Certification",
    summary: "Hands-on certification in enterprise network architecture, OSI/TCP-IP protocols, IP subnetting, and switching.",
    detailedPoints: [
      "Studied OSI and TCP/IP protocol stacks, IPv4 / IPv6 addressing structures, and CIDR subnetting.",
      "Gained hands-on proficiency in network topology design, packet switching, and router configuration.",
      "Conducted packet diagnostics and network troubleshooting using Cisco Packet Tracer."
    ],
    skills: ["Computer Networks", "Cisco NetAcad", "IPv4 / IPv6", "TCP/IP & UDP", "Subnetting", "Routing & Switching"]
  },
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
    summary: "Pursuing Bachelor's in IT with a 7.30 CGPA, focusing on Data Structures, Database Systems, Computer Networks, and Cloud fundamentals.",
    detailedPoints: [
      "Maintaining consistent academic performance with current 7.30 CGPA.",
      "Engaged in laboratory coursework covering Operating Systems, DBMS schema modeling, and OOP paradigms in Java and C++.",
      "Collaborating on engineering student projects and technical presentations."
    ],
    skills: ["Data Structures", "Java", "C++", "DBMS", "Computer Networks", "Software Engineering"]
  },
  {
    id: "remanote-web-dev",
    category: "Projects & Building",
    title: "Full-Stack Web Development",
    role: "Application Builder & Designer",
    organization: "Independent Projects",
    period: "2024 – Present",
    duration: "Ongoing",
    location: "Maharashtra, India",
    type: "Hands-on Building",
    summary: "Built and deployed Remanote, Kalpana Dental Hospital, and SEMD LMS to production on Vercel.",
    detailedPoints: [
      "Engineered Remanote with focus on rapid note capture and formatted clipboard sharing.",
      "Developed responsive interfaces using modern React, Tailwind CSS, and Vite tooling.",
      "Integrated RESTful APIs, database persistence, and automated Vercel CI/CD."
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "Vercel", "REST APIs", "UI/UX Design"]
  },
  {
    id: "data-science-dbms",
    category: "Data Science",
    title: "Data Science & Spatial DBMS",
    role: "Data Science & Backend Enthusiast",
    organization: "Technical Research & Labs",
    period: "2024 – 2025",
    duration: "1 Year",
    location: "Kopargaon, Maharashtra",
    type: "Technical Milestone",
    summary: "Engineered database-driven solutions like SmartBlood using spatial Haversine proximity algorithms in MySQL.",
    detailedPoints: [
      "Designed normalized relational database schemas in MySQL for real-time donor lookups.",
      "Performed Exploratory Data Analysis (EDA) using NumPy, pandas, and Matplotlib across datasets.",
      "Studied foundational Machine Learning pipelines and evaluation metrics."
    ],
    skills: ["Python", "MySQL", "pandas", "NumPy", "Matplotlib", "Data Analysis"]
  },
  {
    id: "cloud-systems-iot",
    category: "Cloud & Systems",
    title: "Cloud Computing & Systems",
    role: "Aspiring Cloud Engineer",
    organization: "Self-Directed Learning",
    period: "2025 – Present",
    duration: "Continuous",
    location: "Remote / Campus",
    type: "Self-Directed Learning",
    summary: "Working towards cloud engineering via AWS foundational services, Linux automation, and transit architectures.",
    detailedPoints: [
      "Conceptualized the Offline MSRTC Bus Tracking System researching cellular triangulation without 4G/5G.",
      "Exploring AWS foundational services (EC2, S3, IAM, VPC) and basic Docker containerization.",
      "Practicing command-line tooling, bash automation, and Git workflows."
    ],
    skills: ["Cloud Computing", "AWS Fundamentals", "Linux", "Docker Basics", "IoT Architectures", "Git"]
  }
];
