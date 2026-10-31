export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'Web Architecture' | 'Databases' | 'Systems & IoT' | 'Data Science' | 'Cloud';
  readTime: string;
  status: 'Published' | 'Draft / In Progress';
  date: string;
  coverImage: string;
  tags: string[];
  contentExcerpt: string;
}

export const blogsData: BlogPost[] = [
  {
    id: "remanote-architecture",
    title: "Building Remanote: Designing a Neo-Brutalist Notes Vault for Fast Idea Capture",
    slug: "remanote-architecture",
    summary: "Reflections on building a personal note vault focused on high-speed capture, custom folder shelves, and tactile visual aesthetics.",
    category: "Web Architecture",
    readTime: "4 min read",
    status: "Published",
    date: "Oct 2026",
    coverImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "UI/UX", "Productivity", "Web Dev"],
    contentExcerpt: "When building Remanote, the primary question was how to eliminate the friction between having a thought and preserving it. Modern note apps are often either overly complex or visually bland. By adopting a neo-brutalist pop bento layout, notes remain visually distinct and enjoyable to revisit..."
  },
  {
    id: "smartblood-dbms-design",
    title: "Designing Schemas Under Pressure: Lessons from SmartBlood Emergency System",
    slug: "smartblood-dbms-design",
    summary: "How proper database normalization and query indexing can save vital seconds when matching blood donors during urgent medical situations.",
    category: "Databases",
    readTime: "5 min read",
    status: "Draft / In Progress",
    date: "Sep 2026",
    coverImage: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80",
    tags: ["Database", "MySQL", "Python", "Healthcare"],
    contentExcerpt: "In healthcare software, latency is not just an inconvenience—it can have life-or-death ramifications. In our 4th-semester DBMS project, we evaluated relational normal forms, avoiding redundant joins, and indexing location-based lookups..."
  },
  {
    id: "offline-bus-tracking-concept",
    title: "Tracking Buses Without Continuous 4G: Exploring Cellular Cell-ID and Offline Route Caching",
    slug: "offline-bus-tracking-concept",
    summary: "Exploring feasibility, battery trade-offs, and communication fallback channels for public transit tracking in rural areas.",
    category: "Systems & IoT",
    readTime: "6 min read",
    status: "Draft / In Progress",
    date: "Aug 2026",
    coverImage: "/projects/bus-tracking.png",
    tags: ["Android", "IoT", "Cellular", "Transit"],
    contentExcerpt: "While urban transit benefits from continuous GPS telemetry and high-speed data, intercity routes in rural Maharashtra often pass through deep cellular dead zones. Our research explores whether pre-cached topology models and opportunistic SMS alerts can bridge this gap..."
  },
  {
    id: "data-science-learning-journey",
    title: "My Data Science Journey: Making Sense of Raw Numbers with NumPy and pandas",
    slug: "data-science-learning-journey",
    summary: "A student's perspective on transitioning from basic Python syntax to exploratory data analysis and statistical visualization.",
    category: "Data Science",
    readTime: "4 min read",
    status: "Draft / In Progress",
    date: "Jul 2026",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Data Science", "Python", "pandas", "NumPy"],
    contentExcerpt: "Stepping into data science opened up a completely new perspective on coding. It shifted the mindset from deterministic algorithms to discovering patterns hidden inside messy datasets..."
  }
];
