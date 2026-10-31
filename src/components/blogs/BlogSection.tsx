import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, X } from 'lucide-react';
import { blogsData, BlogPost } from '../../data/blogs';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPost]);

  return (
    <div id="blogs-section" className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-6 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2 pb-3 border-b border-border/40">
        <div className="flex items-center gap-2">
          <BookOpen className="size-5 text-emerald-500" />
          <h2 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground">
            Blogs &amp; Technical Notes
          </h2>
        </div>
        <span className="text-xs text-muted-foreground font-mono">
          Learning in Public
        </span>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {blogsData.map((post) => (
          <article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group cursor-pointer flex flex-col justify-between overflow-hidden rounded-xl border border-black/8 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] hover:border-emerald-500/40 transition-all duration-200 hover:shadow-md p-4 sm:p-5"
          >
            <div>
              {/* Meta: Category & Read Time */}
              <div className="flex items-center justify-between gap-2 text-[11px] text-muted-foreground font-mono mb-2">
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    <span>{post.readTime}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" />
                    <span>{post.date}</span>
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-space-grotesk text-base font-semibold text-foreground group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mb-2 leading-snug">
                {post.title}
              </h3>

              {/* Summary */}
              <p className="text-xs text-foreground/75 leading-relaxed mb-4 line-clamp-2">
                {post.summary}
              </p>
            </div>

            {/* Bottom: Tags & Read more */}
            <div className="flex items-center justify-between pt-3 border-t border-border/40 text-xs">
              <div className="flex items-center gap-1.5 flex-wrap">
                {post.tags.slice(0, 2).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                <span>Read note</span>
                <ArrowRight className="size-3" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-background rounded-2xl border border-border p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {/* Modal Content */}
            <div className="mb-4">
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
                This article is part of my engineering study notes and technical journey at Sanjivani College of Engineering. Further deep-dive revisions are continuously documented as the project evolves.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-foreground text-background hover:opacity-90 transition-opacity cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
