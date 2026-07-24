# FlowPilot - Workflow Automation Platform Marketing Website

FlowPilot is a production-quality, fully responsive, and highly accessible marketing website built for a fictional B2B SaaS platform that helps growing businesses automate repetitive processes, connect tools, and improve productivity.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript (TSX)
- **Bundler**: Vite 8 (with `@tailwindcss/vite` v4 plugin)
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7 (`react-router-dom`)
- **Icons**: Lucide React + Custom Inline Social SVGs
- **Animations**: Framer Motion (for mobile menu) + Tailwind utility transitions

---

## 📐 Architecture Decisions

- **Shared Layout System**: The root component (`App.tsx`) coordinates a single source of layout (Navbar, ScrollToTop behavior, fallback routing, and Footer), allowing developer teams to expand page configurations by adding simple route endpoints in a decoupled manner.
- **Dynamic SEO Component**: The `SEO.tsx` component is fully declarative. Pages declare metadata (like JSON-LD structures, Open Graph schemas, and custom titles) via component props, and the component updates the document's headers on route transitions using react lifecycle hooks.
- **Custom Brand SVGs**: To prevent bundle-dependency mismatch and import issues with third-party icon libraries, custom vector SVGs were written directly for brand logos (Twitter/X, GitHub, LinkedIn), ensuring compatibility and lightning-fast asset rendering.

---

## ♿ Accessibility Approach

- **Semantic Elements**: Proper HTML5 tags (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`) are used systematically.
- **Heading Order**: Every page strictly limits itself to a single `<h1>` tag followed by chronological `<h2>`, `<h3>`, and `<h4>` structures.
- **Keyboard Navigation**: Buttons, input controls, and anchor links are keyboard navigable. Focus visible rings (`focus-visible:outline-2`) have high-contrast coloring matching the accent blue.
- **Accessible Forms & Accordions**:
  - Accordion buttons feature `aria-expanded` attributes toggled dynamically.
  - The contact form utilizes semantic `<label>` elements linked to inputs via `htmlFor`. Live clientside error messages are bound via `aria-describedby` and output with `role="alert"`.
- **Motion Reduction**: A dedicated `@media (prefers-reduced-motion: reduce)` override is set in `index.css` to disable all transitions and animation durations for users with motion preferences.

---

## 🔍 SEO & Structured Data

- **Meta Headers**: Every page injects its own page title, description, and canonical URL.
- **Social Tags**: Open Graph (OG) tags and Twitter card parameters are set per route.
- **JSON-LD Schema**:
  - The Home Page mounts `Organization` and `FAQPage` structured data.
  - The Product Page features a `Product` structured dataset outlining low/high aggregates.
  - Structured data scripts are loaded and cleared dynamically on mount/dismount.

---

## ⚡ Performance Optimizations

- **Tailwind CSS v4 Compilation**: Vite builds the CSS natively, reducing overall size and layout shifts.
- **Bundle Optimization**: The production build bundle successfully splits code, compiling into single-page JS and CSS bundles under `dist/`.
- **Subtle Layout Transitions**: All layout animations are built on top of high-performance GPU properties (`transform`, `opacity`), preventing expensive browser reflow and repaint passes.

---

## 🤖 AI Usage & Manual Changes

- **AI Generation**: The code files, components, routing, and initial Tailwind templates were generated using the Antigravity agentic model framework.
- **Manual Audits & Fixes**:
  - Solved dependencies conflicts and missing exports in `lucide-react` by replacing brand icons with hand-crafted custom inline SVGs in `Footer.tsx`.
  - Audited TypeScript compiler output using `npx tsc --noEmit` and successfully resolved compile issues.
  - Configured Vite build tasks, ensuring error-free execution and zero bundling warnings.
