# Simple solid-js started inspired by vitesse

## Features

- ⚡️ [Solid-js](https://github.com/solidjs/solid), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/routes)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🖨 Static-site generation (SSG) build in [pnpm prerender](./server)

- 🦾 TypeScript, of course

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins
- [`solid-app-router`](https://github.com/solidjs/solid-app-router)
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Solid API and others without importing
- [`solid-meta`](https://github.com/solidjs/solid-meta) - manipulate document head reactively

### Coding Style

- [ESLint](https://eslint.org/) predefine with airbnb, solid and react (for JSX)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

