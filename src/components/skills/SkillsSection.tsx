import React, { useState } from 'react';
import { Cpu, Terminal, Database, Layers, BarChart2, Cloud } from 'lucide-react';
import { skillsData, SkillCategory } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="size-4" />;
      case 1:
        return <Database className="size-4" />;
      case 2:
        return <Layers className="size-4" />;
      case 3:
        return <BarChart2 className="size-4" />;
      case 4:
      default:
        return <Cloud className="size-4" />;
    }
  };

  return (
    <div id="skills-section" className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-6 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2 pb-3 border-b border-border/40">
        <div className="flex items-center gap-2">
          <Cpu className="size-5 text-emerald-500" />
          <h2 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground">
            Skills &amp; Technologies
          </h2>
        </div>
        <span className="text-xs text-muted-foreground font-mono">
          Learning &amp; Building
        </span>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {skillsData.map((cat, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-foreground text-background shadow-xs font-semibold'
                  : 'bg-black/5 dark:bg-white/5 text-muted-foreground hover:text-foreground border border-black/5 dark:border-white/5'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Display */}
      {skillsData[activeTab] && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <p className="text-xs sm:text-sm text-foreground/70">
            {skillsData[activeTab].description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 pt-2">
            {skillsData[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col justify-between p-3 rounded-xl border border-border/70 bg-black/[0.02] dark:bg-white/[0.02] hover:border-emerald-500/40 hover:bg-emerald-500/[0.02] transition-all duration-150 shadow-2xs"
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="font-medium text-xs sm:text-sm text-foreground group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                  <span>{skill.level}</span>
                  <span
                    className={`size-1.5 rounded-full ${
                      skill.level === 'Proficient'
                        ? 'bg-emerald-500'
                        : skill.level === 'Intermediate'
                        ? 'bg-blue-500'
                        : 'bg-amber-500'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
