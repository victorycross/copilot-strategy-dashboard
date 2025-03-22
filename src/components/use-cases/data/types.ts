
import { LucideIcon } from "lucide-react";

export interface ToolExample {
  title: string;
  description: string;
  example?: string;
}

export interface ToolConnection {
  tool?: string;
  targetTool?: string;
  description: string;
}

export interface ToolImplementation {
  summary: string;
  examples?: ToolExample[];
  connections?: ToolConnection[];
  detailedInstructions?: string;
}

export interface ImplementationPlan {
  msCopilot?: string | ToolImplementation;
  powerAutomate?: string | ToolImplementation;
  powerApps?: string | ToolImplementation;
  copilotStudio?: string | ToolImplementation;
  powerBI?: string | ToolImplementation;
  sharePoint?: string | ToolImplementation;
}

export interface ExampleScenario {
  title: string;
  description: string;
}

export interface UseCase {
  id: number;
  name: string;
  description: string;
  category: string;
  serviceLines: string[];
  icon: LucideIcon;
  priority: string;
  phase: string;
  complexity: string;
  crossServiceValue: string;
  keyBenefit: string;
  implementationPlan?: ImplementationPlan;
  detailedImplementationGuide?: string;
  exampleScenarios?: ExampleScenario[];
  toolConnections?: ToolConnection[];
}
