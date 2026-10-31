export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Web Development' | 'Android & Mobile' | 'Data Science & Python' | 'Systems & IoT';
  shortDescription: string;
  extendedDescription: string;
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  keyFeatures: string[];
  status: 'Live Production' | 'Functional Prototype' | 'Academic Project' | 'Concept & Architecture';
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "remanote",
    title: "Remanote",
    slug: "remanote",
    category: "Web Development",
    shortDescription: "A personal notes and learning platform designed to make it effortless to manage study notes, lists, tags, and learning vaults with a neo-brutalist pop bento aesthetic.",
    extendedDescription: "Remanote is a production web application engineered as a personal knowledge vault. It empowers students and developers to capture instant thoughts, organize study materials into categorised shelves, copy notes directly with formatted clipboard integration, and share dynamic lists effortlessly. Built with responsive layouts and vibrant visual ergonomics.",
    thumbnail: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://remanote.vercel.app/",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["React", "JavaScript", "HTML5", "CSS3 / Tailwind", "Vercel"],
    keyFeatures: [
      "Neo-Brutalist Pop Bento UI design system",
      "Interactive Shelves and Category Folder organisation",
      "Instant 1-click clipboard note and todo list sharing",
      "Dynamic search and keyword filtering across vaults",
      "Responsive layout optimized across mobile and desktop"
    ],
    status: "Live Production",
    featured: true,
  },
  {
    id: "smartblood",
    title: "SmartBlood Emergency System",
    slug: "smartblood",
    category: "Data Science & Python",
    shortDescription: "A database-driven hospital blood donor management system designed to rapidly connect emergency patients with compatible, verified donors.",
    extendedDescription: "Developed as a DBMS-driven emergency response web platform to eliminate critical communication delays during medical emergencies. Features structured donor registration, smart search matching algorithm by blood group and city, hospital administrative controls, and request management analytics.",
    thumbnail: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/vireshnagthane/SmartBlood-Emergency-System",
    technologies: ["Python", "Flask", "MySQL", "HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "Targeted blood group and geographic location matching",
      "Secure hospital administration and donor verification portal",
      "Relational schema optimized for fast emergency lookups",
      "Donor availability status toggle to prevent false leads",
      "Comprehensive emergency request logging and audit trail"
    ],
    status: "Academic Project",
    featured: true,
  },
  {
    id: "kalpana-dental",
    title: "Kalpana Dental Clinic Website",
    slug: "kalpana-dental",
    category: "Web Development",
    shortDescription: "A full-stack healthcare web platform featuring clinic treatments, patient stories, doctor profiles, and direct WhatsApp-integrated appointment enquiry.",
    extendedDescription: "A modern healthcare platform designed for Kalpana Multispeciality Dental Hospital. It features a complete treatment showcase, doctor credentials, patient testimonials, educational dental care guides, and an administrative dashboard for appointment enquiry management.",
    thumbnail: "/projects/kalpana-dental.png",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Supabase"],
    keyFeatures: [
      "Interactive treatment catalog with before-and-after cases",
      "One-click WhatsApp appointment enquiry integration",
      "Doctor profile and specialty verification showcase",
      "Supabase backend for appointment request collection",
      "Lighthouse-optimized mobile-first responsive design"
    ],
    status: "Functional Prototype",
    featured: true,
  },
  {
    id: "mayur-driving-school",
    title: "Mayur Driving School App",
    slug: "mayur-driving-school",
    category: "Android & Mobile",
    shortDescription: "An Android application engineered with Kotlin and Firebase Firestore to streamline student registration, attendance tracking, and fee management for driving schools.",
    extendedDescription: "A native mobile application built to modernize administrative operations for driving institutions. Replaces traditional paper ledgers with real-time cloud data sync, automated attendance logging, student license progress tracking, and interactive RTO practice quizzes.",
    thumbnail: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["Kotlin", "Android Studio", "Firebase Firestore", "Material Design"],
    keyFeatures: [
      "Student digital onboarding and license lifecycle tracking",
      "Daily driving lesson attendance recording",
      "Fee payment status and pending dues tracker",
      "RTO traffic signs and driving test practice quiz module",
      "Firebase Cloud Firestore for real-time state synchronization"
    ],
    status: "Functional Prototype",
    featured: true,
  },
  {
    id: "msrtc-bus-tracking",
    title: "Offline MSRTC Bus Tracking System",
    slug: "msrtc-bus-tracking",
    category: "Systems & IoT",
    shortDescription: "An innovative IoT and mobile system concept to provide transit bus-location updates for rural passengers in areas with spotty or no internet connectivity.",
    extendedDescription: "A research-backed student project addressing the persistent problem of rural transit unpredictability in Maharashtra. The system concept explores cellular tower triangulation, offline route matching via pre-cached timetable algorithms, and SMS/mesh crowdsourcing to estimate bus arrival times without requiring constant 4G/5G data connections.",
    thumbnail: "/projects/bus-tracking.png",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["Kotlin", "Android", "SQLite / Room", "Cellular Telephony APIs", "Geospatial Data"],
    keyFeatures: [
      "Offline timetable and route topological matching engine",
      "Cell ID based tower positioning for internet-deprived regions",
      "Lightweight SMS-triggered status updates for commuters",
      "Battery-efficient background route deviation detection",
      "Interactive presentation & feasibility research prototype"
    ],
    status: "Concept & Architecture",
    featured: true,
  },
  {
    id: "coffee-cafe",
    title: "Coffee Cafe Management System",
    slug: "coffee-cafe",
    category: "Web Development",
    shortDescription: "A database-driven cafe billing, inventory, and order management application designed for streamlined counter operations and financial tracking.",
    extendedDescription: "A web management solution developed to simplify daily operations for coffee shops. Provides counter staff with an intuitive interface to select menu items, generate instant tax invoices, manage table occupancy, and review end-of-day sales totals.",
    thumbnail: "/projects/coffee-cafe.png",
    githubUrl: "https://github.com/vireshnagthane/Coffee_Cafe",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    keyFeatures: [
      "Interactive menu ordering and item quantity selection",
      "Instant billing computation with automatic tax calculation",
      "User authentication and role-based staff authorization",
      "Daily order history and revenue reporting logs",
      "Clean relational database schema for fast transaction updates"
    ],
    status: "Academic Project",
    featured: false,
  },
  {
    id: "semd-lms",
    title: "SEMD Learning Management System",
    slug: "semd-lms",
    category: "Web Development",
    shortDescription: "A digital learning management system (LMS) enabling teachers to upload educational coursework and students to access notes, submit assignments, and track progress.",
    extendedDescription: "A centralized educational platform developed to support seamless digital classroom workflows. Enables educators to publish syllabi, share lecture notes, and review submitted assignments, while offering students an intuitive dashboard to monitor course deadlines and submissions.",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/vireshnagthane/SEMD-LMS-SYSTEM",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM API", "LocalStorage"],
    keyFeatures: [
      "Role-tailored dashboards for instructors and students",
      "Course material organization by subject and unit modules",
      "Assignment submission portal with status confirmation",
      "Student learning milestone and progress tracking",
      "Lightweight client-side architecture with zero latency"
    ],
    status: "Academic Project",
    featured: false,
  },
  {
    id: "saileela-hospital",
    title: "Saileela Hospital Web Portal",
    slug: "saileela-hospital",
    category: "Web Development",
    shortDescription: "A healthcare informational portal designed to present clinical departments, emergency medical services, and doctor consulting schedules.",
    extendedDescription: "A dedicated web portal conceptualized for Saileela Hospital to facilitate patient access to vital healthcare information. Features dedicated departments for general medicine, surgery, and emergency care, paired with responsive contact forms for visiting patients.",
    thumbnail: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
    keyFeatures: [
      "Comprehensive department directory with service descriptions",
      "Doctor duty roster and outpatient consulting schedule",
      "24/7 Emergency casualty helpline prominence",
      "Patient appointment inquiry form with basic validation",
      "Fully responsive design adhering to healthcare accessibility"
    ],
    status: "Functional Prototype",
    featured: false,
  }
];
