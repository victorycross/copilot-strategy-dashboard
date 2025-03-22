import { ToolImplementation, ToolConnection } from "../data/types";

// Helper function to extract string value from either string or ToolImplementation
export const getStringValue = (value: string | ToolImplementation | undefined): string => {
  if (!value) return "";
  if (typeof value === 'string') return value;
  return value.summary || "";
};

// Helper function to get connections array or create an empty array
export const getConnections = (toolKey: string, implementationPlan: any): ToolConnection[] => {
  const implementation = implementationPlan?.[toolKey];
  if (typeof implementation === 'object' && implementation?.connections) {
    return implementation.connections;
  }
  return [];
};

// Helper function to get detailed instructions
export const getDetailedInstructions = (toolKey: string, implementationPlan: any): string => {
  const implementation = implementationPlan?.[toolKey];
  if (typeof implementation === 'object' && implementation?.detailedInstructions) {
    return implementation.detailedInstructions;
  }
  return "";
};

// Convert a string implementation to object format if needed
export const ensureObjectFormat = (toolKey: string, implementationPlan: any): ToolImplementation => {
  const currentValue = implementationPlan?.[toolKey];
  
  // If it's already an object, return it
  if (typeof currentValue === 'object' && currentValue) {
    return currentValue;
  }
  
  // Otherwise create a new object with the string as summary
  return {
    summary: typeof currentValue === 'string' ? currentValue : "",
    connections: [],
    detailedInstructions: ""
  };
};
