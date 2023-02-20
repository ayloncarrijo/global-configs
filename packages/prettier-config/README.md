# @ayloncarrijo/prettier-config

A shareable Prettier config used in my projects.

## Setup

1. Install the dependencies:

```
pnpm add -D @ayloncarrijo/prettier-config
```

2. Add this field to your `package.json` file:

```json
{
  "prettier": "@ayloncarrijo/prettier-config"
}
```

> This method does **not** offer a way to _extend_ the config to overwrite some properties from the shared config. If you need to do that, import the file in a `.prettierrc.js` file and export the modifications, for example:
>
> ```js
> module.exports = {
>   ...require("@ayloncarrijo/prettier-config"),
>   singleQuote: true,
> };
> ```
