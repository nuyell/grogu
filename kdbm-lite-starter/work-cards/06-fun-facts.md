# Work Card 06 — Fun Facts Section

## Goal

Build the Fun Facts section with repeated fact cards displaying sample Grogu facts.

## Inputs

- Work Card 01–05 complete
- Architecture: FactCard shared component
- Design: card-based layout, playful style, space theme

## Files likely touched

- `src/components/sections/FunFacts.jsx`
- `src/components/shared/FactCard.jsx`
- `src/components/shared/FactCard.css`
- `src/index.css`

## Instructions for the coding agent

1. Create `FunFacts.jsx` — section component for Fun Facts
2. Create `FactCard.jsx` — reusable fact card component
3. Add 4–6 sample fact cards with cute, original Grogu facts (e.g., "Grogu loves pancakes", "Grogu's ears are super expressive")
4. All facts must be clearly labelled as sample/original fan content — not official claims
5. Style per design.md: rounded cards, soft shadows, playful colors, readable text
6. Add section header and description

## What not to do

- Do not present facts as official Star Wars/Lucasfilm canon
- Do not use fake stats or testimonials
- Do not use lorem ipsum
- Do not add backend or API for facts
- Do not use real Grogu/Disney images

## Done when

- Fun Facts section is visible with 4+ fact cards
- Each card displays a clear, original, sample-labelled fact
- Cards are readable and well-spaced
- Section follows playful, cozy design direction

## Verification steps

- [ ] Fun Facts section displays 4+ fact cards
- [ ] All facts are clearly labelled as sample/fan content
- [ ] No lorem ipsum in fact descriptions
- [ ] Cards are readable at mobile width
- [ ] Cards grid works on desktop, stacks on mobile
- [ ] Design check: card style matches design.md — rounded, soft shadows, warm tones per design.md

## Localhost test before continuing

After this card, the learner should test:

- [ ] Fun Facts section displays at desktop and mobile width
- [ ] All facts are clearly sample/fan content, not official claims
- [ ] Cards stack correctly on mobile
- [ ] No lorem ipsum present

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If fact cards cannot be implemented, simplify to a plain list with fewer items.

## Status

Done ✅