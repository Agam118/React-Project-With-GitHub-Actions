# React-Project-With-GitHub-Actions

A simple React app for learning unit tests and GitHub Actions.

## What's included

- **React + Vite** — fast dev setup
- **Vitest + Testing Library** — unit tests for components and utilities
- **3 sample tests** in `src/App.test.jsx`:
  1. Utility function test (`greet`)
  2. Component render test (`App`)
  3. User interaction test (button click)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Run tests

```bash
# Run once
npm test

# Watch mode (re-runs on file changes)
npm run test:watch
```

## Project structure

```
src/
  App.jsx          # Main component with a counter
  App.test.jsx     # Unit tests
  utils/greet.js   # Small helper function to test
  setupTests.js    # Test setup (jest-dom matchers)
```

## Build for production

```bash
npm run build
```
