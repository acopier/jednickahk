'use client';
import { useEffect, useState } from 'react';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, [darkMode]);
  return (
    <>
      <input
        type='checkbox'
        className='theme-controller'
        value={darkMode === true ? 'light' : 'dark'}
      />
    </>
  );
}

export default ThemeSwitcher;
