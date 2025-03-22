
import { ToolImplementation, ToolConnection, ImplementationPlan } from "../data/types";

// Helper function to extract string value from either string or ToolImplementation
export const getStringValue = (value: string | ToolImplementation | undefined): string => {
  if (!value) return "";
  if (typeof value === 'string') return value;
  return value.summary || "";
};

// Helper function to get connections array or create an empty array
export const getConnections = (
  toolKey: string, 
  implementationPlan: ImplementationPlan | undefined
): ToolConnection[] => {
  if (!implementationPlan) return [];
  
  const implementation = implementationPlan[toolKey as keyof ImplementationPlan];
  if (typeof implementation === 'object' && implementation !== null && 'connections' in implementation) {
    return implementation.connections || [];
  }
  return [];
};

// Helper function to get detailed instructions
export const getDetailedInstructions = (
  toolKey: string, 
  implementationPlan: ImplementationPlan | undefined
): string => {
  if (!implementationPlan) return "";
  
  const implementation = implementationPlan[toolKey as keyof ImplementationPlan];
  if (typeof implementation === 'object' && implementation !== null && 'detailedInstructions' in implementation) {
    return implementation.detailedInstructions || "";
  }
  return "";
};

// Convert a string implementation to object format if needed
export const ensureObjectFormat = (
  toolKey: string, 
  implementationPlan: ImplementationPlan | undefined
): ToolImplementation => {
  if (!implementationPlan) {
    return {
      summary: "",
      connections: [],
      detailedInstructions: ""
    };
  }
  
  const currentValue = implementationPlan[toolKey as keyof ImplementationPlan];
  
  // If it's already an object, return it
  if (typeof currentValue === 'object' && currentValue !== null) {
    return {
      summary: currentValue.summary || "",
      connections: Array.isArray(currentValue.connections) ? currentValue.connections : [],
      detailedInstructions: currentValue.detailedInstructions || ""
    };
  }
  
  // Otherwise create a new object with the string as summary
  return {
    summary: typeof currentValue === 'string' ? currentValue : "",
    connections: [],
    detailedInstructions: ""
  };
};

// Verify if an implementation plan is properly initialized
export const isImplementationPlanInitialized = (implementationPlan: ImplementationPlan | undefined): boolean => {
  if (!implementationPlan) return false;
  
  // Check if at least one tool has a non-empty implementation
  const tools = ['msCopilot', 'powerAutomate', 'powerApps', 'copilotStudio', 'powerBI', 'sharePoint'];
  
  // Check that all tool keys exist and have proper object structure
  return tools.every(tool => {
    const implementation = implementationPlan[tool as keyof ImplementationPlan];
    return implementation !== undefined;
  });
};
