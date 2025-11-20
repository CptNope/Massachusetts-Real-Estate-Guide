# 🔍 CMA Calculator White Screen - Debug Guide

## Quick Diagnosis

When the CMA calculator shows a white/blank screen, follow these steps:

### Step 1: Check Browser Console
1. Press `F12` to open DevTools
2. Go to **Console** tab
3. Click **Calculators → CMA Tool**
4. Look for **RED error messages**

### Step 2: Common Errors & Fixes

#### Error: "Cannot read property 'X' of undefined"
**Cause:** Missing gamification prop or localStorage data
**Fix:** Clear localStorage and refresh
```javascript
localStorage.clear();
window.location.reload();
```

#### Error: "X is not a function"
**Cause:** Missing import or function
**Fix:** Check that all imports are present in EnhancedCMA.jsx

#### Error: "Failed to execute 'eval'"
**Cause:** CSP (Content Security Policy) blocking eval()
**Fix:** The eval() calls are for dynamic state management and are warnings, not blockers

#### No Error, Just White Screen
**Cause:** CSS issue - white text on white background
**Fix:** Check theme, try toggling dark/light mode

### Step 3: Quick Fixes to Try

1. **Refresh the page** - Simplest fix
2. **Toggle theme** (☀️/🌙 button) - May reveal hidden text
3. **Clear browser cache** - Ctrl+Shift+Delete
4. **Hard refresh** - Ctrl+F5
5. **Clear localStorage**:
   ```javascript
   // In browser console:
   localStorage.clear();
   location.reload();
   ```

### Step 4: Verify Component Load

In browser console, type:
```javascript
// Check if component is mounted
document.querySelector('.calculator-container');
// Should return an HTML element, not null
```

### Step 5: Check Network Tab
1. Go to **Network** tab in DevTools
2. Reload the page
3. Look for any **red/failed requests**
4. Verify `index.js` and `index.css` load successfully

## Common Solutions

### Solution 1: localStorage Corruption
```javascript
// Clear all stored data
localStorage.removeItem('savedCMAs');
localStorage.removeItem('cma_draft');
localStorage.removeItem('cma_branding');
location.reload();
```

### Solution 2: React Error Boundary
The component now has error handling. If you see an error message saying "CMA Calculator Error", click "Try Again"

### Solution 3: CSS Override
If text is white on white, add to browser console:
```javascript
document.querySelector('.calculator-container').style.color = 'black';
```

### Solution 4: Check Theme
```javascript
// Force dark theme
localStorage.setItem('theme', 'dark');
location.reload();
```

## Permanent Fix

If the issue persists, the component has been updated with:
1. ✅ Error boundary to catch and display errors
2. ✅ Safe error handling
3. ✅ Graceful fallback UI

The error boundary will show a user-friendly message instead of a white screen.

## Still Not Working?

If none of the above work, check:
1. Browser compatibility (modern browser needed)
2. JavaScript enabled
3. No browser extensions blocking React
4. Internet connection (for CDN resources if any)

## Developer Notes

The white screen issue was likely caused by:
- Missing error handling (NOW FIXED)
- Potential localStorage corruption
- React rendering error not being caught

**Fix Applied:** Added error boundary and error handling to EnhancedCMA component.
