# Technical Specifications

## 1. Scope
Defines implementation-level specifications for Milling & Millers v2 as currently built, plus near-term technical hardening requirements.

## 2. Technology Stack
- Runtime/build: Node.js (>=16.14.0)
- Framework: Astro 5.x
- Styling: Tailwind CSS 3.3.3 + project CSS
- Linting/formatting: ESLint, Prettier
- Package manager: npm

## 3. Project Structure
- src/pages: Route entry files
- src/components: Reusable Astro components
- src/layouts: Shared layouts
- src/data: Static content data modules
- src/styles: Theme/global styles
- public: Static assets served as-is

## 4. Routing Spec

### 4.1 Static/Primary Pages
- / -> homepage
- /news -> listing with client-side category filter
- /policies -> policy list and pdf links
- /machinery -> machinery catalog
- /events -> events view with sidebar controls
- /contact -> contact information

### 4.2 Dynamic News Routes
Current implementation includes:
- /news/[slug] with prerender = false
- /news/[id] generated via getStaticPaths mapping id to slug value

Spec requirement (near-term):
- Consolidate to one canonical detail route and add redirects as needed.

## 5. Data Model Specs

### 5.1 NewsPost
Required fields:
- title: string
- type: string
- content: string
- slug: string
Optional fields:
- image: string (absolute URL or public asset path)
Recommended fields:
- seq: number (for deterministic ordering)

### 5.2 Policy
Required fields:
- id: string | number
- title: string
- file: string (public asset URL)
- date: string (ISO-like yyyy-mm-dd preferred)

### 5.3 Event
Required fields:
- id: string
- title: string
- date: string
- location: string
Optional fields:
- time, organizer, image, description, link, seq

### 5.4 MachineryItem
Required fields:
- id: string | number
- title: string
- description: string
Optional fields:
- image, vendor, price, link, location, contact

## 6. Rendering and Hydration Specs
- Default approach should remain static rendering where possible.
- Client-side scripts only for interactive controls that cannot be done server-side (news category filter, machinery tabs).
- Avoid broad hydration of component trees when behavior can be isolated to small scripts.

## 7. Styling Specs
- Use Tailwind utility classes for local component/page styling.
- Use src/styles/global.css and src/styles/theme.css for shared tokens and base rules.
- Keep color and spacing conventions consistent across page implementations.

## 8. SEO and Metadata Specs
- Every page must include a descriptive title.
- Add unique meta description per primary route.
- Use canonical URLs on content detail pages once route consolidation is completed.
- Provide sitemap consistency with canonical route strategy.

## 9. Accessibility Specs
- Ensure keyboard-focusable controls for all nav and interactive elements.
- Inputs require associated labels.
- Images require meaningful alt text when content-bearing.
- Verify contrast compliance for text on dark surfaces.

## 10. Performance Specs
- Target minimal JavaScript shipped by default.
- Prefer local optimized image assets for critical above-the-fold visuals.
- Lazy-load non-critical images where appropriate.
- Keep third-party network dependencies minimal.

## 11. Reliability and Error Handling
- Dynamic detail pages must render a clear not-found experience for unknown slugs/ids.
- Data access should fail gracefully when optional fields are absent.
- Maintain deterministic ordering in listing pages via explicit sort/reverse logic.

## 12. Security Specs
- Treat all future user-provided inputs as untrusted.
- Use rel attributes (noopener noreferrer) on external target blank links.
- Review external asset hosts for trust and availability.

## 13. Build and Quality Gates
- npm run lint must pass.
- npm run build must pass.
- Optional: add CI checks for lint + build on pull requests.

## 14. Known Technical Debt
- Two overlapping dynamic routes for news details.
- Mixed layout composition patterns across pages.
- Content update flow requires direct code edits in data files.

## 15. Recommended Implementation Plan
1. Route cleanup: keep a single dynamic news route and redirect legacy path.
2. Layout normalization: migrate all pages to shared layout conventions.
3. Data schema typing: introduce TypeScript interfaces or Astro content collection schema.
4. Content pipeline: move from static JS arrays to markdown collections or CMS.
5. Testing baseline: add page smoke tests and route integrity tests.
