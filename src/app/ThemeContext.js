"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  theme: "ocean-depths",
  setTheme: () => {},
});

export const themes = [
  { id: "ocean-depths", name: "Ocean Depths", color: "#00d3dd" },
  { id: "cyber-neon", name: "Cyber Neon", color: "#df6df8" },
  { id: "navy-mirage", name: "Navy Mirage", color: "#579edf" },
  { id: "midnight-aurora", name: "Midnight Aurora", color: "#00d15e" },
  { id: "cosmic-purple", name: "Cosmic Purple", color: "#9a7dff" },
  { id: "arctic-frost", name: "Arctic Frost", color: "#30c2d8" },
];

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("ocean-depths");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on client-side
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme && themes.some((t) => t.id === savedTheme)) {
      setThemeState(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "ocean-depths");
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme) => {
    if (themes.some((t) => t.id === newTheme)) {
      setThemeState(newTheme);
      localStorage.setItem("portfolio-theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
