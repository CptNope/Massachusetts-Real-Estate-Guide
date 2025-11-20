# CMA Hooks Integration Guide

## Overview
We've extracted 4 major feature areas into custom hooks to reduce the main EnhancedCMA.jsx file size and improve code organization.

## Created Hooks

### 1. **useMLSIntegration** (170 lines)
Manages MLS connection, search, and property import functionality.

### 2. **useEmailIntegration** (228 lines)
Handles email configuration, contact management, and mass email sending.

### 3. **useAPITokens** (102 lines)
Manages API token generation, deletion, and usage tracking.

### 4. **useBranding** (160 lines)
Controls branding configuration (logo, colors, company info).

**Total Extracted**: ~660 lines of stateful logic!

## How to Integrate

### Step 1: Add Imports

At the top of `EnhancedCMA.jsx`, replace individual state declarations with hook imports:

```javascript
import {
  useMLSIntegration,
  useEmailIntegration,
  useAPITokens,
  useBranding
} from './hooks';
```

### Step 2: Replace State with Hooks

**BEFORE** (Multiple useState declarations):
```javascript
const [mlsConnected, setMlsConnected] = useState(false);
const [mlsProvider, setMlsProvider] = useState('');
const [mlsUsername, setMlsUsername] = useState('');
// ... many more MLS states

const [emailProvider, setEmailProvider] = useState('none');
const [contacts, setContacts] = useState([]);
// ... many more email states

const [apiTokens, setApiTokens] = useState([]);
// ... API token states

const [brandingLogo, setBrandingLogo] = useState('');
const [brandingCompany, setBrandingCompany] = useState('');
// ... branding states
```

**AFTER** (Use custom hooks):
```javascript
// MLS Integration
const mlsHook = useMLSIntegration(showNotification, gamification);

// Email & Contacts
const emailHook = useEmailIntegration(showNotification, gamification);

// API Tokens
const apiHook = useAPITokens(showNotification, gamification);

// Branding
const brandingHook = useBranding(showNotification, gamification);
```

### Step 3: Update Variable References

Replace all direct state references with hook properties:

**MLS References:**
```javascript
// OLD: mlsConnected
// NEW: mlsHook.mlsConnected

// OLD: setMlsProvider(value)
// NEW: mlsHook.setMlsProvider(value)

// OLD: connectMLS()
// NEW: mlsHook.connectMLS()
```

**Email References:**
```javascript
// OLD: contacts
// NEW: emailHook.contacts

// OLD: addContact()
// NEW: emailHook.addContact()

// OLD: sendMassEmail(data)
// NEW: emailHook.sendMassEmail(data)
```

**API Token References:**
```javascript
// OLD: apiTokens
// NEW: apiHook.apiTokens

// OLD: generateAPIToken()
// NEW: apiHook.generateAPIToken()
```

**Branding References:**
```javascript
// OLD: brandingLogo
// NEW: brandingHook.brandingLogo

// OLD: saveBranding()
// NEW: brandingHook.saveBranding()
```

### Step 4: Remove Old Code

Delete the following from EnhancedCMA.jsx:

#### MLS State & Functions (lines ~180-410)
- All `mls*` useState declarations
- `connectMLS()` function
- `disconnectMLS()` function
- `searchMLS()` function
- `importMLSProperty()` function
- MLS useEffect hooks

#### Email State & Functions (lines ~775-1015)
- All `email*` and `contact*` useState declarations
- `saveEmailConfig()` function
- `testEmailConnection()` function
- `addContact()` function
- `deleteContact()` function
- `toggleContactSelection()` function
- `sendMassEmail()` function
- `personalizeEmail()` function
- Email useEffect hooks

#### API Token State & Functions (lines ~412-450)
- `apiTokens` useState
- `generateAPIToken()` function
- `deleteAPIToken()` function
- `copyTokenToClipboard()` function
- API tokens useEffect

#### Branding State & Functions (lines ~241-280)
- All `branding*` useState declarations
- `saveBranding()` function
- Branding useEffect

## Quick Migration Script

Use Find & Replace in your IDE:

### MLS Migration
```
Find: mlsConnected
Replace: mlsHook.mlsConnected

Find: setMlsProvider
Replace: mlsHook.setMlsProvider

Find: connectMLS\(\)
Replace: mlsHook.connectMLS()

// ... repeat for all MLS variables
```

### Email Migration
```
Find: contacts\b
Replace: emailHook.contacts

Find: addContact\(\)
Replace: emailHook.addContact()

Find: sendMassEmail
Replace: emailHook.sendMassEmail

// ... repeat for all email variables
```

### API Migration
```
Find: apiTokens\b
Replace: apiHook.apiTokens

Find: generateAPIToken\(\)
Replace: apiHook.generateAPIToken()

// ... repeat for all API variables
```

### Branding Migration
```
Find: brandingLogo\b
Replace: brandingHook.brandingLogo

Find: saveBranding\(\)
Replace: brandingHook.saveBranding()

// ... repeat for all branding variables
```

## Expected Line Reduction

**Before Integration:**
- EnhancedCMA.jsx: ~5,371 lines

**After Integration:**
- EnhancedCMA.jsx: ~4,700 lines (-660 lines)
- useMLSIntegration.js: +170 lines
- useEmailIntegration.js: +228 lines
- useAPITokens.js: +102 lines
- useBranding.js: +160 lines

**Total: 660 lines extracted into reusable hooks!**

## Benefits

✅ **Reduced Main File**: ~12% smaller
✅ **Reusable Logic**: Hooks can be used in other components
✅ **Better Testing**: Hooks are easier to test in isolation
✅ **Cleaner Code**: Each hook handles one concern
✅ **Easier Maintenance**: Changes are localized to specific hooks
✅ **Better Organization**: Related functionality grouped together

## Testing Hooks Individually

Each hook can be tested independently:

```javascript
import { renderHook, act } from '@testing-library/react-hooks';
import { useMLSIntegration } from './hooks';

test('connects to MLS successfully', () => {
  const mockNotification = jest.fn();
  const mockGamification = { addXP: jest.fn() };
  
  const { result } = renderHook(() => 
    useMLSIntegration(mockNotification, mockGamification)
  );
  
  act(() => {
    result.current.setMlsProvider('MLS Grid');
    result.current.setMlsUsername('test@example.com');
    result.current.setMlsPassword('password');
    result.current.connectMLS();
  });
  
  expect(result.current.mlsConnected).toBe(true);
  expect(mockNotification).toHaveBeenCalledWith(
    expect.stringContaining('Connected'),
    'success'
  );
});
```

## Next Refactor Opportunities

After integrating these hooks, consider extracting:

1. **Photo Management** → `usePhotoUpload` hook
2. **Export/Import** → `useDataExport` hook
3. **Undo/Redo** → `useHistory` hook
4. **Favorites** → `useFavorites` hook
5. **ChatGPT Integration** → `useChatGPT` hook

## Troubleshooting

### Hook References Not Working
- Make sure you're destructuring hook properties correctly
- Check that `showNotification` and `gamification` are passed to hooks

### State Not Persisting
- Verify localStorage keys haven't changed
- Check browser dev tools → Application → Local Storage

### Functions Not Found
- Ensure all function calls use the hook prefix (e.g., `mlsHook.connectMLS()`)
- Verify imports are correct

## Full Integration Example

```javascript
// EnhancedCMA.jsx (simplified)
import { useMLSIntegration, useEmailIntegration, useAPITokens, useBranding } from './hooks';

export default function EnhancedCMA({ gamification }) {
  // Initialize hooks
  const mlsHook = useMLSIntegration(showNotification, gamification);
  const emailHook = useEmailIntegration(showNotification, gamification);
  const apiHook = useAPITokens(showNotification, gamification);
  const brandingHook = useBranding(showNotification, gamification);
  
  // ... rest of component state
  
  return (
    <div className="enhanced-cma">
      {/* MLS Panel */}
      {showMLS && (
        <div className="mls-panel">
          <button onClick={mlsHook.connectMLS}>Connect</button>
          {mlsHook.mlsConnected && (
            <button onClick={mlsHook.searchMLS}>Search</button>
          )}
        </div>
      )}
      
      {/* Email Panel */}
      {showEmail && (
        <div className="email-panel">
          <button onClick={emailHook.addContact}>Add Contact</button>
          <button onClick={() => emailHook.sendMassEmail(emailData)}>
            Send to {emailHook.selectedContacts.length} contacts
          </button>
        </div>
      )}
      
      {/* ... rest of JSX */}
    </div>
  );
}
```

---

**The hooks are ready to use! Integration will reduce the main file by ~660 lines while improving code organization!** 🎯🔧✨
