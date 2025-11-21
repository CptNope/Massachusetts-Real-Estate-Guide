# CSS Architecture Documentation

## 📁 Modular CSS Structure

The CSS has been refactored from a single monolithic `index.css` (14,563 lines) into a modular, maintainable structure:

```
src/styles/
├── index.css                    # Main entry point (imports everything)
├── global.css                   # Variables, reset, typography
├── layout.css                   # App structure, header, sidebar
├── components/
│   ├── navigation.css          # Nav buttons, sidebar nav
│   ├── buttons.css             # Button styles, copy buttons
│   ├── cards.css               # Card containers, content cards
│   └── forms.css               # Input groups, form elements
└── features/
    ├── calculator.css          # General calculator styles
    ├── cma.css                 # CMA-specific styles
    └── charts.css              # Chart visualization styles
```

## 🎯 Benefits

✅ **Easier to find styles** - Know exactly where to look  
✅ **Better organization** - Logical grouping by purpose  
✅ **Easier maintenance** - Edit one feature without affecting others  
✅ **Better collaboration** - Multiple developers can work on different files  
✅ **Smaller git diffs** - Changes are isolated  
✅ **Clearer dependencies** - See what imports what  

## 📝 File Descriptions

### Core Files

- **`index.css`** - Main entry point that imports all other CSS files
- **`global.css`** - CSS variables (colors, themes), reset styles, base typography
- **`layout.css`** - App structure (header, sidebar, main content), responsive layout

### Components (Reusable UI)

- **`components/navigation.css`** - Navigation lists, nav buttons, sidebar styles
- **`components/buttons.css`** - All button variations, copy buttons
- **`components/cards.css`** - Card containers, content sections
- **`components/forms.css`** - Input fields, selects, validation states

### Features (Feature-Specific)

- **`features/calculator.css`** - Calculator tabs, results, explanations
- **`features/cma.css`** - CMA tool, comparable sections, basic features
- **`features/cma-advanced.css`** - CMA toolbar, help panels, challenges, library cards
- **`features/charts.css`** - Chart panels, chart selectors, visualizations
- **`features/study-mode.css`** - Flashcards, study mode toggle, stats
- **`features/quiz.css`** - Quiz progress, questions, results, history
- **`features/dashboard.css`** - Dashboard stats, progress, section management
- **`features/scenarios.css`** - Scenario cards, choices, endings, paths
- **`features/legal.css`** - Law banners, legal panels, contracts, mortgages, liens
- **`features/integrations.css`** - MLS, ChatGPT, OpenAI, API tokens, AI predictions

## 🔄 Migration Status

### ✅ Completed

**Phase 1 - Foundation:**
- [x] Created modular file structure
- [x] Extracted global styles (variables, reset, typography)
- [x] Extracted layout styles (app structure, responsive)
- [x] Extracted component styles (navigation, buttons, cards, forms)
- [x] Extracted basic features (calculator, CMA, charts)
- [x] Set up import system
- [x] Tested build process

**Phase 2 - Major Features:**
- [x] Migrated study mode & flashcards
- [x] Migrated quiz system
- [x] Migrated dashboard & analytics
- [x] Migrated scenario mode

**Phase 3 - Cross-Cutting Concerns:**
- [x] Migrated all animations & keyframes
- [x] Migrated utility classes
- [x] Migrated print styles
- [x] Added browser compatibility fixes

**Phase 4 - CMA Advanced Features:**
- [x] Migrated CMA toolbar system
- [x] Migrated CMA help & data sources panels
- [x] Migrated CMA challenges system
- [x] Migrated CMA library cards
- [x] Added responsive overrides for CMA components

**Phase 5 - Legal & Contract Panels:**
- [x] Migrated MA law change banners
- [x] Migrated legal info panels
- [x] Migrated contract elements & effects panels
- [x] Migrated mortgage theory panels
- [x] Migrated security & debt sections
- [x] Migrated note provisions & lien releases
- [x] Migrated interest calculations
- [x] Migrated MA sales contracts

**Phase 6 - External Integrations:**
- [x] Migrated MLS integration panel & features
- [x] Migrated ChatGPT/OpenAI configuration & features
- [x] Migrated API token management
- [x] Migrated AI prediction panels
- [x] Migrated photo & email upload panels

### 🚧 Remaining (~10,418 lines, 72%)

**Priority: Medium**
- [ ] Additional CMA features (templates, reports, etc.)
- [ ] Email integration styles
- [ ] Additional responsive overrides

**Priority: Low**
- [ ] Misc UI elements & panels
- [ ] Remove legacy file once migration is complete

## 📖 Usage Guide

### Adding New Styles

1. **For new components**: Add to `components/` directory
2. **For new features**: Add to `features/` directory
3. **Always import** in `index.css` in the appropriate section

Example:
```css
/* In src/styles/index.css */
@import './features/my-new-feature.css';
```

### Modifying Existing Styles

1. Find the appropriate file using the structure above
2. Make your changes
3. Test that nothing else broke
4. Commit with a descriptive message

### Best Practices

- **Keep specificity low** - Avoid deep nesting
- **Use CSS variables** - Defined in `global.css`
- **Mobile-first** - Add desktop styles in media queries
- **Group related styles** - Keep logical sections together
- **Comment sections** - Use clear section headers

## 🎨 CSS Variables Reference

Defined in `global.css`:

```css
/* Dark Theme (default) */
--bg-main
--bg-card
--text-primary
--text-secondary
--text-tertiary
--accent
--border-color

/* Light Theme */
(same variables with different values)
```

## 🔧 Maintenance

### Finding Styles

1. **Layout issues?** → Check `layout.css`
2. **Button not working?** → Check `components/buttons.css`
3. **Form input problem?** → Check `components/forms.css`
4. **CMA feature issue?** → Check `features/cma.css`
5. **Chart display problem?** → Check `features/charts.css`

### Migration Workflow

As you work on features, gradually move styles from `index.legacy.css` to the appropriate modular file:

1. Identify the styles you're working with
2. Cut them from `index.legacy.css`
3. Paste into the appropriate modular file
4. Test that everything still works
5. Commit with message: `refactor: migrate [feature] styles to modular system`

## 📊 File Sizes

| File | Lines | Purpose |
|------|-------|---------|
| `global.css` | ~110 | Variables & reset |
| `layout.css` | ~160 | App structure |
| `components/*.css` | ~400 | Reusable UI |
| `features/*.css` | ~600 | Feature styles |
| `index.legacy.css` | ~13,000 | **To be migrated** |

**Goal:** Eliminate `index.legacy.css` by migrating all styles to modular files.

## 🚀 Build Process

The build process automatically:
1. Reads `src/styles/index.css`
2. Processes all `@import` statements
3. Bundles into single CSS file
4. Minifies for production

**Bundle Size:**
- Before modularization: 174.12 KB (28.39 KB gzipped)
- After modularization: 177.16 KB (29.03 KB gzipped)
- Overhead: +3 KB (due to @import statements, but worth it for maintainability!)

## 📞 Questions?

If you're unsure where a style should go:
- Is it used by multiple features? → `components/`
- Is it specific to one feature? → `features/`
- Is it a global setting? → `global.css`
- Is it about page layout? → `layout.css`

When in doubt, check similar existing styles for guidance!
