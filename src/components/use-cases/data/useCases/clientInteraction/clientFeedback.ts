
import { MessageSquare } from "lucide-react";
import { UseCase } from "../../types";

export const clientFeedbackUseCase: UseCase = {
  id: 8,
  name: "Client Feedback Analyzer",
  description: "Analyzes sentiment and identifies improvement areas",
  category: "client-interaction",
  serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
  icon: MessageSquare,
  priority: "medium",
  phase: "Phase 2",
  complexity: "Low",
  crossServiceValue: "High",
  keyBenefit: "35% increase in client satisfaction scores",
  implementationPlan: {
    msCopilot: {
      summary: "Analyze feedback sentiment and recommend actions",
      connections: [],
      detailedInstructions: "Use Microsoft Copilot to analyze client feedback, identify sentiment patterns, and generate recommended actions to address common concerns or capitalize on positive feedback."
    },
    powerAutomate: {
      summary: "Trigger alerts for negative feedback",
      connections: [],
      detailedInstructions: "Create automated workflows that identify negative feedback requiring immediate attention and route it to the appropriate team members with prioritized notifications."
    },
    powerApps: {
      summary: "Build a feedback collection and response system",
      connections: [],
      detailedInstructions: "Develop an application for collecting structured feedback from clients, automatically categorizing it, and tracking responses to ensure all feedback receives appropriate follow-up."
    },
    copilotStudio: {
      summary: "Create a conversational feedback collection bot",
      connections: [],
      detailedInstructions: "Design a conversational bot that can engage clients in feedback discussions, asking follow-up questions to gather more detailed insights on their experiences."
    },
    powerBI: {
      summary: "Track satisfaction trends and improvement initiatives",
      connections: [],
      detailedInstructions: "Create dashboards to visualize client satisfaction trends over time, correlate feedback with specific service areas, and monitor the impact of improvement initiatives."
    }
  }
};
