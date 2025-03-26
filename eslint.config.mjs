import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import unusedImports from "eslint-plugin-unused-imports";
import react from "eslint-plugin-react";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "**/node_modules",
    ".history/*",
    "bundle/*",
    "dist/*",
    "build/*",
    "coverage/*",
    "android/*",
    "ios/*",
    "__tests__/*",
    "__mocks__/*",
    "**/metro.config.js",
    "**/jest.config.js",
    "**/app.json",
    "**/babel.config.js",
    "**/tsconfig.json",
    "**/*.mjs",
]), {
    extends: compat.extends(
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
        "unused-imports": unusedImports,
        react,
    },

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",

            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        "import/resolver": {
            typescript: {},

            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },

        react: {
            version: "detect",
        },
    },

    rules: {
        "typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",

        "unused-imports/no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],

        "linebreak-style": 0,

        "max-len": ["error", {
            code: 200,
        }],
    },
}]);