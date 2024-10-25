"use client";

import { useTheme } from "@/hooks/useTheme";
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";

export default function DarkModeToggle() {
      const { isDarkMode, toggleDarkMode } = useTheme();

      return (
            <button
                  onClick={toggleDarkMode}
            >
                  {isDarkMode ? <MdLightMode className="text-3xl"/> : <MdOutlineNightlight className="text-3xl"/>}
            </button>
      );
}
