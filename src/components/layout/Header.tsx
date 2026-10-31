import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, BookOpen, User } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { profileData } from '../../data/profile';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sectionIds = ['projects-section', 'blogs-section', 'contact-section'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-colors duration-200">
      <nav className="w-full pt-1 px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-4 px-2 sm:px-6 max-w-5xl mx-auto">
          {/* Logo & Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 cursor-pointer hover:opacity-85 transition-opacity group"
          >
            <div className="relative size-8 sm:size-9 rounded-xl overflow-hidden border border-emerald-500/30 bg-zinc-950 shadow-sm flex items-center justify-center shrink-0 group-hover:border-emerald-500/60 transition-colors">
              <span className="font-space-grotesk font-bold text-xs sm:text-sm text-emerald-400 tracking-tighter">
                {profileData.initials}
              </span>
            </div>
            <span className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground tracking-tight">
              {profileData.shortName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollTo('projects-section')}
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'projects-section'
                  ? 'text-emerald-500 font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Code2 className="size-4" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollTo('blogs-section')}
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'blogs-section'
                  ? 'text-emerald-500 font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <BookOpen className="size-4" />
              <span>Blogs</span>
            </button>
            <button
              onClick={() => scrollTo('contact-section')}
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'contact-section'
                  ? 'text-emerald-500 font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <User className="size-4" />
              <span>Contact</span>
            </button>

            {/* Theme Toggle Button */}
            <div className="h-4 w-px bg-border/80 mx-1" />
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl border border-border/80 hover:border-foreground/30 hover:bg-black/5 dark:hover:bg-white/5 text-foreground transition-all duration-150"
            >
              {isDark ? (
                <Sun className="size-4 text-amber-400" />
              ) : (
                <Moon className="size-4 text-zinc-700" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl border border-border/80 hover:bg-black/5 dark:hover:bg-white/5 text-foreground transition-all"
            >
              {isDark ? (
                <Sun className="size-4 text-amber-400" />
              ) : (
                <Moon className="size-4 text-zinc-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl border border-border/80 text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4 px-4 max-w-5xl mx-auto flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <button
              onClick={() => scrollTo('projects-section')}
              className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 text-left"
            >
              <Code2 className="size-4 text-emerald-500" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollTo('blogs-section')}
              className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 text-left"
            >
              <BookOpen className="size-4 text-emerald-500" />
              <span>Blogs</span>
            </button>
            <button
              onClick={() => scrollTo('education-section')}
              className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 text-left"
            >
              <User className="size-4 text-emerald-500" />
              <span>Education</span>
            </button>
            <button
              onClick={() => scrollTo('contact-section')}
              className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 text-left"
            >
              <User className="size-4 text-emerald-500" />
              <span>Contact</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
