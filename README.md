# Massachusetts Real Estate Negotiation & Brokerage Guide (2025)

[![Deployment Status](https://img.shields.io/github/actions/workflow/status/CptNope/Massachusetts-Real-Estate-Guide/deploy.yml?branch=main&label=deployment&logo=github)](https://github.com/CptNope/Massachusetts-Real-Estate-Guide/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)

Single-page React app that teaches Massachusetts real estate contract flow, 2025 law changes, commission negotiation, and the broker–sales associate relationship. Designed for students, new agents, and investors. Built with Vite + React and deployable to GitHub Pages.

## 🌐 Live Demo

**[View the guide →](https://cptnope.github.io/Massachusetts-Real-Estate-Guide/)**

Automatically deployed via GitHub Actions on every push to `main`.

## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Content Overview](#-content-overview)
- [Roadmap / Future Improvements](#roadmap--future-improvements)
- [Customization](#-customization)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- ✅ Sectioned guide with left-hand navigation
- ✅ Coverage of 2025 MA law & form changes
- ✅ Commission negotiation strategies (buyers, sellers, investors)
- ✅ Broker & sales associate relationship: IC status, splits, caps, rules
- ✅ Exam prep view and investor strategy view
- ✅ Mobile-friendly, responsive design
- ✅ **Light/Dark theme toggle** with localStorage persistence
- ✅ **Real-time search** across all sections and content
- ✅ **Copy-to-clipboard buttons** for code blocks and clauses
- ✅ **PWA support** - installable on mobile and desktop
- ✅ Offline capability with service worker caching
- ✅ Automated GitHub Pages deployment via GitHub Actions
- ✅ Fast development with Vite HMR (Hot Module Replacement)

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Deployment**: GitHub Pages with GitHub Actions
- **Styling**: Custom CSS with modern dark theme
- **Icons**: Unicode emoji icons

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/CptNope/Massachusetts-Real-Estate-Guide.git
cd Massachusetts-Real-Estate-Guide

# Install dependencies
npm install

# Run development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The development server will start at `http://localhost:5173`

## Project Structure

```
Massachusetts-Real-Estate-Guide/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated deployment workflow
├── src/
│   ├── App.jsx                 # Main app component
│   ├── content.jsx             # All guide content and sections
│   ├── index.css               # Global styles
│   └── main.jsx                # React entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies and scripts
```

## Deploying to GitHub Pages

This project is configured for **automatic deployment** via GitHub Actions:

### Automatic Deployment (Recommended)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. **Enable GitHub Pages** (first time only):
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. **Done!** Every push to `main` automatically builds and deploys to:
   - `https://[your-username].github.io/Massachusetts-Real-Estate-Guide/`

The workflow (`.github/workflows/deploy.yml`) automatically:
- Installs dependencies
- Builds the production bundle
- Deploys to GitHub Pages

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Then manually upload the `dist` folder to your hosting provider
```

## 📚 Content Overview

The guide covers comprehensive topics including:

### Contract & Legal Framework
- Offer to Purchase (OTP) process and requirements
- Purchase & Sale Agreement (P&S) details
- 2025 Massachusetts law changes
- Home inspection disclosure requirements
- Contingencies and deadlines

### Commission & Negotiation
- Buyer representation commission negotiation
- Seller-side commission strategies
- Investor negotiation tactics
- Common fee structures and caps

### Broker-Agent Relationship
- Independent contractor vs. employee status
- Commission splits and structures
- Broker obligations and agent responsibilities
- Regulatory compliance (Chapter 112, §87AAA½)

### Practice Scenarios
- Dual agency considerations
- Buyer brokerage agreements
- Offer counter-strategies
- Exam preparation tips

## Roadmap / Future Improvements

### ✅ v1.1 – Content & UX polish (COMPLETED)
- [x] Add search/filter to quickly jump to topics (e.g., "dual agency", "inspection").
- [x] Add "copy to clipboard" buttons for code blocks and clauses.
- [x] Add a light/dark theme toggle for better printing and accessibility.
- [x] Add PWA support for offline access and installability.
- [ ] Add in-page table of contents for long sections.

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

## 🎨 Customization

Want to adapt this for your own use? Here are some common customizations:

### Change Theme Colors
Edit `src/index.css` to modify the color scheme:
```css
:root {
  --bg-main: #0a0e17;
  --accent: #4f9eff;
  /* ... other color variables */
}
```

### Add Your Own Content
Edit `src/content.jsx` and add new sections to the `sections` array:
```jsx
{
  id: 'your-topic',
  icon: '🏠',
  title: 'Your Topic Title',
  subtitle: 'Your subtitle',
  body: (
    <>
      <h3>Your Content Here</h3>
      <p>Add your educational content...</p>
    </>
  )
}
```

### Change Repository Name
If you fork this project:
1. Update `base` in `vite.config.js` to match your repository name
2. Update the live demo link in this README
3. Update the badge URLs to point to your repository

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** and test locally
4. **Commit your changes**: `git commit -m "Add your feature"`
5. **Push to the branch**: `git push origin feature/your-feature-name`
6. **Open a Pull Request**

### Content Updates

To update the guide content:
- Edit `src/content.jsx` - all sections and content are defined here
- Maintain the existing structure for consistency
- Ensure JSX syntax is correct

## Troubleshooting

### Build fails with "invalid JS syntax" error
- Ensure all files with JSX use the `.jsx` extension
- Check that imports reference the correct file extensions

### GitHub Pages deployment fails
- Verify GitHub Pages is enabled in **Settings** → **Pages** → **Source** → **GitHub Actions**
- Check the Actions tab for detailed error logs
- Ensure `vite.config.js` has the correct `base` path set

### Local development server won't start
- Delete `node_modules` and run `npm install` again
- Ensure you're using Node.js version 18 or higher

## License

MIT – customize the content and UI to fit your own study style or brokerage training materials.

---

**Made for Massachusetts real estate students and agents** 🏡📚
