
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
  implementationPlan: {
    msCopilot: "Analyze social media content for potential data leaks",
    powerAutomate: "Create automated alerts for detected disclosures",
    powerApps: "Build monitoring dashboard with risk scoring",
    copilotStudio: "Design conversational risk assessment bot",
    powerBI: "Visualize social media exposure metrics"
  }
};
