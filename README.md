# Portfolio Website

Personal portfolio for Daksh Yadav built with Next.js and designed to showcase selected projects, technical skills, socials, and a resume link in a clean, animated single-page experience.

## Live Site

- Production: https://dxksh.tech

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion / Motion
- next-themes
- shadcn/ui-style components
- Lottie animations
- GitHub calendar integration

## Features

- Hero section with profile avatar, header artwork, and social links
- Featured projects with cards and detailed project views
- Tech stack cloud with interactive icons
- GitHub contributions section
- Resume page and contact links
- Theme switching support

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, yarn, or bun

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - build the application for production
- `npm run start` - run the production server
- `npm run lint` - run ESLint

## Project Structure

```text
app/
	layout.tsx       # Root layout, metadata, fonts, and providers
	page.tsx         # Main portfolio page composition
	projects/        # Projects route
	resume/          # Resume route
components/        # Shared UI and portfolio components
lib/               # Data, utilities, and assets
sections/         # Page sections used by the homepage
public/            # Static assets
```

## Content Notes

- Project data lives in `lib/projects.ts`
- Static assets are defined in `lib/assets.ts`
- The main homepage composes `Hero`, `Projects`, `TechStack`, `GithubContributions`, and `Footer`

## Deployment

The site is ready to deploy on Vercel or any platform that supports Next.js 16.
