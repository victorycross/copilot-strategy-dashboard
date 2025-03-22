
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
    msCopilot: "Generate responses to complex client questions",
    powerAutomate: "Route inquiries based on complexity and type",
    powerApps: "Create a client support portal",
    copilotStudio: "Build a comprehensive client support bot",
    powerBI: "Track support metrics and knowledge gaps"
  }
};
