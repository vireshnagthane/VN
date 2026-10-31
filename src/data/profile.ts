export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'instagram' | 'twitter' | 'leetcode' | 'mail' | 'phone';
  visible: boolean;
  isExternal?: boolean;
}

export interface ProfileData {
  name: string;
  shortName: string;
  initials: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  careerGoal: string;
  avatarUrl: string;
  bannerUrl: string;
  resumeUrl: string;
  resumeAvailable: boolean;
  verified: boolean;
  educationSummary: {
    degree: string;
    field: string;
    institution: string;
    year: string;
    graduationYear: string;
    cgpa: string;
  };
  socialLinks: SocialLink[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
  };
}

export const profileData: ProfileData = {
  name: "Viresh Sunil Nagthane",
  shortName: "Viresh",
  initials: "VN",
  title: "IT Student & Developer",
  headline: "Information Technology Student | Developer | Data Science Enthusiast | Aspiring Cloud Engineer",
  bio: "I am an Information Technology student at Sanjivani College of Engineering, passionate about software development, problem-solving, data science, cloud computing, and emerging technologies. I enjoy building practical applications that solve real-world problems and exploring how technology can make everyday tasks easier. My interests include backend development, databases, artificial intelligence, cloud infrastructure, and full-stack application development. I am continuously improving my programming skills, working on projects, and preparing for opportunities where I can learn, collaborate, and build meaningful products.",
  location: "Kopargaon, Maharashtra, India",
  careerGoal: "Aspiring Cloud Engineer",
  avatarUrl: "/viresh.jpg",
  bannerUrl: "/assets/banner.svg",
  resumeUrl: "/resume/viresh-nagthane-resume.pdf",
  resumeAvailable: true,
  verified: true,
  educationSummary: {
    degree: "Bachelor's Degree",
    field: "Information Technology",
    institution: "Sanjivani College of Engineering, Kopargaon",
    year: "Third Year",
    graduationYear: "2028",
    cgpa: "7.3",
  },
  socialLinks: [
    {
      id: "email",
      name: "Email",
      url: "mailto:vireshnagthane@gmail.com",
      iconName: "mail",
      visible: true,
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/vireshnagthane",
      iconName: "github",
      visible: true,
      isExternal: true,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vireshnagthane/",
      iconName: "linkedin",
      visible: true,
      isExternal: true,
    },
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/viresh_09_/",
      iconName: "instagram",
      visible: true,
      isExternal: true,
    },
    {
      id: "twitter",
      name: "Twitter",
      url: "https://x.com/Charly59758925",
      iconName: "twitter",
      visible: true,
      isExternal: true,
    },
    {
      id: "leetcode",
      name: "LeetCode",
      url: "https://leetcode.com/u/viresh_09/",
      iconName: "leetcode",
      visible: true,
      isExternal: true,
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+919172200000",
      iconName: "phone",
      visible: false, // Set to true when verified phone is supplied
    },
  ],
  meta: {
    title: "Viresh Nagthane | IT Student & Developer",
    description: "Explore the portfolio, projects, technical skills, and learning journey of Viresh Sunil Nagthane, an Information Technology student interested in software development, Data Science, and Cloud Computing.",
    keywords: [
      "Viresh Nagthane",
      "Viresh Sunil Nagthane",
      "Information Technology",
      "Sanjivani College of Engineering",
      "Developer Portfolio",
      "Cloud Engineer",
      "Data Science",
      "Remanote",
      "SmartBlood",
      "Full Stack Developer"
    ],
    siteUrl: "https://vireshnagthane.vercel.app",
  },
};
