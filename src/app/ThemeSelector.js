"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme, themes } from "./ThemeContext";

export default function ThemeSelector() {
  const { theme, setTheme, mounted } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="fixed bottom-20 md:bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover */}
      {isOpen && (
        <div 
          className="mb-3 w-56 rounded-xl border border-border bg-card p-4 shadow-xl backdrop-blur-md transition-all duration-200 animate-in fade-in slide-in-from-bottom-2"
          style={{ transformOrigin: "bottom right" }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Select Color Theme
          </p>
          <div className="grid grid-cols-2 gap-2">
            {themes.map((t) => {
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                  }}
                  className={`flex items-center gap-2 rounded-lg border p-2 text-left text-xs font-medium transition-all hover:bg-muted ${
                    isActive
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border/50 bg-background/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: t.color }}
                  />
                  <span className="truncate">{t.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 active:scale-95 glow-primary focus:outline-none"
        aria-label="Toggle theme selection menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
        >
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32115 19.4626 5.37894 20.2014 4.97864 20.7188C4.54271 21.2823 3.82683 21.4394 3.2323 21.0997C2.47715 20.668 1 19 1 17C1 12 5 8 10 8C11.6569 8 13 9.34315 13 11C13 12.6569 11.6569 14 10 14C8.34315 14 7 15.3431 7 17C7 19.7614 9.23858 22 12 22Z" />
          <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
          <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
          <circle cx="15.5" cy="14.5" r="1" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
