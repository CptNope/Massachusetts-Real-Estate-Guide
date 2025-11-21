// Main content export with automatic sorting
import { section as flow } from './fundamentals/01-flow.jsx';
import { section as lawChanges } from './fundamentals/02-law-changes.jsx';
import { section as contractLawFundamentals } from './fundamentals/03-contract-law-fundamentals.jsx';
import { section as mlsParticipationRule2024 } from './fundamentals/04-mls-participation-rule-2024.jsx';
import { section as twoContractAttorney } from './fundamentals/05-two-contract-attorney.jsx';
import { section as transactionCycle } from './fundamentals/06-transaction-cycle.jsx';
import { section as agencyTypes } from './agency/07-agency-types.jsx';
import { section as agencyModels } from './agency/08-agency-models.jsx';
import { section as agentAuthority } from './agency/09-agent-authority.jsx';
import { section as brokerRelationship } from './agency/10-broker-relationship.jsx';
import { section as buyerRepresentationAgreements } from './agency/11-buyer-representation-agreements.jsx';
import { section as agencyTermination } from './agency/12-agency-termination.jsx';
import { section as fairHousing } from './compliance/13-fair-housing.jsx';
import { section as propertyConditionDisclosure } from './compliance/14-property-condition-disclosure.jsx';
import { section as homeInspectionLaw } from './compliance/15-home-inspection-law.jsx';
import { section as stigmatizedProperties } from './compliance/16-stigmatized-properties.jsx';
import { section as negotiableTerms } from './transactions/17-negotiable-terms.jsx';
import { section as commissions } from './transactions/18-commissions.jsx';
import { section as valuation } from './transactions/19-valuation.jsx';
import { section as financing } from './transactions/20-financing.jsx';
import { section as titleClosing } from './transactions/21-title-closing.jsx';
import { section as taxImplications } from './transactions/22-tax-implications.jsx';
import { section as antitrustAssociations } from './legal/23-antitrust-associations.jsx';
import { section as legalProtections } from './legal/24-legal-protections.jsx';
import { section as wisp } from './legal/25-wisp.jsx';
import { section as digitalCompliance } from './legal/26-digital-compliance.jsx';
import { section as referrals } from './legal/27-referrals.jsx';
import { section as insurance } from './legal/28-insurance.jsx';
import { section as professionalDevelopment } from './professional/29-professional-development.jsx';
import { section as multiState } from './professional/30-multi-state.jsx';
import { section as investor } from './professional/31-investor.jsx';
import { section as examPrep } from './professional/32-exam-prep.jsx';
import { section as cheat } from './professional/33-cheat.jsx';
import { section as propertyOwnership } from './fundamentals/34-property-ownership.jsx';
import { section as landUseControls } from './fundamentals/35-land-use-controls.jsx';
import { section as maBoardLicensing } from './legal/36-ma-board-licensing.jsx';
import { section as maTenantLandlord } from './legal/37-ma-tenant-landlord.jsx';
import { section as maEnvironmental } from './legal/38-ma-environmental.jsx';
import { section as maHomestead } from './legal/39-ma-homestead.jsx';
import { section as maTaxesStamps } from './legal/40-ma-taxes-stamps.jsx';
import { section as transferOfTitle } from './transactions/41-transfer-of-title.jsx';
import { section as realEstateMath } from './professional/42-real-estate-math.jsx';
import { section as mortgageFinance } from './transactions/43-mortgage-finance.jsx';
import { section as federalFairHousing } from './compliance/44-federal-fair-housing.jsx';
import { section as contractLaw } from './fundamentals/45-contract-law.jsx';

// Collect all sections
const importedSections = [
  flow,
  lawChanges,
  contractLawFundamentals,
  mlsParticipationRule2024,
  twoContractAttorney,
  transactionCycle,
  agencyTypes,
  agencyModels,
  agentAuthority,
  brokerRelationship,
  buyerRepresentationAgreements,
  agencyTermination,
  fairHousing,
  propertyConditionDisclosure,
  homeInspectionLaw,
  stigmatizedProperties,
  negotiableTerms,
  commissions,
  valuation,
  financing,
  titleClosing,
  taxImplications,
  antitrustAssociations,
  legalProtections,
  wisp,
  digitalCompliance,
  referrals,
  insurance,
  professionalDevelopment,
  multiState,
  investor,
  examPrep,
  cheat,
  propertyOwnership,
  landUseControls,
  maBoardLicensing,
  maTenantLandlord,
  maEnvironmental,
  maHomestead,
  maTaxesStamps,
  transferOfTitle,
  realEstateMath,
  mortgageFinance,
  federalFairHousing,
  contractLaw
];

// Sort sections by the number in their title (1-45)
// This ensures correct order even if files are reordered
export const sections = [...importedSections].sort((a, b) => {
  const numA = parseInt(a.title.match(/^(\d+)\./)?.[1] || '999');
  const numB = parseInt(b.title.match(/^(\d+)\./)?.[1] || '999');
  return numA - numB;
});

// Export individual sections for direct access if needed
export {
  flow,
  lawChanges,
  contractLawFundamentals,
  mlsParticipationRule2024,
  twoContractAttorney,
  transactionCycle,
  agencyTypes,
  agencyModels,
  agentAuthority,
  brokerRelationship,
  buyerRepresentationAgreements,
  agencyTermination,
  fairHousing,
  propertyConditionDisclosure,
  homeInspectionLaw,
  stigmatizedProperties,
  negotiableTerms,
  commissions,
  valuation,
  financing,
  titleClosing,
  taxImplications,
  antitrustAssociations,
  legalProtections,
  wisp,
  digitalCompliance,
  referrals,
  insurance,
  professionalDevelopment,
  multiState,
  investor,
  examPrep,
  cheat
};
