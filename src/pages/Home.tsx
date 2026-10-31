import React from 'react';
import { Hero } from '../components/profile/Hero';
import { LeetCodeActivity } from '../components/activity/LeetCodeActivity';
import { GitHubActivity } from '../components/activity/GitHubActivity';
import { ExperienceSection } from '../components/experience/ExperienceSection';
import { ProjectsSection } from '../components/projects/ProjectsSection';
import { EducationSection } from '../components/education/EducationSection';
import { SkillsSection } from '../components/skills/SkillsSection';
import { BlogSection } from '../components/blogs/BlogSection';
import { ContactSection } from '../components/contact/ContactSection';
import { Footer } from '../components/layout/Footer';

export const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-10 transition-colors duration-200 w-full overflow-hidden sm:overflow-visible">
      {/* Hero & Profile Header */}
      <Hero />

      {/* LeetCode Activity Card */}
      <LeetCodeActivity />

      {/* GitHub Activity Card */}
      <GitHubActivity username="vireshnagthane" />

      {/* Experience & Journey Card */}
      <ExperienceSection />

      {/* Projects Gallery */}
      <ProjectsSection />

      {/* Education Card */}
      <EducationSection />

      {/* Skills & Technologies Card */}
      <SkillsSection />

      {/* Blogs & Technical Notes Card */}
      <BlogSection />

      {/* Contact Card */}
      <ContactSection />

      {/* Footer Banner */}
      <Footer />
    </div>
  );
};
