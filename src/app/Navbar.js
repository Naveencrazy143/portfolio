"use client";

import React, { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "Home", icon: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8 M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
  { id: "skills", label: "Skills", icon: "m18 16 4-4-4-4 M6 8l-4 4 4 4 M14.5 4-5 16" },
  { id: "experience", label: "Experience", icon: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16 M2 6h20v14H2z" },
  { id: "certifications", label: "Certifications", mobLabel: "Certs", icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8.21 13.89L7 23l5-3 5 3-1.21-9.12" },
  { id: "projects", label: "Projects", icon: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z M8 10v4 M12 10v2 M16 10v6" },
  { id: "contact", label: "Contact", icon: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7 M2 4h20v16H2z" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll height to add backdrop blur to top header on desktop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor intersection of sections to highlight active nav link
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Check when section is in middle of viewport
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Desktop Top Header Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 border-b border-border/40 backdrop-blur-md py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-2xl font-bold text-gradient-primary tracking-tight transition-transform hover:scale-105"
          >
            Naveen
          </a>
          <nav className="relative flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {/* Underline slider indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary animate-in fade-in zoom-in-50 duration-200" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/90 border-t border-border/80 backdrop-blur-lg safe-area-bottom shadow-2xl transition-all duration-300">
        <div className="relative flex items-center justify-around px-2 py-2.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative flex flex-col items-center justify-center gap-1.5 flex-1 max-w-[72px] px-1 h-12 transition-all duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Active background bubble glow */}
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-xl bg-primary/10 mx-1.5 my-0.5 animate-in fade-in zoom-in-75 duration-300" />
                )}
                
                {/* Custom Lucide Icon Representation */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
                >
                  <path d={item.icon} />
                </svg>
                <span className="text-[10px] font-semibold tracking-wide">{item.mobLabel || item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
