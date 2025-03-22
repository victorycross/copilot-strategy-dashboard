
import { FileText } from "lucide-react";
import { UseCase } from "../../types";

export const meetingSummarizerUseCase: UseCase = {
  id: 15,
  name: "Meeting Summarizer",
  description: "Automatically creates concise summaries of client meetings",
  category: "client-interaction",
  serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
  icon: FileText,
  priority: "medium",
  phase: "Phase 2",
  complexity: "Low",
  crossServiceValue: "High",
  keyBenefit: "70% reduction in note-taking time",
  implementationPlan: {
    msCopilot: "Generate meeting summaries and action items",
    powerAutomate: "Distribute summaries and track action items",
    powerApps: "Build a meeting notes repository and search tool",
    copilotStudio: "Create a meeting assistant for real-time notes",
    powerBI: "Analyze meeting trends and action item completion"
  }
};
