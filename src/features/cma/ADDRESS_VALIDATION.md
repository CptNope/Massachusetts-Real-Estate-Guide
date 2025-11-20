# Address Validation Integration

## Overview
Address validation using free public APIs for the CMA tool.

## Data Sources
- **Census Geocoding API** (Primary) - No API key required, official US government data
- **OpenStreetMap Nominatim** (Fallback) - Free, open-source geocoding

## Features
✅ Real-time address autocomplete
✅ Address validation with geocoding
✅ Massachusetts-specific filtering
✅ Coordinate extraction (lat/lng)
✅ Distance calculation
✅ Visual validation feedback
✅ Keyboard navigation (Arrow keys, Enter, Escape)

## Usage Example

### Import Component
```javascript
import { AddressInput } from './components';
```

### Basic Usage
```jsx
<AddressInput
  value={subjectAddress}
  onChange={setSubjectAddress}
  label="Subject Property Address"
  placeholder="123 Main St, Boston, MA"
  required={true}
/>
```

### With Validation Callback
```jsx
<AddressInput
  value={subjectAddress}
  onChange={setSubjectAddress}
  onValidated={(result) => {
    if (result.valid) {
      console.log('Valid address:', result.formatted);
      console.log('Coordinates:', result.coordinates);
      console.log('Components:', result.components);
      
      // Store coordinates for map display
      setSubjectCoordinates(result.coordinates);
    }
  }}
  label="Subject Property Address"
  showValidation={true}
/>
```

## Integration Points in EnhancedCMA.jsx

### Replace Standard Input
**OLD:**
```jsx
<input
  type="text"
  value={subjectAddress}
  onChange={(e) => setSubjectAddress(e.target.value)}
  placeholder="Property Address"
  className="calc-input"
/>
```

**NEW:**
```jsx
<AddressInput
  value={subjectAddress}
  onChange={setSubjectAddress}
  onValidated={(result) => {
    if (result.valid && result.coordinates) {
      // Can use coordinates for mapping, distance calculations, etc.
      setSubjectCoordinates(result.coordinates);
    }
  }}
  label="Subject Property Address"
  placeholder="123 Main St, Boston, MA 02108"
  required={true}
  showValidation={true}
/>
```

### State to Add (if using coordinates)
```javascript
const [subjectCoordinates, setSubjectCoordinates] = useState(null);
const [comp1Coordinates, setComp1Coordinates] = useState(null);
// ... etc for other comps
```

## API Details

### Census Geocoding API
- **Endpoint**: `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress`
- **Rate Limit**: None specified
- **API Key**: Not required
- **Best For**: US addresses, official government data

### OpenStreetMap Nominatim
- **Endpoint**: `https://nominatim.openstreetmap.org/search`
- **Rate Limit**: 1 request per second (enforced by timeout)
- **API Key**: Not required (User-Agent header required)
- **Best For**: Worldwide addresses, fallback

## Features

### Autocomplete
- Triggers after 3 characters
- Debounced (500ms)
- Shows up to 5 suggestions
- Keyboard navigable

### Validation
- Manual validation button
- Auto-validation on suggestion select
- Visual feedback (green/yellow/red borders)
- Status messages

### Geocoding
- Returns latitude/longitude
- Address components (street, city, state, zip)
- Formatted address string

## Distance Calculation

Calculate distance between properties:
```javascript
import { calculateDistance } from './utils/addressValidation';

const distance = calculateDistance(
  subjectCoordinates,
  comp1Coordinates
);

console.log(`Distance: ${distance.toFixed(2)} miles`);
```

## Future Enhancements
- [ ] Integrate with MLS import
- [ ] Show properties on interactive map
- [ ] Calculate actual driving distance
- [ ] Filter comparables by radius
- [ ] Batch validate all addresses
- [ ] Cache validated addresses
- [ ] Export coordinates with reports

## Notes
- Both APIs are free and don't require API keys
- Census API is more accurate for US addresses
- OSM is backup for edge cases
- Respects rate limits and API usage policies
- User-Agent header required for OSM
