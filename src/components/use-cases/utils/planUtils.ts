
import { toast } from "sonner";
import { UseCase, ImplementationPlan, ToolImplementation } from "../data/types";

export const isToolImplementation = (obj: any): obj is ToolImplementation => {
  return obj && typeof obj === 'object' && 'summary' in obj;
};

export const downloadImplementationPlan = (useCase: UseCase) => {
  if (!useCase.implementationPlan) return;
  
  // Create content for the text file
  let content = `Implementation Plan: ${useCase.name}\n\n`;
  
  // Process each tool
  const processToolImplementation = (toolName: string, toolImplementation: string | ToolImplementation | undefined) => {
    if (!toolImplementation) return;
    
    content += `### ${toolName} ###\n\n`;
    
    if (typeof toolImplementation === 'string') {
      content += `Summary:\n${toolImplementation}\n\n`;
    } else if (isToolImplementation(toolImplementation)) {
      content += `Summary:\n${toolImplementation.summary}\n\n`;
      
      // Add detailed instructions if available
      if (toolImplementation.detailedInstructions && toolImplementation.detailedInstructions.trim() !== '') {
        content += `Detailed Implementation Guide:\n${toolImplementation.detailedInstructions}\n\n`;
      }
      
      // Add examples if available
      if (toolImplementation.examples && toolImplementation.examples.length > 0) {
        content += `Examples:\n`;
        toolImplementation.examples.forEach((example, idx) => {
          content += `${idx + 1}. ${example.title}\n`;
          content += `   ${example.description}\n`;
          content += `   Example: ${example.example}\n\n`;
        });
      }
      
      // Add connections if available
      if (toolImplementation.connections && toolImplementation.connections.length > 0) {
        content += `Connections:\n`;
        toolImplementation.connections.forEach((connection, idx) => {
          content += `${idx + 1}. ${connection.targetTool}: ${connection.description}\n`;
        });
        content += `\n`;
      }
    }
    
    content += `--------------------------------------------------\n\n`;
  };
  
  // Process Microsoft Copilot
  processToolImplementation("Microsoft Copilot", useCase.implementationPlan.msCopilot);
  
  // Process Power Automate
  processToolImplementation("Power Automate", useCase.implementationPlan.powerAutomate);
  
  // Process Power Apps
  processToolImplementation("Power Apps", useCase.implementationPlan.powerApps);
  
  // Process Copilot Studio
  processToolImplementation("Copilot Studio", useCase.implementationPlan.copilotStudio);
  
  // Process Power BI
  processToolImplementation("Power BI", useCase.implementationPlan.powerBI);
  
  // Process SharePoint
  processToolImplementation("SharePoint", useCase.implementationPlan.sharePoint);
  
  // Create a blob and download it
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${useCase.name.replace(/\s+/g, '-').toLowerCase()}-implementation-plan.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  toast.success("Implementation plan downloaded");
};

export const cloneUseCase = (useCase: UseCase, onUseCaseUpdate?: (updatedUseCase: any) => void) => {
  // Create a new use case based on the current one
  const newUseCase = {
    ...useCase,
    id: Date.now(), // Generate a unique ID
    name: `${useCase.name} (Copy)`,
  };
  
  if (onUseCaseUpdate) {
    onUseCaseUpdate({
      ...newUseCase,
      isNew: true // Flag to indicate this is a new use case to add to the list
    });
    toast.success("Use case cloned successfully");
  }
};
