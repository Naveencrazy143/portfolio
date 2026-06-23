"use client";

import React from "react";

const projects = [
  {
    title: "Minnesota State Government Auction Platform",
    description: "High-traffic full-stack government auction website with real-time bidding using WebSockets, secure payment integrations (Merchant Warrior & HyperPay), and a custom control dashboard.",
    tags: ["React.js", "Node.js", "Express.js", "WebSockets", "HyperPay"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    gridClass: "col-span-1 md:col-span-2 row-span-1",
    link: "https://mnbid.mn.gov/",
  },
  {
    title: "INTRVU SPACE | Hiring Application (AI)",
    description: "AI-powered recruitment platform designed to streamline hiring workflows, utilizing Redux Saga for application state management and featuring intelligent automated matching.",
    tags: ["React.js", "Redux Saga", "AI Recruitment", "REST APIs"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    gridClass: "col-span-1 row-span-1",
    link: "https://www.intrvu.space/",
  },
  {
    title: "Klockmate | HRMS Platform",
    description: "Enterprise Human Resource Management platform with modular layouts, custom hooks, and state optimization to enhance HR and administrative task management.",
    tags: ["React.js", "Redux Saga", "HRMS", "Modular Architecture"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gridClass: "col-span-1 row-span-1",
    link: "https://klockmate.com/",
  },
  {
    title: "Centralized Control Hub Dashboard",
    description: "A centralized dashboard constructed for administrators to configure website payment workflows, validate gateways, and manage features seamlessly.",
    tags: ["React.js", "Node.js", "JWT", "Security"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    gridClass: "col-span-1 md:col-span-2 row-span-1",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-24 bg-card/10">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            <span className="text-gradient-primary">Featured Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my recent work and platforms
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 auto-rows-[18rem] gap-5 md:auto-rows-[22rem] md:grid-cols-3">
          {projects.map((proj, idx) => {
            const CardContent = (
              <>
                {/* Background cover image */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                {/* Technologies Badges */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-1.5 z-10">
                  {proj.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="rounded-full bg-background/85 border border-border/40 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Glassmorphic Project Info Card */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="rounded-xl border border-border/40 bg-card/85 p-4 backdrop-blur-sm shadow-md">
                    <h3 className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors duration-200 flex items-center gap-1.5">
                      {proj.title}
                      {proj.link !== "#" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                        >
                          <path d="M15 3h6v6" />
                          <path d="M10 14 21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      )}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-normal line-clamp-2">
                      {proj.description}
                    </p>
                  </div>
                </div>
              </>
            );

            if (proj.link === "#") {
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg glow-card ${proj.gridClass}`}
                >
                  {CardContent}
                </div>
              );
            }

            return (
              <a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg glow-card block cursor-pointer ${proj.gridClass}`}
              >
                {CardContent}
              </a>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
          <a
            href="https://www.linkedin.com/in/naveen-j-software-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/5"
          >
            Connect on LinkedIn
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
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
