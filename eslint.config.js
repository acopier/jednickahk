import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import reactPluginRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactPluginJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  // mimic ESLintRC-style extends
  ...compat.extends('next/core-web-vitals'),
  ...compat.config({
    ignorePatterns: ['*.config.*js'],
  }),
  {
    files: ['src/**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    rules: {
      ...reactPluginRecommended.rules,
      ...reactPluginJsxRuntime.rules,
      'import/no-anonymous-default-export': 'off',
      'react/jsx-curly-brace-presence': [
        1,
        { props: 'never', children: 'never', propElementValues: 'always' },
      ],
    },
  },
];
