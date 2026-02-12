# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static academic website for an Economics PhD candidate at Northwestern University. No build tools, no package manager, no dependencies — pure HTML, CSS, and vanilla JavaScript. Deploy by pushing to GitHub Pages.

## Development

Open `index.html` directly in a browser to preview locally. There is no build step, dev server, or compilation required.

To serve locally with a simple HTTP server (useful for testing PDF links and relative paths):

```bash
python3 -m http.server 8000
```

## Architecture

All content lives in a single `index.html`. Styling is in `css/style.css` and interactivity in `js/main.js`.

**Layout:** Centered single-column page (max-width 900px) with a two-column profile hero at the top — photo on the left (230px wide), name/title/links/bio on the right. Below the hero, `<main>` holds the Research and Contact sections. No sidebar, no hamburger menu.

**Breakpoints:** At ≤680px the hero stacks vertically (photo centered on top, text below). At ≤480px font sizes reduce slightly. Both defined in `style.css`.

**CSS design tokens** are CSS variables at the top of `style.css` — color palette, spacing scale, and max content width (900px). Modify these to change the site-wide visual style.

**JavaScript** (`main.js`) handles two things only:
1. Abstract expand/collapse toggles (uses `aria-expanded` + `max-height` transition)
2. Smooth scroll for anchor links

## Content Updates

- **New research paper:** Add a `.paper` div inside `#research` following the existing pattern; include a `<button class="abstract-toggle">` with a matching `<div class="abstract-content">` for the expandable abstract.
- **CV / PDFs:** Drop files into `files/` and update the `href` attributes in `index.html`.
- **Headshot:** Replace `images/headshot.jpg` (displayed at 230px wide, natural height, 4px border-radius).
- **Profile links (CV, Google Scholar, Email):** Inline links inside `.profile-links` nav in the `<header class="profile-hero">` — only one place to update.
