// CMA Save/Load Helper Functions

export const saveCMA = (state, comps) => {
  const {
    clientName, preparedBy, brokerageName, reportPurpose,
    subjectAddress, subjectBeds, subjectBaths, subjectSqft, subjectGarage,
    subjectCondition, subjectAge, subjectPool, subjectLotSize, subjectLocation,
    subjectView, subjectUpgrades,
    bedAdjustment, bathAdjustment, sqftAdjustment, garageAdjustment,
    conditionAdjustment, ageAdjustment, domAdjustment, poolAdjustment,
    lotSizeAdjustment, locationAdjustment, viewAdjustment, upgradesAdjustment
  } = state;

  const cmaData = {
    version: '2.0',
    savedDate: new Date().toISOString(),
    clientName,
    preparedBy,
    brokerageName,
    reportPurpose,
    subject: {
      address: subjectAddress,
      beds: subjectBeds,
      baths: subjectBaths,
      sqft: subjectSqft,
      garage: subjectGarage,
      condition: subjectCondition,
      age: subjectAge,
      pool: subjectPool,
      lotSize: subjectLotSize,
      location: subjectLocation,
      view: subjectView,
      upgrades: subjectUpgrades
    },
    adjustments: {
      bed: bedAdjustment,
      bath: bathAdjustment,
      sqft: sqftAdjustment,
      garage: garageAdjustment,
      condition: conditionAdjustment,
      age: ageAdjustment,
      dom: domAdjustment,
      pool: poolAdjustment,
      lotSize: lotSizeAdjustment,
      location: locationAdjustment,
      view: viewAdjustment,
      upgrades: upgradesAdjustment
    },
    comparables: comps
  };

  const saveName = subjectAddress || `CMA_${new Date().toLocaleDateString()}`;
  const savedCMAs = JSON.parse(localStorage.getItem('savedCMAs') || '{}');
  savedCMAs[saveName] = cmaData;
  localStorage.setItem('savedCMAs', JSON.stringify(savedCMAs));
  localStorage.setItem('lastCMA', JSON.stringify(cmaData));
  
  return saveName;
};

export const getSavedCMAs = () => {
  const saved = JSON.parse(localStorage.getItem('savedCMAs') || '{}');
  return Object.keys(saved);
};

export const deleteCMA = (saveName) => {
  const savedCMAs = JSON.parse(localStorage.getItem('savedCMAs') || '{}');
  delete savedCMAs[saveName];
  localStorage.setItem('savedCMAs', JSON.stringify(savedCMAs));
};

export const exportToJSON = (state, comps) => {
  const {
    clientName, preparedBy, brokerageName, reportPurpose,
    subjectAddress, subjectBeds, subjectBaths, subjectSqft, subjectGarage,
    subjectCondition, subjectAge, subjectPool, subjectLotSize, subjectLocation,
    subjectView, subjectUpgrades,
    bedAdjustment, bathAdjustment, sqftAdjustment, garageAdjustment,
    conditionAdjustment, ageAdjustment, domAdjustment, poolAdjustment,
    lotSizeAdjustment, locationAdjustment, viewAdjustment, upgradesAdjustment
  } = state;

  const cmaData = {
    version: '2.0',
    exportDate: new Date().toISOString(),
    clientName,
    preparedBy,
    brokerageName,
    reportPurpose,
    subject: {
      address: subjectAddress,
      beds: subjectBeds,
      baths: subjectBaths,
      sqft: subjectSqft,
      garage: subjectGarage,
      condition: subjectCondition,
      age: subjectAge,
      pool: subjectPool,
      lotSize: subjectLotSize,
      location: subjectLocation,
      view: subjectView,
      upgrades: subjectUpgrades
    },
    adjustments: {
      bed: bedAdjustment,
      bath: bathAdjustment,
      sqft: sqftAdjustment,
      garage: garageAdjustment,
      condition: conditionAdjustment,
      age: ageAdjustment,
      dom: domAdjustment,
      pool: poolAdjustment,
      lotSize: lotSizeAdjustment,
      location: locationAdjustment,
      view: viewAdjustment,
      upgrades: upgradesAdjustment
    },
    comparables: comps
  };

  const dataStr = JSON.stringify(cmaData, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `CMA_${subjectAddress || 'export'}_${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
};
