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
- ✅ **Flashcard mode** for exam prep with progress tracking
- ✅ **Quiz mode** with scoring, explanations, and history
- ✅ **Personal dashboard** with stats and progress tracking
- ✅ **Section mastery tracking** - mark sections as mastered or review later
- ✅ **Note-taking system** - add personal notes to any section
- ✅ **Smart persistence** - remembers last active section and all preferences
- ✅ **Interactive scenarios** - branching decision trees for real-world practice
- ✅ **Buyer/Seller/Investor paths** - role-specific scenarios with outcomes
- ✅ **Expert feedback** - detailed analysis and recommendations on every ending
- ✅ **Commission calculator** - calculate splits, caps, and agent earnings
- ✅ **Net proceeds calculator** - estimate seller proceeds after all costs
- ✅ **Real-time calculations** - instant results as you type
- ✅ **Keyboard shortcuts** - navigate quickly with Alt+1-6, arrow keys, and more
- ✅ **Export/Import progress** - backup and restore all study data
- ✅ **Print-friendly** - optimized print styles for offline study
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

## 📊 Current App Status

### Content Library
- **28 Guide Sections** covering all MA real estate exam topics (COMPLETE!)
- **278 Flashcards** (easy, medium, hard difficulty levels) - 7.9x expansion!
- **278 Quiz Questions** with detailed explanations - 7.9x expansion!
- **556 TOTAL PRACTICE ITEMS** - Comprehensive professional education platform!
- **10 Interactive Scenarios** with branching paths and multiple endings (COMPLETE!)
- **5 Professional Calculators** (commission split, net proceeds, mortgage PITI, investment analyzer, CMA tool)
- **Complete 2025 Law Coverage** including antitrust and associations
- **Comprehensive Professional Topics**: WISP Privacy, Escrow/Record Keeping, Two-Contract System, Attorney Role, Tax Information for Agents, Agency Law History, Negotiation Strategies, Tax Advice Boundaries, Open House Seller Protection, OLD CAR Fiduciary Duties, NAR Code of Ethics & Legal Implications

### Study Tools
- ✅ Flashcard mode with flip animations
- ✅ Multiple-choice quiz with scoring system
- ✅ Personal dashboard with progress tracking
- ✅ Section mastery & review marking
- ✅ Note-taking system with localStorage
- ✅ Quiz history and performance analytics

### User Experience
- ✅ Light/Dark theme toggle
- ✅ Real-time search across all content
- ✅ Keyboard shortcuts (Alt+1-6, arrows, etc.)
- ✅ Export/Import progress data
- ✅ Print-friendly CSS
- ✅ PWA support (installable app)
- ✅ Offline capability
- ✅ Mobile-responsive design

---

## 🗺️ Roadmap / Future Improvements

### ✅ v1.1 – Content & UX Polish (COMPLETED)
- [x] Add search/filter to quickly jump to topics
- [x] Add "copy to clipboard" buttons for code blocks
- [x] Add light/dark theme toggle
- [x] Add PWA support for offline access
- [x] Mobile-responsive design fixes
- [ ] Add in-page table of contents for long sections
- [ ] Add breadcrumb navigation for section hierarchy

### ✅ v1.2 – Study Mode (COMPLETED)
- [x] Add flashcard mode with progress tracking
- [x] Add multiple-choice quiz with scoring
- [x] Add progress tracking with localStorage
- [x] Add quiz history and grade display
- [ ] Add "exam cram" printable PDF export
- [ ] Add timed quiz mode (simulate exam conditions)

### ✅ v1.3 – Interactive Scenarios (COMPLETED)
- [x] Scenario-based walkthroughs (buyer/seller/investor)
- [x] Decision trees with multiple outcomes
- [x] Expert feedback on every ending
- [x] Scenario completion tracking
- [ ] Add 5 more advanced scenarios
- [ ] Add "scenario replay" to try different paths
- [ ] Add scenario difficulty ratings

### ✅ v1.4 – Personalization (COMPLETED)
- [x] Mark sections as "mastered" or "review later"
- [x] Remember last active section
- [x] Note-taking with localStorage
- [x] Personal dashboard with stats
- [x] Comprehensive progress tracking
- [ ] Add custom study schedules/reminders
- [ ] Add goal-setting features

### ✅ v1.5 – Power User Tools (COMPLETED)
- [x] Commission split calculator with cap support
- [x] Net proceeds calculator with itemization
- [x] Keyboard shortcuts for navigation
- [x] Export/Import progress feature
- [x] Print-friendly CSS
- [ ] Add ROI calculator for investors
- [ ] Add mortgage payment calculator
- [ ] Add closing cost estimator

---

### 📈 v2.0 – Advanced Assessment & Analytics (PLANNED)

**Priority: High** | **Estimated Effort: 3-4 weeks**

#### Assessment Features
- [ ] **Practice Exam Mode**
  - Full-length timed exams (simulating real MA exam)
  - 100+ questions with state-like difficulty
  - Instant results with performance breakdown
  - Topic-by-topic strength analysis
  
- [ ] **Adaptive Learning**
  - Track which topics you struggle with
  - Auto-generate custom quizzes focusing on weak areas
  - Recommend sections to review based on quiz performance
  - Difficulty adjustment based on success rate

- [ ] **Study Streaks & Gamification**
  - Daily study streak counter
  - Achievement badges (e.g., "Quiz Master", "Scenario Expert")
  - Leaderboard (optional, local-only)
  - XP points for completing activities

#### Analytics & Insights
- [ ] **Performance Dashboard**
  - Time spent per section
  - Quiz performance trends over time
  - Mastery level visualization
  - Weak topic identification
  - Study session calendar/heatmap

- [ ] **Prediction Model**
  - "Exam readiness" score based on all activities
  - Estimated pass probability
  - Recommended study plan to reach target score
  - Days until fully prepared estimate

---

### 🎓 v2.1 – Content Expansion (✅ 100% COMPLETE!)

**Priority: Medium-High** | **Completed!**

#### More Study Materials
- [x] **Expand to 100+ Quiz Questions** ✅ EXCEEDED - Now 270 questions!
  - Professional compliance (WISP, Escrow, Record Keeping)
  - Legal boundaries (Attorneys, Tax Advisors, Unauthorized Practice)
  - Agency law and history
  - Negotiation strategies with clients and brokers
  - Open house seller protection strategies
  - OLD CAR fiduciary duties
  - NAR Code of Ethics and legal implications

- [x] **Expand to 100+ Flashcards** ✅ EXCEEDED - Now 270 flashcards!
  - Comprehensive terminology and definitions
  - MA-specific laws and regulations
  - Professional practice and ethics
  - Negotiation and business skills
  - Client protection strategies

- [x] **Add 10 More Scenarios** ✅ COMPLETE - Now 10 scenarios!
  - ✅ Dual Agency Ethical Dilemma (confidentiality, designated agency)
  - ✅ Handling Discriminatory Client Requests (Fair Housing compliance)
  - ✅ FSBO Legal Boundaries (unauthorized practice of law)
  - ✅ Multi-Party Estate Sale Negotiation (family disputes, neutrality)
  - ✅ Material Defect Disclosure Dilemma (fraud prevention)
  - ✅ Commission Dispute Resolution (procuring cause, arbitration)
  - ✅ Expired Listing Ethics (professional courtesy)
  - ✅ Plus original 3: Competitive buyer, Low offer negotiation, Multi-unit investor

#### New Guide Sections
- [x] **Fair Housing Act Deep Dive** ✅ COMPLETE (Section 21)
  - Federal & MA protected classes
  - Violations, penalties, and enforcement
  - Advertising compliance and safe language
  - How to handle discriminatory requests
  - Reasonable accommodations vs modifications

- [x] **Property Valuation Methods** ✅ COMPLETE (Section 22)
  - Comparative Market Analysis (CMA) - the 3 C's
  - Cost approach - replacement cost minus depreciation
  - Income approach - NOI and cap rates for investors
  - Market approach - formal sales comparison
  - CMA vs Appraisal differences
  - Valuation red flags and agent's role

- [x] **Financing Deep Dive** ✅ COMPLETE (Section 23)
  - Conventional loans (3-20% down, PMI requirements)
  - FHA loans (3.5% down, MIP for life)
  - VA loans (0% down, no PMI, eligibility)
  - USDA & Jumbo loans
  - Alternative financing (seller, bridge, hard money)
  - Pre-qualification vs pre-approval
  - Mortgage approval timeline and common issues

- [x] **Title & Closing Process** ✅ COMPLETE (Section 24)
  - Title search process and common issues
  - Owner's vs Lender's title insurance
  - Closing documents (buyer & seller)
  - Closing Disclosure breakdown (5 pages)
  - Prorations and credits
  - What happens at closing table
  - Post-closing checklists and common problems

- [x] **Tax Implications** ✅ COMPLETE (Section 25)
  - Capital gains exclusion ($250k/$500k for primary residence)
  - 1031 exchanges (45/180 day deadlines, like-kind rules)
  - Depreciation for rentals (27.5 years, recapture at 25%)
  - Tax deductions for homeowners vs investors
  - Passive activity loss rules ($25k exception)
  - First-time buyer programs and MCC
  - Agent's role in tax discussions (what you CAN'T do)

---

### 🔧 v2.2 – Data-Driven & Updatable (PLANNED)

**Priority: Medium** | **Estimated Effort: 2-3 weeks**

#### Content Management
- [ ] Move all content to JSON/Markdown files
- [ ] Add simple CMS-like editing mode (password-protected)
- [ ] Version control for content updates
- [ ] Hook into external law/form update API (when available)

#### Dynamic Updates
- [ ] "What's New" section highlighting recent law changes
- [ ] Content update notifications
- [ ] Automatic form update checker (MAR forms)
- [ ] RSS feed for MA real estate law changes

---

### 🎥 v2.3 – Multimedia Learning (PLANNED)

**Priority: Medium** | **Estimated Effort: 3-4 weeks**

#### Video Integration
- [ ] Embed short explainer videos (5-10 min each)
- [ ] Video flashcards with visual demonstrations
- [ ] Contract walkthrough videos
- [ ] Interview with practicing agents
- [ ] Virtual property tour scenarios

#### Audio Content
- [ ] Audio flashcard mode for commuters
- [ ] Podcast-style lessons for each section
- [ ] Audio quizzes (listen and answer)
- [ ] Text-to-speech for any section

#### Visual Learning
- [ ] Interactive infographics for complex topics
- [ ] Flowcharts for decision-making processes
- [ ] Annotated contract documents
- [ ] Property inspection photo gallery
- [ ] Timeline visualizations for transaction process

---

### 🤝 v2.4 – Community & Collaboration (PLANNED)

**Priority: Low-Medium** | **Estimated Effort: 4-5 weeks**

#### Social Features
- [ ] **Study Groups**
  - Create private study groups
  - Share progress with group members
  - Group leaderboards
  - Challenge friends to quizzes

- [ ] **Discussion Forums**
  - Ask questions on specific topics
  - Share tips and strategies
  - Real-world experience sharing
  - Moderated by licensed agents

- [ ] **User-Generated Content**
  - Submit your own flashcards
  - Share custom scenarios
  - Rate and review content
  - Community voting on best content

#### Mentorship
- [ ] Connect new agents with experienced mentors
- [ ] Q&A sessions with practicing brokers
- [ ] Career guidance resources
- [ ] Brokerage comparison tool

---

### 🛠️ v2.5 – Professional Tools Suite (✅ COMPLETE!)

**Priority: Medium** | **Completed!**

#### More Calculators
- [x] **Mortgage Calculator** ✅ COMPLETE
  - Principal, interest, taxes, insurance (PITI)
  - Monthly payment breakdown
  - Total interest calculation over loan term
  - Loan amount, interest rate, and term inputs

- [x] **Investment Property Analyzer** ✅ COMPLETE
  - Cap rate calculator (NOI ÷ Purchase Price)
  - Cash-on-cash return (NOI ÷ Cash Invested)
  - Vacancy rate and expense calculations
  - Property management fee calculations

- [x] **CMA (Comparative Market Analysis) Tool** ✅ COMPLETE
  - Property comparison grid (subject vs comp)
  - Adjustment calculator (beds, baths, sqft, garage)
  - Automatic value adjustments (if better subtract, if worse add)
  - Market trend analyzer
  - Price recommendation

- [ ] **Marketing Budget Calculator**
  - Cost per lead
  - ROI on marketing spend
  - Annual marketing budget planner

#### Document Templates
- [ ] Downloadable form templates (MAR compliant)
- [ ] Email templates for common scenarios
- [ ] Marketing copy templates
- [ ] Buyer/seller presentation templates

---

### 🚀 v3.0 – Certification Platform (LONG-TERM VISION)

**Priority: Low** | **Estimated Effort: 8-12 weeks**

#### Full Certification Prep
- [ ] Complete MA real estate exam simulator
- [ ] National portion coverage
- [ ] State portion coverage
- [ ] Practice exams with certification
- [ ] "Pass guarantee" study plan

#### Post-License Education
- [ ] Continuing education courses
- [ ] Designation prep (GRI, CRS, ABR, etc.)
- [ ] Broker license exam prep
- [ ] Specialty certifications

#### Backend & API
- [ ] User authentication system
- [ ] Cloud sync for progress data
- [ ] API for third-party integrations
- [ ] Mobile app (React Native)

---

### 🎯 v3.1 – Advanced Features (LONG-TERM VISION)

**Priority: Low** | **Estimated Effort: Ongoing**

#### AI & Machine Learning
- [ ] AI-powered study assistant chatbot
- [ ] Personalized question generation
- [ ] Natural language Q&A
- [ ] Speech recognition for voice study

#### Integration & Export
- [ ] Anki deck export
- [ ] Quizlet integration
- [ ] Calendar integration (study reminders)
- [ ] Notion/OneNote export
- [ ] Google Classroom integration

#### Accessibility
- [ ] Screen reader optimization
- [ ] Multiple language support (Spanish, Portuguese)
- [ ] Dyslexia-friendly fonts and spacing
- [ ] High contrast mode
- [ ] Voice navigation

---

## 💡 Community Suggestions & Ideas

**Have ideas for improvement?** We'd love to hear them!

### How to Suggest Features
1. Open an issue on GitHub with the "enhancement" label
2. Describe the feature and why it would be valuable
3. Include mockups or examples if possible
4. Vote on existing feature requests

### Most Requested Features
- [ ] Mobile app version (iOS/Android)
- [ ] Collaboration mode for study partners
- [ ] Video content integration
- [ ] Live webinars or Q&A sessions
- [ ] Broker-specific training modules
- [ ] Transaction management practice
- [ ] Ethics course integration

---

## 🎖️ Stretch Ideas & Experiments

**Low priority but interesting concepts to explore:**

### Learning Innovations
- [ ] VR property tours with quiz elements
- [ ] AR overlays for contract explanations
- [ ] Gamified "real estate empire" mode
- [ ] Escape room style challenge scenarios
- [ ] Role-playing negotiation simulator

### Data & Research
- [ ] Anonymized performance benchmarking
- [ ] Market trends analysis
- [ ] Salary expectation calculator by region
- [ ] Career path simulator
- [ ] Success factor analysis

### Business Tools
- [ ] Client database/CRM lite
- [ ] Transaction tracker
- [ ] Lead generation calculator
- [ ] Sphere of influence mapper
- [ ] Social media post generator

---

## ⏱️ Development Timeline

### Short Term (1-3 months)
- Complete v2.0 assessment features
- Expand content to 100+ questions
- Add practice exam mode
- Implement study streaks

### Medium Term (3-6 months)
- Add multimedia content
- Build out analytics dashboard
- Create more calculators
- Develop community features

### Long Term (6-12 months)
- Full certification platform
- Mobile app development
- AI assistant integration
- Backend API & cloud sync

---

## 📝 Notes on Implementation Priority

**High Priority** (Essential for exam prep):
- Practice exam mode
- More quiz questions & flashcards
- Adaptive learning
- Performance analytics

**Medium Priority** (Great for engagement):
- Multimedia content
- Additional calculators
- Community features
- Gamification

**Low Priority** (Nice to have):
- Advanced integrations
- AI features
- Mobile app
- Business tools

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
