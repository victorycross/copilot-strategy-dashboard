
import { Users, MessageSquare, Headset, FileText } from "lucide-react";
import { UseCase } from "../types";

export const clientInteractionUseCases: UseCase[] = [
  {
    id: 3,
    name: "Client Onboarding Assistant",
    description: "Streamlines client intake process and data collection",
    category: "client-interaction",
    serviceLines: ["DEALS", "IFS"],
    icon: Users,
    priority: "high",
    phase: "Phase 1",
    complexity: "Low",
    crossServiceValue: "Medium",
    keyBenefit: "45% faster client onboarding",
    implementationPlan: {
      msCopilot: "Generate personalized onboarding materials",
      powerAutomate: "Coordinate sequential onboarding steps and approvals",
      powerApps: "Create a client-facing onboarding portal",
      copilotStudio: "Build a conversational onboarding assistant",
      powerBI: "Track onboarding efficiency and bottlenecks"
    }
  },
  {
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
  },
  {
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
      msCopilot: "Generate responses to complex client questions",
      powerAutomate: "Route inquiries based on complexity and type",
      powerApps: "Create a client support portal",
      copilotStudio: "Build a comprehensive client support bot",
      powerBI: "Track support metrics and knowledge gaps"
    }
  },
  {
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
  }
];
