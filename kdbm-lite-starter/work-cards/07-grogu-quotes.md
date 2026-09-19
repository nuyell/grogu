# Work Card 07 — Grogu Quotes Section

## Goal

Build the Grogu Quotes section with quote cards displaying cute and funny Grogu quotes.

## Inputs

- Work Card 01–06 complete
- Architecture: QuoteCard shared component
- Design: card-based layout, playful style, space theme

## Files likely touched

- `src/components/sections/GroguQuotes.jsx`
- `src/components/shared/QuoteCard.jsx`
- `src/components/shared/QuoteCard.css`
- `src/index.css`

## Instructions for the coding agent

1. Create `GroguQuotes.jsx` — section component for Grogu Quotes
2. Create `QuoteCard.jsx` — reusable quote card component
3. Add 4–6 sample Grogu quotes (original, fan-made, clearly labelled as sample — not official quotes)
4. Style quote cards per design.md: rounded, soft shadows, playful background colors, readable typography
5. Add section header and description

## What not to do

- Do not present quotes as official Star Wars/Lucasfilm content
- Do not use fake testimonials or real celebrity quotes
- Do not use lorem ipsum
- Do not add backend or API for quotes
- Do not use real Grogu/Disney images

## Done when

- Grogu Quotes section is visible with 4+ quote cards
- Each card displays a clear, original, sample-labelled quote
- Cards are readable, well-spaced, and visually distinct
- Section feels playful and cozy

## Verification steps

- [ ] Grogu Quotes section displays 4+ quote cards
- [ ] All quotes are clearly labelled as sample/fan content
- [ ] No lorem ipsum in quotes
- [ ] Cards are readable at mobile width
- [ ] Cards grid works on desktop, stacks on mobile
- [ ] Design check: card style matches design.md — rounded, soft shadows, warm tones per design.md

## Localhost test before continuing

After this card, the learner should test:

- [ ] Grogu Quotes section displays at desktop and mobile width
- [ ] All quotes are clearly sample/fan content, not official
- [ ] Cards stack correctly on mobile
- [ ] No lorem ipsum present

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If quote cards cannot be implemented, simplify to a plain text list with fewer items.

## Status

Done ✅