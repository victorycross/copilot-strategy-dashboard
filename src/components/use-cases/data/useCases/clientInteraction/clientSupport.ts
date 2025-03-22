
import { Headset } from "lucide-react";
import { UseCase } from "../../types";

export const clientSupportUseCase: UseCase = {
  id: 10,
  name: "Client Support Agent",
  description: "Provides 24/7 automated responses to common client inquiries",
  category: "client-interaction",
  serviceLines: ["TAX", "ASR"],
  icon: Headset,
  priority: "medium",
  phase: "Phase 2",
  complexity: "Medium",
  crossServiceValue: "Low",
  keyBenefit: "80% of basic inquiries resolved without staff",
  implementationPlan: {
    msCopilot: {
      summary: "Generate responses to complex client questions",
      connections: [],
      detailedInstructions: "Use Microsoft Copilot to analyze client questions and provide accurate responses based on existing knowledge base and documentation. Configure the system to understand common tax and advisory terminology."
    },
    powerAutomate: {
      summary: "Route inquiries based on complexity and type",
      connections: [],
      detailedInstructions: "Create flows that analyze incoming client inquiries, categorize them by type and complexity, and route them to the appropriate channel (automated response, human agent, specialist team)."
    },
    powerApps: {
      summary: "Create a client support portal",
      connections: [],
      detailedInstructions: "Develop a client-facing portal where clients can submit inquiries, view responses, and track the status of more complex issues that require human intervention."
    },
    copilotStudio: {
      summary: "Build a comprehensive client support bot",
      connections: [],
      detailedInstructions: "Design a conversational bot that can handle routine client inquiries, escalate complex issues to human agents, and learn from past interactions to improve future responses."
    },
    powerBI: {
      summary: "Track support metrics and knowledge gaps",
      connections: [],
      detailedInstructions: "Create dashboards to monitor support metrics such as response time, resolution rate, and client satisfaction. Identify knowledge gaps where the automated system struggles to provide adequate responses."
    }
  }
};
