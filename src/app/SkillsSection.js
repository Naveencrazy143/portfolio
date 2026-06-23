"use client";

import React, { useState, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    description: "Building beautiful user interfaces",
    icon: "m18 16 4-4-4-4 M6 8l-4 4 4 4 M14.5 4-5 16",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Redux Toolkit", "Redux Saga", "Micro Frontend Architecture", "React Router DOM"],
  },
  {
    title: "Backend & APIs",
    description: "Creating robust APIs and communication layers",
    icon: "M4 10h16M4 14h16M4 18h16M4 6h16",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "JWT", "Stripe", "Merchant Warrior", "HyperPay", "JustGiving"],
  },
  {
    title: "Languages",
    description: "Programming languages I write",
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Database",
    description: "Managing data efficiently",
    icon: "M12 22c5.523 0 10-2.239 10-5V7c0-2.761-4.477-5-10-5S2 4.239 2 7v10c0 2.761 4.477 5 10 5z M22 7c0 2.761-4.477 5-10 5S2 9.761 2 7 M2 12c0 2.761 4.477 5 10 5s10-2.239 10-5",
    skills: ["MySQL"],
  },
  {
    title: "Tools & Libraries",
    description: "Essential development tooling",
    icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    skills: ["Postman", "Material UI", "Bootstrap", "Formik", "Yup", "Axios", "Vite", "Webpack", "Git", "GitHub", "GitLab"],
  },
];

export default function SkillsSection() {
  const [sliderWidthPercent, setSliderWidthPercent] = useState(100);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // Cursor position relative to card left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderWidthPercent(percentage);
  };

  const handleMouseLeave = () => {
    // Reset back to covering the text fully
    setSliderWidthPercent(100);
  };

  return (
    <section id="skills" className="relative min-h-screen py-24 bg-card/10">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            <span className="text-gradient-primary">Skills & Technologies</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Dynamic Tech Stack Cover-Reveal Slider Card */}
        <div className="mb-16 hidden lg:block">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full overflow-hidden rounded-2xl border border-border bg-card p-10 mx-auto max-w-3xl cursor-ew-resize select-none transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
          >
            <h3 className="text-2xl font-bold text-foreground mb-1">My Tech Stack</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Hover your cursor to slide and reveal my passion for technology
            </p>

            <div className="relative flex h-32 items-center overflow-hidden">
              {/* Back Text: "Technologies I use" (Dim/Muted) */}
              <div className="absolute inset-0 flex items-center bg-card">
                <p className="text-5xl font-extrabold text-muted-foreground/15 tracking-tight">
                  Technologies I use
                </p>
              </div>

              {/* Front Text Wrapper (Masked width based on cursor) */}
              <div
                className="absolute inset-0 z-20 flex items-center bg-card overflow-hidden border-r-0 transition-all duration-75"
                style={{ width: `${sliderWidthPercent}%` }}
              >
                {/* We set a fixed width matching parent container width to prevent text from wrapping when parent width shrinks */}
                <div className="w-[700px] shrink-0">
                  <p className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-5xl font-extrabold text-transparent tracking-tight leading-normal">
                    Mastering the craft
                  </p>
                </div>
              </div>

              {/* Slider Laser Divider Line */}
              <div
                className="absolute z-30 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent shadow-lg shadow-primary/80 transition-all duration-75"
                style={{ left: `${sliderWidthPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-xs glow-card"
            >
              {/* Category Title Header */}
              <div className="mb-6 flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={category.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground leading-none">{category.title}</h4>
                  <p className="mt-1.5 text-xs text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="rounded-lg px-3 py-1.5 border border-border/40 bg-background/50 text-xs font-semibold text-foreground transition-all duration-250 hover:bg-primary/5 hover:border-primary/40 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
