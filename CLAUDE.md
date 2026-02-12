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

**Layout:** Fixed 280px sidebar on desktop (profile, nav) + scrollable main content area. Below 900px, sidebar hides and a mobile hamburger header appears. The 900px and 480px breakpoints are defined in `style.css`.

**CSS design tokens** are CSS variables at the top of `style.css` — color palette, spacing scale, and max content width (800px). Modify these to change the site-wide visual style.

**JavaScript** (`main.js`) handles three things only:
1. Abstract expand/collapse toggles (uses `aria-expanded` + `max-height` transition)
2. Mobile nav toggle (adds/removes `.active` class)
3. Smooth scroll for anchor links

## Content Updates

- **New research paper:** Add a `.paper-card` div inside `#research` following the existing pattern; include a `<button class="abstract-toggle">` with a matching `<div class="abstract-content">` for the expandable abstract.
- **CV / PDFs:** Drop files into `files/` and update the `href` attributes in `index.html`.
- **Headshot:** Replace `images/headshot.jpg` (displayed at 150×150px, circular crop via CSS).
- **Navigation links:** Sidebar nav (`<aside>`) and mobile nav (`.mobile-nav`) are separate elements — update both when adding sections.
