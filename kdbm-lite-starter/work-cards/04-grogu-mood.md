# Work Card 04 — Grogu's Mood Section

## Goal

Build the Grogu's Mood section with interactive mood selection cards.

## Inputs

- Work Card 01–03 complete
- Architecture: shared MoodCard component
- Design: card-based layout, playful buttons, space theme

## Files likely touched

- `src/components/sections/GroguMood.jsx`
- `src/components/shared/MoodCard.jsx`
- `src/components/shared/MoodCard.css`
- `src/index.css` (section-specific styles)

## Instructions for the coding agent

1. Create `GroguMood.jsx` — section component for Grogu's Mood
2. Create `MoodCard.jsx` — reusable mood card component
3. Display mood options: Happy, Sleepy, Playful, Curious, Excited, etc.
4. User clicks a mood card → Grogu's mood changes (reuse InteractiveGrogu state if possible)
5. Style mood cards per design.md: rounded, soft shadows, playful colors
6. Add a header explaining the mood section

## What not to do

- Do not use real Grogu/Disney assets
- Do not add backend or persistence for mood selection
- Do not invent mood claims about the real Grogu character
- Do not make mood selection complex (no forms or submissions)

## Done when

- Mood section is visible with selectable mood cards
- Clicking a mood card triggers a visual change (Grogu's expression or color)
- Cards are clear, labeled, and touch-friendly
- Section follows the playful, cozy design direction

## Verification steps

- [ ] Mood section is visible with mood card options
- [ ] Clicking mood cards changes Grogu's mood visually
- [ ] Cards are readable and accessible at mobile width
- [ ] Mood cards follow design.md — rounded, colorful, playful per design.md
- [ ] Design check: section rhythm and card style match design.md

## Localhost test before continuing

After this card, the learner should test:

- [ ] Mood section displays correctly at desktop and mobile width
- [ ] Clicking each mood card triggers a visual response
- [ ] Cards are not cut off on mobile
- [ ] Mood selection feels responsive and fun

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If mood cards cannot be implemented within scope, simplify to static mood display with basic click feedback.

## Status

Done ✅