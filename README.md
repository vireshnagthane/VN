# Viresh Sunil Nagthane — Personal Developer Portfolio

> A high-performance, modern, responsive personal developer portfolio website designed for **Viresh Sunil Nagthane** (Information Technology Student at Sanjivani College of Engineering, Kopargaon | Aspiring Cloud Engineer), faithfully recreating the visual structure, layout, typography, and interactive experience of the reference site.

---

## 🌟 Highlights & Key Features

* **Faithful Visual Architecture**: White/dark subtle dotted background pattern (`radial-gradient`), Space Grotesk headings, glassmorphic cards with subtle borders (`bg-white/60 dark:bg-white/[0.02]`), and minimal shadows.
* **Persistent Dark & Light Mode**: Seamless theme toggle with local storage persistence and zero-flicker inline initialization.
* **Hero Section & Verified Profile**: Overlapping profile avatar using Viresh's photograph, verified profile badge, professional headline, bio, resume download, and social link pills (Email, GitHub, LinkedIn, Instagram, Twitter/X, LeetCode).
* **Live GitHub Activity Heatmap**: Real-time integration with GitHub contributions API for `@vireshnagthane` with year filters (`2024`, `2025`, `2026`, `Last 12 Mos`), total contribution counters, interactive hover tooltips, and intensity legend.
* **LeetCode Activity Card**: Card matching reference proportions with problem breakdown (`Easy`, `Medium`, `Hard`), streak, rank indicators, and problem solving timeline.
* **Experience & Learning Timeline**: A vertical journey timeline documenting academic milestones, full-stack building (Remanote, Kalpana Dental, SEMD LMS), DBMS research (SmartBlood), and cloud/IoT exploration.
* **"Things I've Built" Project Gallery**: Two-column responsive card grid featuring all 8 verified projects with category filtering (`All`, `Web Development`, `Android & Mobile`, `Data Science & Python`, `Systems & IoT`), live demo links, source code links, tech stack tags, and expandable "Show more" drawers with architecture descriptions and feature checklists.
* **Education & Academic Credentials**: Sanjivani College of Engineering B.Tech in IT (Third Year, 7.3 CGPA, Expected 2028) with course tags and expandable coursework pills.
* **Categorized Skills Stack**: Programming languages, databases, backend/development tools, data science libraries (NumPy, pandas, Matplotlib), and cloud computing/AWS interests.
* **Blogs & Technical Notes**: Learning notes covering Remanote's architecture, DBMS in healthcare emergencies, and offline bus tracking with an interactive modal reader preview.
* **Interactive Contact Card**: "Let's build something meaningful together", social buttons, and a contact form with client-side validation, error handling, loading spinner, success states, and direct mailto actions.
* **Responsive & Accessible**: Fully optimized for mobile (360px+), tablet, laptop, and 4K desktop screens.

---

## 🛠️ Tech Stack

* **Framework**: React 18 with TypeScript
* **Build Tool**: Vite
* **Styling**: Tailwind CSS with custom glassmorphism and theme variables
* **Icons**: Lucide React & Custom SVG Brand Icons
* **Data Sources**: Live GitHub Contributions API (`vireshnagthane`) & Local Cache

---

## 📂 Project Architecture

```
src/
├── components/
│   ├── activity/
│   │   ├── ActivityCalendar.tsx   # Reusable SVG activity heatmap grid
│   │   ├── GitHubActivity.tsx     # Live GitHub contributions & year filters
│   │   └── LeetCodeActivity.tsx   # LeetCode stats breakdown & timeline
│   ├── blogs/
│   │   └── BlogSection.tsx        # Technical notes & modal reader
│   ├── contact/
│   │   └── ContactSection.tsx     # Contact form with validation & social pills
│   ├── education/
│   │   └── EducationSection.tsx   # College, degree, CGPA & coursework
│   ├── experience/
│   │   └── ExperienceSection.tsx  # Vertical timeline & milestone drawers
│   ├── icons/
│   │   └── SocialIcons.tsx        # High-fidelity SVG icons (GitHub, LinkedIn, etc.)
│   ├── layout/
│   │   ├── Header.tsx             # Sticky navbar, mobile menu & theme toggle
│   │   └── Footer.tsx             # Banner mask & dynamic copyright
│   ├── profile/
│   │   └── Hero.tsx               # Banner, avatar, headline, bio & Resume CTA
│   ├── projects/
│   │   ├── ProjectCard.tsx        # Project card with thumbnail, links & expandable drawer
│   │   └── ProjectsSection.tsx    # Category filters & 2-column grid
│   └── skills/
│       └── SkillsSection.tsx      # Categorized skill badges with proficiency indicators
├── data/
│   ├── profile.ts                 # Centralized personal info & social links
│   ├── projects.ts                # 8 projects with descriptions, tags, and status
│   ├── education.ts               # Academic history, CGPA & subjects
│   ├── skills.ts                  # Categorized skills & learning levels
│   ├── experience.ts              # Journey milestones & technical responsibilities
│   └── blogs.ts                   # Technical articles & learning notes
├── hooks/
│   └── useTheme.ts                # Light / dark theme persistence hook
├── services/
│   ├── github.ts                  # GitHub contributions fetcher & fallback
│   ├── leetcode.ts                # LeetCode statistics service
│   └── contact.ts                 # Contact form validation & submission service
├── pages/
│   └── Home.tsx                   # Master page layout
├── styles/
│   └── globals.css                # CSS variables, dot grid & custom utility classes
├── App.tsx
└── main.tsx
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled, type-checked, minified production assets will be generated in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Deployment Guide (Vercel)

The repository is pre-configured with `vercel.json` for one-click deployment.

### Option A — Deploy with Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to link and deploy.

### Option B — Deploy via GitHub & Vercel Dashboard
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete developer portfolio for Viresh Nagthane"
   git remote add origin https://github.com/vireshnagthane/portfolio.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Click **Add New** → **Project** and select your repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**. Your portfolio will be live at `https://<your-project>.vercel.app/`!

---

## ⚙️ Customization & Updating Your Profile

All personal data is centralized in `src/data/`:
* `src/data/profile.ts`: Update headline, bio, contact links, and location.
* `src/data/projects.ts`: Add new projects, screenshots, live URLs, or GitHub repos.
* `src/data/education.ts`: Update current semester, CGPA, or coursework.
* `src/data/skills.ts`: Add newly acquired technologies and tools.
* `src/data/experience.ts`: Add internships, hackathons, and professional milestones.
* `public/resume/viresh-nagthane-resume.pdf`: Replace with updated resume PDF whenever needed.

---

## 📄 License
MIT License © Viresh Sunil Nagthane
