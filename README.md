# Lingua Memory Match

Lingua Memory Match is an interactive memory game built with **React**, **TypeScript**, and **Vite**. This project is designed to help users improve their language skills while having fun. The game challenges players to match pairs of cards, each representing words, phrases, or images in different languages.

This project leverages modern web development tools and libraries, including **Vite** for fast builds, **React** for a dynamic user interface, and **TypeScript** for type safety. It also integrates with external APIs for features like text-to-speech.

## Features

- **Language Learning**: Match cards to learn new words and phrases in various languages.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Text-to-Speech Integration**: Hear the pronunciation of words as you play.
- **Modern Tech Stack**: Built with React, TypeScript, and Vite for a fast and scalable experience.

## GitHub Pages

Deployed to GitHub Pages under the following URL: https://erinkelsey.github.io/lingua-memory-match-vite/

## Environment Variables

Create a .env file in the main directory and add the following:

    VITE_TEXT_TO_SPEECH_API_KEY=[gcp-api-key]

## Run

```bash
npx vite
```

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment Settings

To deploy on GitHub Pages ensure the following changes are made.

### package.json

Ensure that the **homepage** setting is set in **package.json**

```json
"homepage": "https://erinkelsey.github.io/lingua-memory-match-vite/"
```

### vite.config.ts

Ensure that the **base** is set to the GitHub repository name, as the files will be served from here on GitHub Pages:

```ts
export default defineConfig({
  base: '/lingua-memory-match-vite/',
  plugins: [react(), tsconfigPaths()],
})
```

### \_redirects

Add a **\_redirects** file in the **public** folder with the following line:

    /*    [index.html](http://_vscodecontentref_/6)   200

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
