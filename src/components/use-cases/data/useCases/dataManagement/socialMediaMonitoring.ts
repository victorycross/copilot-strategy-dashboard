
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
  keyBenefit: "60% faster detection of unauthorized disclosures",
  implementationPlan: {
    msCopilot: {
      summary: "Analyze social media data for potential leaks and unauthorized disclosures",
      examples: [],
      connections: [],
      detailedInstructions: "Configure Microsoft Copilot to scan social media platforms for mentions of sensitive company information, client data, or other potentially leaked information, using advanced pattern recognition and natural language processing."
    },
    powerAutomate: {
      summary: "Schedule regular social media monitoring",
      examples: [],
      connections: [],
      detailedInstructions: "Create automated workflows that regularly scan specified social media platforms, news sites, and other public channels for potential data leaks or unauthorized disclosures related to the company or its clients."
    },
    powerApps: {
      summary: "Create a social media monitoring dashboard",
      examples: [],
      connections: [],
      detailedInstructions: "Develop a centralized dashboard for security teams to monitor potential data leaks across social media platforms, with filtering capabilities for different types of sensitive information and risk levels."
    },
    copilotStudio: {
      summary: "Develop a social media monitoring assistant",
      examples: [],
      connections: [],
      detailedInstructions: "Design a conversational bot that allows security teams to query for potential data leaks, receive alerts about high-risk disclosures, and initiate response workflows when unauthorized information sharing is detected."
    },
    powerBI: {
      summary: "Visualize social media monitoring metrics",
      examples: [],
      connections: [],
      detailedInstructions: "Create comprehensive analytics dashboards showing trends in potential data leaks, categories of information being shared, platforms where disclosures occur most frequently, and effectiveness of mitigation efforts."
    }
  }
};
