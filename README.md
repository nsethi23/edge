# Edge

A structured poker theory learning app for 6-max cash games. Covers preflop ranges, 3-bet strategy, positional play, and GTO fundamentals through an interactive curriculum with quizzes, hand range visualizations, and a full glossary.

## Stack

- **React 18** + Vite
- **Firebase** — Auth (email/password) + Firestore (per-user progress)
- **Framer Motion** — page and lesson transitions
- **KaTeX** — in-lesson formula rendering

## Features

- Sequential lesson unlock — each lesson gates on 100% quiz completion
- Interactive 13×13 hand range charts with standard notation support (`AA-66`, `AKs-ATs`, `66+`, `A3s+`)
- Glossary with per-position range charts and inline term highlighting throughout lesson content
- Master account bypass for instructors
- Drills mode
- Coach mode for hand-history review through a server-side Groq API route

## Getting Started

```bash
npm install
```

Copy `.env.example` to `.env` and fill in your Firebase project credentials:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_MASTER_EMAIL=

# Server-only. Do not prefix with VITE_.
GROQ_API_KEY=
GROQ_MODEL=llama-3.3-70b-versatile
```

```bash
npm run dev
```

The coach UI calls `/api/coach`, which expects `GROQ_API_KEY` to be set on the server. Keep textbook/reference excerpts in `src/data/coachKnowledge.js` so the coach can use them in its system prompt.

## Curriculum

Lesson content lives in `src/data/curriculum.js` (gitignored). See `src/data/curriculum-example.js` for the data schema.
