import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("eslint:recommended", "plugin:prettier/recommended"),
    {
        plugins: {
            prettier,
            "@typescript-eslint": typescript,
        },

        languageOptions: {
            globals: {
                ...globals.node,
            },
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json",
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },

        rules: {
            "no-console": "error",
            indent: ["error", 4],
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "single"],
            semi: ["error", "always"],
            "no-multi-spaces": "error",
            "space-in-parens": "error",
            "no-multiple-empty-lines": "error",
            "prefer-const": "error",
            "prettier/prettier": "error",
            "no-useless-catch": "error",
            
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/explicit-module-boundary-types": "error",
        },
    },
    {
        files: ["src/database.ts"],
        rules: {
            "no-console": "off",
            "no-undef": "off",
        },
    }
];