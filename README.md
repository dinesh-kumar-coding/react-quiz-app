# 🎯 React Quiz App

An interactive multiple-choice quiz built with React. Users answer questions one at a time, get instant visual feedback on whether each answer was right or wrong, track their score, and can restart to play again.

🔗 **Live demo:** [react-quiz-app-din-dev.vercel.app](https://react-quiz-app-din-dev.vercel.app)

---

## Features

- **One-question-at-a-time** flow with a clean, playful UI
- **Instant answer feedback** — correct answers turn green, wrong picks turn red (and the correct answer is revealed)
- **Live score tracking** as you progress
- **Results screen** showing your final score out of the total
- **Restart** to replay from the beginning
- Answer locking (you can't re-answer a question) and a gated "Next" button so you can't skip ahead

## Built with

- **React** (functional components + hooks)
- **Vite** (build tooling)
- **CSS** (custom clean/playful styling)
- Deployed on **Vercel**

## What I learned / React concepts used

- Managing multiple related pieces of state with `useState` (current question, score, answered status, selected option)
- **Deriving UI from state** — answer button colors are computed from state, not manipulated directly on the DOM (the React way)
- Conditional rendering across multiple screens (question → results)
- "Reset all state" patterns for the restart feature
- Event handling and controlled interaction flow

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

```bash
npm run build      # production build
npm run preview    # preview the production build locally
```
