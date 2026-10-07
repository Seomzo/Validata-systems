# Validata Systems

Public website for Validata Systems, built with React, TypeScript, Vite, and React Router. Hosted on the existing Firebase project `validata-systems-web`.

## Local development

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run typecheck
npm run build
```

## Deployment

Pull requests from this repository receive a Firebase preview through the existing GitHub Actions workflow. Changes merged to `main` deploy to the live site automatically.

## Content and behavior

- The portfolio covers ClaimScanner, Fixed Ops Reports, and specialized dealership agent systems.
- Homepage tabs and ClaimScanner findings are interactive illustrations. They contain no customer data and do not call product backends.
- Contact inquiries are prepared as email drafts addressed to the existing business contact. Visitors review and send them in their own email app; the website does not collect or store form submissions.
- Fonts are self-hosted through Fontsource packages. No third-party font requests are required.
- Existing public routes are preserved; `/agents` adds the dealership agent overview.
