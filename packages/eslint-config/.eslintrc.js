module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: true,
        },
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "standard-with-typescript",
      ],
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/array-type": ["error", { default: "generic" }],
        "@typescript-eslint/no-empty-function": [
          "error",
          { allow: ["private-constructors", "protected-constructors"] },
        ],
      },
    },
    {
      files: ["*.jsx", "*.tsx"],
      settings: {
        react: {
          version: "detect",
        },
      },
      plugins: ["jsx-a11y", "react", "react-hooks"],
      extends: [
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
      ],
      rules: {
        "jsx-a11y/alt-text": [
          "error",
          { elements: ["img"], img: ["Image", "Img"] },
        ],
        "react/jsx-no-target-blank": "off",
        "react/no-unknown-property": "off",
        "react/prop-types": "off",
        "react/button-has-type": "error",
        "react/self-closing-comp": "error",
        "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
      },
    },
    { files: "*", extends: ["prettier"] },
  ],
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import"],
  extends: ["eslint:recommended", "standard"],
  rules: {
    "import/no-anonymous-default-export": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-cycle": "error",
    "prefer-template": "error",
    "prefer-destructuring": ["error", { object: true, array: false }],
  },
};
