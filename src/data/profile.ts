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
  phone: string;
  email: string;
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
  headline: "Information Technology Undergraduate · Full-Stack Builder · Aspiring Cloud Engineer",
  bio: "Third-year IT student at Sanjivani College of Engineering. Building fast web applications, exploring cloud architectures, and solving real-world problems through clean code.",
  location: "Udgir / Kopargaon, Maharashtra, India",
  careerGoal: "Aspiring Cloud Engineer",
  avatarUrl: "/viresh.jpg",
  bannerUrl: "/assets/profile-banner.jpg",
  resumeUrl: "/resume/viresh-nagthane-resume.pdf",
  resumeAvailable: true,
  verified: true,
  phone: "+91 8788021716",
  email: "vireshnagthane9@gmail.com",
  educationSummary: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    institution: "Sanjivani College of Engineering, Kopargaon",
    year: "Third Year",
    graduationYear: "2028",
    cgpa: "7.30 / 10",
  },
  socialLinks: [
    {
      id: "email",
      name: "Email",
      url: "mailto:vireshnagthane9@gmail.com",
      iconName: "mail",
      visible: true,
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+918788021716",
      iconName: "phone",
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
      url: "https://www.linkedin.com/in/viresh-nagthane-772444328",
      iconName: "linkedin",
      visible: true,
      isExternal: true,
    },
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/zerostatic09/",
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
