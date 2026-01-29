---
name: Modernize Global UI
overview: Refresh the app with a bold, modern visual system and a consistent global layout, then apply it across main screens for a more intuitive, user-friendly experience.
todos:
  - id: theme-tokens
    content: Add bold theme tokens + reusable classes
    status: completed
  - id: layout-shell
    content: Create and apply global page shell
    status: completed
  - id: dashboards-restyle
    content: Restyle dashboard cards and hierarchy
    status: completed
  - id: nav-affordance
    content: Add intuitive back/nav affordances
    status: completed
  - id: consistency-fixes
    content: Resolve UI inconsistencies during restyle
    status: completed
isProject: false
---

# Modernize global UI and layout

## Goals

- Establish a bold, modern visual system (gradient background, strong typography, elevated cards, consistent buttons).
- Create a shared layout shell and navigation pattern so every screen feels cohesive and easy to use.
- Apply the new system across key pages without changing core behavior.

## Key files to update

- App routing + landing: `[/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/App.jsx](/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/App.jsx)`
- Global styles and base tokens: `[/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/index.css](/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/index.css)`, `[/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/tailwind.config.js](/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/tailwind.config.js)`
- Primary screens: `[/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/GuestDashboard.jsx](/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/GuestDashboard.jsx)`, `[/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/AdminDashboard.jsx](/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/AdminDashboard.jsx)`, `[/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/HouseInfo.jsx](/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/HouseInfo.jsx)`, `[/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/Weather.jsx](/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/Weather.jsx)`, `[/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/SetTimes.jsx](/Users/peternavarro/Documents/REPO'S/CCGPA-fresh/src/SetTimes.jsx)`

## Plan

- Define a bold theme palette, typography scale, gradients, and shadows in Tailwind (`theme.extend`) and add reusable component classes (e.g., `card`, `cta-button`, `page-title`) in `@layer components` to keep visuals consistent.
- Add a global page shell pattern (max-width container, consistent padding, hero header, subtle background glow) and apply it to the landing screen and each top-level page.
- Modernize the dashboard card grid: replace raw borders with elevated cards, add clear hierarchy (section headings, meta text), and improve interactive affordances (hover/focus styles, consistent icons).
- Improve navigation affordances: add lightweight back links or a top mini-nav on subpages to make movement intuitive and reduce reliance on browser back.
- Fix obvious UI inconsistencies discovered during modernization work (e.g., Admin dashboard missing state/export) so global design applies evenly.

## Notes/assumptions

- Keep functionality intact (Firebase reads, routing) and focus on visual/layout improvements.
- Use Tailwind utilities and minimal new components, unless a small reusable component helps consistency.

