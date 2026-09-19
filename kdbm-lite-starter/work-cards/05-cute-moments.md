# Work Card 05 — Cute Moments Section

## Goal

Build the Cute Moments section with image/content cards showcasing Grogu's adorable moments.

## Inputs

- Work Card 01–04 complete
- Architecture: MomentCard shared component
- Design: card-based layout, space theme, cozy colors

## Files likely touched

- `src/components/sections/CuteMoments.jsx`
- `src/components/shared/MomentCard.jsx`
- `src/components/shared/MomentCard.css`
- `src/assets/images/` (sample moment images/illustrations)
- `src/index.css`

## Instructions for the coding agent

1. Create `CuteMoments.jsx` — section component for Cute Moments
2. Create `MomentCard.jsx` — reusable content card component for moments
3. Add 3–5 sample cute moment cards with placeholder images/illustrations (CSS shapes, icons, or placeholder art — no real Grogu images)
4. Each card shows a cute moment description and visual element
5. Style per design.md: rounded cards, soft shadows, warm tones, cozy feel
6. Add section header and description

## What not to do

- Do not use real Grogu/Disney images or photos
- Do not use fake testimonials or claims
- Do not add backend or image upload functionality
- Do not use lorem ipsum — write real, cute, sample descriptions

## Done when

- Cute Moments section is visible with 3+ moment cards
- Cards display cute moment descriptions and visual elements
- Cards are arranged in a grid (desktop) and stack (mobile)
- Section feels cozy and adorable per design.md

## Verification steps

- [ ] Cute Moments section displays 3+ cards
- [ ] Cards are readable and clickable (if interactive)
- [ ] Cards grid works on desktop, stacks on mobile
- [ ] No real Grogu images used — only placeholders or CSS art
- [ ] Design check: card style matches design.md — rounded, soft shadows, warm tones per design.md

## Localhost test before continuing

After this card, the learner should test:

- [ ] Cute Moments section displays at desktop and mobile width
- [ ] Cards stack correctly on mobile (single column)
- [ ] All card content is readable, no text is cut off
- [ ] No real Grogu/Disney images are present

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If moment cards cannot be implemented, simplify to text-only cards without images.

## Status

Done ✅