
import { toast } from "sonner";

export interface ImplementationPlan {
  msCopilot?: string;
  powerAutomate?: string;
  powerApps?: string;
  copilotStudio?: string;
  powerBI?: string;
}

export interface UseCase {
  id: number;
  name: string;
  phase: string;
  complexity: string;
  crossServiceValue: string;
  priority: string;
  implementationPlan?: ImplementationPlan;
  [key: string]: any;
}

export const downloadImplementationPlan = (useCase: UseCase) => {
  if (!useCase.implementationPlan) return;
  
  // Create content for the text file
  let content = `Implementation Plan: ${useCase.name}\n\n`;
  
  if (useCase.implementationPlan?.msCopilot) {
    content += `Microsoft Copilot:\n${useCase.implementationPlan.msCopilot}\n\n`;
  }
  
  if (useCase.implementationPlan?.powerAutomate) {
    content += `Power Automate:\n${useCase.implementationPlan.powerAutomate}\n\n`;
  }
  
  if (useCase.implementationPlan?.powerApps) {
    content += `Power Apps:\n${useCase.implementationPlan.powerApps}\n\n`;
  }
  
  if (useCase.implementationPlan?.copilotStudio) {
    content += `Copilot Studio:\n${useCase.implementationPlan.copilotStudio}\n\n`;
  }
  
  if (useCase.implementationPlan?.powerBI) {
    content += `Power BI:\n${useCase.implementationPlan.powerBI}\n\n`;
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
