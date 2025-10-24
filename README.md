# Tiny Forest — Pixel Perfect Showcase

## Overview
Tiny Forest is a frontend application scaffolded for rapid development and deployment. This repository contains the source code, configuration, and instructions to run, build, and publish the project.

## Technologies
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Prerequisites
- Node.js (use nvm to manage versions) — https://github.com/nvm-sh/nvm#installing-and-updating
- npm (bundled with Node.js)

## Local development
1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```
2. Install dependencies:
```sh
npm install
```
3. Start the dev server:
```sh
npm run dev
```
4. Build for production:
```sh
npm run build
```
5. Preview a production build locally:
```sh
npm run preview
```

## Editing and collaboration
- Local IDE: Open the cloned repo in your preferred editor, make changes, and push to the remote.
- GitHub: Fork or branch the repository, open pull requests with clear descriptions and testing notes.
- Codespaces: Optionally launch a Codespace from the repository to develop in a cloud environment.

## Deployment
To prepare a production build:
```sh
npm run build
```
The output directory (typically `dist`) can be deployed to any static hosting provider. Common options:
- Vercel / Netlify: Connect your Git repository, set the build command to `npm run build`, and set the publish directory to the build output (e.g., `dist`).
- GitHub Pages: Build the site and publish the static output via the `gh-pages` branch or an Actions workflow.
- Custom servers: Serve the static files from your preferred web server or CDN.

For custom domain configuration, follow your hosting provider's documentation for adding DNS records and configuring the site.

## Contributing
- Fork or branch the repository for feature work.
- Open pull requests with a clear description, screenshots (if applicable), and testing notes.
- Follow the existing code style and commit conventions.

## Support
For questions about this project, open an issue in the repository or contact the project maintainer.

## License
Specify your project's license here (e.g., MIT). Update this file to reflect the correct license and copyright information.
