
import { ShieldCheck, AlertTriangle, File } from "lucide-react";
import { UseCase } from "../types";

export const complianceUseCases: UseCase[] = [
  {
    id: 2,
    name: "Regulatory Compliance Monitor",
    description: "Tracks and alerts on compliance requirements and deadlines",
    category: "compliance",
    serviceLines: ["TAX", "ASR", "IFS"],
    icon: ShieldCheck,
    priority: "high",
    phase: "Phase 1",
    complexity: "High",
    crossServiceValue: "High",
    keyBenefit: "90% decrease in compliance violations",
    implementationPlan: {
      msCopilot: "Stay updated on regulatory changes and requirements",
      powerAutomate: "Automate deadline reminders and compliance checks",
      powerApps: "Develop a compliance dashboard with alert management",
      copilotStudio: "Create a compliance assistant to answer regulatory questions",
      powerBI: "Monitor compliance metrics across service lines"
    }
  },
  {
    id: 9,
    name: "Risk Assessment Tool",
    description: "Evaluates and quantifies project and client risks",
    category: "compliance",
    serviceLines: ["DEALS", "IFS"],
    icon: AlertTriangle,
    priority: "high",
    phase: "Phase 1",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "50% reduction in unforeseen project risks",
    implementationPlan: {
      msCopilot: "Identify potential risks and mitigation strategies",
      powerAutomate: "Create risk assessment workflows and escalations",
      powerApps: "Develop a risk management dashboard",
      copilotStudio: "Build a risk assessment assistant",
      powerBI: "Visualize risk profiles and mitigation effectiveness"
    }
  },
  {
    id: 16,
    name: "Contract Analysis Tool",
    description: "Extracts key terms and flags potential issues in contracts",
    category: "compliance",
    serviceLines: ["DEALS", "IFS"],
    icon: File,
    priority: "high",
    phase: "Phase 1",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "55% faster contract review process",
    implementationPlan: {
      msCopilot: "Analyze contract language and identify issues",
      powerAutomate: "Route contracts for review based on findings",
      powerApps: "Build a contract management and review platform",
      copilotStudio: "Create a contract analysis assistant",
      powerBI: "Track contract review metrics and risk profiles"
    }
  },
  {
    id: 18,
    name: "Industry Compliance Tracker",
    description: "Monitors industry-specific regulatory changes",
    category: "compliance",
    serviceLines: ["TAX", "ASR", "IFS"],
    icon: ShieldCheck,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "100% compliance with regulatory updates",
    implementationPlan: {
      msCopilot: "Track and summarize regulatory changes",
      powerAutomate: "Send alerts for relevant regulatory updates",
      powerApps: "Build a compliance management dashboard",
      copilotStudio: "Create a regulatory change assistant",
      powerBI: "Monitor compliance status across regulations"
    }
  }
];
