# Product Requirements Document (PRD)

## 1. Product Name
Milling & Millers v2

## 2. Product Vision
Provide a reliable, easy-to-browse industry portal for milling professionals to discover timely news, policy updates, machinery listings, and events in one place.

## 3. Background and Problem Statement
Industry users need fragmented information from multiple sources (news, regulations, equipment, events). The product should centralize this information and make discovery fast on both desktop and mobile.

## 4. Goals
- Publish curated industry content in clear category pages.
- Improve discoverability of machinery and events.
- Make policy documents easy to access and download.
- Maintain low operational overhead for content updates.

## 5. Non-Goals (Current Phase)
- User accounts and authentication.
- User-generated content workflows.
- Payments or transactional commerce.
- Real-time chat/support features.

## 6. Target Users
- Mill owners and plant operators.
- Grain processing consultants and engineers.
- Procurement and compliance teams.
- Industry researchers and analysts.

## 7. Core User Stories
- As an operator, I want to quickly scan recent industry news so I can stay informed.
- As a compliance stakeholder, I want to view and download policy PDFs so I can track regulations.
- As a buyer, I want to browse machinery listings with vendor/contact context so I can evaluate options.
- As a participant, I want to find upcoming events so I can attend relevant workshops.

## 8. Functional Requirements

### 8.1 Navigation and Information Architecture
- Global navigation must provide direct access to Home, News, Policies, Machinery, Events, and Contact.
- Header and footer must be present and consistent across major pages.

### 8.2 Home Page
- Show a hero section and high-value highlights.
- Surface featured machinery, policy tracker section, and event summary modules.

### 8.3 News
- News listing page must show article cards with image/title and category filtering.
- News detail pages must render article content and support direct linking via slug-like identifiers.

### 8.4 Policies
- Policies page must list official documents with title, publish date, and open/download actions.
- Document links should resolve to files hosted from the public assets path.

### 8.5 Machinery
- Machinery page must render a visual catalog of listings with key metadata (vendor, price, location, contact).
- Home and machinery page should remain consistent in catalog card behavior.

### 8.6 Events
- Events page must list upcoming events with details and support basic search/filter UI affordances.

### 8.7 Contact
- Contact page must expose contact channels (email, phone, office/location info).

## 9. Non-Functional Requirements
- Responsive behavior for mobile and desktop.
- Fast initial page load and minimal client-side JavaScript.
- Accessibility baseline: semantic structure, keyboard navigation, meaningful alt text.
- Maintainable code with reusable components and predictable data models.

## 10. Success Metrics
- Time to first meaningful content load under agreed threshold on mobile networks.
- Increase in page depth/session for content sections (news, machinery, events).
- Reduction in bounce rate on key landing pages.
- Reliable policy PDF click-through rate.

## 11. Constraints and Dependencies
- Stack constrained to Astro + Tailwind in current implementation.
- Content currently managed as local JS datasets and static assets.
- External media URLs are used for multiple images.

## 12. Risks
- Duplicate news detail routing may cause inconsistent behavior and SEO ambiguity.
- Hardcoded content can become stale and requires code changes for updates.
- External image host uptime and performance are outside direct control.

## 13. Release Scope (Current)
In-scope:
- Public read-only content pages for home, news, policies, machinery, events, contact.
- Client-side filtering/tabs where needed for discoverability.

Out-of-scope:
- Admin CMS, editorial workflow tooling, authentication, analytics dashboards.

## 14. Future Enhancements
- Single canonical content model with schema validation.
- Structured CMS or Astro content collections with editor workflow.
- Search with index-based filtering across news/events/machinery.
- SEO enhancements (metadata, canonical URLs, sitemap hygiene).
