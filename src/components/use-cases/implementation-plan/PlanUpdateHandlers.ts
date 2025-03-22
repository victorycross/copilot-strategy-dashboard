
import { UseCase, ImplementationPlan } from "../data/types";
import { ensureObjectFormat } from "./ConnectionUtils";
import { toast } from "sonner";

// Handle plan updates for specific technology sections
export const handlePlanUpdate = (
  field: string, 
  value: string, 
  useCase: UseCase,
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void
) => {
  // Initialize implementationPlan if it doesn't exist
  const currentImplementationPlan = useCase.implementationPlan || {};

  // Convert to object format if it's not already
  const updatedImplementation = ensureObjectFormat(field, currentImplementationPlan);
  updatedImplementation.summary = value;
  
  const updatedUseCase = { 
    ...useCase, 
    implementationPlan: { 
      ...currentImplementationPlan, 
      [field]: updatedImplementation 
    } 
  };
  
  if (onUseCaseUpdate) {
    onUseCaseUpdate(updatedUseCase);
  }
  toast.success(`Updated ${field} implementation details`);
  
  return updatedUseCase;
};

// Handle connection updates between technologies
export const handleConnectionUpdate = (
  sourceToolKey: string, 
  targetToolKey: string, 
  description: string, 
  useCase: UseCase,
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void
) => {
  // Initialize implementationPlan if it doesn't exist
  const currentImplementationPlan = useCase.implementationPlan || {};
  
  // Get current implementation in object format
  const implementation = ensureObjectFormat(sourceToolKey, currentImplementationPlan);
  
  // Find if this connection already exists
  const existingConnectionIndex = implementation.connections?.findIndex(
    conn => conn.targetTool === targetToolKey
  );
  
  // Update connections
  let updatedConnections = [...(implementation.connections || [])];
  
  if (description === "") {
    // Remove connection if description is empty
    if (existingConnectionIndex !== -1 && existingConnectionIndex !== undefined) {
      updatedConnections.splice(existingConnectionIndex, 1);
    }
  } else if (existingConnectionIndex !== -1 && existingConnectionIndex !== undefined) {
    // Update existing connection
    updatedConnections[existingConnectionIndex] = {
      tool: sourceToolKey,
      targetTool: targetToolKey,
      description: description
    };
  } else {
    // Add new connection
    updatedConnections.push({
      tool: sourceToolKey,
      targetTool: targetToolKey,
      description: description
    });
  }
  
  // Update implementation with new connections
  implementation.connections = updatedConnections;
  
  // Update use case with new implementation
  const updatedUseCase = {
    ...useCase,
    implementationPlan: {
      ...currentImplementationPlan,
      [sourceToolKey]: implementation
    }
  };
  
  if (onUseCaseUpdate) {
    onUseCaseUpdate(updatedUseCase);
  }
  
  if (description === "") {
    toast.success(`Removed connection from ${sourceToolKey} to ${targetToolKey}`);
  } else {
    toast.success(`Updated ${sourceToolKey} connection to ${targetToolKey}`);
  }
  
  return updatedUseCase;
};

// Handle detailed instructions updates
export const handleDetailedInstructionsUpdate = (
  toolKey: string, 
  instructions: string, 
  useCase: UseCase,
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void
) => {
  // Initialize implementationPlan if it doesn't exist
  const currentImplementationPlan = useCase.implementationPlan || {};
  
  // Get current implementation in object format
  const implementation = ensureObjectFormat(toolKey, currentImplementationPlan);
  
  // Update detailed instructions
  implementation.detailedInstructions = instructions;
  
  // Update use case with new implementation
  const updatedUseCase = {
    ...useCase,
    implementationPlan: {
      ...currentImplementationPlan,
      [toolKey]: implementation
    }
  };
  
  if (onUseCaseUpdate) {
    onUseCaseUpdate(updatedUseCase);
  }
  
  return updatedUseCase;
};
