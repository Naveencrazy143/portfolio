"use client";

import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Liquidity Services (Acquired AxionBots Software)",
    period: "March 2024 – Present",
    location: "Chennai, India • Remote",
    description: "Developing and maintaining scalable full-stack applications using React.js, Node.js, and Express.js. Designing and optimizing RESTful APIs to support high-traffic applications and real-time business workflows.",
    type: "Full-time",
    projects: [
      { name: "Minnesota State Government Auction Platform & Website", href: "https://mnbid.mn.gov/" }
    ],
    contributions: [
      "Developed and maintained scalable full-stack applications using React.js, Node.js, and Express.js",
      "Designed and optimized RESTful APIs to support high-traffic applications and real-time business workflows",
      "Enhanced application performance by implementing lazy loading, React Suspense, code splitting, and rendering optimizations",
      "Improved frontend efficiency using debouncing, throttling, useMemo, and useCallback",
      "Implemented JWT-based authentication and secure request handling mechanisms",
      "Developed real-time auction functionality using WebSockets for live bidding and instant updates",
      "Integrated Merchant Warrior and HyperPay payment gateways with secure backend validation",
      "Built a Centralized Control Hub Dashboard for managing website configurations and payment workflows",
      "Participated in sprint planning, requirement analysis, story estimation, and technical discussions",
      "Took ownership of feature development from requirement analysis through production deployment and support"
    ]
  },
  {
    role: "React Developer",
    company: "Leora Infotech Private Limited",
    period: "June 2022 – March 2024",
    location: "Chennai, India",
    description: "Developed reusable and scalable UI components using React.js, and implemented application state management with Redux and Redux Saga.",
    type: "Full-time",
    projects: [
      { name: "INTRVU SPACE | Hiring Application (AI)", href: "https://www.intrvu.space/" },
      { name: "Klockmate | HRMS Platform", href: "https://klockmate.com/" }
    ],
    contributions: [
      "Developed reusable and scalable UI components using React.js",
      "Implemented application state management using Redux and Redux Saga",
      "Built reusable custom hooks to improve maintainability and reduce code duplication",
      "Refactored complex UI components into modular and scalable architectures",
      "Integrated REST APIs and collaborated closely with backend teams",
      "Participated in Agile ceremonies including sprint planning, stand-ups, reviews, and retrospectives",
      "Delivered multiple production-ready features for AI recruitment and HRMS platforms"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen py-24 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            <span className="text-gradient-primary">Professional Experience</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Building impactful solutions and driving results through code
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-border/80 ml-4 md:ml-8 pl-8 flex flex-col gap-12 animate-in fade-in slide-in-from-left-6 duration-700">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[40px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" />

              {/* Main Experience Card */}
              <div className="rounded-2xl border border-border/60 bg-card/45 p-6 md:p-8 backdrop-blur-xs glow-card">
                
                {/* Header info */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-2xl font-extrabold text-foreground">{exp.role}</h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        {exp.type}
                      </span>
                    </div>
                    <p className="mt-1.5 text-lg font-bold text-primary">{exp.company}</p>
                  </div>
                  
                  <div className="text-left md:text-right shrink-0">
                    <p className="text-sm font-semibold text-foreground flex items-center md:justify-end gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                      {exp.period}
                      {exp.period.includes("Present") && (
                        <span className="relative flex h-2 w-2 ml-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground flex items-center md:justify-end gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base mb-8">
                  {exp.description}
                </p>

                {/* Featured Projects Sub-section */}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="m7.5 8 2-2 5.5 5.5-2 2z"/><path d="m14 14-2 2 5.5 5.5 2-2z"/><path d="M2.75 18 18 2.75"/><circle cx="4.5" cy="19.5" r="2.5"/></svg>
                      Featured Projects
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {exp.projects.map((prod, pIdx) => (
                        <a
                          key={pIdx}
                          href={prod.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-primary/5 hover:border-primary/40"
                        >
                          {prod.name}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                          >
                            <path d="M7 7h10v10M7 17 17 7" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Contributions Sub-section */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                    Key Contributions
                  </h4>
                  
                  <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                    {exp.contributions.map((item, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex gap-3 rounded-xl border border-border/40 bg-background/30 p-4 glow-card"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary shrink-0 mt-0.5"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm text-muted-foreground font-medium leading-relaxed leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
