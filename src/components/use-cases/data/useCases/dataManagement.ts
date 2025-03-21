
import { FileText, Database } from "lucide-react";
import { UseCase } from "../types";

export const dataManagementUseCases: UseCase[] = [
  {
    id: 1,
    name: "Client Document Analyzer",
    description: "Automatically extracts and categorizes data from client documents",
    category: "data-management",
    serviceLines: ["TAX", "ASR"],
    icon: FileText,
    priority: "high",
    phase: "Phase 1",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "60% reduction in document processing time",
    implementationPlan: {
      msCopilot: "Extract and summarize key information from documents",
      powerAutomate: "Create workflows to route documents and trigger analysis",
      powerApps: "Build a custom interface for document submission and review",
      copilotStudio: "Design custom prompt flows for document analysis",
      powerBI: "Visualize document processing metrics and extracted insights"
    }
  },
  {
    id: 7,
    name: "Market Research Digest",
    description: "Summarizes industry trends and competitor activities",
    category: "data-management",
    serviceLines: ["DEALS", "IFS"],
    icon: Database,
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
  },
  {
    id: 14,
    name: "Data Quality Monitor",
    description: "Continuously checks data integrity and identifies issues",
    category: "data-management",
    serviceLines: ["ASR", "IFS"],
    icon: Database,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "85% reduction in data quality issues",
    implementationPlan: {
      msCopilot: "Analyze data patterns and quality issues",
      powerAutomate: "Create automated data quality checks",
      powerApps: "Build a data quality management dashboard",
      copilotStudio: "Develop a data quality assistant",
      powerBI: "Track data quality metrics and improvement trends"
    }
  }
];
