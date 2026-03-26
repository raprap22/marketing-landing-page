# Marketing Landing Page

A marketing landing page built with Next.js App Router, reusable components, TypeScript, Tailwind CSS, and an Atomic Design structure. This project is intended to be a scalable foundation for promotional pages, campaign pages, or product landing pages.

## Specifications

- Framework: Next.js 16
- UI Library: React 19
- Language: TypeScript
- Styling: Tailwind CSS v4
- Testing: Vitest + React Testing Library + JSDOM
- Architecture: Atomic Design (`atoms`, `molecules`, `organisms`, `templates`)
- Routing: Next.js App Router
- SEO: App Router `metadata` API
- Image Optimization: `next/image`

## Key Features

- Reusable and scalable component structure
- Landing page content separated from presentation through a data object
- Responsive layout with a mobile-first approach
- Basic SEO setup through metadata
- Unit tests for several core components
- Support for remote images through Next.js configuration

## Folder Structure

```text
.
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Icon.tsx
│   │   │   ├── SectionEyebrow.tsx
│   │   │   └── SectionHeading.tsx
│   │   ├── molecules
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── NavLink.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── organisms
│   │   │   ├── CtaSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.test.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── TestimonialsSection.tsx
│   │   └── templates
│   │       ├── LandingPageTemplate.test.tsx
│   │       └── LandingPageTemplate.tsx
│   └── features
│       └── landing
│           ├── data.tsx
│           └── types.ts
├── next.config.ts
├── package.json
├── tsconfig.json
├── vitest.config.ts
└── vitest.setup.ts
```

## Architecture

This project follows an Atomic Design approach:

- `atoms`: the smallest and most generic components, such as buttons, icons, and headings
- `molecules`: combinations of multiple atoms, such as cards or nav links
- `organisms`: complete page sections, such as hero, pricing, and testimonials
- `templates`: full page layout composition
- `features`: domain-specific data, typing, and configuration

This structure helps with:

- component reuse
- separation between data and UI
- scaling the landing page as it grows more complex
- testing at different component layers

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm test
```

Description:

- `npm run dev`: runs the app in development mode
- `npm run build`: creates a production build
- `npm run start`: starts the production server
- `npm test`: runs unit tests with Vitest

## How To Update Landing Page Content

Most of the main landing page content is defined in:

- `src/features/landing/data.tsx`

In that file, you can update:

- brand
- navigation
- hero section
- features
- testimonials
- pricing
- CTA
- footer

This approach allows copy and content changes without needing to edit multiple UI components.

## How To Run Tests

Run all tests:

```bash
npm test
```

Run a specific test file:

```bash
npx vitest run src/components/atoms/Button.test.tsx
```

Run tests by name:

```bash
npx vitest run -t "Button"
```

## Components Covered By Tests

Basic tests are currently available for:

- `Button`
- `Header`
- `LandingPageTemplate`

Current test coverage includes:

- render tests
- prop behavior
- basic interaction tests

## SEO

Main metadata is configured in:

- `src/app/layout.tsx`

It currently includes:

- title
- description
- Open Graph
- Twitter card
- canonical URL

If this project is used in production, update the URL and metadata values to match the final brand and domain.

## Image Handling

All major images use `next/image`.

Remote image hosts are configured in:

- `next.config.ts`

If you change an image URL to a different domain, make sure that domain is added to `images.remotePatterns`. After updating `next.config.ts`, restart the development server.

## Styling

Styling is handled with Tailwind CSS, and the main design tokens are defined in:

- `src/app/globals.css`

In that file, you can adjust:

- color palette
- font stack
- global background
- global selection style

## Future Improvements

Possible next improvements include:

- adding a `test:watch` script
- Storybook for component documentation
- visual regression testing
- CMS integration for landing page content
- analytics event tracking
- CTA form submission handling

## Notes

- If TypeScript flags `describe`, `it`, or `expect` as errors, this project is already configured with `vitest/globals` in `tsconfig.json`
- If a remote image does not appear, check the allowed image domains in `next.config.ts`
- If changes in `next.config.ts` do not seem to apply, restart the development server

## Live URL

[https://marketing-landing-page-mocha.vercel.app/](https://marketing-landing-page-mocha.vercel.app/)