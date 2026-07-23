# AGENTS.md

Guidance for AI coding agents working in this repository. (Claude Code reads CLAUDE.md, which carries the same guidance.)

## Project

Public marketing website for **Invictus Hub**, a software services company — service offerings (generative AI, data analytics, business intelligence, e-commerce, design/development, UX), project portfolio, job listings with application form, contact page. Customer-facing production site: visual polish, responsiveness, and load feel matter.

Vue 3 (Composition API, `<script setup>`) SPA. Vite + Tailwind CSS 3, plain JavaScript (no TypeScript). No backend — content is static JSON and forms submit via EmailJS.

## Commands

```sh
npm install        # Node ^20.19.0 or >=22.12.0
npm run dev        # Vite dev server with HMR (host: true — reachable on LAN/ngrok)
npm run build      # production build to dist/
npm run preview    # serve the production build locally
npm run format     # Prettier --write over src/
npm run format:check  # Prettier check
npm run lint       # ESLint over src/
npm run lint:fix   # ESLint with autofix
```

Prettier is the formatter (`.prettierrc.json` — 100-char width, double quotes, trailing commas). ESLint flat config in `eslint.config.js` (JS recommended + vue flat/essential + prettier-compat; `vue/multi-word-component-names` off). Run `npm run format` and `npm run lint` after changes. No test suite; verify changes by running the dev server.

## Architecture

### Content lives in JSON, not components

- `src/stores/Services.json` — services grouped by category; each service's `id` is its URL slug
- `src/stores/projects.json` — portfolio projects, matched by `slug`
- `src/stores/career.json` — job listings, matched by `slug`

Detail routes (`/services/:slug`, `/project-details/:slug`, `/careers/:slug`, `/applyfor/:slug`) look entries up by the route slug. To change site content, edit the JSON; touch components only for layout changes.

`src/stores/SearchStore.js` is the only Pinia store (search shared between NavBar and listing pages). It exports both `updateSearch` and the legacy typo alias `updateSeach` — keep the alias unless every call site is updated.

### Routing and loading overlay

- `src/router/index.js` — all routes lazy-loaded via dynamic `import()`; history mode; scroll behavior restores saved position, smooth-scrolls hashes, else scrolls to top.
- `src/router/pageLoader.js` exports a shared `isPageLoading` ref toggled by router guards; `App.vue` shows the fullscreen spinner while true.
- `src/composables/usePageLoader.js` is a separate per-page mechanism that waits for all images (outside `[data-page-loader]`) before revealing content.

### Components and styling

- Page-level views sit flat in `src/components/` alongside shared chrome (NavBar, Footer, PageBanner, ScrollButton). `App.vue` composes NavBar + `<router-view>` + Footer, capped at `max-w-[2000px]`.
- `Contact.vue` and `ApplyFor.vue` send email through `@emailjs/browser` (credentials noted in a comment in `src/main.js`).
- Styling is Tailwind utilities in templates plus occasional scoped CSS; globals in `src/style.css`.

### Animation (GSAP + ScrollSmoother)

`gsap` is installed and is the animation library for this site. Plugins are registered once in `src/lib/gsap.js` — always import from there (`import { gsap, ScrollTrigger, ScrollSmoother } from "@/lib/gsap"`). Official GSAP skill docs are bundled in `.claude/skills/gsap-*/SKILL.md` — read the relevant one before writing animation code (`gsap-frameworks` covers the Vue patterns; `gsap-scrolltrigger` covers scroll-driven animation; `gsap-react` does not apply — this is a Vue project). Design/UI reference docs also live in `.claude/skills/` (`ui-ux-pro-max`, `ui-styling`, `design`, `design-system`, `brand`, `banner-design`, `slides`) — consult for visual/design decisions.

**ScrollSmoother is active site-wide** (`App.vue` creates it over `#smooth-wrapper > #smooth-content`, `smooth: 1.2, effects: true`):

- `#smooth-content` is transformed → `position: fixed` breaks inside it. Fixed/overlay elements must render outside via `<Teleport to="body">` (see NavBar: scrolled nav state, mobile menu, sidebar). New modals need the same.
- Programmatic scroll goes through `ScrollSmoother.get().scrollTo(...)` / `.scrollTop(...)` — see `ScrollButton.vue` and the router `scrollBehavior`.
- `window.scrollY` and IntersectionObserver keep working (native scrollbar preserved).
- `data-speed` / `data-lag` attributes give parallax anywhere in content (`effects: true`).
- Never reintroduce CSS `scroll-behavior: smooth` — double-eases against the smoother.

Rules that matter here:

- Animate in `onMounted`, scope selectors to a template ref, and kill tweens/ScrollTriggers in `onUnmounted` — page components are lazy-loaded and remounted on every route visit, so leaked ScrollTriggers accumulate.
- Register plugins once: `gsap.registerPlugin(ScrollTrigger)`.
- Use `gsap.matchMedia()` for responsive variants and `prefers-reduced-motion`.
- **Site-wide animation system: `src/composables/useScrollReveal.js`** — every page calls `useScrollReveal(pageRoot, { rebuildOn: [...] })` with a root wrapper div ref. Animate by tagging elements: `data-hero-el` (mount intro), `data-split` (SplitText word reveal — plain-color short headlines only, never gradient `bg-clip-text`), `data-reveal` (batched rise+fade), `data-reveal-group` (children wave-stagger — grids/stat rows), `data-parallax` (scrubbed drift). Runs under `prefers-reduced-motion: no-preference`, reverts on unmount. `rebuildOn` must list every reactive source that remounts tagged elements (search query, filter tabs). `PageBanner.vue` carries its own mount intro. Don't nest `data-split` inside a `data-reveal` container.

## Conventions

- `@` alias → `src/` (set in `vite.config.js` and `jsconfig.json`).
- Match the existing style: Composition API with `<script setup>`, Tailwind classes inline, images imported from `src/assets/`.
- Asset paths must match filename case exactly (`Logo.png` ≠ `logo.png`) — macOS tolerates mismatches, the Vercel (Linux) build fails.
