import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import reactPluginRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactPluginJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import prettierConfig from 'eslint-config-prettier';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  // mimic ESLintRC-style extends
  prettierConfig,
  ...compat.extends('next/core-web-vitals'),
  ...compat.config({
    ignorePatterns: [],
  }),
  {
    files: ['src/**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...reactPluginRecommended.rules,
      ...reactPluginJsxRuntime.rules,
      'react/jsx-curly-brace-presence': [
        1,
        { props: 'never', children: 'never', propElementValues: 'always' },
      ],
    },
  },
];

export default config;
