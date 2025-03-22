
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
    msCopilot: "Analyze feedback sentiment and recommend actions",
    powerAutomate: "Trigger alerts for negative feedback",
    powerApps: "Build a feedback collection and response system",
    copilotStudio: "Create a conversational feedback collection bot",
    powerBI: "Track satisfaction trends and improvement initiatives"
  }
};
