# Neonaire Official Website — Starter Build

A responsive, multi-page static website using HTML, CSS and vanilla JavaScript.

## Included pages
- `index.html` — home
- `about.html` — vision, mission and principles
- `ventures.html` — potential venture areas
- `innovation.html` — innovation approach
- `careers.html` — future careers and interest
- `contact.html` — enquiry form UI
- `privacy.html`, `terms.html`, `disclaimer.html` — legal template drafts
- `404.html` — not found page
- `assets/css/style.css` — visual system and responsive styles
- `assets/js/main.js` — mobile menu, FAQ toggles, reveal effects, form validation
- `robots.txt`, `sitemap.xml`, `favicon.svg`

## Run locally
Open `index.html` in a browser, or use a local static server (for example, VS Code Live Server).

## Before public launch — required checklist
1. Confirm the legal operator's exact name and whether “Neonaire” is a registered company, trade name, or project.
2. Confirm trademark/brand use and the right to use all assets.
3. Replace `hello@neonaire.example` in `contact.html` with a verified official inbox.
4. The current contact form validates fields and opens the visitor's email app via `mailto:`. It does **not** securely deliver submissions to a website backend. Connect a verified form endpoint/provider and test it before advertising the form as a direct submission channel.
5. Replace `YOUR-DOMAIN.example` in `robots.txt` and `sitemap.xml` after the real domain is confirmed.
6. Review the privacy policy, terms and disclaimer with the actual service providers, legal operator, jurisdiction and data practices in mind. These are starter drafts, not legal advice.
7. Add a real Open Graph image and verified social profile links if desired.
8. Test keyboard navigation, mobile layouts, page titles, links, forms and 404 behaviour.
9. Deploy the static files to the chosen host, then configure the domain and HTTPS.
10. Add analytics only after deciding what is needed and updating disclosures/consent where required.

## Current scope
This build is a static corporate website. It does not include a CMS/admin panel, database, user accounts, payment processing, newsletter storage, or server-side contact form. Those require separately chosen and secured services.
