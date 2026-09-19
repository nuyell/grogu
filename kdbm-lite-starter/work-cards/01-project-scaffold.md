# Work Card 01 — Project Scaffold

## Goal

Set up the Vite + React + plain CSS project skeleton for Grogu World.

## Inputs

- Node.js v24.21.0, npm v11.19.0 confirmed
- Project folder: `kdbm-lite-starter`
- Stack: Vite + React + Plain CSS (from architecture.md)

## Files likely touched

- `package.json`
- `vite.config.js`
- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `src/App.css`
- `src/index.css`

## Instructions for the coding agent

1. Run `npm create vite@latest . -- --template react` in the project folder
2. Install dependencies with `npm install`
3. Set up plain CSS (no Tailwind unless session uses it)
4. Configure `vite.config.js` for a basic React project
5. Ensure `npm run dev` starts the dev server
6. Verify the app shell/header loads at localhost

## What not to do

- Do not add backend, auth, database, or API
- Do not install unnecessary packages
- Do not add TypeScript unless requested
- Do not create app components yet
- Do not initialize Git yet

## Done when

- `npm run dev` starts successfully
- App loads at localhost with a basic React shell
- Project structure follows the file expectations in build-blueprint.md
- Plain CSS is set up (no Tailwind or other CSS frameworks unless session uses it)

## Verification steps

- [ ] `npm run dev` starts without errors
- [ ] App loads at localhost (check browser)
- [ ] Basic React app shell is visible
- [ ] Project structure matches build-blueprint.md expectations
- [ ] Plain CSS is configured, no Tailwind unless session uses it
- [ ] Design check: project skeleton has room for space-themed, playful, cute design per design.md

## Localhost test before continuing

After this card, the learner should test:

- [ ] `npm run dev` starts the dev server
- [ ] The app loads at localhost with a visible React shell
- [ ] No console errors in the browser

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If `npm run dev` cannot start within 5 minutes, ask the trainer for Pair Mode or Rescue Mode.

## Status

Done ✅