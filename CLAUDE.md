# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The public marketing website for **Invictus Hub**, a software services company. It presents the company's service offerings (generative AI, data analytics, business intelligence, e-commerce, design/development, UX), a project portfolio, job listings with an application form, and a contact page. Treat it as a customer-facing production site: visual polish, responsiveness, and load feel matter more than internal tooling.

## Commands

```sh
npm install        # install dependencies (Node ^20.19.0 or >=22.12.0)
npm run dev        # Vite dev server with HMR (host: true, so reachable on LAN/ngrok)
npm run build      # production build to dist/
npm run preview    # serve the production build locally
npm run format     # Prettier --write over src/
npm run format:check  # Prettier check (CI-style)
npm run lint       # ESLint over src/
npm run lint:fix   # ESLint with autofix
```

Prettier is the formatter (`.prettierrc.json`: 100-char width, double quotes, trailing commas; `.prettierignore` excludes dist/, .claude/, package-lock.json). ESLint uses flat config (`eslint.config.js`): JS recommended + `eslint-plugin-vue` flat/essential + `eslint-config-prettier`; `vue/multi-word-component-names` is off (page views are single-word by design). Run `npm run format` and `npm run lint` after changes. There is no test suite configured.

## Architecture

Vue 3 (Composition API, `<script setup>`) SPA for the Invictus Hub company website. Vite + Tailwind CSS 3. No backend — all page content is static JSON, and forms submit via EmailJS.

### Content-driven pages via JSON "stores"

The site's content lives in `src/stores/*.json`, not in components:

- `Services.json` — service offerings grouped by category; each service has an `id` used as the URL slug
- `projects.json` — portfolio projects, matched by `slug`
- `career.json` — job listings, matched by `slug`

Detail pages (`/services/:slug`, `/project-details/:slug`, `/careers/:slug`, `/applyfor/:slug`) import the relevant JSON and look up the entry by the route's slug param. To add/edit site content, edit the JSON — component changes are only needed for layout.

`src/stores/SearchStore.js` is the only Pinia store (search query shared between NavBar and listing pages). Note it exports both `updateSearch` and the legacy typo alias `updateSeach` — keep the alias unless all call sites are updated.

### Routing and page loader

- Routes are defined in `src/router/index.js`; every route component is lazy-loaded via dynamic `import()`. History mode with scroll behavior: restores saved position, smooth-scrolls to hashes, else top.
- Global loading overlay: `src/router/pageLoader.js` exports a shared `isPageLoading` ref. Router guards (`beforeEach`/`afterEach`/`onError`) toggle it, and `App.vue` renders the fullscreen spinner overlay while it's true.
- Separate per-page mechanism: `src/composables/usePageLoader.js` waits for all `document.images` to load (excluding elements inside `[data-page-loader]`) before flipping its own `isLoading` — used by pages that want to hold their reveal until images are ready.

### Components

- All page-level views live flat in `src/components/` (Home, About, ServicesHome, Services, Projects, Careers, Contact, etc.) alongside shared chrome (NavBar, Footer, PageBanner, ScrollButton). `App.vue` composes NavBar + `<router-view>` + Footer.
- `Contact.vue` and `ApplyFor.vue` send email through `@emailjs/browser` (credentials are noted in a comment at the bottom of `src/main.js`).
- Styling is Tailwind utility classes in templates plus occasional scoped CSS; global styles in `src/style.css`. App is capped at `max-w-[2000px]`.

### Animation (GSAP + ScrollSmoother)

`gsap` is installed and is the animation library for this site. Plugins are registered once in `src/lib/gsap.js` — always import from there (`import { gsap, ScrollTrigger, ScrollSmoother } from "@/lib/gsap"`), never from `gsap` directly in components.

**ScrollSmoother is active site-wide.** `App.vue` wraps everything in `#smooth-wrapper > #smooth-content` and creates the smoother on mount (`smooth: 1.2, effects: true`). Consequences everything must respect:

- `#smooth-content` is transformed, so `position: fixed` inside it breaks. Any fixed/overlay element must render outside it — NavBar's scrolled state, mobile menu, and sidebar are wrapped in `<Teleport to="body">` for this reason (nav teleports only when `showNavBar` is true). New modals/overlays need the same treatment.
- Programmatic scrolling goes through the smoother: `ScrollSmoother.get().scrollTo(target, true)` / `.scrollTop(px)` — see `ScrollButton.vue` and the router's `scrollBehavior` (which resets instantly via `smoother.scrollTop(0)` on route change).
- `window.scrollY` and IntersectionObserver still work normally (native scrollbar is preserved; content just eases toward it).
- `effects: true` means `data-speed` / `data-lag` attributes work anywhere in content for parallax.
- Do not add CSS `scroll-behavior: smooth` back to `style.css` — it double-eases against the smoother.

The repo bundles the official GSAP skills in `.claude/skills/` — consult the matching skill before writing animation code:

- `gsap-frameworks` — Vue-specific patterns: animate in `onMounted`, scope selectors to a template ref, kill tweens/ScrollTriggers in `onUnmounted`. This is the baseline for any animation in this codebase.
- `gsap-core` — tweens, easing, stagger, and `gsap.matchMedia()` (use it to respect `prefers-reduced-motion` and responsive breakpoints)
- `gsap-scrolltrigger` — scroll-driven reveals, parallax, pinned sections
- `gsap-timeline` — sequencing/choreography
- `gsap-plugins`, `gsap-utils`, `gsap-performance` — plugin registration, helpers, jank fixes
- `gsap-react` — not applicable here (Vue project)

Design/UI skills are also bundled in `.claude/skills/`: `ui-ux-pro-max` (styles, palettes, font pairings, UX guidelines, GSAP motion presets), `ui-styling` (Tailwind/component patterns), `design`, `design-system`, `brand`, `banner-design`, `slides`. Consult `ui-ux-pro-max` when making visual/design decisions on this site.

Register plugins once (`gsap.registerPlugin(ScrollTrigger)`) and always clean up on unmount — page components are lazy-loaded and remounted on every route visit, so leaked ScrollTriggers accumulate.

**Site-wide animation system: `src/composables/useScrollReveal.js`.** Every page view calls `useScrollReveal(pageRoot, { rebuildOn: [...] })` with a single root wrapper div ref (page templates were multi-root; the wrapper is required for scoping). Animate by tagging template elements — do not write per-page GSAP unless an effect genuinely isn't covered:

- `data-hero-el` — above-the-fold intro, staggered rise on mount
- `data-split` — short plain-color headline, SplitText masked word reveal (never on gradient `bg-clip-text` headings — per-line splitting restarts the gradient; use `data-reveal` there)
- `data-reveal` — batched rise+fade on enter (`once: true`)
- `data-reveal-group` — container whose children wave-stagger (`back.out`, grid-aware) — for card grids/stat rows
- `data-parallax` — decorative scrubbed drift

Everything runs under `(prefers-reduced-motion: no-preference)` via `gsap.matchMedia(root)` and reverts on unmount. `rebuildOn` must include every reactive source that remounts tagged elements (`store.searchQuery` everywhere; also filter tabs like `activeCategory`/`currentTab` on Projects/Careers). `PageBanner.vue` has its own self-contained mount intro. Never nest `data-split` inside a `data-reveal` container (double motion).

### Conventions

- `@` alias resolves to `src/` (configured in both `vite.config.js` and `jsconfig.json`).
- Plain JavaScript throughout — no TypeScript.
- Images live in `src/assets/` and are imported directly by components.
- Asset paths must match filename case exactly (e.g. `Logo.png`, not `logo.png`) — macOS dev builds tolerate mismatches, the Vercel (Linux) build fails on them.
