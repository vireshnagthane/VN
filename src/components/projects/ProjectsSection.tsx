import React, { useState, useMemo } from 'react';
import { projectsData, Project } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  // Extract unique categories that actually contain projects
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Initial display limit: 6 projects
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const remainingCount = filteredProjects.length - 6;

  return (
    <div id="projects-section" className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-6 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 text-emerald-500" />
          <h2 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground">
            Things I&apos;ve Built
          </h2>
        </div>
        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
          {projectsData.length} Projects
        </span>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-foreground text-background shadow-xs font-semibold'
                  : 'bg-black/5 dark:bg-white/5 text-muted-foreground hover:text-foreground border border-black/5 dark:border-white/5'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* "Show all" / "Show less" if remaining projects */}
      {remainingCount > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-border/80 bg-background hover:bg-accent text-foreground transition-all duration-150 hover:shadow-sm cursor-pointer"
          >
            <span>{showAll ? 'Show less projects' : `Show all (${remainingCount} more)`}</span>
            {showAll ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>
        </div>
      )}
    </div>
  );
};
