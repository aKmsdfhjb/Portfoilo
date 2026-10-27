# Nayan Kuikel — static portfolio

A file-driven React + Vite portfolio with no login, database, Firebase dependency or admin dashboard in the public application.

## Content editing

Edit `src/content/site.json` to update:
- name, role, headline, introduction and about text
- focus areas, project descriptions and image paths
- social links and contact email

Place real, permission-cleared images in:
- `public/images/hero-site.jpg`
- `public/images/projects/project-01.jpg`
- `public/images/projects/project-02.jpg`

Use descriptive filenames and update each project's `image` and `imageAlt` fields. Do not publish sample project copy as if it were real work.

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

## Architecture

- `src/content/site.json`: portfolio content
- `src/pages/Home.tsx`: portfolio page
- `src/pages/Tools.tsx`: civil engineering calculators
- `src/revamp.css`: independent visual system

The application does not initialize Firebase or render login/admin routes. If the old Firebase packages are no longer used anywhere else, remove the `firebase` dependency in a separate cleanup after confirming no remaining imports.

## Editing and publishing

Change the JSON and image files, run the production build, then commit and deploy. A static website cannot securely commit edits back to GitHub from the browser without an authorized external publishing workflow.

## Engineering notes

The land unit factors are common reference values and can differ by local convention. The concrete calculator is a preliminary nominal-ratio estimate only, not a mix design or construction instruction. Verify calculations against applicable standards, project specifications and qualified engineering judgement.

## Privacy

This template does not collect or store contact form submissions because it contains no contact form. Social links are external links. If you later add analytics, a form provider or embedded third-party media, update the privacy notice to describe those services and the data they process.