# Joel Patole Portfolio (Next.js + TypeScript)

Rebuilt from the fixed `index.html`.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Node 18.18+ recommended. (Edits to `src/lib/portfolio.ts` need a full browser refresh.)

## Just want to look at it?
Open `index.html` in this folder (keep `profile.jpg` and `sfit_campus.jpg` next to it). It is the standalone version of the same site.

## Structure
- `src/app/page.tsx`: assembles the page; `layout.tsx`: metadata + fonts; `globals.css`: all styles
- `src/components/*.tsx`: Intro, Background, Navbar, Hero, Skills, Projects, Music, Arcade, Contact, Footer, modals
- `src/lib/portfolio.ts`: behaviour (theme, nav + Play view, games, diagrams, music, modals)
- `public/`: images

## What was fixed
- Blank first page (background canvas had no CSS and pushed the hero off screen)
- Play button now opens the arcade page, highlights "Play", focuses Start; arrow keys / Space start Snake
- Project diagrams: arrows draw in, arrowheads, flowing dashes and a moving dot in the arrow's direction
- Snake resume/pause, food spawning, Tic-Tac-Toe reset + smarter AI, Memory timer
- Phone layout no longer scrolls sideways; Esc closes modals; Download PDF prints only the resume
- Skills, resume popup and education now follow your PDF resume; the "+" on each education card shows CGPA / percentages
