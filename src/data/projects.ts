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
    shortDescription: "Neo-brutalist personal note vault for rapid capture, custom folder shelves, and instant 1-click clipboard sharing.",
    extendedDescription: "A minimalist knowledge vault enabling students and developers to capture instant thoughts, organize study materials into categorised shelves, and share dynamic lists effortlessly.",
    thumbnail: "/projects/remanote.png",
    liveUrl: "https://remanote.vercel.app/",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["React", "JavaScript", "HTML5", "Tailwind CSS", "Vercel"],
    keyFeatures: [
      "Neo-Brutalist Pop Bento UI design system",
      "Interactive Shelves and Category Folder organisation",
      "Instant 1-click clipboard note and todo list sharing",
      "Dynamic search and keyword filtering across vaults"
    ],
    status: "Live Production",
    featured: true,
  },
  {
    id: "smartblood",
    title: "SmartBlood Emergency System",
    slug: "smartblood",
    category: "Data Science & Python",
    shortDescription: "Emergency hospital-to-donor matching web platform powered by Haversine spatial proximity algorithms directly in MySQL.",
    extendedDescription: "Integrates Haversine spatial logic in MySQL to calculate real-time donor distances, applying combined proximity and recency ranking with strict 90-day safe intervals.",
    thumbnail: "/projects/smartblood.png",
    githubUrl: "https://github.com/vireshnagthane/SmartBlood-Emergency-System",
    technologies: ["Python", "Flask", "MySQL", "Haversine", "JavaScript"],
    keyFeatures: [
      "Haversine formula spatial calculations in MySQL",
      "Dynamic ranking engine with Proximity & Recency scores",
      "Automated 90-day safe donation interval checks",
      "Administrative portal with verified donor lookup"
    ],
    status: "Academic Project",
    featured: true,
  },
  {
    id: "kalpana-dental",
    title: "Kalpana Multispeciality Dental Hospital",
    slug: "kalpana-dental",
    category: "Web Development",
    shortDescription: "Modern clinic platform featuring clinical treatment showcases, doctor credentials, and direct WhatsApp-integrated booking.",
    extendedDescription: "A modern healthcare platform designed for Kalpana Multispeciality Dental Hospital featuring treatment catalogs, doctor profiles, patient testimonials, and appointment enquiry management.",
    thumbnail: "/projects/kalpana-dental.png",
    liveUrl: "https://kalpana-multispeciality-dental-hosp.vercel.app/",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Supabase"],
    keyFeatures: [
      "Interactive treatment catalog with clinical cases",
      "One-click WhatsApp appointment enquiry integration",
      "Doctor profile and specialty verification showcase",
      "Supabase backend for appointment request collection"
    ],
    status: "Live Production",
    featured: true,
  },
  {
    id: "semd-lms",
    title: "SEMD Learning Management System",
    slug: "semd-lms",
    category: "Web Development",
    shortDescription: "Lightweight digital learning management platform for course curriculum exploration and interactive study progress planning.",
    extendedDescription: "A modern, minimalist LMS developed to streamline academic planning, course tracking, and study task organization deployed live on Vercel.",
    thumbnail: "/projects/semd-lms.png",
    liveUrl: "https://studentlearningmanagementsystem-sigma.vercel.app/",
    githubUrl: "https://github.com/vireshnagthane/SEMD-LMS-SYSTEM",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM API", "Vercel"],
    keyFeatures: [
      "Clean minimal black-and-white responsive UI",
      "Course curriculum showcase and syllabus catalog",
      "Interactive study planner with progress task tracking",
      "Fast zero-latency deployment on Vercel"
    ],
    status: "Live Production",
    featured: true,
  },
  {
    id: "mayur-driving-school",
    title: "Mayur Driving School App",
    slug: "mayur-driving-school",
    category: "Android & Mobile",
    shortDescription: "Native Android app built with Kotlin and Cloud Firestore for student registration, lesson attendance, and fee tracking.",
    extendedDescription: "Replaces paper logbooks with cloud sync, real-time student attendance, license progress tracking, and interactive RTO practice quizzes.",
    thumbnail: "/projects/mayur-driving-school.png",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["Kotlin", "Android Studio", "Firebase Firestore", "Material Design"],
    keyFeatures: [
      "Student digital onboarding and license tracking",
      "Daily driving lesson attendance recording",
      "Fee payment status and pending dues tracker",
      "RTO traffic signs practice quiz module"
    ],
    status: "Functional Prototype",
    featured: false,
  },
  {
    id: "msrtc-bus-tracking",
    title: "Offline MSRTC Bus Tracking System",
    slug: "msrtc-bus-tracking",
    category: "Systems & IoT",
    shortDescription: "Rural transit tracking concept using cellular tower triangulation and offline route caching without 4G/5G dependance.",
    extendedDescription: "Explores cellular tower triangulation, offline route matching via pre-cached timetable algorithms, and SMS crowdsourcing to estimate transit times.",
    thumbnail: "/projects/msrtc-bus-tracking.png",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["Kotlin", "Android", "SQLite / Room", "Cellular APIs"],
    keyFeatures: [
      "Offline timetable and route topological matching engine",
      "Cell ID based tower positioning for rural regions",
      "Lightweight SMS-triggered status updates",
      "Battery-efficient background route deviation detection"
    ],
    status: "Concept & Architecture",
    featured: false,
  },
  {
    id: "coffee-cafe",
    title: "Coffee Cafe Management System",
    slug: "coffee-cafe",
    category: "Web Development",
    shortDescription: "Point-of-sale and inventory platform built with native PHP and MySQL featuring role-based auth and CSRF protection.",
    extendedDescription: "Features password-hashed admin/cashier accounts, POS terminal with server-side tax/discount calculation, and category inventory management.",
    thumbnail: "/projects/coffee-cafe.png",
    githubUrl: "https://github.com/vireshnagthane/Coffee_Cafe",
    technologies: ["PHP", "MySQL", "PDO", "HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "Password-hashed accounts with CSRF protection",
      "Cashier login and role-based access validation",
      "POS terminal with server-side totals & discounts",
      "Product category and inventory management"
    ],
    status: "Academic Project",
    featured: false,
  },
  {
    id: "saileela-hospital",
    title: "Saileela Hospital Web Portal",
    slug: "saileela-hospital",
    category: "Web Development",
    shortDescription: "Healthcare portal presenting clinical departments, emergency casualty helpline, and doctor consulting schedules.",
    extendedDescription: "Dedicated web portal conceptualized for patient access to department directories, consulting hours, and appointment inquiries.",
    thumbnail: "/projects/saileela-hospital.png",
    githubUrl: "https://github.com/vireshnagthane",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
    keyFeatures: [
      "Department directory with service descriptions",
      "Doctor outpatient consulting schedule",
      "24/7 Emergency casualty helpline prominence",
      "Patient appointment inquiry form"
    ],
    status: "Functional Prototype",
    featured: false,
  }
];
