import React, { useState, useEffect, useMemo } from 'react';
import { Sun, Moon, Menu, X, BookOpen, Clock, Calendar, ArrowRight, FileText, Eye } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { profileData } from '../../data/profile';
import { blogsData, BlogPost } from '../../data/blogs';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogsModalOpen, setBlogsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Live Date and Time (updates every second)
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDateTime = useMemo(() => {
    return currentDateTime.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  }, [currentDateTime]);

  // Page views / visitor counter with persistent state
  const [viewsCount, setViewsCount] = useState<number>(1284);
  useEffect(() => {
    try {
      const STORAGE_KEY = 'vn_portfolio_views_count';
      const stored = localStorage.getItem(STORAGE_KEY);
      const baseCount = 1284;
      let count = baseCount;
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= baseCount) {
          count = parsed;
        }
      }
      // Increment once per browser session
      const sessionCounted = sessionStorage.getItem('vn_view_session');
      if (!sessionCounted) {
        count += 1;
        sessionStorage.setItem('vn_view_session', 'true');
        localStorage.setItem(STORAGE_KEY, count.toString());
      }
      setViewsCount(count);
    } catch {
      // Fallback
    }
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/40 transition-colors duration-200">
        <nav className="w-full pt-2 sm:pt-3 pb-2 px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between gap-4 px-2 sm:px-8 max-w-5xl mx-auto">
            {/* Logo & Name (Exact reference styling) */}
            <div className="pointer-events-auto px-1 sm:px-3 py-1.5 rounded-full transition-colors duration-300">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2.5 cursor-pointer hover:opacity-85 transition-opacity"
              >
                <div className="relative size-7 sm:size-8 rounded-lg overflow-hidden border border-emerald-500/30 bg-zinc-950 shadow-sm flex items-center justify-center shrink-0">
                  <span className="font-space-grotesk font-bold text-xs sm:text-sm text-emerald-400 tracking-tighter">
                    {profileData.initials}
                  </span>
                </div>
                <span className="font-space-grotesk text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                  {profileData.shortName}
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links & Action Controls */}
            <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
              <div className="flex items-center gap-5 mr-1">
                <button
                  onClick={() => scrollTo('projects-section')}
                  className="text-sm font-medium transition-colors hover:text-foreground underline-offset-4 hover:underline text-foreground/80 cursor-pointer"
                >
                  Projects
                </button>
                <button
                  onClick={() => setBlogsModalOpen(true)}
                  className="text-sm font-medium transition-colors hover:text-foreground underline-offset-4 hover:underline text-foreground/80 cursor-pointer"
                >
                  Blogs
                </button>
              </div>

              {/* Live Date & Time Display Badge */}
              <div
                className="h-9 px-3 flex items-center gap-2 rounded-lg border border-border/50 bg-background/80 text-foreground/80 dark:bg-white/10 text-xs font-medium font-mono select-none shadow-2xs backdrop-blur-sm"
                title="Current Live Date & Time"
              >
                <Clock className="size-3.5 text-emerald-500 shrink-0" />
                <span className="tabular-nums whitespace-nowrap">{formattedDateTime}</span>
              </div>

              {/* Total Views / Visits Counter Badge */}
              <div
                className="h-9 px-3 flex items-center gap-2 rounded-lg border border-border/50 bg-background/80 text-foreground/80 dark:bg-white/10 text-xs font-medium select-none shadow-2xs backdrop-blur-sm"
                title="Total Portfolio Page Visits"
              >
                <span className="relative flex size-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
                </span>
                <Eye className="size-3.5 text-muted-foreground shrink-0" />
                <span className="tabular-nums font-semibold text-foreground">{viewsCount.toLocaleString()}</span>
                <span className="text-[11px] text-muted-foreground">views</span>
              </div>

              {/* Square Theme Toggle Button (Dark and Bright) */}
              <div className="size-9 flex items-center justify-center rounded-lg border border-border/50 bg-background/80 text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-white/10 dark:hover:bg-white/20 transition-colors shrink-0">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle dark and bright visualization"
                  title={isDark ? "Switch to bright visualization" : "Switch to dark visualization"}
                  className="size-9 flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95"
                >
                  {isDark ? (
                    <Sun className="size-4 text-amber-400" />
                  ) : (
                    <Moon className="size-4 text-zinc-700" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex md:hidden items-center gap-1.5">
              {/* Mobile Compact Views Badge */}
              <div
                className="h-9 px-2.5 flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/80 text-foreground/80 dark:bg-white/10 text-[11px] font-medium select-none shadow-2xs"
                title="Total Portfolio Visits"
              >
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <Eye className="size-3 text-muted-foreground" />
                <span className="tabular-nums font-semibold">{viewsCount.toLocaleString()}</span>
              </div>

              {/* Square Theme Toggle Button */}
              <div className="size-9 flex items-center justify-center rounded-lg border border-border/50 bg-background/80 text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-white/10 dark:hover:bg-white/20 transition-colors shrink-0">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle dark and bright visualization"
                  title={isDark ? "Switch to bright visualization" : "Switch to dark visualization"}
                  className="size-9 flex items-center justify-center cursor-pointer active:scale-95"
                >
                  {isDark ? (
                    <Sun className="size-4 text-amber-400" />
                  ) : (
                    <Moon className="size-4 text-zinc-700" />
                  )}
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-background/80 text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-white/10 dark:hover:bg-white/20"
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border/40 py-3 px-3 max-w-5xl mx-auto flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150 bg-background/95 backdrop-blur-md rounded-b-2xl shadow-lg mt-1">
              <button
                onClick={() => scrollTo('projects-section')}
                className="py-2.5 px-3 rounded-xl text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 text-left transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBlogsModalOpen(true);
                }}
                className="py-2.5 px-3 rounded-xl text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 text-left transition-colors"
              >
                Blogs
              </button>
              <button
                onClick={() => scrollTo('contact-section')}
                className="py-2.5 px-3 rounded-xl text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 text-left transition-colors"
              >
                Contact
              </button>

              {/* Mobile Live Date & Time Info Bar */}
              <div className="mt-2 pt-2 border-t border-border/40 flex items-center justify-between px-2 text-xs text-muted-foreground font-mono">
                <div className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-emerald-500" />
                  <span>{formattedDateTime}</span>
                </div>
                <div className="flex items-center gap-1 font-sans">
                  <Eye className="size-3.5 text-emerald-500" />
                  <span>{viewsCount.toLocaleString()} views</span>
                </div>
              </div>

              <div className="pt-2 mt-1 border-t border-border/40">
                <a
                  href={profileData.resumeUrl}
                  download="VireshNagthane_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <FileText className="size-3.5" />
                  <span>Resume / CV</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Clean Blogs Modal Drawer */}
      {blogsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-background border border-border shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-border bg-muted/40">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <BookOpen className="size-5" />
                </div>
                <div>
                  <h3 className="font-space-grotesk font-semibold text-base sm:text-lg text-foreground">
                    Blogs &amp; Technical Notes
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Learning in public · Engineering insights &amp; research
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setBlogsModalOpen(false);
                  setSelectedPost(null);
                }}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                title="Close blogs modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {selectedPost ? (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-xs text-emerald-600 dark:text-emerald-400 font-medium hover:underline inline-flex items-center gap-1 mb-2 cursor-pointer"
                  >
                    &larr; Back to all notes
                  </button>

                  <div className="mb-2">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                      {selectedPost.category}
                    </span>
                    <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-foreground mt-3 mb-2 leading-tight">
                      {selectedPost.title}
                    </h2>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                      <span>{selectedPost.date}</span>
                      <span>•</span>
                      <span>{selectedPost.readTime}</span>
                      <span>•</span>
                      <span className="text-emerald-500">{selectedPost.status}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/40 space-y-4 text-sm text-foreground/85 leading-relaxed">
                    <p className="font-medium text-foreground">{selectedPost.summary}</p>
                    <p>{selectedPost.contentExcerpt}</p>
                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-border/60 text-xs text-muted-foreground">
                      <p className="font-semibold text-foreground mb-1">Author Note:</p>
                      Documented by Viresh Sunil Nagthane during Information Technology engineering coursework and hands-on system building.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {blogsData.map((post) => (
                    <article
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="group cursor-pointer flex flex-col justify-between rounded-xl border border-border/80 bg-black/[0.02] dark:bg-white/[0.02] hover:border-emerald-500/40 transition-all p-4 hover:shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-muted-foreground font-mono mb-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="size-3" />
                            <span>{post.readTime}</span>
                          </span>
                        </div>
                        <h4 className="font-space-grotesk text-base font-semibold text-foreground group-hover:text-emerald-500 transition-colors mb-1.5 leading-snug">
                          {post.title}
                        </h4>
                        <p className="text-xs text-foreground/75 leading-relaxed line-clamp-2 mb-3">
                          {post.summary}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                        <span className="text-[10px] text-muted-foreground font-mono">
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                          <span>Read</span>
                          <ArrowRight className="size-3" />
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
