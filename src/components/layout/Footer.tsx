import React from 'react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-7 pb-10">
      <div className="relative overflow-hidden rounded-2xl min-h-36 sm:h-44 flex items-center justify-center border border-black/8 dark:border-white/10 shadow-sm bg-zinc-950">
        {/* Banner Graphic */}
        <img
          alt="footer banner"
          src="/assets/footer-banner.svg"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

        {/* Footer Text */}
        <div className="relative z-10 text-center text-white px-4 py-6">
          <div className="flex gap-1.5 items-center justify-center flex-wrap">
            <span className="text-xs sm:text-sm text-zinc-300">Designed and Developed by</span>
            <a
              href="https://github.com/vireshnagthane"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-xs sm:text-sm text-white hover:text-emerald-400 transition-colors"
            >
              {profileData.name}
            </a>
          </div>

          <div className="mt-1 text-[11px] sm:text-xs text-zinc-400 flex items-center justify-center gap-2">
            <span>© {currentYear} All Rights Reserved</span>
            <span>•</span>
            <span className="text-emerald-400 font-mono">Student &amp; Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
