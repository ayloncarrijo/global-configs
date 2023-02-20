# @ayloncarrijo/eslint-config

A shareable ESLint config used in my projects.

## What's supported by this config?

- JavaScript;
- TypeScript;
- React;

## Setup

1. Install the dependencies:

```
pnpm add -D eslint @ayloncarrijo/eslint-config
```

2. Create a `.eslintrc.js` file extending the config:

```js
module.exports = {
  extends: ["@ayloncarrijo/eslint-config"],
};
```

> You can also use a `.eslintrc.json` instead of JS if you prefer.

3. If you are using TypeScript and your `tsconfig.json` is not located in the same directory as your ESLint config, you will need to provide a path to it:

```js
module.exports = {
  extends: ["@ayloncarrijo/eslint-config"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
```
