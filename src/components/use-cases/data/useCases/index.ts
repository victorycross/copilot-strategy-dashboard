
import { dataManagementUseCases } from './dataManagement';
import { complianceUseCases } from './compliance';
import { clientInteractionUseCases } from './clientInteraction';
import { financialUseCases } from './financial';
import { automationUseCases } from './automation';
import { projectManagementUseCases } from './projectManagement';

// Combine all use cases into a single array
export const useCases = [
  ...dataManagementUseCases,
  ...complianceUseCases,
  ...clientInteractionUseCases,
  ...financialUseCases,
  ...automationUseCases,
  ...projectManagementUseCases
];
