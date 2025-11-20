# Project Architecture

## Overview
This document describes the refactored project structure implemented on November 20, 2025. The refactoring organized a monolithic 617KB codebase into a modular, maintainable architecture.

## Directory Structure

```
src/
├── main.jsx                      # Application entry point
├── App.jsx                       # Main application component
├── index.css                     # Global styles
│
├── content/                      # Content organization (33 sections)
│   ├── index.jsx                # Main export with auto-sorting
│   │
│   ├── fundamentals/            # Sections 1-6
│   │   ├── 01-flow.jsx
│   │   ├── 02-law-changes.jsx
│   │   ├── 03-contract-law-fundamentals.jsx
│   │   ├── 04-mls-participation-rule-2024.jsx
│   │   ├── 05-two-contract-attorney.jsx
│   │   └── 06-transaction-cycle.jsx
│   │
│   ├── agency/                  # Sections 7-12
│   │   ├── 07-agency-types.jsx
│   │   ├── 08-agency-models.jsx
│   │   ├── 09-agent-authority.jsx
│   │   ├── 10-broker-relationship.jsx
│   │   ├── 11-buyer-representation-agreements.jsx
│   │   └── 12-agency-termination.jsx
│   │
│   ├── compliance/              # Sections 13-16
│   │   ├── 13-fair-housing.jsx
│   │   ├── 14-property-condition-disclosure.jsx
│   │   ├── 15-home-inspection-law.jsx
│   │   └── 16-stigmatized-properties.jsx
│   │
│   ├── transactions/            # Sections 17-22
│   │   ├── 17-negotiable-terms.jsx
│   │   ├── 18-commissions.jsx
│   │   ├── 19-valuation.jsx
│   │   ├── 20-financing.jsx
│   │   ├── 21-title-closing.jsx
│   │   └── 22-tax-implications.jsx
│   │
│   ├── legal/                   # Sections 23-28
│   │   ├── 23-antitrust-associations.jsx
│   │   ├── 24-legal-protections.jsx
│   │   ├── 25-wisp.jsx
│   │   ├── 26-digital-compliance.jsx
│   │   ├── 27-referrals.jsx
│   │   └── 28-insurance.jsx
│   │
│   └── professional/            # Sections 29-33
│       ├── 29-professional-development.jsx
│       ├── 30-multi-state.jsx
│       ├── 31-investor.jsx
│       ├── 32-exam-prep.jsx
│       └── 33-cheat.jsx
│
├── components/                  # Reusable UI Components
│   │
│   ├── layout/                  # Layout components
│   │   ├── Breadcrumb.jsx
│   │   ├── TableOfContents.jsx
│   │   └── HelpModal.jsx
│   │
│   ├── gamification/            # Gamification system
│   │   ├── GamificationPanel.jsx
│   │   ├── StreakDisplay.jsx
│   │   └── PerformanceAnalytics.jsx
│   │
│   ├── study/                   # Study mode components
│   │   ├── Flashcard.jsx
│   │   ├── FlashcardMode.jsx
│   │   ├── QuizMode.jsx
│   │   ├── PracticeExamMode.jsx
│   │   └── studyData.js         # Quiz questions & flashcards
│   │
│   └── shared/                  # Shared utilities
│       ├── CodeBlock.jsx
│       └── CopyButton.jsx
│
├── features/                    # Feature modules
│   │
│   ├── dashboard/               # User dashboard
│   │   ├── Dashboard.jsx
│   │   └── PersonalDashboard.jsx
│   │
│   ├── scenarios/               # Interactive scenarios
│   │   ├── ScenarioMode.jsx
│   │   └── scenarioData.js
│   │
│   ├── calculators/             # Financial calculators
│   │   └── CalculatorMode.jsx
│   │
│   └── cma/                     # Comparative Market Analysis
│       ├── EnhancedCMA.jsx
│       ├── cmaChallenges.js
│       ├── cmaSaveLoad.js
│       └── marketTemplates.js
│
└── hooks/                       # Custom React hooks
    ├── useLocalStorage.js
    ├── useGamification.js
    └── useStudyStreak.js
```

## Architecture Principles

### 1. Separation of Concerns
- **Content**: Educational material separated into logical categories
- **Components**: Reusable UI elements
- **Features**: Self-contained feature modules
- **Hooks**: Shared business logic

### 2. Content Organization
Content is organized by learning progression:
1. **Fundamentals** (1-6): Core concepts, laws, contracts
2. **Agency** (7-12): Agency relationships and authority
3. **Compliance** (13-16): Legal compliance and disclosures
4. **Transactions** (17-22): Deal structure and execution
5. **Legal** (23-28): Regulatory compliance
6. **Professional** (29-33): Career development and exam prep

### 3. Automatic Sorting
The `content/index.jsx` file:
- Imports all 33 section files
- Automatically sorts by title number (1-33)
- Exports sorted array for consistent display
- Allows individual section imports if needed

### 4. Component Organization
Components are grouped by purpose:
- **Layout**: Navigation and structure
- **Gamification**: Progress tracking and achievements
- **Study**: Learning modes (flashcards, quizzes, exams)
- **Shared**: Reusable utilities

### 5. Feature Modules
Self-contained features with their own data:
- **Dashboard**: Progress tracking and notes
- **Scenarios**: Interactive decision trees
- **Calculators**: Financial tools
- **CMA**: Comparative market analysis tool

## File Naming Conventions

### Content Files
- Format: `##-section-name.jsx`
- Example: `01-flow.jsx`, `32-exam-prep.jsx`
- Leading zeros for proper file sorting

### Component Files
- PascalCase: `FlashcardMode.jsx`
- Descriptive names: `PerformanceAnalytics.jsx`

### Data Files
- camelCase: `studyData.js`, `scenarioData.js`
- Descriptive suffixes: `cmaChallenges.js`, `marketTemplates.js`

### Hook Files
- Format: `use[Name].js`
- Examples: `useLocalStorage.js`, `useGamification.js`

## Import Patterns

### Relative Imports
Components use relative paths based on their location:

```javascript
// From App.jsx (root level)
import { sections } from './content/index.jsx';
import FlashcardMode from './components/study/FlashcardMode';
import PersonalDashboard from './features/dashboard/PersonalDashboard';
import { useLocalStorage } from './hooks/useLocalStorage';

// From PersonalDashboard.jsx (features/dashboard/)
import { sections } from '../../content/index.jsx';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import PerformanceAnalytics from '../../components/gamification/PerformanceAnalytics';

// From FlashcardMode.jsx (components/study/)
import Flashcard from './Flashcard';
import { flashcards } from './studyData';
```

## Benefits of This Structure

### Developer Experience
- ✅ **Easy Navigation**: Find any file in seconds
- ✅ **Better IDE Performance**: Smaller files = faster IntelliSense
- ✅ **Clear Organization**: Logical grouping by purpose
- ✅ **Scalability**: Easy to add new sections or features

### Maintainability
- ✅ **Isolated Changes**: Edit one section without affecting others
- ✅ **Better Git Diffs**: Changes isolated to specific files
- ✅ **Team Collaboration**: Multiple developers can work simultaneously
- ✅ **Testing**: Test individual components independently

### Code Quality
- ✅ **Single Responsibility**: Each file has one clear purpose
- ✅ **DRY Principle**: Shared logic in hooks
- ✅ **Modularity**: Self-contained features with dependencies
- ✅ **Type Safety**: Clear import/export contracts

## Migration Notes

### From Monolithic to Modular
**Before**: Single 617KB `content.jsx` file (12,241 lines)
**After**: 33 organized section files averaging 18KB each

### Breaking Changes
None! The refactoring maintains the same API:
```javascript
import { sections } from './content/index.jsx';
// sections is still an array of 33 section objects, sorted 1-33
```

### File Movements
| Old Location | New Location |
|--------------|--------------|
| `src/content.jsx` | `src/content/[category]/#-name.jsx` |
| `src/FlashcardMode.jsx` | `src/components/study/FlashcardMode.jsx` |
| `src/PersonalDashboard.jsx` | `src/features/dashboard/PersonalDashboard.jsx` |
| `src/EnhancedCMA.jsx` | `src/features/cma/EnhancedCMA.jsx` |
| `src/useLocalStorage.js` | `src/hooks/useLocalStorage.js` |

## Future Enhancements

### Potential Improvements
1. **Code Splitting**: Use dynamic imports for lazy loading
2. **Shared Types**: Add TypeScript definitions
3. **Component Library**: Extract reusable components
4. **Testing**: Add unit tests for each module
5. **Documentation**: Add JSDoc comments

### Code Splitting Example
```javascript
// Lazy load large features
const EnhancedCMA = lazy(() => import('./features/cma/EnhancedCMA'));
const PracticeExamMode = lazy(() => import('./components/study/PracticeExamMode'));
```

## Build Output

### Production Build Stats
- **82 modules** transformed
- **Total Size**: 1,678KB (367KB gzipped)
- **CSS**: 136KB (23KB gzipped)
- **Build Time**: ~2 seconds

### Performance
- Initial load: Fast (gzipped assets)
- Runtime: Excellent (React optimizations)
- Bundle analysis: Consider code splitting for further optimization

## Maintenance Guidelines

### Adding New Content Section
1. Create file: `src/content/[category]/##-section-name.jsx`
2. Export section object with id, icon, title, subtitle, body
3. Import in `src/content/index.jsx`
4. Add to importedSections array
5. Sorting happens automatically

### Adding New Component
1. Determine category: layout, gamification, study, or shared
2. Create file in appropriate folder
3. Follow naming conventions
4. Update imports in consuming files

### Adding New Feature
1. Create folder: `src/features/[feature-name]/`
2. Add main component and supporting files
3. Keep feature self-contained with data files
4. Import in App.jsx or parent component

### Adding New Hook
1. Create file: `src/hooks/use[Name].js`
2. Follow React hooks conventions
3. Document parameters and return values
4. Export hook function

## Version History

### v2.0 - November 20, 2025
- ✅ Split monolithic content.jsx into 33 organized files
- ✅ Reorganized components into logical folders
- ✅ Moved features into self-contained modules
- ✅ Centralized custom hooks
- ✅ Updated all import paths
- ✅ Maintained backward compatibility
- ✅ Improved build performance

### v1.0 - Previous Version
- Single file architecture
- All components in src root
- Harder to navigate and maintain

---

**Last Updated**: November 20, 2025
**Architecture Version**: 2.0
**Maintained By**: Development Team
