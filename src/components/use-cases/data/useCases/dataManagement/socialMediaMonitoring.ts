
import { Search } from "lucide-react";
import { UseCase } from "../../types";

export const socialMediaMonitoring: UseCase = {
  id: 113,
  name: "Social Media Monitoring System",
  description: "Scans social platforms for potential data leaks and unauthorized disclosures",
  category: "data-management",
  serviceLines: ["DEALS", "IFS"],
  icon: Search,
  priority: "medium",
  phase: "Phase 2",
  complexity: "Medium",
  crossServiceValue: "Medium",
  keyBenefit: "70% reduction in undetected data exposure incidents",
  implementationPlan: {
    msCopilot: "Analyze social media data for potential leaks and unauthorized disclosures",
    powerAutomate: "Schedule regular social media monitoring",
    powerApps: "Create a social media monitoring dashboard",
    copilotStudio: "Develop a social media monitoring assistant",
    powerBI: "Visualize social media monitoring metrics"
  }
};
