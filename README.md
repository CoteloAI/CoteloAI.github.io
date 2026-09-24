# Cotelo website

Plain static site, no build step. Open `index.html` or run `python3 -m http.server` in this folder.

This folder is its own git repo (`CoteloAI/CoteloAI.github.io`) with `index.html` at the root. Pushing to `main`
triggers `.github/workflows/pages.yml`, which deploys it to GitHub Pages (Settings → Pages → Source: GitHub Actions).

## To update
- Book-a-call links: Calendly URL in `index.html`.
- Contact email: `mailto:` link in the `#contact` section.
