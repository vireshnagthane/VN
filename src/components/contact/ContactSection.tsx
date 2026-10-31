import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, TwitterIcon, LeetCodeIcon } from '../icons/SocialIcons';
import { validateContactForm, submitContactMessage, ContactPayload } from '../../services/contact';
import { profileData } from '../../data/profile';

export const ContactSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
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
        const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `Hi Viresh,\n\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
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
    <div
      id="contact-section"
      className="mt-7 relative z-10 rounded-2xl border p-6 sm:p-8 pt-8 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/[0.02] dark:border-white/[0.08] backdrop-blur-sm text-center shadow-xs"
    >
      {/* Title Matching Reference Exactly */}
      <h2 className="font-space-grotesk text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-6 sm:mb-8">
        Let&apos;s build something extraordinary together
      </h2>

      {/* Row of Action Buttons Matching Reference Exactly */}
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6">
        {/* Email */}
        <a
          href={`mailto:${profileData.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80 hover:border-foreground/30"
        >
          <Mail className="size-4 text-emerald-500" />
          <span>Email</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/vireshnagthane"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80 hover:border-foreground/30"
        >
          <GitHubIcon className="size-4" />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/viresh-nagthane-772444328"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80 hover:border-foreground/30"
        >
          <LinkedInIcon className="size-4 text-[#0A66C2]" />
          <span>LinkedIn</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/zerostatic09/"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80 hover:border-foreground/30"
        >
          <InstagramIcon className="size-4 text-pink-500" />
          <span>Instagram</span>
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/Charly59758925"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80 hover:border-foreground/30"
        >
          <TwitterIcon className="size-3.5" />
          <span>Twitter</span>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/viresh_09/"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80 hover:border-foreground/30"
        >
          <LeetCodeIcon className="size-4 text-amber-500" />
          <span>LeetCode</span>
        </a>

        {/* Phone */}
        <a
          href={`tel:${profileData.phone}`}
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:text-foreground dark:hover:bg-input/50 h-9 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-100 ease-in-out hover:shadow-md hover:scale-105 border-border/80 hover:border-foreground/30"
        >
          <Phone className="size-4 text-emerald-500" />
          <span>Phone</span>
        </a>
      </div>

      {/* Subtle toggle for direct message form */}
      <div className="pt-2">
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 cursor-pointer hover:underline"
        >
          <MessageSquare className="size-3.5 text-emerald-500" />
          <span>{showForm ? 'Hide message form' : 'Or send a direct message'}</span>
        </button>
      </div>

      {/* Expandable Form if user wants to write a message */}
      {showForm && (
        <div className="max-w-xl mx-auto mt-6 text-left rounded-xl border border-black/8 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] p-5 sm:p-7 shadow-xs animate-in fade-in duration-150">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
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
                    placeholder="Enter your name"
                    className={`w-full px-3.5 py-2 rounded-xl border text-xs bg-background text-foreground transition-all outline-none focus:ring-1 focus:ring-emerald-500 ${
                      errors.name ? 'border-rose-500' : 'border-border/80'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">
                    Email Address <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-3.5 py-2 rounded-xl border text-xs bg-background text-foreground transition-all outline-none focus:ring-1 focus:ring-emerald-500 ${
                      errors.email ? 'border-rose-500' : 'border-border/80'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship inquiry, project collaboration, etc."
                  className="w-full px-3.5 py-2 rounded-xl border border-border/80 text-xs bg-background text-foreground transition-all outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">
                  Message <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we collaborate? Write your message here..."
                  className={`w-full px-3.5 py-2 rounded-xl border text-xs bg-background text-foreground transition-all outline-none focus:ring-1 focus:ring-emerald-500 resize-none ${
                    errors.message ? 'border-rose-500' : 'border-border/80'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full h-10 rounded-xl font-medium text-xs main-button text-white flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:opacity-95 disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Sending message...</span>
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
      )}
    </div>
  );
};
