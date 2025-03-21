
import { GraduationCap, Book, Share2 } from "lucide-react";
import { UseCase } from "../types";

export const projectManagementUseCases: UseCase[] = [
  {
    id: 6,
    name: "Training Content Generator",
    description: "Creates personalized learning materials for staff",
    category: "project-management",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: GraduationCap,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "40% increase in knowledge retention",
    implementationPlan: {
      msCopilot: "Generate tailored training content and exercises",
      powerAutomate: "Schedule training delivery and track completion",
      powerApps: "Build a learning management platform",
      copilotStudio: "Create an interactive training assistant",
      powerBI: "Analyze training effectiveness and skill development"
    }
  },
  {
    id: 12,
    name: "Knowledge Base Assistant",
    description: "Provides instant access to organizational knowledge",
    category: "project-management",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Book,
    priority: "high",
    phase: "Phase 1",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "65% reduction in time spent searching for information",
    implementationPlan: {
      msCopilot: "Generate answers from organizational knowledge",
      powerAutomate: "Update knowledge base with new information",
      powerApps: "Create a knowledge portal with powerful search",
      copilotStudio: "Build a knowledge base bot with multimedia support",
      powerBI: "Track knowledge usage and information gaps"
    }
  },
  {
    id: 20,
    name: "Knowledge Sharing Platform",
    description: "Facilitates organization-wide expertise sharing and collaboration",
    category: "project-management",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Share2,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "40% increase in internal knowledge sharing",
    implementationPlan: {
      msCopilot: "Generate knowledge summaries and recommendations",
      powerAutomate: "Facilitate knowledge sharing workflows",
      powerApps: "Build a collaborative knowledge platform",
      copilotStudio: "Create a knowledge discovery assistant",
      powerBI: "Track knowledge sharing metrics and impact"
    }
  }
];
