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
    organization: "Indian Society for Technical Education (ISTE) Student Chapter",
    period: "Jan 2025 – Present",
    duration: "Ongoing",
    location: "Kopargaon, Maharashtra",
    type: "Campus Leadership",
    summary: "Managing end-to-end digital outreach, event publicity, and social media channels for the premier National Level Technical Festival organized at Sanjivani College of Engineering.",
    detailedPoints: [
      "Orchestrated cross-platform social media campaigns, designing high-impact banners, promo reels, and schedule announcements to drive student engagement.",
      "Spearheaded attendee registration drives across engineering institutions in Maharashtra, resulting in widespread participation.",
      "Coordinated with student organizing committees, faculty leads, and event speakers to ensure real-time event updates and highlight reels."
    ],
    skills: ["Social Media Strategy", "Digital Marketing", "Content Creation", "Graphic Design", "Event Promotion", "Team Leadership"]
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
    summary: "Completed rigorous coursework and practical labs covering enterprise network architecture, protocols, IP subnetting, switching, and routing foundations.",
    detailedPoints: [
      "Studied OSI and TCP/IP protocol stacks, IPv4 / IPv6 addressing structures, and Classless Inter-Domain Routing (CIDR).",
      "Gained hands-on proficiency in network topology design, packet switching, router configuration, and gateway routing.",
      "Conducted packet diagnostics and network troubleshooting using simulation tools including Cisco Packet Tracer."
    ],
    skills: ["Computer Networks", "Cisco NetAcad", "IPv4 / IPv6", "TCP/IP & UDP", "Subnetting", "Routing & Switching", "Network Security"]
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
    summary: "Pursuing Bachelor's in Information Technology with a strong focus on Data Structures, Database Systems, Computer Networks, and Cloud Infrastructure fundamentals.",
    detailedPoints: [
      "Maintaining consistent academic performance with current 7.30 CGPA.",
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
