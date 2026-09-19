# Work Card 02 — Navbar, Hero, and Meet Grogu

## Goal

Build the sticky navigation bar, hero section with Grogu introduction, and back-to-top button.

## Inputs

- Project scaffold from Work Card 01
- Section order from architecture.md: Meet Grogu first
- Design direction from design.md: playful, cozy, space-themed, sticky nav, smooth scroll, hamburger menu on mobile

## Files likely touched

- `src/components/shared/Navbar.jsx`
- `src/components/shared/BackToTop.jsx`
- `src/components/sections/MeetGrogu.jsx`
- `src/App.jsx`
- `src/index.css` (global styles for navbar, hero)

## Instructions for the coding agent

1. Create `Navbar.jsx` with sticky positioning, section links (Meet Grogu, Mood, Cute Moments, Fun Facts, Quotes), and hamburger menu for mobile
2. Create hero section within `MeetGrogu.jsx` — large Grogu illustration/character placeholder, site title, welcoming text
3. Create `BackToTop.jsx` — button that scrolls to top, appears after scrolling
4. Implement smooth scrolling between sections via nav links
5. Style per design.md: space-themed background, warm browns, soft creams, playful rounded style
6. Ensure mobile hamburger menu opens/closes correctly

## What not to do

- Do not use real Grogu/Disney assets — use placeholder illustrations or CSS shapes
- Do not clone another brand's navbar design
- Do not add backend or API calls
- Do not use fake testimonials or logos

## Done when

- Sticky navbar visible at top with section links
- Hamburger menu works on mobile
- Hero section shows site title and Grogu introduction
- Back-to-top button appears and scrolls to top
- Smooth scroll works between sections
- Space-themed background visible on hero

## Verification steps

- [ ] Sticky navbar is visible at all scroll positions
- [ ] Nav links scroll to correct sections smoothly
- [ ] Hamburger menu opens and closes on mobile width
- [ ] Back-to-top button appears after scrolling and returns to top
- [ ] Hero section displays site title and Grogu intro text
- [ ] Design check: hero matches design.md mood — playful, adorable, space-themed per design.md

## Localhost test before continuing

After this card, the learner should test:

- [ ] Navbar is sticky and stays visible while scrolling
- [ ] Clicking nav links smoothly scrolls to each section
- [ ] Hamburger menu opens/closes on mobile width
- [ ] Back-to-top button works
- [ ] Hero section looks playful and space-themed at both desktop and mobile width

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the navbar or hero cannot be implemented within the work card scope, note the blocker and continue to the next card.

## Status

Done ✅