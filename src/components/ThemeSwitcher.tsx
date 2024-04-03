'use client';
import React, { useEffect, useState } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('theme')
        ? localStorage.getItem('theme')
        : matchMedia('(prefers-color-scheme: dark)').matches === true
          ? 'dark'
          : 'light'
      : null
  );
  // @ts-expect-error
  const toggleDarkMode = (e) => {
    if (e.target.checked) setTheme('dark');
    else setTheme('light');
  };

  useEffect(() => {
    localStorage.setItem('theme', `${theme}`);
    const localTheme = localStorage.getItem('theme');
    document
      .querySelector('html')
      ?.setAttribute('data-theme', localTheme as string);
  }, [theme]);

  return (
    <input
      type='checkbox'
      className='theme-controller'
      checked={theme === 'dark' ? true : false}
      onChange={toggleDarkMode}
    />
  );
}

export default ThemeSwitcher;
