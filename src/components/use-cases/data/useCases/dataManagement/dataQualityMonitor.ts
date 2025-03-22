
import { Database } from "lucide-react";
import { UseCase } from "../../types";

export const dataQualityMonitor: UseCase = {
  id: 14,
  name: "Data Quality Monitor",
  description: "Continuously checks data integrity and identifies issues",
  category: "data-management",
  serviceLines: ["ASR", "IFS"],
  icon: Database,
  priority: "medium",
  phase: "Phase 2",
  complexity: "Medium",
  crossServiceValue: "High",
  keyBenefit: "85% reduction in data quality issues",
  implementationPlan: {
    msCopilot: "Analyze data patterns and quality issues",
    powerAutomate: "Create automated data quality checks",
    powerApps: "Build a data quality management dashboard",
    copilotStudio: "Develop a data quality assistant",
    powerBI: "Track data quality metrics and improvement trends"
  }
};
