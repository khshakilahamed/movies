"use client";

import { useTheme } from '@/context/ThemeContext';
import light from "./../assets/light-2.svg";
import dark from "./../assets/dark.png";
import Image from 'next/image';

export default function DarkModeToggle() {
      const { isDarkMode, toggleDarkMode } = useTheme();

      return (
            <button
                  onClick={toggleDarkMode}
            >
                  {isDarkMode ? <Image src={light} alt='light mode' className='w-[30px] h-[30px] text-white' /> : <Image src={dark} alt='dark mode' className='w-[30px] h-[30px]' />}
            </button>
      );
}
