import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { GitHubIcon } from '../icons/SocialIcons';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/8 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:border-black/15 dark:hover:border-white/20">
      {/* Project Thumbnail Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900 border-b border-border/40">
        <img
          alt={project.title}
          src={project.thumbnail}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80';
          }}
        />
        {/* Subtle Category Badge Overlay */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-black/70 backdrop-blur-md text-white border border-white/10 shadow-xs">
            {project.category}
          </span>
        </div>

        {/* Status Badge Overlay */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium backdrop-blur-md border shadow-xs ${
              project.status === 'Live Production'
                ? 'bg-emerald-500/80 text-white border-emerald-400/40'
                : project.status === 'Functional Prototype'
                ? 'bg-blue-500/80 text-white border-blue-400/40'
                : 'bg-zinc-800/80 text-zinc-200 border-zinc-700/40'
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        {/* Header: Title and Live/Code Buttons */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>

          <div className="flex items-center gap-1.5 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open Live Website"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all border border-emerald-500/20"
              >
                <span>Live</span>
                <ExternalLink className="size-3" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Source Code on GitHub"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-black/5 dark:bg-white/5 text-foreground hover:bg-foreground hover:text-background transition-all border border-border/80"
              >
                <GitHubIcon className="size-3" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-4 flex-grow">
          {project.shortDescription}
        </p>

        {/* Expandable Details Section */}
        {expanded && (
          <div className="pt-3 pb-4 border-t border-border/40 space-y-3 animate-in fade-in slide-in-from-top-1 duration-150">
            <div>
              <p className="text-xs font-semibold text-foreground mb-1">Architecture &amp; Purpose</p>
              <p className="text-xs text-foreground/70 leading-relaxed">{project.extendedDescription}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-foreground mb-1.5">Key Implemented Features</p>
              <ul className="space-y-1">
                {project.keyFeatures.map((feature, fIdx) => (
                  <li key={fIdx} className="text-xs text-foreground/75 flex items-start gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Footer: Tech Stack Tags & Show More Button */}
        <div className="pt-3 border-t border-border/40 flex items-center justify-between flex-wrap gap-2">
          {/* Tech badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            {project.technologies.slice(0, 3).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-black/5 dark:bg-white/5 text-muted-foreground border border-black/5 dark:border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[11px] font-mono text-muted-foreground">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Show more toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer ml-auto"
          >
            <span>{expanded ? 'Show less' : 'Show more'}</span>
            {expanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
          </button>
        </div>
      </div>
    </div>
  );
};
