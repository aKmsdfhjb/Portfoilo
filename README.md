# Er. Nayan Kuikel — civil engineering portfolio

A static React + Vite portfolio with no public login, admin dashboard, database, or Firebase runtime. The site is designed as a calm editorial portfolio with an architectural drawing motif and a separate page of browser-side engineering calculators.

## Edit portfolio content

Update `src/content/site.json` for project summaries, work history, skills, contact details and social links. Project copy should describe verified responsibilities; do not present representative summaries as independently verified case studies.

Place approved project photographs in `public/images/projects/` and update each project's `image` and `alt` fields. The repository currently uses designed placeholders where project photography has not been supplied. Do not add client-sensitive or unpublished site photographs without permission.

## Run locally

```sh
npm ci
npm run dev
```

Build for production:

```sh
npm run build
```

## Main files

- `src/content/site.json` — editable portfolio data
- `src/pages/Home.tsx` — portfolio layout and sections
- `src/pages/Tools.tsx` — land conversion, triangle area and concrete quantity estimates
- `src/revamp.css` — typography, layout and responsive styling
- `public/_headers` — security response headers for static hosts that support the Netlify-style headers file
- `.github/workflows/portfolio-checks.yml` — build and production dependency audit workflow

## Security model

The public application does not authenticate users or store user-submitted content. Because there is no application database or protected user resource, database RLS and authenticated-object/BOLA checks are not applicable to this public static site. Do not add client-side credentials or secret API keys. The included `public/_headers` file is only effective on a deployment host that supports this format; configure equivalent headers in the actual host if needed.

## Engineering notes

Nepali land-unit factors are approximate common references and local/legal survey conventions may differ. The concrete estimator uses nominal ratios for a preliminary quantity take-off only; it is not a specified mix design, structural design or approval for construction. Confirm results against project specifications, applicable standards and qualified engineering judgement.

## Publishing

Commit content and approved images, review the site, run the production build, then deploy the static output. The site itself cannot safely commit changes to GitHub from a visitor's browser without a separate authenticated publishing workflow.
