# Portfolio CSS split

This folder contains the cleaned stylesheet split into modular files.

## Files

- `00-base.css` — tokens, reset, utilities, buttons
- `01-layout.css` — navbar, shared mobile/desktop helpers, footer
- `02-home.css` — hero, homepage about, homepage projects
- `03-projects.css` — projects listing pages
- `04-about.css` — about page
- `05-case-studies.css` — legacy case studies grid + case studies landing page
- `06-podflow-case-study.css` — PodFlow standalone case study page
- `07-backyard-festival-case-study.css` — Backyard Festival standalone case study page
- `08-contact.css` — contact page
- `main.css` — imports all files above in the correct order

## Recommended usage

### Easiest swap
Replace your existing stylesheet link with `main.css`.

```html
<link rel="stylesheet" href="styles/main.css" />
```

### More selective option
If you want page-specific bundles later, keep `00-base.css` and `01-layout.css` global, then load only the page file you need.

Example for About page:

```html
<link rel="stylesheet" href="styles/00-base.css" />
<link rel="stylesheet" href="styles/01-layout.css" />
<link rel="stylesheet" href="styles/04-about.css" />
```

## Notes

- `main.css` preserves the same cascade order as the cleaned single-file version.
- The two standalone case study pages have their own files because they are large, self-contained page systems.
- `05-case-studies.css` keeps both the old legacy grid and the newer case studies landing layout.
