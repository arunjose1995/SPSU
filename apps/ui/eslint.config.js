import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import parser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      react: reactPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off", 
            'no-var': 'error',
            semi: 'error',
            'prefer-const': 'error',
            'no-console': 'error',
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
