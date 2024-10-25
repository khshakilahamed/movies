"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { ThemeContextPropsType } from "@/types/GlobalTypes";
import { useContext } from "react";

export const useTheme = (): ThemeContextPropsType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
