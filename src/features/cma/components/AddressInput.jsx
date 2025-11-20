import React, { useState, useEffect, useRef } from 'react';
import { searchAddresses, validateAddress, isInMassachusetts } from '../utils/addressValidation';

/**
 * AddressInput Component with Validation and Autocomplete
 * Uses free public APIs (Census Geocoding + OpenStreetMap)
 */
export const AddressInput = ({ 
  value, 
  onChange, 
  onValidated,
  placeholder = "Enter street address",
  label = "Address",
  required = false,
  showValidation = true,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationStatus, setValidationStatus] = useState(null);
  const [validationMessage, setValidationMessage] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const debounceTimer = useRef(null);

  // Update input when external value changes
  useEffect(() => {
    if (value !== inputValue) {
      setInputValue(value || '');
    }
  }, [value]);

  // Debounced search for suggestions
  const handleInputChange = async (newValue) => {
    setInputValue(newValue);
    onChange(newValue);
    setValidationStatus(null);
    setValidationMessage('');

    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Don't search if input is too short
    if (newValue.trim().length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // Debounce search (wait 500ms after typing stops)
    debounceTimer.current = setTimeout(async () => {
      try {
        const results = await searchAddresses(newValue);
        setSuggestions(results);
        setShowSuggestions(results.length > 0);
      } catch (error) {
        console.error('Address search failed:', error);
      }
    }, 500);
  };

  // Select suggestion
  const selectSuggestion = (suggestion) => {
    const formattedAddress = suggestion.formatted;
    setInputValue(formattedAddress);
    onChange(formattedAddress);
    setSuggestions([]);
    setShowSuggestions(false);
    
    // Auto-validate when selecting from suggestions
    if (showValidation) {
      validateCurrentAddress(formattedAddress, suggestion.coordinates);
    }
    
    if (onValidated) {
      onValidated({
        valid: true,
        formatted: formattedAddress,
        coordinates: suggestion.coordinates,
        components: suggestion.components
      });
    }
  };

  // Validate current address
  const validateCurrentAddress = async (addressToValidate = null, knownCoords = null) => {
    const addr = addressToValidate || inputValue;
    
    if (!addr || addr.trim().length < 5) {
      setValidationStatus('error');
      setValidationMessage('Address is too short');
      return;
    }

    setIsValidating(true);
    setValidationStatus('validating');
    setValidationMessage('Validating address...');

    try {
      const result = await validateAddress(addr);
      
      if (result.valid) {
        // Check if in Massachusetts
        if (isInMassachusetts(result)) {
          setValidationStatus('success');
          setValidationMessage(`✓ Valid MA address (${result.source === 'census' ? 'Census' : 'OSM'})`);
        } else {
          setValidationStatus('warning');
          setValidationMessage('⚠ Address found but not in Massachusetts');
        }
        
        if (onValidated) {
          onValidated(result);
        }
      } else {
        setValidationStatus('error');
        setValidationMessage(result.error || 'Address not found');
        
        if (onValidated) {
          onValidated({ valid: false, error: result.error });
        }
      }
    } catch (error) {
      setValidationStatus('error');
      setValidationMessage('Validation failed. Check your connection.');
    } finally {
      setIsValidating(false);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          selectSuggestion(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
      default:
        break;
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`address-input-container ${className}`}>
      {label && (
        <label className="address-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      
      <div className="address-input-wrapper">
        <input
          ref={inputRef}
          type="text"
          className={`calc-input address-input ${validationStatus ? `validation-${validationStatus}` : ''}`}
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          placeholder={placeholder}
          autoComplete="off"
        />
        
        {showValidation && (
          <div className="address-actions">
            {!isValidating && inputValue.trim().length >= 5 && (
              <button
                type="button"
                className="validate-btn"
                onClick={() => validateCurrentAddress()}
                title="Validate address"
              >
                ✓ Validate
              </button>
            )}
            {isValidating && (
              <span className="validating-spinner">⏳</span>
            )}
          </div>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div ref={suggestionsRef} className="address-suggestions">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`address-suggestion-item ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => selectSuggestion(suggestion)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="suggestion-icon">📍</div>
              <div className="suggestion-content">
                <div className="suggestion-main">{suggestion.formatted}</div>
                {suggestion.display !== suggestion.formatted && (
                  <div className="suggestion-detail">{suggestion.display}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Validation Message */}
      {showValidation && validationMessage && (
        <div className={`address-validation-message ${validationStatus}`}>
          {validationMessage}
        </div>
      )}

      {/* Helper Text */}
      <p className="address-hint">
        💡 Start typing to see suggestions • Example: "123 Main St, Boston, MA"
      </p>
    </div>
  );
};

export default AddressInput;
