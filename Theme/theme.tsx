"use client";
import { useEffect } from "react";
import apptheme from "@/zustand/theme/themeValues";

const setDataTheme = (theme: string) => {
  const body = document.body;
  body.setAttribute("data-theme", theme);
};

const Theme = () => {
  const { theme } = apptheme(); // Access theme from Zustand store

  useEffect(() => {
    setDataTheme(theme); // Set theme on initial load and whenever theme changes
  }, [theme]);

  return null; // No UI to render
};

export default Theme;
