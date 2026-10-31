import React from 'react';
import { Hero } from '../components/profile/Hero';
import { LeetCodeActivity } from '../components/activity/LeetCodeActivity';
import { GitHubActivity } from '../components/activity/GitHubActivity';
import { ExperienceSection } from '../components/experience/ExperienceSection';
import { ProjectsSection } from '../components/projects/ProjectsSection';
import { EducationSection } from '../components/education/EducationSection';
import { ContactSection } from '../components/contact/ContactSection';
import { Footer } from '../components/layout/Footer';

export const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-10 transition-colors duration-200 w-full overflow-hidden sm:overflow-visible">
      {/* 1. Hero Profile Card */}
      <Hero />

      {/* 2. LeetCode Activity Card */}
      <LeetCodeActivity />

      {/* 3. GitHub Activity Card */}
      <GitHubActivity username="vireshnagthane" />

      {/* 4. Experience & Journey Timeline */}
      <ExperienceSection />

      {/* 5. Things I've Built (Projects Gallery) */}
      <ProjectsSection />

      {/* 6. Education Card */}
      <EducationSection />

      {/* 7. Contact Card ("Let's build something extraordinary together") */}
      <ContactSection />

      {/* 8. Footer Banner */}
      <Footer />
    </div>
  );
};
