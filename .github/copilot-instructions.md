# Copilot instructions (creo)

## Project shape
- This repo is a **static website snapshot** customized for Creo Media.
- Primary entry page: [Eight80 - 880 Atlantic Avenue Brooklyn, NY 11238.html](../Eight80%20-%20880%20Atlantic%20Avenue%20Brooklyn,%20NY%2011238.html)
- Shared assets (CSS/JS/images) live in: [Eight80 - 880 Atlantic Avenue Brooklyn, NY 11238_files/](../Eight80%20-%20880%20Atlantic%20Avenue%20Brooklyn,%20NY%2011238_files/)
- Product/brand context: [docs/prd-website.md](../docs/prd-website.md) and [docs/CREO_MEDIA_DUPLICATION_SUMMARY.md](../docs/CREO_MEDIA_DUPLICATION_SUMMARY.md)

## Where to make changes
- **HTML/layout/content:** edit the main `.html` file(s). Keep relative links stable (paths include spaces).
- **JS behavior (scroll, menu, reveal):** prefer adding to or extending [Eight80 - 880 Atlantic Avenue Brooklyn, NY 11238_files/site.js](../Eight80%20-%20880%20Atlantic%20Avenue%20Brooklyn,%20NY%2011238_files/site.js) (vanilla JS, IIFE, uses `ready`, `debounce`, `throttle`).
- **Bundled JS:** [Eight80 - 880 Atlantic Avenue Brooklyn, NY 11238_files/app.js](../Eight80%20-%20880%20Atlantic%20Avenue%20Brooklyn,%20NY%2011238_files/app.js) is large/minified—avoid editing unless absolutely necessary.
- **CSS:** prefer non-minified, focused files like `block_*-css.css` in the assets folder; avoid editing `style.min.css` unless you have no alternative.

## Conventions already used in the template
- Global UI state is often expressed via **`body` data-attributes** (example: `data-scrolling-started="true"` is used by header styles in [Eight80 - 880 Atlantic Avenue Brooklyn, NY 11238_files/block_header-header-css.css](../Eight80%20-%20880%20Atlantic%20Avenue%20Brooklyn,%20NY%2011238_files/block_header-header-css.css)).
- Prefer **small, additive overrides** (CSS rules added near existing overrides, or a short inline `<style>`/`<script>` in the HTML) over large refactors—the HTML files are big and easy to break with sweeping edits.
- When adding images/logos, copy them into the shared assets folder and reference them relatively (e.g. `Eight80 - 880 Atlantic Avenue Brooklyn, NY 11238_files/logoCreoNoText.svg`).

## Local workflow
- There is no build/test pipeline in `package.json` (it only declares `pdf2json`).
- For preview: open the HTML file directly in a browser, or run a simple static server if needed for browser restrictions.

## Editing guardrails
- Don’t rename the HTML/assets folder: many references are hard-coded.
- Don’t commit `node_modules/` changes unless explicitly requested.
