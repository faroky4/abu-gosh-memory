# Abu Ghosh School Website & Heritage Project

## Project Overview

This project is both:

1. A future official school website
2. A digital heritage archive for Abu Ghosh

The platform combines:

- Student participation
- Historical preservation
- Interactive storytelling
- Maps
- Videos
- QR museum integration
- Educational content

The website should feel cultural, respectful, modern, and archival.

---

# Technical Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- React
- Leaflet / OpenStreetMap
- RTL Arabic support
- Vercel deployment

Domain:
abugoshschool.org

---

# Critical Rules

## DO NOT

- Do not rewrite unrelated files
- Do not overengineer
- Do not introduce unnecessary dependencies
- Do not break RTL support
- Do not replace existing architecture without reason
- Do not remove responsive behavior
- Do not add excessive animations
- Do not upload videos directly into the repository

---

# ALWAYS

- Use TypeScript
- Use clean reusable components
- Keep UI minimal and modern
- Preserve responsive layouts
- Use TailwindCSS utilities
- Keep Arabic RTL support
- Make minimal safe changes
- Reuse existing components whenever possible
- Keep the project maintainable for students

---

# Design Direction

The project should feel:

- Educational
- Historical
- Calm
- Elegant
- Cultural
- Community-oriented

Avoid:

- Startup-like flashy UI
- Heavy gradients everywhere
- Overcomplicated layouts
- Overly corporate style

Preferred style:

- Clean sections
- Soft neutral colors
- Warm heritage accents
- Rounded cards
- Clear typography
- Spacious layouts

---

# Existing Features

## Homepage

Contains:

- Hero section
- About section
- Navigation
- Student project information
- Links to stories and compare pages

---

## Stories System

Dynamic route:
`/stories/[id]`

Stories support:

- Rich text
- Videos
- YouTube embeds
- YouTube Shorts
- Cover images
- Image galleries
- Tags

Data source:
`data/stories.ts`

---

## Places System

Dynamic route:
`/places/[id]`

Each place may contain:

- Coordinates
- Description
- Related stories
- Before/after comparisons
- Images
- Tags

Data source:
`data/places.ts`

---

## Compare System

Route:
`/compare`

Features:

- Before/after sliders
- Tag filtering
- Links to place pages

Uses:
`BeforeAfterSlider`

---

## Interactive Map

Uses:

- Leaflet
- OpenStreetMap

Important:
Leaflet must remain client-side only.

Always:

- use dynamic imports
- disable SSR for Leaflet
- avoid direct window usage during server rendering

---

# Media Rules

## Images

Store all images inside:

`public/images/`

Stories:
`public/images/stories/[story-id]/`

Places:
`public/images/places/[place-id]/`

Use:

- lowercase filenames
- no spaces
- no Arabic filenames

---

## Videos

Preferred platform:
YouTube (Unlisted)

Do not upload large videos directly into the repository.

Shorts should use:
`https://www.youtube.com/embed/VIDEO_ID`

---

# Future Features

Planned:

- QR routes
- Museum integration
- Audio interviews
- Student contribution system
- Search
- Timeline view
- School announcements
- Future programming education integration

---

# Student Participation Philosophy

Not all students are programmers.

Students may contribute through:

- Interviews
- Story collection
- Photography
- Historical research
- Categorization
- Media organization

The system should remain simple enough for future student participation.

---

# Next.js Notes

This project uses modern Next.js App Router.

Dynamic params may require:

```ts
const { id } = await params;

# Preferred Workflow

Before large changes:

- create safe commits
- avoid destructive refactors

When adding features:

- keep components modular
- avoid duplication
- preserve existing structure

---

# Long-Term Vision

The project should eventually become:

- the official school website
- a permanent digital archive
- part of a physical school museum
- a foundation for future student programming education
```
