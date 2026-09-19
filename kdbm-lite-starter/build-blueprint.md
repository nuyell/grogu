# Build Blueprint

## Source Files

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-status.md`

## Project Identity

Grogu World — a fun and cute interactive Grogu-themed fan website where fans can explore Grogu's content and enjoy playful interactions.

## Build Shape

Content-led site — the main value is exploring Grogu-themed sections (Meet Grogu, Mood, Cute Moments, Fun Facts, Quotes) with cute interactive enhancements.

## Version-One Promise

A working content-led Grogu fan site with:
- Interactive Grogu character with animations and reactions
- Feed Grogu, Play with Grogu, Put Grogu to sleep, Pet/tame Grogu
- Cute animations + sounds
- Grogu quotes section
- Space-themed, playful, cozy design
- Responsive desktop and mobile experience

## Scope Lock

### Now

- Core Grogu interactions (feed, play, sleep, pet)
- Cute animations and reactions
- Grogu quotes section
- Meet Grogu (biography) section
- Grogu's Mood section with interactive mood cards
- Cute Moments section with content cards
- Space-themed responsive design
- Sticky nav, smooth scroll, back-to-top

### Later

- Fun Facts section
- Cute mini-games
- More Grogu moods and states
- Shareable Grogu moments
- More sound effects

### Never

- Backend, database, login, or authentication
- Payment systems
- Multi-user sync or social features
- Complex information-heavy layouts
- Real Grogu/Disney assets, logos, or branding

## Architecture Summary

- **Stack:** Vite + React + Plain CSS
- **Structure:** 5 themed sections with shared components (Navbar, BackToTop, ContentCards, InteractiveGrogu)
- **All interactions** are click-based, no form submission
- **No backend** — static sample content loaded at runtime
- **Mobile-first** responsive design with hamburger menu

## Data / State / Storage Rules

- All data is static sample content (biography, moods, moments, facts, quotes)
- No server state, no API calls
- No localStorage needed (content-led site, no persistence required)
- Interactive states (mood selection, etc.) live in React component state only
- No data persistence across sessions

## Design Direction Summary

**Borrow from inspiration (Playful student dashboard):**
- Colorful card-based layout with clear sections
- Generous spacing between cards and sections
- Playful buttons with rounded corners and soft shadows
- Cute overall vibe with friendly, approachable feel

**Must not copy:**
- No Grogu/Disney/Lucasfilm logos or branding
- No real photos of Grogu — original illustrations/icons only
- No testimonials, stats, or claims from other sources
- No exact layout that would look like a clone of another brand

**Visual mood:** Fun, friendly, adorable, cozy, space-themed
**Colors:** Soft browns, gentle greens, soft creams, space purples and blues — colorful but comfortable to look at
**Typography:** Friendly, rounded, playful
**Mobile:** Hamburger menu, single-column card stacking, 44px minimum touch targets

## Implementation Rules

- Implement only the current work card
- Do not jump ahead to later sections
- All interactions work without form submission
- Use sample/local data only
- No hardcoded secrets, keys, or API tokens
- No invented claims, testimonials, logos, or real numbers
- No backend, auth, database, or live API
- Mobile-first approach — test on phone width
- Apply design.md rules throughout

## File and Folder Expectations

```
/grogu-world
  /src
    /components
      /sections
        MeetGrogu.jsx
        GroguMood.jsx
        CuteMoments.jsx
        FunFacts.jsx
        GroguQuotes.jsx
      /shared
        Navbar.jsx
        BackToTop.jsx
        InteractiveGrogu.jsx
        ContentCard.jsx
        MoodCard.jsx
        FactCard.jsx
        QuoteCard.jsx
        MomentCard.jsx
    /assets
      /images
      /sounds
      /styles
    App.jsx
    main.jsx
  /public
    index.html
```

## Work Card Plan

1. **Work Card 01** — Project scaffold (Vite + React + CSS setup)
2. **Work Card 02** — Navbar + Hero + BackToTop (Meet Grogu section + sticky nav)
3. **Work Card 03** — Interactive Grogu character (feed, play, sleep, pet with animations)
4. **Work Card 04** — Grogu's Mood section (interactive mood cards)
5. **Work Card 05** — Cute Moments section (image/content cards)
6. **Work Card 06** — Fun Facts section (fact cards)
7. **Work Card 07** — Grogu Quotes section (quote cards)
8. **Work Card 08** — Animations, sounds, and polish
9. **Work Card 09** — Mobile responsive and final polish

## Review Mirror

Follow `prompts/07-review-mirror.md` after all work cards are implemented.

## Proof Ladder

Follow `prompts/08-github-vercel-proof.md` for GitHub, Vercel, or fallback proof.

## 60-Second Explanation Template

"Grogu World is a content-led fan website where visitors explore Grogu's world through themed sections — Meet Grogu, Mood, Cute Moments, Fun Facts, and Quotes. The site features an interactive Grogu character you can feed, play with, pet, and put to sleep, all within a cozy, space-themed, playful design. Built with Vite, React, and plain CSS, fully responsive, no backend needed."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing
- Implement only the current work card
- Do not jump ahead to later sections
- Stop after verification
- Update `build-status.md` after each work card
- Do not add backend/auth/database/API unless the blueprint explicitly allows it
- Do not add secrets or keys to code
- Do not invent claims, testimonials, logos, or real numbers
- Apply the guardrails for the confirmed build shape (content-led site)
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping
- No lorem ipsum in final proof
- All data must be labelled as sample where applicable