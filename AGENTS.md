# Repository guidance

## Project

- Dependency-free static tourism site. Deployable files live in `public/`.
- Preserve public URLs, canonical paths, existing content accuracy, branding, and enquiry channels.
- Keep Kanthalloor, Marayoor, Chinnar, and wider Munnar geographically distinct.
- Never invent prices, availability, access, reviews, credentials, or travel facts.
- Do not deploy unless the user explicitly requests deployment.

## UI/UX skill

- For UI/UX, layout, styling, navigation, forms, responsiveness, or interaction-design work, read and apply `.agents/skills/ui-ux-designer/SKILL.md` before proposing or implementing changes.
- Do not use this skill for unrelated coding or documentation tasks.

## Working conventions

- Keep the site lightweight. Avoid new dependencies unless the task requires them.
- Use relative internal links so pages work through HTTP and local `file://` previews.
- Preserve user changes and inspect the current diff before editing.
- Continuity records: `docs/ai/PLAN.md`, `docs/ai/CONTINUE.md`, and `docs/ai/PROGRESS.md`.
- Product and SEO references remain in `README.md`, `REDESIGN_NOTES.md`, `SEO_AUDIT.md`, and `SEO_KEYWORD_STRATEGY.md`.

## Verification

- HTML: `npx --yes html-validate "public/*.html"`
- JavaScript: `node --check public/assets/js/animations.js`
- Whitespace: `git diff --check`
- For visible changes, inspect relevant desktop and mobile pages. Report browser or device limits honestly.
