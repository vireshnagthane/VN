import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, LeetCodeIcon } from '../icons/SocialIcons';
import { validateContactForm, submitContactMessage, ContactPayload } from '../../services/contact';
import { profileData } from '../../data/profile';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactPayload>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isFallback, setIsFallback] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitting(true);
    try {
      const result = await submitContactMessage(formData);
      setSubmitting(false);
      setSubmitted(true);
      setIsFallback(result.isFallback);
      setResponseMsg(result.message);

      if (result.isFallback) {
        // Prepare mailto link
        const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `Hi Viresh,\n\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        window.open(mailtoUrl, '_blank');
      }
    } catch (err) {
      setSubmitting(false);
      setErrors({ form: 'An unexpected error occurred. Please try emailing directly.' });
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setIsFallback(false);
    setResponseMsg('');
    setErrors({});
  };

  return (
    <div id="contact-section" className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-8 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <h2 className="font-space-grotesk text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
          Let&apos;s build something meaningful together.
        </h2>
        <p className="text-xs sm:text-sm text-foreground/70">
          Whether you have an internship opportunity, a project collaboration, or just want to discuss software engineering, cloud, or data science—my inbox is always open!
        </p>
      </div>

      {/* Social Quick Links Row (Matching Reference) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <a
          href={`mailto:${profileData.email}`}
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
        >
          <Mail className="size-4 text-emerald-500" />
          <span>Email</span>
        </a>

        <a
          href={`tel:${profileData.phone}`}
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
        >
          <Phone className="size-4 text-emerald-500" />
          <span>Call</span>
        </a>

        <a
          href="https://github.com/vireshnagthane"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
        >
          <GitHubIcon className="size-4" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/viresh-nagthane-772444328"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
        >
          <LinkedInIcon className="size-4 text-[#0A66C2]" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/viresh_09_/"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
        >
          <InstagramIcon className="size-4 text-pink-500" />
          <span>Instagram</span>
        </a>

        <a
          href="https://leetcode.com/u/viresh_09/"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80"
        >
          <LeetCodeIcon className="size-4 text-amber-500" />
          <span>LeetCode</span>
        </a>
      </div>

      {/* Interactive Form Container */}
      <div className="max-w-xl mx-auto rounded-xl border border-black/8 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] p-5 sm:p-7 shadow-xs">
        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-in fade-in duration-200">
            <div className="size-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
              <CheckCircle2 className="size-6" />
            </div>
            <h3 className="font-space-grotesk text-lg font-semibold text-foreground">
              {isFallback ? 'Direct Email Prepared' : 'Message Received!'}
            </h3>
            <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
              {responseMsg}
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profileData.email}?subject=${encodeURIComponent(
                  formData.subject || 'Portfolio Inquiry'
                )}&body=${encodeURIComponent(
                  `Hi Viresh,\n\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`
                )}`}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer shadow-xs"
              >
                Send via Email Client
              </a>
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl text-xs font-medium border border-border bg-background hover:bg-accent text-foreground transition-colors cursor-pointer"
              >
                Reset Form
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {errors.form && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="size-4 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1">
                  Your Name <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${
                    errors.name ? 'border-rose-500' : 'border-border'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">
                  Your Email <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${
                    errors.email ? 'border-rose-500' : 'border-border'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration, Opportunity, or General Query"
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">
                Your Message <span className="text-emerald-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your note, idea, or questions here..."
                className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/40 resize-none ${
                  errors.message ? 'border-rose-500' : 'border-border'
                }`}
              />
              {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium main-button text-white flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md disabled:opacity-60 transition-all"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Sending message…</span>
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
