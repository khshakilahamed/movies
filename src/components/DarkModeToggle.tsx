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
                  {isDarkMode ? <MdLightMode className="text-xl sm:text-3xl hover:scale-105 duration-150" title="Light Mode" /> : <MdOutlineNightlight className="text-xl sm:text-3xl hover:scale-105 duration-150" title="Dark Mode" />}
            </button>
      );
}
