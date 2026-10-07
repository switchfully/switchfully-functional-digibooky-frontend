# SwitchfullyTrackFunctionalDigibookyFrontend

Originally generated with Angular CLI 7.3.0 (2019), migrated to Angular 22 in 2026.

Requires Node.js 24 (or another version supported by the Angular CLI).

## Build

Run `npm run build` to build the project. The build defaults to the production configuration and the
artifacts are stored in `dist/switchfully-track-functional-digibooky-frontend/browser`.
- The base href (`/track/functional/digibooky/`) is set in `src/index.html`; override it with `--base-href` if needed.

## Deployment

The app is deployed on Netlify; see `netlify.toml` for the build command, publish directory and redirect rules.

## Development server

Run `npm start` for a dev server and open the URL it prints. The app will automatically reload if you change any of the source files.
The development build talks to the backend at `http://localhost:9800/` (see `src/environments/environment.ts`).

## Running unit tests

Run `npm test` to execute the unit tests via [Vitest](https://vitest.dev).
