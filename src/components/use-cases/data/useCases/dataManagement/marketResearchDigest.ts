
import { Globe } from "lucide-react";
import { UseCase } from "../../types";

export const marketResearchDigest: UseCase = {
  id: 7,
  name: "Market Research Digest",
  description: "Summarizes industry trends and competitor activities",
  category: "data-management",
  serviceLines: ["DEALS", "IFS"],
  icon: Globe,
  priority: "medium",
  phase: "Phase 2",
  complexity: "Medium",
  crossServiceValue: "Medium",
  keyBenefit: "25% improved market intelligence",
  implementationPlan: {
    msCopilot: "Analyze and summarize market research reports",
    powerAutomate: "Schedule regular market data collection",
    powerApps: "Create a market intelligence hub",
    copilotStudio: "Build a market trends Q&A bot",
    powerBI: "Visualize market trends and competitive positioning"
  }
};
