# Architecture Document

## 1. Purpose
This document describes the current architecture of the Milling & Millers v2 website and the target architecture direction for maintainability and content scalability.

## 2. System Overview
Milling & Millers v2 is a content-centric web application built with Astro and Tailwind CSS. The site serves industry news, policies, machinery listings, events, and contact information.

The current implementation is mostly static with some client-side interactivity:
- Static pages rendered via Astro.
- Local in-repo JavaScript data modules as content sources.
- Minimal browser-side scripts for filtering and UI tabs.

## 3. High-Level Architecture

### 3.1 Runtime and Framework
- Framework: Astro (v5)
- Styling: Tailwind CSS + global CSS files
- Language: JavaScript in Astro components and page frontmatter
- Build model: static build by default, with one dynamic route explicitly set to non-prerendered

### 3.2 Layered Structure
- Presentation layer:
  - Astro pages in src/pages
  - Reusable Astro components in src/components
- Content/data layer:
  - Static datasets in src/data/*.js
  - Optional markdown/news content folder exists in src/content/news
- Styling layer:
  - Global and theme styles in src/styles
- Public assets:
  - Static files and images in public

### 3.3 Route Topology
Current public routes:
- /
- /news
- /news/[slug] (server-rendered route with prerender disabled)
- /news/[id] (statically generated from news slugs)
- /policies
- /machinery
- /events
- /contact

Architectural note:
Two dynamic routes under /news currently overlap conceptually. This creates a risk of duplicate behavior and inconsistent rendering strategy.

## 4. Component Architecture

### 4.1 Layouts
- Base layout centralizes html shell, viewport/meta defaults, and global style import.
- Pages either use this layout or define full HTML directly.

### 4.2 Shared UI Components
- Header: global navigation and ad slot.
- Footer: contact and site attribution.

### 4.3 Feature Components
- Home page composition includes Hero, category highlights, machinery, policies, and events sections.
- MachineryGrid supports two modes:
  - Catalog-only mode.
  - Tabbed + catalog mode with client-side tab script.
- EventsGrid and policy/news sections render from local datasets.

## 5. Data Architecture

### 5.1 Data Sources
Primary source is static JavaScript arrays in src/data:
- news.js
- policies.js
- events.js
- machinery.js

### 5.2 Data Access Pattern
Pages import data modules directly and optionally use helper functions for sorting/reversal.

### 5.3 Data Shape Characteristics
- News: title, type, image, content, slug, sequence
- Policies: id, title, file, date
- Events: id, title, datetime/location metadata, image, description
- Machinery: id, title, vendor details, pricing/contact metadata

## 6. Rendering Strategy
- Most pages are static at build time.
- news/[slug] is configured with prerender = false and resolves content by Astro.params at request time.
- news/[id] uses getStaticPaths and statically generates detail pages.

Recommended target:
- Choose one canonical dynamic strategy for news detail pages.
- Keep a single route pattern to avoid divergence.

## 7. Styling Architecture
- Tailwind utility classes are the dominant style mechanism.
- Global styles are imported through shared files and Header/Base layout.
- Theme tokens/classes are available via src/styles/theme.css and global.css.

## 8. Deployment Architecture
- Build command produces static output via Astro build.
- App can be hosted on static/CDN-friendly platforms; dynamic route behavior should be validated against hosting mode.

## 9. Quality Attributes

### 9.1 Maintainability
Current strengths:
- Clear separation between pages, components, and data files.
- Reusable UI sections on homepage.

Current risks:
- Metadata ownership is still partially distributed and should be centralized in shared layout props (title, description, canonical).
- Duplicate news detail route implementations.

### 9.2 Performance
- Astro static generation and minimal client JS are favorable.
- External image URLs may affect reliability and performance.

### 9.3 Accessibility
- Semantic sections are present in most pages.
- Needs an accessibility pass for nav states, form labels, keyboard/focus details, and color contrast consistency.

## 10. Security and Compliance Considerations
- No backend credential handling in current codebase.
- External image and link domains should be reviewed and allowlisted.
- Contact/event inputs shown in UI are not wired to backend, reducing immediate injection risk.

## 11. Target Architecture (Next Iteration)
- Unify all pages on shared layout(s).
- Consolidate news detail into one canonical route.
- Move from hardcoded JS arrays to a structured content pipeline (Astro Content Collections or external CMS).
- Define TypeScript interfaces/schemas for content records.
- Add lightweight testing for route rendering and data integrity.

## 12. Open Decisions
- Canonical URL strategy for news detail pages: /news/[slug] only, or maintain backward-compatible redirects.
- Source of truth for content updates: repository-driven markdown versus API/CMS.
- Whether dynamic server rendering is required, or full static generation is sufficient.
