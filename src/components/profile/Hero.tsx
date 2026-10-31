import React, { useState } from 'react';
import { FileText, Mail, Phone, Copy, Check, ExternalLink, Download, X, Eye } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, TwitterIcon, LeetCodeIcon } from '../icons/SocialIcons';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="relative w-full">
      {/* Banner & Avatar Container */}
      <div className="relative mb-5 sm:mb-6 z-20">
        <div className="relative overflow-hidden rounded-2xl w-full h-32 sm:h-40 md:h-44 bg-[#0d0b0a] border border-black/8 dark:border-white/10 shadow-sm">
          <img
            alt="Profile Banner"
            src={profileData.bannerUrl}
            className="h-full w-full object-cover object-center"
          />
        </div>
        
        {/* Overlapping Avatar */}
        <div className="absolute -bottom-7 sm:-bottom-9 left-4 sm:left-7 z-30">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-[3px] sm:border-4 shadow-xl border-white bg-white dark:border-black ring-1 ring-black/5 dark:ring-white/10 group">
            <img
              alt={profileData.name}
              src={profileData.avatarUrl}
              className="relative z-10 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Monogram fallback */}
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-zinc-900 text-emerald-400 font-space-grotesk text-xl sm:text-2xl font-bold">
              {profileData.initials}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Profile Card */}
      <div className="relative z-10 rounded-2xl border p-4 sm:p-7 pt-10 sm:pt-11 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm shadow-xs">
        {/* Header with Name & Verified Icon */}
        <div className="mb-3.5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <h1 className="font-space-grotesk text-xl sm:text-3xl font-bold tracking-tight text-black dark:text-white">
                {profileData.name}
              </h1>
              {profileData.verified && (
                <img
                  alt="verified"
                  src="/checkverify.svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 inline-block"
                  title="Verified Profile"
                />
              )}
            </div>

            {/* Colored role highlights */}
            <div className="mt-1.5 flex items-center gap-1.5 sm:gap-2 flex-wrap text-xs sm:text-sm font-medium">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                IT Undergraduate
              </span>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Full-Stack Builder
              </span>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                Aspiring Cloud Engineer
              </span>
            </div>
          </div>
        </div>

        {/* Short, Clean Bio Paragraph */}
        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-4 max-w-2xl">
          {profileData.bio}
        </p>

        {/* Action Row: Resume / CV Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5">
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-xl transition-all h-8 sm:h-9 px-3.5 sm:px-5 text-xs sm:text-sm font-medium main-button text-white cursor-pointer shadow-sm hover:opacity-95"
            title="Preview and download resume"
          >
            <FileText className="size-3.5 sm:size-4 text-white" />
            <span>Resume / CV</span>
            <Eye className="size-3 sm:size-3.5 text-white/80 ml-0.5" />
          </button>

          <a
            href={profileData.resumeUrl}
            download="VireshNagthane_Resume.pdf"
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl transition-all h-8 sm:h-9 px-3 sm:px-3.5 text-xs font-medium border border-border/80 bg-background hover:bg-accent text-foreground cursor-pointer shadow-2xs"
            title="Download resume PDF directly"
          >
            <Download className="size-3 sm:size-3.5 text-emerald-500" />
            <span>Download PDF</span>
          </a>

          {/* Location Badge */}
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs text-muted-foreground bg-black/5 dark:bg-white/5 border border-border/60">
            <span className="size-1.5 sm:size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{profileData.location}</span>
          </span>
        </div>

        {/* "Me on Internet!" Section */}
        <div className="mt-5 sm:mt-6 pt-3.5 border-t border-border/40">
          <p className="text-xs sm:text-sm mb-2 sm:mb-2.5 text-foreground">
            Me on <strong className="text-emerald-500 dark:text-emerald-400">Internet!</strong>
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {/* Email */}
            <div className="relative group">
              <a
                href={`mailto:${profileData.email}`}
                className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-8 sm:h-9 px-2.5 sm:px-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
              >
                <Mail className="size-3.5 sm:size-4 text-emerald-500" />
                <span>Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email address"
                className="hidden group-hover:flex absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[11px] px-2 py-0.5 rounded shadow items-center gap-1 z-30 whitespace-nowrap"
              >
                {copiedEmail ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone */}
            <div className="relative group">
              <a
                href={`tel:${profileData.phone}`}
                className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-8 sm:h-9 px-2.5 sm:px-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
              >
                <Phone className="size-3.5 sm:size-4 text-emerald-500" />
                <span>Call</span>
              </a>
              <button
                onClick={handleCopyPhone}
                title="Copy phone number"
                className="hidden group-hover:flex absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[11px] px-2 py-0.5 rounded shadow items-center gap-1 z-30 whitespace-nowrap"
              >
                {copiedPhone ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/vireshnagthane"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-8 sm:h-9 px-2.5 sm:px-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
            >
              <GitHubIcon className="size-3.5 sm:size-4" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/viresh-nagthane-772444328"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-8 sm:h-9 px-2.5 sm:px-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
            >
              <LinkedInIcon className="size-3.5 sm:size-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/zerostatic09/"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-8 sm:h-9 px-2.5 sm:px-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
            >
              <InstagramIcon className="size-3.5 sm:size-4 text-pink-500" />
              <span>Instagram</span>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/Charly59758925"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-8 sm:h-9 px-2.5 sm:px-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
            >
              <TwitterIcon className="size-3 sm:size-3.5" />
              <span>Twitter</span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/viresh_09/"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-8 sm:h-9 px-2.5 sm:px-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
            >
              <LeetCodeIcon className="size-3.5 sm:size-4 text-amber-500" />
              <span>LeetCode</span>
            </a>
          </div>
        </div>
      </div>

      {/* Resume Viewer Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-2xl bg-background border border-border shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 sm:px-5 border-b border-border bg-muted/40 gap-2">
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <FileText className="size-4 sm:size-5" />
                </div>
                <div className="truncate">
                  <h3 className="font-space-grotesk font-semibold text-xs sm:text-base text-foreground truncate">
                    {profileData.name} — Resume
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                    B.Tech IT · Kopargaon · Updated 2026
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <a
                  href={profileData.resumeUrl}
                  download="VireshNagthane_Resume.pdf"
                  className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <Download className="size-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-background hover:bg-accent text-foreground transition-colors"
                >
                  <ExternalLink className="size-3.5" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </a>
                <button
                  onClick={() => setIsResumeModalOpen(false)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                  title="Close resume preview"
                >
                  <X className="size-4 sm:size-5" />
                </button>
              </div>
            </div>

            {/* Mobile quick actions banner */}
            <div className="sm:hidden px-3 py-2 bg-emerald-500/10 border-b border-emerald-500/20 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-400">
              <span>Touch device detected:</span>
              <div className="flex gap-2">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  Open Full PDF
                </a>
                <span>•</span>
                <a
                  href={profileData.resumeUrl}
                  download="VireshNagthane_Resume.pdf"
                  className="underline font-semibold"
                >
                  Save File
                </a>
              </div>
            </div>

            {/* Modal Body / PDF Viewer */}
            <div className="flex-1 w-full bg-zinc-100 dark:bg-zinc-950 p-1.5 sm:p-4 overflow-hidden">
              <iframe
                src={`${profileData.resumeUrl}#toolbar=1&navpanes=0`}
                title={`${profileData.name} Resume`}
                className="w-full h-[65vh] sm:h-[68vh] rounded-lg border border-border bg-white shadow-inner"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
