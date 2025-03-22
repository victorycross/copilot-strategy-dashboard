
import { categories } from "../data";

// Default template for a new empty use case
export const createEmptyUseCase = () => ({
  name: "",
  description: "",
  category: "productive-knowledge-work",
  phase: "Phase 1",
  complexity: "Medium",
  crossServiceValue: "Medium",
  priority: "medium",
  serviceLines: ["Digital & App Innovation"],
  keyBenefit: "",
  implementationPlan: {
    msCopilot: {
      summary: "",
      connections: [],
      detailedInstructions: ""
    },
    powerAutomate: {
      summary: "",
      connections: [],
      detailedInstructions: ""
    },
    powerApps: {
      summary: "",
      connections: [],
      detailedInstructions: ""
    },
    copilotStudio: {
      summary: "",
      connections: [],
      detailedInstructions: ""
    },
    powerBI: {
      summary: "",
      connections: [],
      detailedInstructions: ""
    },
    sharePoint: {
      summary: "",
      connections: [],
      detailedInstructions: ""
    }
  }
});

// Function to create a new use case with an ID and icon
export const finalizeUseCase = (useCase: any) => {
  return {
    ...useCase,
    id: Date.now(), // Generate a unique ID based on timestamp
    icon: categories.find(c => c.id === useCase.category)?.icon || categories[0].icon
  };
};
