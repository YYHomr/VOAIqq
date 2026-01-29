# VOAI Waitlist Application

A professional, Vercel-friendly waitlist application for VOAI built with Express.js.

## Features
- **Black & White Theme**: Sleek, modern design.
- **Theme Switcher**: Toggle between light and dark modes.
- **Dual Waitlist Forms**: Dedicated forms for Individual and Business users.
- **Vercel Ready**: Pre-configured with `vercel.json` for instant deployment.

## Project Structure
- `index.js`: Express server and API endpoints.
- `public/`: Frontend assets (HTML, CSS, JS).
- `vercel.json`: Vercel deployment configuration.

## How to Run Locally
1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Open `http://localhost:3000` in your browser.

## Deployment to Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project root.
3. Follow the prompts to deploy.

## Note
This version uses in-memory storage for waitlist entries. For production, consider connecting to a database like MongoDB or PostgreSQL.
