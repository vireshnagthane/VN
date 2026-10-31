import React, { useState } from 'react';
import { FileText, Mail, Copy, Check } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, TwitterIcon, LeetCodeIcon } from '../icons/SocialIcons';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = profileData.socialLinks.find(s => s.id === 'email')?.url.replace('mailto:', '') || 'vireshnagthane@gmail.com';
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="relative">
      {/* Banner & Avatar Container */}
      <div className="relative mb-6 z-20">
        <div className="relative overflow-hidden rounded-2xl min-h-36 sm:h-44 bg-zinc-900 border border-black/8 dark:border-white/10 shadow-sm">
          <img
            alt="Profile Banner"
            src={profileData.bannerUrl}
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Overlapping Avatar */}
        <div className="absolute -bottom-10 left-6 sm:left-8 z-30">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 shadow-xl border-white bg-white dark:border-black ring-1 ring-black/5 dark:ring-white/10 group">
            <img
              alt={profileData.name}
              src={profileData.avatarUrl}
              className="relative z-10 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Monogram avatar fallback if photo fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Monogram fallback */}
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-zinc-900 text-emerald-400 font-space-grotesk text-2xl font-bold">
              {profileData.initials}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Profile Card */}
      <div className="relative z-10 rounded-2xl border p-6 sm:p-8 pt-14 sm:pt-12 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm shadow-xs">
        {/* Header with Name & Verified Icon */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-space-grotesk text-xl sm:text-2xl font-semibold text-foreground">
                {profileData.name}
              </h1>
              {profileData.verified && (
                <img
                  alt="verified"
                  src="/checkverify.svg"
                  className="h-5 w-5 inline-block"
                  title="Verified Profile"
                />
              )}
            </div>
            <div className="mt-1 flex flex-col gap-1.5">
              <p className="text-muted-foreground text-xs sm:text-sm font-medium">
                {profileData.headline}
              </p>
              <p className="text-xs text-foreground/60 italic font-mono">
                &ldquo;Curious enough to break things. Stubborn enough to understand why. Building my way from prompts to production. 🧪&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Bio Paragraph */}
        <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mb-6">
          {profileData.bio}
        </p>

        {/* Action Row: Resume / CV Button */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="viresh-nagthane-resume.pdf"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl transition-all h-9 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium main-button text-white cursor-pointer shadow-sm"
          >
            <FileText className="size-4 text-white" />
            <span>Resume / CV</span>
          </a>

          {/* Location Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs text-muted-foreground bg-black/5 dark:bg-white/5 border border-border/60">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{profileData.location}</span>
          </span>
        </div>

        {/* "Me on Internet!" Section */}
        <div className="mt-8 pt-4 border-t border-border/40">
          <p className="text-xs sm:text-sm mb-3 text-foreground">
            Me on <strong>Internet!</strong>
          </p>
          <div className="flex flex-wrap gap-2">
            {/* Email with copy option */}
            <div className="relative group">
              <a
                href={profileData.socialLinks.find(s => s.id === 'email')?.url}
                className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
              >
                <Mail className="size-4 text-emerald-500" />
                <span>Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email address"
                className="hidden group-hover:flex absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[11px] px-2 py-0.5 rounded shadow items-center gap-1 z-30"
              >
                {copiedEmail ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/vireshnagthane"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
            >
              <GitHubIcon className="size-4" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vireshnagthane/"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
            >
              <LinkedInIcon className="size-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/viresh_09_/"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
            >
              <InstagramIcon className="size-4 text-pink-500" />
              <span>Instagram</span>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/Charly59758925"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
            >
              <TwitterIcon className="size-3.5" />
              <span>Twitter</span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/viresh_09/"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
            >
              <LeetCodeIcon className="size-4 text-amber-500" />
              <span>LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
