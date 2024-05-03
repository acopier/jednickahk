import type { Config } from 'tailwindcss';

const colors = {
  primary: '#ca8a04',
  secondary: '#3b82f6',
};

export default {
  content: [
    './src/(app|components)/**/*.{js,ts,jsx,tsx,mdx}',
    './src/mdx-components.tsx',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    base: false,
    themes: [
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          ...colors,
        },
      },
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          ...colors,
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        themix: ['var(--font-themix)'],
        skaut: ['var(--font-skaut)'],
      },
      colors: {
        ...colors,
      },
    },
  },
} satisfies Config;
