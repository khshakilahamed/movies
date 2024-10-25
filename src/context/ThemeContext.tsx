import { ThemeContextPropsType } from "@/types/GlobalTypes";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeContextPropsType | undefined>(
  undefined
);
