# Nexcent Landing Page

Pixel-faithful recreation of the [Minimal Landing Page Design](https://www.figma.com/community/file/1222060007934600841/minimal-landing-page-design-website-home-page-design-agency-website-ui-design) (Nexcent) community Figma file, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router) + React
- TypeScript
- Tailwind CSS v4
- JSON-driven content (`src/data/landing.json`)

## Prerequisites

- [Node.js](https://nodejs.org/) **18.18+** (recommended: 20 LTS or newer)
- npm (comes with Node.js)

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/omix2003/simplilearn-assignment-sde1.git
cd simplilearn-assignment-sde1
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open the app**

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Other commands

```bash
npm run build   # create a production build
npm start       # run the production server (after build)
npm run lint    # run ESLint
```

## Architecture

```
src/
  app/                 # App Router entry (SSR pages)
  components/
    landing/           # Page composition
    layout/            # Header, Footer
    sections/          # Section-level presentation
    ui/                # Reusable primitives
  data/landing.json    # All page content (text, links, images)
  lib/content.ts       # Content access layer
  types/landing.ts     # Content contracts
public/images/         # Static assets from the design
```

Content, presentation, and data access are separated:

1. Edit copy/links/images in `src/data/landing.json`
2. Sections receive typed props and render UI only
3. `getLandingContent()` is the single content entry point

## Design credit

Original UI by [Muntasir Billah](https://www.figma.com/community/file/1222060007934600841) — CC BY 4.0.
