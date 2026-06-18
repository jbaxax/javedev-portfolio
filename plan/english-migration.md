# Portfolio: cleanup + English migration

Goal: portfolio fully in English, no placeholder/fake content, ready to show to
international recruiters.

## Phase 1 — Cleanup (do this first, before translating)

- [X] Remove photo on `about-me/page.tsx` (`/me.jpeg`, lines ~31-36) — not reused
      anywhere else in the site.
- [X] Remove testimonials feature entirely (fake content: same name repeated,
      lorem-ipsum text, photo is a dog `/perrito.jpg`):
  - [X] Delete route `app/(routes)/testimonials/`
  - [ X] Delete `app/(routes)/testimonials/components/slider-testimonials/`
  - [ X] Delete `app/(routes)/testimonials/data.ts`
  - [ x] Remove "Testimonios" item from `components/navbar/data.tsx`
  - [ x] Delete `public/perrito.jpg`
- [ X] Fix `app/layout.tsx` `metadata.description` — currently in Spanish and says
      "4 meses de experiencia" (outdated, should match current experience).

## Phase 2 — Translate to English

- [ ] `app/page.tsx` — hero, bio paragraphs, "Descargar CV" button label
- [ ] `app/(routes)/about-me/page.tsx` — heading, bio paragraph
- [ ] `app/(routes)/about-me/data.tsx` — `dataAboutMe` (contact labels), `dataGoals`
      (12 certificate title + description entries)
- [ ] `app/(routes)/about-me/components/modal-certificates/index.tsx` — button +
      dialog title
- [ ] `app/(routes)/skills/page.tsx` — heading, paragraph
- [ ] `app/(routes)/skills/data.tsx` — `serviceData` (4 services)
- [ ] `components/navbar/data.tsx` — nav item titles
- [ ] `components/experiencie-card/data.ts` — `itemExperiencie` (3 jobs: titles,
      full descriptions, dates in English format)
- [ ] `components/stats/data.tsx` — `itemsStats` (4 stat titles)
- [ ] `app/(routes)/portfolio/data.ts` — check/confirm titles need no further
      translation

## Pending — separate from this plan

- [ ] Translate CV (`CV_WalterJave.pdf`/`.docx`) to English — the "Descargar CV"
      button currently links to the Spanish version.
