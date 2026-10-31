import React, { useState } from 'react';
import { GraduationCap, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { LinkedInIcon } from '../icons/SocialIcons';
import { educationData } from '../../data/education';

export const EducationSection: React.FC = () => {
  const [showAllCoursework, setShowAllCoursework] = useState(false);

  return (
    <div id="education-section" className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-6 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2 pb-3 border-b border-border/40">
        <div className="flex items-center gap-2">
          <GraduationCap className="size-5 text-emerald-500" />
          <h2 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground">
            Education
          </h2>
        </div>
        <a
          href="https://www.linkedin.com/in/viresh-nagthane-772444328"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-all"
        >
          <LinkedInIcon className="size-3.5 text-[#0A66C2]" />
          <span>View on LinkedIn</span>
        </a>
      </div>

      {/* Education List */}
      <div className="space-y-6">
        {educationData.map((edu) => (
          <div key={edu.id} className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/50">
            {/* Dot Icon */}
            <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-background border-2 border-emerald-500 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-emerald-500" />
            </div>

            {/* Institution Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
              <h3 className="font-space-grotesk text-base sm:text-lg font-semibold text-foreground">
                {edu.institution}
              </h3>
              <span className="text-xs font-mono text-muted-foreground">{edu.period}</span>
            </div>

            {/* Degree & Location */}
            <div className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-1">
              {edu.degree} — {edu.fieldOfStudy}
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <span>{edu.status}</span>
              <span>•</span>
              <span>{edu.location}</span>
            </div>

            {/* CGPA Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
              <span>Grade:</span>
              <strong>{edu.grade}</strong>
            </div>

            {/* Description */}
            {edu.description && (
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-4">
                {edu.description}
              </p>
            )}

            {/* Coursework & Skills */}
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <BookOpen className="size-3.5" />
                <span>Relevant Coursework &amp; Key Subjects:</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {(showAllCoursework ? edu.coursework : edu.coursework.slice(0, 4)).map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-2.5 py-1 rounded-lg text-[11px] bg-black/5 dark:bg-white/5 text-foreground/80 border border-border/60"
                  >
                    {course}
                  </span>
                ))}
                {edu.coursework.length > 4 && (
                  <button
                    onClick={() => setShowAllCoursework(!showAllCoursework)}
                    className="text-xs text-emerald-600 dark:text-emerald-400 font-medium hover:underline inline-flex items-center gap-0.5 ml-1 cursor-pointer"
                  >
                    <span>{showAllCoursework ? 'Show less' : `+${edu.coursework.length - 4} more`}</span>
                    {showAllCoursework ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
