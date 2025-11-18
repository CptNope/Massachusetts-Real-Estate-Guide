# Massachusetts Real Estate Negotiation & Brokerage Guide (2025)

Single-page React app that teaches Massachusetts real estate contract flow, 2025 law changes, commission negotiation, and the broker–sales associate relationship. Designed for students, new agents, and investors. Built with Vite + React and deployable to GitHub Pages.

## Features

- ✅ Sectioned guide with left-hand navigation
- ✅ Coverage of 2025 MA law & form changes
- ✅ Commission negotiation strategies (buyers, sellers, investors)
- ✅ Broker & sales associate relationship: IC status, splits, caps, rules
- ✅ Exam prep view and investor strategy view
- ✅ Mobile-friendly, dark-theme layout

## Getting Started

```bash
# install dependencies
npm install

# run development server
npm run dev

# build for production
npm run build
```

## Deploying to GitHub Pages

1. Update `vite.config.js` and set the correct base path:

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPO-NAME/' // e.g. '/ma-real-estate-guide/'
});
```

2. Build the project:

```bash
npm run build
```

3. Push the repository to GitHub.

4. Serve the `dist` folder via GitHub Pages. You can:
   - Use a GitHub Action that runs `npm install && npm run build` and publishes `dist` to `gh-pages`,
   - Or build locally and push the contents of `dist` to a `gh-pages` branch.

## Roadmap / Future Improvements

### v1.1 – Content & UX polish
- [ ] Add search/filter to quickly jump to topics (e.g., "dual agency", "inspection").
- [ ] Add in-page table of contents for long sections.
- [ ] Add “copy to clipboard” buttons for all scripts and sample clauses.
- [ ] Add a light theme toggle for better printing.

### v1.2 – Study Mode
- [ ] Add flashcard mode for exam prep (question/answer cards).
- [ ] Add multiple-choice quiz questions with scoring.
- [ ] Add “exam cram” printable PDF export.

### v1.3 – Interactive Scenarios
- [ ] Scenario-based walkthroughs: choose buyer/seller/investor paths and see recommended clauses.
- [ ] Simple decision trees that show how offers, counters, and contingencies play out.
- [ ] Toggle between “Exam Explanation” and “Real World Strategy” overlays for each section.

### v1.4 – Personalization
- [ ] Allow users to mark sections as “mastered” or “review later”.
- [ ] Local storage of last active section and theme preference.
- [ ] Optional note-taking area stored in browser localStorage.

### v2.0 – Data-Driven & Updatable
- [ ] Move content to JSON/Markdown so it can be updated without touching React components.
- [ ] Add a simple CMS-like editing mode (for private use only) guarded by a basic auth layer.
- [ ] Hook into an external data source for law/form updates (when available).

### Stretch Ideas
- [ ] Integrate with spaced repetition tools (e.g., export to Anki).
- [ ] Embed short explainer videos or audio clips.
- [ ] Add calculator widgets (e.g., commission split calculator, net proceeds estimator).

## License

MIT – customize the content and UI to fit your own study style or brokerage training materials.
