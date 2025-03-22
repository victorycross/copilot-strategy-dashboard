
import { toast } from "sonner";
import { UseCase, ImplementationPlan, ToolImplementation } from "../data/types";

export const isToolImplementation = (obj: any): obj is ToolImplementation => {
  return obj && typeof obj === 'object' && 'summary' in obj;
};

export const downloadImplementationPlan = (useCase: UseCase) => {
  if (!useCase.implementationPlan) return;
  
  // Create content for the text file
  let content = `Implementation Plan: ${useCase.name}\n\n`;
  
  // Process Microsoft Copilot
  if (useCase.implementationPlan?.msCopilot) {
    content += `Microsoft Copilot:\n`;
    if (typeof useCase.implementationPlan.msCopilot === 'string') {
      content += `${useCase.implementationPlan.msCopilot}\n\n`;
    } else if (isToolImplementation(useCase.implementationPlan.msCopilot)) {
      content += `${useCase.implementationPlan.msCopilot.summary}\n\n`;
      
      // Add examples if available
      if (useCase.implementationPlan.msCopilot.examples && useCase.implementationPlan.msCopilot.examples.length > 0) {
        content += `Examples:\n`;
        useCase.implementationPlan.msCopilot.examples.forEach((example, idx) => {
          content += `${idx + 1}. ${example.title}\n`;
          content += `   ${example.description}\n`;
          content += `   Example: ${example.example}\n\n`;
        });
      }
      
      // Add connections if available
      if (useCase.implementationPlan.msCopilot.connections && useCase.implementationPlan.msCopilot.connections.length > 0) {
        content += `Connections:\n`;
        useCase.implementationPlan.msCopilot.connections.forEach((connection, idx) => {
          content += `${idx + 1}. ${connection.targetTool}: ${connection.description}\n`;
        });
        content += `\n`;
      }
    }
  }
  
  // Process Power Automate
  if (useCase.implementationPlan?.powerAutomate) {
    content += `Power Automate:\n`;
    if (typeof useCase.implementationPlan.powerAutomate === 'string') {
      content += `${useCase.implementationPlan.powerAutomate}\n\n`;
    } else if (isToolImplementation(useCase.implementationPlan.powerAutomate)) {
      content += `${useCase.implementationPlan.powerAutomate.summary}\n\n`;
      
      // Add examples if available
      if (useCase.implementationPlan.powerAutomate.examples && useCase.implementationPlan.powerAutomate.examples.length > 0) {
        content += `Examples:\n`;
        useCase.implementationPlan.powerAutomate.examples.forEach((example, idx) => {
          content += `${idx + 1}. ${example.title}\n`;
          content += `   ${example.description}\n`;
          content += `   Example: ${example.example}\n\n`;
        });
      }
      
      // Add connections if available
      if (useCase.implementationPlan.powerAutomate.connections && useCase.implementationPlan.powerAutomate.connections.length > 0) {
        content += `Connections:\n`;
        useCase.implementationPlan.powerAutomate.connections.forEach((connection, idx) => {
          content += `${idx + 1}. ${connection.targetTool}: ${connection.description}\n`;
        });
        content += `\n`;
      }
    }
  }
  
  // Process Power Apps
  if (useCase.implementationPlan?.powerApps) {
    content += `Power Apps:\n`;
    if (typeof useCase.implementationPlan.powerApps === 'string') {
      content += `${useCase.implementationPlan.powerApps}\n\n`;
    } else if (isToolImplementation(useCase.implementationPlan.powerApps)) {
      content += `${useCase.implementationPlan.powerApps.summary}\n\n`;
      
      // Add examples if available
      if (useCase.implementationPlan.powerApps.examples && useCase.implementationPlan.powerApps.examples.length > 0) {
        content += `Examples:\n`;
        useCase.implementationPlan.powerApps.examples.forEach((example, idx) => {
          content += `${idx + 1}. ${example.title}\n`;
          content += `   ${example.description}\n`;
          content += `   Example: ${example.example}\n\n`;
        });
      }
      
      // Add connections if available
      if (useCase.implementationPlan.powerApps.connections && useCase.implementationPlan.powerApps.connections.length > 0) {
        content += `Connections:\n`;
        useCase.implementationPlan.powerApps.connections.forEach((connection, idx) => {
          content += `${idx + 1}. ${connection.targetTool}: ${connection.description}\n`;
        });
        content += `\n`;
      }
    }
  }
  
  // Process Copilot Studio
  if (useCase.implementationPlan?.copilotStudio) {
    content += `Copilot Studio:\n`;
    if (typeof useCase.implementationPlan.copilotStudio === 'string') {
      content += `${useCase.implementationPlan.copilotStudio}\n\n`;
    } else if (isToolImplementation(useCase.implementationPlan.copilotStudio)) {
      content += `${useCase.implementationPlan.copilotStudio.summary}\n\n`;
      
      // Add examples if available
      if (useCase.implementationPlan.copilotStudio.examples && useCase.implementationPlan.copilotStudio.examples.length > 0) {
        content += `Examples:\n`;
        useCase.implementationPlan.copilotStudio.examples.forEach((example, idx) => {
          content += `${idx + 1}. ${example.title}\n`;
          content += `   ${example.description}\n`;
          content += `   Example: ${example.example}\n\n`;
        });
      }
      
      // Add connections if available
      if (useCase.implementationPlan.copilotStudio.connections && useCase.implementationPlan.copilotStudio.connections.length > 0) {
        content += `Connections:\n`;
        useCase.implementationPlan.copilotStudio.connections.forEach((connection, idx) => {
          content += `${idx + 1}. ${connection.targetTool}: ${connection.description}\n`;
        });
        content += `\n`;
      }
    }
  }
  
  // Process Power BI
  if (useCase.implementationPlan?.powerBI) {
    content += `Power BI:\n`;
    if (typeof useCase.implementationPlan.powerBI === 'string') {
      content += `${useCase.implementationPlan.powerBI}\n\n`;
    } else if (isToolImplementation(useCase.implementationPlan.powerBI)) {
      content += `${useCase.implementationPlan.powerBI.summary}\n\n`;
      
      // Add examples if available
      if (useCase.implementationPlan.powerBI.examples && useCase.implementationPlan.powerBI.examples.length > 0) {
        content += `Examples:\n`;
        useCase.implementationPlan.powerBI.examples.forEach((example, idx) => {
          content += `${idx + 1}. ${example.title}\n`;
          content += `   ${example.description}\n`;
          content += `   Example: ${example.example}\n\n`;
        });
      }
      
      // Add connections if available
      if (useCase.implementationPlan.powerBI.connections && useCase.implementationPlan.powerBI.connections.length > 0) {
        content += `Connections:\n`;
        useCase.implementationPlan.powerBI.connections.forEach((connection, idx) => {
          content += `${idx + 1}. ${connection.targetTool}: ${connection.description}\n`;
        });
        content += `\n`;
      }
    }
  }
  
  // Process SharePoint
  if (useCase.implementationPlan?.sharePoint) {
    content += `SharePoint:\n`;
    if (typeof useCase.implementationPlan.sharePoint === 'string') {
      content += `${useCase.implementationPlan.sharePoint}\n\n`;
    } else if (isToolImplementation(useCase.implementationPlan.sharePoint)) {
      content += `${useCase.implementationPlan.sharePoint.summary}\n\n`;
      
      // Add examples if available
      if (useCase.implementationPlan.sharePoint.examples && useCase.implementationPlan.sharePoint.examples.length > 0) {
        content += `Examples:\n`;
        useCase.implementationPlan.sharePoint.examples.forEach((example, idx) => {
          content += `${idx + 1}. ${example.title}\n`;
          content += `   ${example.description}\n`;
          content += `   Example: ${example.example}\n\n`;
        });
      }
      
      // Add connections if available
      if (useCase.implementationPlan.sharePoint.connections && useCase.implementationPlan.sharePoint.connections.length > 0) {
        content += `Connections:\n`;
        useCase.implementationPlan.sharePoint.connections.forEach((connection, idx) => {
          content += `${idx + 1}. ${connection.targetTool}: ${connection.description}\n`;
        });
        content += `\n`;
      }
    }
  }
  
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
