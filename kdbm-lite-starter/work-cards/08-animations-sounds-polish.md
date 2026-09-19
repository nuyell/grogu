# Work Card 08 — Animations, Sounds, and Polish

## Goal

Add cute animations, optional sound effects, and overall visual polish to the site.

## Inputs

- Work Card 01–07 complete
- All sections implemented
- Design from design.md: animations, sounds, playful vibe

## Files likely touched

- `src/index.css` (global animation keyframes, transitions)
- `src/components/shared/*.css` (component animations)
- `src/assets/sounds/` (optional sound files)
- `src/App.jsx` (smooth scroll polish, scroll-triggered effects)

## Instructions for the coding agent

1. Add CSS animations: floating stars, subtle card hover effects, button micro-interactions
2. Add space-themed background animations (twinkling stars, gentle floating elements)
3. Add smooth scroll behavior to nav links (if not already done)
4. Optional: add simple sound effects for Grogu interactions (use browser-compatible audio, e.g., short .mp3/.wav files or Web Audio API)
5. Ensure all animations are subtle and cute — not overwhelming (per design.md: colorful but comfortable)
6. Polish transitions between sections
7. Ensure back-to-top button animates smoothly

## What not to do

- Do not add loud, distracting, or autoplaying sounds
- Do not add overwhelming animations or visual noise
- Do not use heavy animation libraries unless necessary
- Do not add real Grogu/Disney assets
- Do not use random gradient blobs unless they match the space/Grogu direction (per design.md anti-slop rules)

## Done when

- Floating stars/space elements animate in background
- Cards have subtle hover effects
- Buttons have playful micro-interactions
- Animations feel cute and cozy, not overwhelming
- Optional sounds work on Grogu interactions (if implemented)
- Overall site feels polished and complete

## Verification steps

- [ ] Floating stars or space elements animate in background
- [ ] Cards have hover effects that feel playful
- [ ] Buttons have micro-interactions
- [ ] Animations are cute and not overwhelming
- [ ] Back-to-top button scrolls smoothly
- [ ] No autoplaying loud sounds
- [ ] Design check: all animations match design.md — playful, cozy, comfortable per design.md

## Localhost test before continuing

After this card, the learner should test:

- [ ] Background stars animate and twinkle
- [ ] Cards lift/hover on mouseover
- [ ] Buttons feel responsive when clicked
- [ ] Animations are cute, not overwhelming or distracting
- [ ] Site looks polished at desktop and mobile width

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If animations cause performance issues, simplify to basic CSS transitions only.

## Status

Done ✅