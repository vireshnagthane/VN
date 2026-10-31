import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, GraduationCap, Code2, Cloud } from 'lucide-react';
import { LinkedInIcon } from '../icons/SocialIcons';
import { journeyMilestones, MilestoneItem } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getCategoryIcon = (category: MilestoneItem['category']) => {
    switch (category) {
      case 'Education':
        return <GraduationCap className="size-4 text-emerald-500" />;
      case 'Projects & Building':
        return <Code2 className="size-4 text-blue-500" />;
      case 'Data Science':
        return <Briefcase className="size-4 text-purple-500" />;
      case 'Cloud & Systems':
      default:
        return <Cloud className="size-4 text-amber-500" />;
    }
  };

  return (
    <div id="experience-section" className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-6 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2 pb-3 border-b border-border/40">
        <div className="flex items-center gap-2">
          <h2 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground">
            Experience &amp; Journey
          </h2>
        </div>
        <a
          href="https://www.linkedin.com/in/viresh-nagthane-772444328"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all group"
        >
          <LinkedInIcon className="size-3.5 text-[#0A66C2]" />
          <span>View on LinkedIn</span>
        </a>
      </div>

      {/* Timeline Items */}
      <div className="space-y-6">
        {journeyMilestones.map((item, index) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className={`relative pl-6 sm:pl-8 transition-all ${
                index !== journeyMilestones.length - 1 ? 'border-l-2 border-border/60 pb-6' : ''
              }`}
            >
              {/* Dot Icon */}
              <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-background border-2 border-emerald-500 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-emerald-500" />
              </div>

              {/* Title & Role */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="p-1 rounded-md bg-black/5 dark:bg-white/5">
                    {getCategoryIcon(item.category)}
                  </span>
                  <h3 className="font-space-grotesk text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">· {item.organization}</span>
                </div>
                <div className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                  {item.period} · {item.duration}
                </div>
              </div>

              {/* Role & Location */}
              <div className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                {item.role} · <span className="text-muted-foreground font-normal">{item.location}</span>
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-3">
                {item.summary}
              </p>

              {/* Expandable details */}
              {isExpanded && (
                <div className="mt-2 mb-3 pl-3 border-l-2 border-emerald-500/40 space-y-1.5 text-xs text-foreground/70 animate-in fade-in duration-150">
                  {item.detailedPoints.map((point, pIdx) => (
                    <p key={pIdx}>• {point}</p>
                  ))}
                </div>
              )}

              {/* Bottom controls & skill tags */}
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {item.skills.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] bg-black/5 dark:bg-white/5 text-muted-foreground border border-black/5 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                  {item.skills.length > 3 && (
                    <span className="text-[11px] text-muted-foreground font-medium">
                      +{item.skills.length - 3} skills
                    </span>
                  )}
                </div>

                <button
                  onClick={() => toggleExpand(item.id)}
                  className="text-xs text-emerald-600 dark:text-emerald-400 font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{isExpanded ? 'Show less' : '... more'}</span>
                  {isExpanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
