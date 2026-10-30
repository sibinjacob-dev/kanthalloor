# SEO audit — Kanthalloor Tours & Stays

Audit updated: 2026-10-30

## 2026-10-30 evidence-based audit and implementation addendum

Scope: all production URLs, mobile and desktop readiness, technical/on-page/content/local-language SEO, and the requested competitor page. Search Console and analytics interfaces were unavailable. The supplied historical counts (2 indexed, 4 discovered but not indexed, 3 redirects) are context, not independently verified current coverage. Live response checks were performed on 2026-10-30.

### Classified findings

| Issue | Category | Evidence | Severity | Confidence | Why it matters | Recommendation / status |
| --- | --- | --- | --- | --- | --- | --- |
| Four historically discovered URLs lack current URL Inspection evidence | Crawlability & Indexation | User-supplied historical count; all six sitemap URLs returned live 200 and local pages use `index, follow` plus self-canonicals | High | Medium | Google may decline URLs for quality, duplication, canonical selection or processing reasons | Technical signals revalidated; inspect each URL after deployment and record Google's selected canonical and exclusion reason |
| Previous redirect count lacks source URLs | Crawlability & Indexation | HTTP and `www` each produced one 301 hop to the canonical HTTPS host; no sitemap URL redirected | Low | High | Host redirects are healthy; redirected sitemap URLs would not be | No code fix; confirm the three Search Console examples are host/protocol variants |
| Places content needed stronger everyday planning answers | Content Quality & E-E-A-T | Competitor covers explicit one-day/safari intent; our page had attraction depth but fewer concise itinerary/Malayalam answers | Medium | High | Practical answers satisfy trip planning better than repeated keywords | Implemented one-/two-day frameworks, Kerala-city context and bilingual FAQs without copying |
| Language signals were inconsistent | On-Page Optimization | Homepage declared `en-IN`/`x-default`; other indexable pages did not | Low | High | Consistency clarifies the English-default architecture | Added self-referencing English/default alternatives; did not claim a nonexistent Malayalam URL |
| No complete Malayalam landing page exists | Content Quality & E-E-A-T | Only the Places FAQ currently has maintained Malayalam | Medium | High | Thin translations add low-value URLs and maintenance risk | Do not launch `/ml/` until demand and human-reviewed translations justify it |
| Field Core Web Vitals were unavailable | Technical Foundations | PageSpeed API returned 429; no Search Console CWV or CrUX export was available | Medium | High | Lab assumptions cannot replace 75th-percentile LCP, INP and CLS | Check Search Console CWV/CrUX after deployment and keep field/lab results separate |
| Authority evidence is incomplete | Authority & Trust Signals | Contact methods/privacy guidance exist; verified profiles and third-party citations were unavailable | Medium | High | Verifiable local identity supports trust and discovery | Add only verified profiles/citations; never fabricate reviews, credentials or `sameAs` links |

### Competitor comparison

The competitor page exposes many named sights, one-day/jeep-safari intent, contact details and booking prompts, but also repeats large keyword blocks. This site now differentiates with clearer geography, permission/weather caveats, realistic itineraries, bilingual planning answers, accessibility questions and requirement-rich WhatsApp prompts. The next useful opportunity is first-hand seasonal information and verified route/access updates—not competitor-style repetition.

### Prioritized action plan

1. **Critical blockers:** none directly observed. Verify every intended sitemap URL remains 200, indexable and self-canonical.
2. **High impact:** deploy the current changes, then inspect the four historical exclusions in Search Console. Verify the deployed canonical/HTML and record the exact exclusion.
3. **Quick wins:** submit the updated sitemap and compare queries with `SEO_KEYWORD_STRATEGY.md`. Verify the processed date and URL Inspection timestamps.
4. **Longer term:** create human-reviewed Malayalam equivalents only where demand and maintenance justify them; publish original seasonal updates and verified profiles.

### SEO Health Index (internal readiness rubric)

| Category | Score | Weight | Weighted contribution |
| --- | ---: | ---: | ---: |
| Crawlability & Indexation | 82 | 30 | 24.6 |
| Technical Foundations | 80 | 25 | 20.0 |
| On-Page Optimization | 92 | 20 | 18.4 |
| Content Quality & E-E-A-T | 84 | 15 | 12.6 |
| Authority & Trust Signals | 70 | 10 | 7.0 |
| **Overall** |  |  | **83 / 100 (Good)** |

This subjective score measures audited readiness, not rankings. It is limited by unverified Search Console exclusions, unavailable field CWV data, incomplete authority evidence and no maintained full Malayalam experience. Competition and algorithm changes are not scored.

## Current public architecture

The site is dependency-free static HTML served from `public/`. Important page content is present in the initial HTML and does not depend on client-side rendering.

Six pages are indexable and included in `public/sitemap.xml`:

- `/`
- `/kanthalloortour-packages.html`
- `/kanthalloor-experiences.html`
- `/kanthalloormudhouse-stays.html`
- `/places-to-visit-in-kanthalloor.html`
- `/contact.html`

`/photo-credits.html` remains publicly reachable only to satisfy image and icon attribution requirements. It has `noindex, follow`, is absent from normal navigation, and is omitted from the sitemap.

`public/robots.txt` allows crawling and points to the production sitemap. Canonical URLs use the non-`www` HTTPS host: `https://kanthalloortouristguide.com`.

## Page-level SEO

Every HTML page currently has:

- one title and one meta description;
- a canonical URL;
- an explicit robots directive;
- one H1;
- Open Graph title, description, and image metadata;
- X/Twitter card metadata;
- the Google Analytics tag for property `G-DMPG44LXDZ`.

Descriptions are currently between 94 and 126 characters. Titles are distinct and aligned with each page’s search intent. Title display remains search-engine dependent; character count is not a strict ranking or truncation rule.

## Search intent and visible content

- Home: Kanthalloor packages, stays, mud-house experiences, sightseeing, and jeep safari enquiries.
- Packages: adaptable tour structures rather than fixed or unverified bookable products.
- Experiences: seasonal farms, jeep safari, viewpoints, waterfalls, village activities, and authorised forest activities.
- Stays: resorts, homestays, farm stays, and mud-house enquiries subject to current availability.
- Places: Kanthalloor attractions, the canonical Kanthalloor Waterfalls/Keezhanthoor Waterfalls listing, nearby Marayoor heritage, and protected Chinnar activities.
- Contact: direct phone, WhatsApp, and email enquiry options.

The alternate spelling `Kanathalloor` is used selectively where relevant without hidden keyword lists or repetitive keyword stuffing.

## Structured data

Current JSON-LD coverage:

- Home: `WebSite`, `Organization`, `TouristDestination`, `WebPage`, and `Service` with `OfferCatalog`.
- Packages: `Service`.
- Experiences: `WebPage` and `BreadcrumbList`.
- Stays: `WebPage` and `BreadcrumbList`.
- Places: `WebPage` and `BreadcrumbList`.
- Contact: `ContactPage` with its related `Organization`.

The homepage `Organization` also includes a maintained description and two
customer-service `ContactPoint` entries using the public telephone numbers and
booking email address. Verified social profiles are still required before a
`sameAs` array should be added.

All JSON-LD blocks parse successfully as JSON. They avoid unsupported ratings, reviews, prices, availability, opening hours, or guarantees. Local parsing does not prove eligibility for a Google rich-result feature.

## Images and performance

- All rendered images have `alt`, `width`, and `height` attributes.
- Decorative brand and interface images use empty alternative text.
- Primary hero images are eagerly loaded; below-the-fold images use lazy loading.
- Major content images use WebP and responsive `srcset` variants where available.
- Recently added Thoovanam Waterfalls, Chinnar nature trek, and Elephant Watchtower images have production-sized 640px and 1200px WebP versions.
- Original oversized source SVG wrappers are kept outside `public/` and are not deployed.

## Links and accessibility

- No broken local `href` or `src` references were detected.
- Primary, mobile, and footer navigation use crawlable links with meaningful labels.
- Every main page marks its current navigation item with `aria-current="page"`.
- WhatsApp links use `noopener noreferrer` when opening a new tab.
- Skip links, landmarks, heading hierarchy, focus styling, and reduced-motion handling remain present.

## Sitemap status

The sitemap contains all six indexable pages and excludes the noindex attribution page. Current modification dates are `2026-10-14`.

## Local validation completed

- HTML validation for every page in `public/`.
- JSON parsing for every `application/ld+json` block.
- One-H1 checks.
- Canonical, robots, social metadata, analytics, image-alt, and image-dimension checks.
- Local `href` and `src` existence checks.
- Sitemap coverage comparison against indexable HTML pages.
- `git diff --check`.

## Deployment-dependent checks still required

After deployment:

1. Move the static deployment to Cloudflare Pages, Netlify, Apache/cPanel, or another host that applies the prepared security-header policy. GitHub Pages currently ignores both `_headers` and `.htaccess`.
2. Confirm HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy and Permissions-Policy on the live HTTPS response.
3. Test the production URLs with Google Rich Results Test or Schema Markup Validator.
4. Inspect canonical selection and indexing in Google Search Console.
5. Submit or resubmit `https://kanthalloortouristguide.com/sitemap.xml`.
6. Monitor Core Web Vitals, crawl errors, search queries, and click-through rate.
7. Add verified social profile URLs to visible links and `Organization.sameAs` only when the exact business profiles are available.

SEO improvements do not guarantee rankings. Continued performance depends on accurate original content, maintained local information, trustworthy references, and production monitoring.
