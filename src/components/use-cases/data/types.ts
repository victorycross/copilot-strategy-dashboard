
import { LucideIcon } from "lucide-react";

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
  implementationPlan?: {
    msCopilot?: string;
    powerAutomate?: string;
    powerApps?: string;
    copilotStudio?: string;
    powerBI?: string;
  };
}
