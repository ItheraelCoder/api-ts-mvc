import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import unusedImports from "eslint-plugin-unused-imports";
import airbnbBase from "eslint-config-airbnb-base";
import airbnbBaseTS from "eslint-config-airbnb-base-typescript";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },

    plugins: {
      "@typescript-eslint": tseslint,
      "unused-imports": unusedImports,
    },
    rules: {

      ...airbnbBase.rules,
      ...airbnbBaseTS.rules,
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ]
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".ts", ".tsx", ".jsx"]
        }
      }
    }
  },
]);