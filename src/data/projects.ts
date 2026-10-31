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
    shortDescription: "An advanced DBMS-based emergency response web platform engineered to bridge critical gaps between hospitals and verified blood donors using spatial algorithms.",
    extendedDescription: "SmartBlood is an advanced emergency system integrating mathematical spatial logic directly into the MySQL database engine. It calculates physical distances between hospitals and donors via the Haversine formula, ranks candidates using a combined Proximity and Recency algorithm, and enforces strict automated 90-day safe-interval rules. Developed by Viresh Nagthane, Abhishek Shinde, Tejaswini Bagul, and Manav Sinare.",
    thumbnail: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/vireshnagthane/SmartBlood-Emergency-System",
    technologies: ["Python", "Flask", "MySQL", "Haversine Formula", "HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "Haversine formula spatial distance calculations executed directly in MySQL",
      "Dynamic ranking engine combining real-time Proximity Score and Recency Score",
      "Automated health checks strictly enforcing a 90-day safe donation interval",
      "Hospital administrative portal with verified donor lookup and inventory management",
      "Fast response workflow minimizing critical delays during life-threatening emergencies"
    ],
    status: "Academic Project",
    featured: true,
  },
  {
    id: "kalpana-dental",
    title: "Kalpana Multispeciality Dental Hospital",
    slug: "kalpana-dental",
    category: "Web Development",
    shortDescription: "A full-stack healthcare web platform featuring clinic treatments, patient stories, doctor profiles, and direct WhatsApp-integrated appointment enquiry.",
    extendedDescription: "A modern healthcare platform designed for Kalpana Multispeciality Dental Hospital. It features a complete treatment showcase, doctor credentials, patient testimonials, educational dental care guides, and an administrative dashboard for appointment enquiry management.",
    thumbnail: "/projects/kalpana-dental.png",
    liveUrl: "https://kalpana-multispeciality-dental-hosp.vercel.app/",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Supabase"],
    keyFeatures: [
      "Interactive treatment catalog with before-and-after cases",
      "One-click WhatsApp appointment enquiry integration",
      "Doctor profile and specialty verification showcase",
      "Supabase backend for appointment request collection",
      "Lighthouse-optimized mobile-first responsive design"
    ],
    status: "Live Production",
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
    shortDescription: "A local-first cafe point-of-sale and inventory platform built with native PHP and MySQL/MariaDB with PDO, password hashing, and CSRF protection.",
    extendedDescription: "A secure, local-first management system developed for coffee shop counter operations. Features password-hashed administrator and cashier accounts, cashier registration, role checks, CSRF protection, POST-only state changes, server-side calculated totals, and validated product image uploads.",
    thumbnail: "/projects/coffee-cafe.png",
    githubUrl: "https://github.com/vireshnagthane/Coffee_Cafe",
    technologies: ["PHP", "MySQL / MariaDB", "PDO", "HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "Password-hashed administrator and cashier accounts with CSRF protection",
      "Cashier login and registration with role-based access validation",
      "POS terminal with server-side totals, tax calculation, and discounts",
      "Product category and inventory management with image uploads",
      "Cash, UPI, and Card transaction recording with end-of-day reports"
    ],
    status: "Academic Project",
    featured: false,
  },
  {
    id: "semd-lms",
    title: "SEMD Learning Management System",
    slug: "semd-lms",
    category: "Web Development",
    shortDescription: "A lightweight digital learning management system enabling students to track coursework, plan study tasks, and explore educational curriculum.",
    extendedDescription: "A modern, minimalist LMS developed to streamline academic planning and study tracking. Provides students with interactive course showcases, task management, study planner tracking, and responsive contact sections deployed live on Vercel.",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://studentlearningmanagementsystem-sigma.vercel.app/",
    githubUrl: "https://github.com/vireshnagthane/SEMD-LMS-SYSTEM",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM API", "Vercel"],
    keyFeatures: [
      "Modern minimal black-and-white responsive UI",
      "Course curriculum showcase and syllabus catalog",
      "Interactive study planner with progress task tracking",
      "Dedicated contact and student inquiry section",
      "Zero-latency deployment hosted live on Vercel"
    ],
    status: "Live Production",
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
