
// Main export file for compliance use cases
import { regulatoryComplianceUseCases } from './regulatoryCompliance';
import { dataProtectionUseCases } from './dataProtection';
import { riskAssessmentUseCases } from './riskAssessment';
import { dataBreach } from './dataBreach';

// Export all compliance use cases as a single array
export const complianceUseCases = [
  ...regulatoryComplianceUseCases,
  ...dataProtectionUseCases,
  ...riskAssessmentUseCases,
  ...dataBreach
];
