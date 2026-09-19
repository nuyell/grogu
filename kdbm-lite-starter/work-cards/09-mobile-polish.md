# Work Card 09 — Mobile Responsive and Final Polish

## Goal

Ensure full mobile responsiveness, cross-browser compatibility, and final polish across all sections.

## Inputs

- Work Card 01–08 complete
- All sections, animations, and interactions implemented
- Design from design.md: mobile hamburger menu, single-column stacking, 44px touch targets

## Files likely touched

- `src/index.css` (mobile media queries, responsive adjustments)
- `src/components/shared/Navbar.jsx` (mobile menu polish)
- `src/components/shared/*.css` (responsive card layouts)
- `src/App.jsx` (overall layout polish)
- `public/index.html` (viewport meta tag check)

## Instructions for the coding agent

1. Review and test all sections at mobile width (320px–414px)
2. Ensure hamburger menu works correctly on all mobile devices
3. Ensure all cards stack in single column on mobile
4. Ensure all touch targets are at least 44px
5. Ensure text is readable without zooming at mobile width
6. Check viewport meta tag is present in `index.html`
7. Test cross-browser: Chrome, Firefox, Safari (at minimum)
8. Ensure no horizontal scrolling at any mobile width
9. Verify all navigation links work at mobile width
10. Final review against design.md and anti-slop rules

## What not to do

- Do not add platform-specific code unless necessary
- Do not leave any section unresponsive
- Do not skip the mobile hamburger menu test
- Do not leave horizontal scrolling at any width
- Do not ignore accessibility basics (contrast, focus states, alt text)

## Done when

- All sections display correctly at 320px, 375px, 414px, and desktop widths
- Hamburger menu opens and closes correctly on mobile
- No horizontal scrolling at any width
- All touch targets are at least 44px
- All text is readable without zooming
- Cross-browser basic compatibility confirmed
- Design.md checklist is complete
- Anti-slop rules are satisfied

## Verification steps

- [x] All sections readable at 320px width
- [x] All sections readable at 375px width
- [x] All sections readable at 414px width
- [x] Hamburger menu works at all mobile widths
- [x] No horizontal scrolling at any width
- [x] All touch targets ≥ 44px
- [x] No lorem ipsum present
- [x] No fake logos or testimonials
- [x] All data labelled as sample where applicable
- [x] Design check: all sections follow design.md — mobile rules, readability, anti-slop per design.md

## Localhost test before continuing

After this card, the learner should test:

- [ ] Site is fully readable at 320px, 375px, 414px mobile widths
- [ ] Hamburger menu opens and closes at all mobile widths
- [ ] No horizontal scrolling at any width
- [ ] All buttons and links are touch-friendly (≥ 44px)
- [ ] Site works in at least 2 browsers

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If critical mobile issues cannot be resolved, note them as known limitations and proceed to Review Mirror.

## Status

Done ✅