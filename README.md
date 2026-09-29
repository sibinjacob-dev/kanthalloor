# Kanthalloor Tourist Guide

A fast, dependency-free tourism website for Kanthalloor and Marayoor, Kerala.

## Project structure

```text
.
|-- .github/
|   `-- workflows/
|       `-- pages.yml
|-- public/
|   |-- index.html
|   |-- photo-credits.html
|   |-- robots.txt
|   |-- sitemap.xml
|   |-- .nojekyll
|   |-- assets/
|   |   |-- css/
|   |   `-- images/
|-- REDESIGN_NOTES.md
`-- README.md
```

## Run locally

Open `public/index.html` directly in a browser, or serve the `public/` directory
with any static file server.

No build step is required.

## Caching

The `public/` directory includes `_headers` rules for Netlify and Cloudflare
Pages, plus equivalent `.htaccess` rules for Apache/cPanel hosting. HTML is
revalidated on each visit, while fonts and icons receive long-lived immutable
caching and images receive a 30-day browser cache with stale-while-revalidate
support.

## Conventions

- Page markup lives in `public/index.html`.
- Shared styles live in `public/assets/css/`.
- Local image assets live in `public/assets/images/`.
- Use relative paths so the site works locally and on static hosting.
- Keep third-party image attribution current in `public/photo-credits.html`.

## GitHub Pages

The Pages workflow deploys only the contents of `public/` when changes reach
the `main` branch. In the repository's **Settings > Pages** screen, set the
source to **GitHub Actions**. You can also run the workflow manually from the
Actions tab.
