# Product Requirements Document (PRD): Creo Media Website

## 1. Summary
Creo Media needs a premium, modern, cinematic website that positions the company as a world-class African creative powerhouse and drives high-value inquiries. The site must showcase flagship work (video, photography, events, tourism content), highlight sub-brands, and be fast, mobile-first, and SEO optimized.

**Preferred platform:** Webflow (per Website Development Brief)

## 2. Background & Context
Creo Media is a Namibia-based content marketing and creative agency delivering end-to-end creative solutions including:
- Social media management and strategy
- Content production (video, photography, design, copy)
- Media placements
- Corporate events

Brand intent (from Brand Guidelines 2025): compete internationally, attract global clients, and keep brands at the forefront of innovative marketing.

## 3. Goals (Core Objectives)
1. Establish a premium creative agency presence.
2. Showcase strongest work across video, photography, events, and tourism.
3. Drive high-value client inquiries and bookings.
4. Highlight sub-brands (Savannah Weddings, Masterclasses, Ignited Collective).
5. Present polished case studies and a filterable portfolio.
6. Deliver a fast, mobile-first website with strong SEO foundations.

## 4. Non-Goals
- Building a custom back-end application (Webflow CMS is the default assumption).
- Complex user accounts, logins, or gated content (unless explicitly added later).
- Full e-commerce checkout (not specified).

## 5. Target Users & Primary Use Cases
### 5.1 Personas
- **Brand/Marketing Manager (Corporate client):** needs confidence, proof of quality, clear scope, and a fast path to request a proposal.
- **Tourism/Experience Brand Lead:** wants cinematic portfolio proof, relevant case studies, and quick contact/WhatsApp.
- **Wedding Client (Savannah Weddings):** wants luxury positioning, packages, films, testimonials, and booking inquiry.
- **Press/Partner:** needs press kit cues, featured work, and collaboration context.

### 5.2 Top Tasks
- Evaluate Creo credibility quickly (hero, showreel, client logos, testimonials).
- Find relevant services/solutions and understand outcomes.
- Browse and filter portfolio; open work in a lightbox/video player.
- Read case studies and understand measurable impact.
- Contact Creo (form + WhatsApp) and request a proposal.
- Discover and engage sub-brands (weddings, masterclasses, collective).

## 6. Positioning, Voice, and Tone
### 6.1 Positioning
Premium, confident, modern African creative excellence with cinematic visuals and strategic clarity.

### 6.2 Brand Voice & Tone (from Brand Guidelines)
Primary attributes:
- Confident
- Inspiring
- Creative / forward-looking
- Exclusive
- Authentic
- Playful (when appropriate)

Style examples to apply on-site:
- **Tagline:** short, bold statements (e.g., “We don’t just create content, we craft experiences.”)
- **Case studies:** outcome-focused (“…turn ideas into measurable impact.”)
- **About:** credible and authentic

## 7. Information Architecture (Sitemap)
(From Website Development Brief)
A. **Home** — Hero banner + showreel, services overview, case studies, logos, testimonials, CTAs.
B. **About** — Story, philosophy, difference, ecosystem, team, vision.
C. **Solutions** — Outcome-based marketing & creative solutions.
D. **Services** — Content, social media, events, training.
E. **Portfolio + Case Studies** — Filterable categories with detailed pages.
F. **Savannah Weddings** — Luxury wedding brand page with packages, films, testimonials.
G. **Masterclasses** — Event info, past highlights, CTAs.
H. **Work With Us** — Contact form, WhatsApp, FAQs, proposal request.
I. **Press & Media** — Articles, interviews, podcasts, collaborations.

## 8. Page Requirements (Functional + Content)
### 8.1 Global Requirements
- **Header/nav:** persistent, simple, premium; supports all top-level pages.
- **Footer:** contact, social links, legal links, newsletter optional (only if desired), and CTA.
- **Primary CTA:** “Work With Us” / “Request a Proposal” (wording to match brand).
- **Secondary CTA:** “WhatsApp Us” (visible on mobile; consistent placement).

### 8.2 Home
- Cinematic hero (video or image) with clear positioning statement.
- Showreel embed/hosting suitable for fast start and high quality.
- Quick “what we do” blocks linking to Services/Solutions.
- Featured case studies + featured portfolio items.
- Trust signals: logos and testimonials.

### 8.3 About
- Story and philosophy aligned to Vision/Mission.
- “What makes us different” (strategic clarity + cinematic craft).
- Ecosystem/sub-brands overview linking to their pages.
- Team section (optional if content is available).

### 8.4 Solutions
- Outcome-based framing (e.g., awareness, conversion, brand positioning, launch campaigns).
- Each solution links to relevant case studies.

### 8.5 Services
- Service categories: content production (video/photo/design/copy), social media management/strategy, events/activations, training/masterclasses.
- Each service: brief description, deliverables, and CTA.

### 8.6 Portfolio + Case Studies
- **Filterable portfolio** (by category/industry/service type).
- **Lightbox player** for video and galleries.
- Case study detail pages include: brief, approach, deliverables, outcomes/impact, media.

### 8.7 Savannah Weddings
- Luxury look and feel consistent with Creo premium base.
- Packages overview (if defined) + films/gallery + testimonials.
- Booking inquiry form and WhatsApp.

### 8.8 Masterclasses
- Upcoming/ongoing event info (date, topic, format).
- Past highlights gallery/video.
- Signup CTA or inquiry CTA (depending on operating model).

### 8.9 Work With Us
- Contact form with segmentation (new client / wedding / masterclass / press / partnership).
- Proposal request fields (budget range, timeline, service interest).
- WhatsApp integration.
- FAQs (top objections; kept minimal).

### 8.10 Press & Media
- CMS-driven posts or curated external links: articles, interviews, podcasts, collaborations.
- Optional press inquiry CTA.

## 9. Design Requirements
### 9.1 Design Direction (from Website Brief)
- Minimal, elegant, cinematic, modern
- High-resolution cinematic visuals, clean grids, subtle motion
- Confident, premium feel

### 9.2 Brand Color Palette (from Brand Guidelines)
Use the following as the canonical palette:
- Slate Blue: #1C3857
- Deep Plum: #4B1D34
- Olive Green: #708238
- Tangerine Orange: #FF914D
- Muted Gold: #C8A25F
- Steel Grey: #A2A9B4
- White

Website Brief also calls for: black, white, charcoal, warm gold accents. **Implementation note:** use neutrals (black/white/charcoal) as the base UI with **Muted Gold (#C8A25F)** as the primary accent; use the remaining palette sparingly for highlights, category cues, and supporting accents.

### 9.3 Typography (from Brand Guidelines)
Extracted guidance includes:
- Playfair Display (brand typeface; used for prominent headings)
- PT Serif (subheadings/section titles)
- Open Sans (body text / UI)

**Open question to confirm in design:** the guidelines text references multiple heading assignments (Playfair Display and also “STIXGeneral” for H1). The website should ship with a single, consistent type system; default to Playfair Display + PT Serif + Open Sans unless the brand owner specifies otherwise.

### 9.4 Motion
- Subtle micro-animations (hover states, reveal on scroll, gentle transitions)
- Avoid heavy effects that reduce perceived luxury or performance.

## 10. Functional Requirements
(From Website Development Brief; clarified for implementation)
- **Fast-loading video hosting:** Vimeo Pro or equivalent; embed patterns that don’t block LCP.
- **Portfolio filtering:** fast, clear, mobile-friendly.
- **Lightbox players:** support both video and image galleries.
- **Smooth micro-animations:** performant and consistent.
- **Mobile-first responsive design:** excellent behavior on small screens.
- **SEO optimization:** target key sectors (tourism, events, content creation).
- **CMS editing:** easy updates to portfolio, case studies, press items, testimonials.
- **Contact + WhatsApp integration:** one-tap contact on mobile; clear on desktop.

## 11. Non-Functional Requirements
### 11.1 Performance
- Target Core Web Vitals: strong LCP/CLS/INP (exact budgets to be set during build).
- Image/video optimization: responsive images, lazy loading, efficient embeds.

### 11.2 Accessibility
- WCAG 2.2 AA intent for color contrast, focus states, keyboard navigation, alt text.

### 11.3 Security & Privacy
- HTTPS, spam protection for forms (Webflow + reCAPTCHA or equivalent).
- Basic privacy policy and cookie notice if analytics is enabled.

### 11.4 SEO
- Semantic headings, meta titles/descriptions per page.
- OpenGraph/Twitter cards.
- XML sitemap + robots.txt.
- Structured data where appropriate (Organization, Article).

## 12. CMS Content Model (Webflow)
Minimum collections:
- **Portfolio Items** (title, category/tags, media type, thumbnail, video URL, gallery, featured flag)
- **Case Studies** (client, industry, services, challenge, approach, outcomes, media, featured flag)
- **Press & Media** (type, source, date, link, summary, hero image)
- **Testimonials** (name, role/company, quote)
- **Masterclasses** (status, date, title, description, CTA link)

## 13. Analytics & Measurement
### 13.1 Success Metrics (from Website Brief)
- High-quality enquiries
- Wedding bookings
- Corporate content projects
- Tourism brand partnerships
- Workshop/masterclass attendance
- Perceived premium value of the Creo brand

### 13.2 Tracking Requirements
- GA4 (or equivalent) with conversion events:
  - Contact form submit
  - WhatsApp click
  - Proposal request submit
  - Portfolio filter usage (optional)
  - Case study views (optional)

## 14. Delivery Plan & Timeline
(From Website Development Brief)
- Week 1: Wireframes & visual direction
- Week 2–3: Page designs
- Week 4–5: Development
- Week 6: Testing, optimisation & launch

## 15. Deliverables
(From Website Development Brief)
- Fully responsive website
- All pages as per sitemap
- Editable CMS setup
- Basic SEO implementation
- Speed + security optimisation
- Training for updates

## 16. Risks & Dependencies
- **Asset readiness:** showreel, portfolio media, case studies, copy, testimonials.
- **Typeface clarification:** resolve heading font mapping from guidelines.
- **Video hosting:** confirm Vimeo Pro (or equivalent) and embed approach.
- **Content ownership:** confirm who writes/approves final copy and case study outcomes.
