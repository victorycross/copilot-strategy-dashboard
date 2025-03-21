
import { Settings, Users } from "lucide-react";
import { UseCase } from "../types";

export const automationUseCases: UseCase[] = [
  {
    id: 5,
    name: "Process Automation Assistant",
    description: "Automates routine workflows and approval processes",
    category: "automation",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Settings,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "75% reduction in manual processing time",
    implementationPlan: {
      msCopilot: "Suggest process improvements and documentation",
      powerAutomate: "Build flexible approval workflows and notifications",
      powerApps: "Create process management and monitoring interfaces",
      copilotStudio: "Develop a process assistant to guide users",
      powerBI: "Visualize process efficiency and automation impact"
    }
  },
  {
    id: 17,
    name: "Project Resource Allocator",
    description: "Optimizes staff allocation based on skills and availability",
    category: "automation",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Users,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "High",
    keyBenefit: "25% improvement in resource utilization",
    implementationPlan: {
      msCopilot: "Generate staffing recommendations and optimizations",
      powerAutomate: "Coordinate resource allocation approvals",
      powerApps: "Create a resource management and planning tool",
      copilotStudio: "Build a resource planning assistant",
      powerBI: "Visualize resource utilization and availability"
    }
  }
];
