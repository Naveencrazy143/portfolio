import React from "react";
import Navbar from "./Navbar";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import CertificationsSection from "./CertificationsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import ThemeSelector from "./ThemeSelector";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none z-0" />
      
      {/* Top Left Spotlight Animation Glow */}
      <div className="absolute top-0 inset-x-0 h-[800px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-[10%] md:left-[25%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/15 rounded-full blur-[100px] animate-spotlight" />
      </div>

      {/* Responsive Navigation Header & Bottom Bar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10"
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          {/* Circular Profile Avatar Image */}
          <div className="mb-6 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
            <div className="relative group">
              {/* Outer dynamic border gradient that responds to theme variables */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-md group-hover:opacity-100 transition duration-300" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/naveen_profile.png"
                alt="Naveen J Profile Avatar"
                className="relative rounded-full w-28 h-28 object-cover border-2 border-background shadow-xl"
              />
            </div>
          </div>

          {/* Animated Greeting */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both">
            <p className="mb-4 text-lg font-bold text-muted-foreground tracking-wide">
              Hello, I'm
            </p>
          </div>

          {/* Big Title Name */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
            <h1 className="mb-5 text-5xl font-extrabold sm:text-7xl md:text-8xl tracking-tight">
              <span className="text-gradient-primary">Naveen J</span>
            </h1>
          </div>

          {/* Subtitle Rolename */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both">
            <h2 className="mb-8 text-2xl font-bold text-muted-foreground sm:text-3xl md:text-4xl">
              I'm a <span className="text-primary font-extrabold">Full Stack Developer</span>
            </h2>
          </div>

          {/* Bio copy */}
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400 fill-mode-both">
            <p className="mx-auto mb-10 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Full Stack Developer with 4 years of experience in React.js and 2+ years in Node.js, specializing in scalable web applications and enterprise solutions. Currently managing and supporting 7+ live auction platforms, delivering performance optimizations, real-time features, and business-critical enhancements. Recognized as Best Employee of the Year for technical ownership, mentoring developers, and consistently delivering high-quality solutions.
            </p>
          </div>

          {/* Key Achievements/Highlights Grid */}
          <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 text-left animate-in fade-in slide-in-from-bottom-6 duration-700 delay-450 fill-mode-both">
            <div className="rounded-xl border border-border/40 bg-card/25 p-4 glow-card flex flex-col justify-center">
              <span className="text-primary font-extrabold text-sm uppercase tracking-wider">Best Employee</span>
              <span className="text-xs text-muted-foreground mt-1">Awarded Best Employee of the Year at Liquidity Services</span>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/25 p-4 glow-card flex flex-col justify-center">
              <span className="text-primary font-extrabold text-sm uppercase tracking-wider">7+ Live Platforms</span>
              <span className="text-xs text-muted-foreground mt-1">Managed and supported live auction systems</span>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/25 p-4 glow-card flex flex-col justify-center">
              <span className="text-primary font-extrabold text-sm uppercase tracking-wider">+30% Performance</span>
              <span className="text-xs text-muted-foreground mt-1">Improved speed via frontend optimization</span>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/25 p-4 glow-card flex flex-col justify-center">
              <span className="text-primary font-extrabold text-sm uppercase tracking-wider">Secure Payments</span>
              <span className="text-xs text-muted-foreground mt-1">Integrated Stripe, Merchant Warrior, HyperPay, JustGiving</span>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/25 p-4 glow-card flex flex-col justify-center">
              <span className="text-primary font-extrabold text-sm uppercase tracking-wider">Real-time bidding</span>
              <span className="text-xs text-muted-foreground mt-1">Developed live bidding systems using WebSockets</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full px-7 py-3.5 bg-primary text-primary-foreground font-bold glow-btn-primary hover:scale-105 active:scale-98"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              Get In Touch
            </a>
            <a
              href="/assets/Naveen-full-stack-Resume.pdf"
              download="Naveen-full-stack-Resume.pdf"
              className="flex items-center gap-2 rounded-full px-7 py-3.5 border border-border bg-card/40 font-bold text-foreground transition-all duration-300 hover:scale-105 hover:bg-muted active:scale-98"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-in fade-in duration-700 delay-600 fill-mode-both">
            <a
              href="https://github.com/Naveencrazy143"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 border border-border/80 bg-card/30 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110"
              aria-label="Visit GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-j-software-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 border border-border/80 bg-card/30 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110"
              aria-label="Connect on LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>

          {/* Active opportunities tag */}
          <div className="mt-12 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 animate-in fade-in duration-700 delay-700 fill-mode-both">
            <span className="relative flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-primary">
              Available for new opportunities
            </span>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Floating Theme Switcher Button */}
      <ThemeSelector />

      {/* Footer Section */}
      <footer className="border-t border-border/60 bg-card/30 py-16 backdrop-blur-xs relative z-10">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Branding Column */}
            <div className="flex flex-col gap-3">
              <span className="text-2xl font-extrabold text-gradient-primary tracking-tight">Naveen J</span>
              <span className="text-sm font-semibold text-muted-foreground">Full Stack Developer</span>
              <span className="text-xs text-muted-foreground/80 mt-1">Chennai, Tamil Nadu, India</span>
            </div>

            {/* Quick Links Column */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Quick Links</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
                <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">Certifications</a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            {/* Socials & Email Column */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Connect</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Naveencrazy143"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/naveen-j-software-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a
                    href="mailto:naveen.jdit@gmail.com"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                    aria-label="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/></svg>
                  </a>
                </div>
                <span className="text-xs text-muted-foreground font-semibold">naveen.jdit@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="my-10 h-px bg-border/40" />

          {/* Subfooter */}
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row font-medium">
            <p>© 2026 Naveen J. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Made with
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-rose-500 fill-rose-500"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
