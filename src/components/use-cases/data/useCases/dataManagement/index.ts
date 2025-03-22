
import { UseCase } from "../../types";
import { clientDocumentAnalyzer } from "./clientDocumentAnalyzer";
import { marketResearchDigest } from "./marketResearchDigest";
import { dataQualityMonitor } from "./dataQualityMonitor";
import { dataFlowPatternAnalyzer } from "./dataFlowPatternAnalyzer";
import { dataInventoryAutomation } from "./dataInventoryAutomation";
import { socialMediaMonitoring } from "./socialMediaMonitoring";

// Combine all data management use cases into a single array
export const dataManagementUseCases: UseCase[] = [
  clientDocumentAnalyzer,
  marketResearchDigest,
  dataQualityMonitor,
  dataFlowPatternAnalyzer,
  dataInventoryAutomation,
  socialMediaMonitoring
];
