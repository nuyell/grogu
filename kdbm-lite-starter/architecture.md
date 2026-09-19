# Architecture

## Build Shape

Content-led site

## Stack Decision

- Vite
- React
- Plain CSS (no Tailwind unless session uses it)
- No backend, auth, database, payment, or live API
- localStorage not required (content-led, no persistence)

## Structure Overview

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
        ContentCard.jsx
        InteractiveGrogu.jsx
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

## Component Map

| Component | Type | Description |
|-----------|------|-------------|
| Navbar | Shared | Sticky navigation bar with section links |
| BackToTop | Shared | Back-to-top button |
| MeetGrogu | Section | Grogu biography/introduction |
| InteractiveGrogu | Shared/Reusable | Interactive Grogu character (feed, play, sleep, pet) |
| GroguMood | Section | Interactive mood cards |
| CuteMoments | Section | Cute moment image/content cards |
| FunFacts | Section | Repeated fact cards |
| GroguQuotes | Section | Repeated quote cards |
| ContentCard | Shared/Reusable | Base card component for content blocks |
| MoodCard | Shared/Reusable | Interactive mood selection card |
| FactCard | Shared/Reusable | Fun fact display card |
| QuoteCard | Shared/Reusable | Quote display card |
| MomentCard | Shared/Reusable | Cute moment image/content card |

## Data / State Model

All data is static sample content:

- Grogu biography text
- Mood states (happy, sleepy, playful, etc.)
- Cute moments (image/content entries)
- Fun facts (text entries)
- Quotes (text entries)

No server state. All data loaded from local component state or static imports.

## Storage Logic

No persistence required. Content is static and loaded at runtime. No localStorage needed for content-led site shape.

## User Flow

1. Land on page → Meet Grogu (biography intro)
2. Sticky nav allows jumping to any section
3. Smooth scroll between sections
4. Interactive Grogu character responds to clicks (feed, play, pet, sleep)
5. Mood cards: select Grogu's mood
6. Cute Moments: browse image/content cards
7. Fun Facts: browse fact cards
8. Grogu Quotes: browse quote cards
9. Back-to-top button returns to top
10. All interactions are click-based, no form submission

## File Expectations

- React components in `/src/components/`
- Static assets in `/src/assets/` and `/public/`
- Plain CSS files alongside components or in a central stylesheet
- No backend or API configuration files

## Constraints

- All interactions must work without form submission
- No backend, auth, database, or live API
- Mobile-first responsive design with hamburger menu
- All data labelled as sample where applicable
- Simple, cute, playful, cozy aesthetic
- Space-themed visual design

## Technical Non-Goals

- No backend or server
- No authentication or login
- No database
- No payment processing
- No real-time features or live API
- No data persistence across browsers/devices
- No analytics or tracking

## Verification Notes

- Sticky nav visible and links scroll to correct sections
- Smooth scroll works on desktop and mobile
- Back-to-top button appears and functions
- Interactive Grogu buttons (feed, play, pet, sleep) respond to clicks
- Mood cards are interactive
- Fact cards and quote cards render correctly
- Hamburger menu opens/closes on mobile
- All data clearly labelled as sample where applicable
- No form submissions occur on any interaction
- Mobile layout is clean and usable