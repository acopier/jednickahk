'use client';
import { useEffect, useState } from 'react';

function ThemeSwitcherBase() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('theme')
        ? localStorage.getItem('theme')
        : matchMedia('(prefers-color-scheme: dark)').matches === true
          ? 'dark'
          : 'light'
      : null
  );
  const toggleDarkMode: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.checked ? setTheme('dark') : setTheme('light');
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
      title='Theme switcher'
      id='theme-controller'
    />
  );
}

export default ThemeSwitcherBase;
