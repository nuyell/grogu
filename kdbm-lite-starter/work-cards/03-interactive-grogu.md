# Work Card 03 — Interactive Grogu Character

## Goal

Build the interactive Grogu character with feed, play, sleep, and pet interactions with animations and reactions.

## Inputs

- Work Card 01 (scaffold) and Work Card 02 (navbar/hero) complete
- Design from design.md: playful buttons, cute animations, soft colors
- Architecture: React component state, no persistence

## Files likely touched

- `src/components/shared/InteractiveGrogu.jsx`
- `src/components/shared/InteractiveGrogu.css`
- `src/assets/sounds/` (optional sound files)
- `src/components/sections/MeetGrogu.jsx` (if placed in hero)

## Instructions for the coding agent

1. Create `InteractiveGrogu.jsx` — an interactive Grogu character component
2. Add states: hungry, happy, sleepy, loved, playing
3. Implement buttons: Feed Grogu 🍖, Play with Grogu 🧸, Pet/Tame Grogu 🫶, Put Grogu to Sleep 😴
4. Each button triggers a state change and visual reaction (animation, expression change)
5. Add cute animations: bounce, wiggle, blink, yawn for sleep
6. Optional: add simple sound effects (browser-compatible audio)
7. Style per design.md: rounded, soft-shadowed, playful buttons; Grogu-style cute appearance

## What not to do

- Do not use real Grogu/Disney images or assets
- Do not add backend or persistence for character state
- Do not use fake testimonials, stats, or logos
- Do not make the character state complex enough to need a database

## Done when

- Grogu character is visible and interactive
- Feed button changes Grogu to hungry/fed state with reaction
- Play button triggers a play animation
- Pet button triggers a happy/loved reaction
- Sleep button puts Grogu to sleep (yawn animation, sleepy state)
- Animations are smooth and cute
- Buttons are clearly labeled and touch-friendly

## Verification steps

- [ ] Grogu character is visible on the page
- [ ] Feed button changes Grogu state with animation
- [ ] Play button triggers play animation
- [ ] Pet button triggers happy/loved reaction
- [ ] Sleep button triggers sleepy/yawn animation
- [ ] All buttons are clearly labeled and responsive
- [ ] Design check: buttons follow design.md — rounded, playful, soft-shadowed per design.md

## Localhost test before continuing

After this card, the learner should test:

- [ ] Click Feed → Grogu reacts (fed state visible)
- [ ] Click Play → Grogu plays animation
- [ ] Click Pet → Grogu shows happy reaction
- [ ] Click Sleep → Grogu goes to sleep animation
- [ ] Buttons are touch-friendly on mobile

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the interactive character cannot function within scope, simplify to basic state changes without animations and note the limitation.

## Status

Done ✅