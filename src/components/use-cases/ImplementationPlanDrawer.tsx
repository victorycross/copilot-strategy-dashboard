import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import TechnologySection from "./TechnologySection";
import PlanActionFooter from "./PlanActionFooter";
import { UseCase, ToolImplementation, ToolConnection } from "./data/types";
import {
  MsCopilotIcon,
  PowerAutomateIcon,
  PowerAppsIcon,
  CopilotStudioIcon,
  PowerBIIcon
} from "./icons/TechnologyIcons";
import { toast } from "sonner";
import { X } from "lucide-react";

interface ImplementationPlanProps {
  useCase: UseCase;
  children?: ReactNode;
  onUseCaseUpdate?: (updatedUseCase: any) => void;
}

const ImplementationPlanDrawer = ({ useCase, children, onUseCaseUpdate }: ImplementationPlanProps) => {
  const [localUseCase, setLocalUseCase] = useState(useCase);
  
  if (!localUseCase.implementationPlan) {
    // Create a default implementation plan if it doesn't exist
    localUseCase.implementationPlan = {
      msCopilot: "",
      powerAutomate: "",
      powerApps: "",
      copilotStudio: "",
      powerBI: ""
    };
  }

  // Helper function to extract string value from either string or ToolImplementation
  const getStringValue = (value: string | ToolImplementation | undefined): string => {
    if (!value) return "";
    if (typeof value === 'string') return value;
    return value.summary || "";
  };

  // Helper function to get connections array or create an empty array
  const getConnections = (toolKey: string): ToolConnection[] => {
    const implementation = localUseCase.implementationPlan?.[toolKey];
    if (typeof implementation === 'object' && implementation?.connections) {
      return implementation.connections;
    }
    return [];
  };

  // Helper function to get detailed instructions
  const getDetailedInstructions = (toolKey: string): string => {
    const implementation = localUseCase.implementationPlan?.[toolKey];
    if (typeof implementation === 'object' && implementation?.detailedInstructions) {
      return implementation.detailedInstructions;
    }
    return "";
  };

  // Convert a string implementation to object format if needed
  const ensureObjectFormat = (toolKey: string): ToolImplementation => {
    const currentValue = localUseCase.implementationPlan?.[toolKey];
    
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

  const handlePlanUpdate = (field: string, value: string) => {
    // Convert to object format if it's not already
    const updatedImplementation = ensureObjectFormat(field);
    updatedImplementation.summary = value;
    
    const updatedUseCase = { 
      ...localUseCase, 
      implementationPlan: { 
        ...localUseCase.implementationPlan, 
        [field]: updatedImplementation 
      } 
    };
    
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
    }
    toast.success(`Updated ${field} implementation details`);
  };

  const handleConnectionUpdate = (sourceToolKey: string, targetToolKey: string, description: string) => {
    // Get current implementation in object format
    const implementation = ensureObjectFormat(sourceToolKey);
    
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
      ...localUseCase,
      implementationPlan: {
        ...localUseCase.implementationPlan,
        [sourceToolKey]: implementation
      }
    };
    
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
    }
    
    if (description === "") {
      toast.success(`Removed connection from ${sourceToolKey} to ${targetToolKey}`);
    } else {
      toast.success(`Updated ${sourceToolKey} connection to ${targetToolKey}`);
    }
  };

  const handleDetailedInstructionsUpdate = (toolKey: string, instructions: string) => {
    // Get current implementation in object format
    const implementation = ensureObjectFormat(toolKey);
    
    // Update detailed instructions
    implementation.detailedInstructions = instructions;
    
    // Update use case with new implementation
    const updatedUseCase = {
      ...localUseCase,
      implementationPlan: {
        ...localUseCase.implementationPlan,
        [toolKey]: implementation
      }
    };
    
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
    }
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      // This will trigger when the dialog is closed
      console.log("Dialog closed");
    }
  };
  
  // Tool metadata for rendering
  const tools = [
    { key: 'msCopilot', title: 'Microsoft Copilot', icon: <MsCopilotIcon />, colorClass: 'text-blue-500' },
    { key: 'powerAutomate', title: 'Power Automate', icon: <PowerAutomateIcon />, colorClass: 'text-purple-500' },
    { key: 'powerApps', title: 'Power Apps', icon: <PowerAppsIcon />, colorClass: 'text-green-500' },
    { key: 'copilotStudio', title: 'Copilot Studio', icon: <CopilotStudioIcon />, colorClass: 'text-yellow-500' },
    { key: 'powerBI', title: 'Power BI', icon: <PowerBIIcon />, colorClass: 'text-red-500' },
    { key: 'sharePoint', title: 'SharePoint', icon: null, colorClass: 'text-green-600' }
  ];
  
  return (
    <Dialog onOpenChange={handleClose}>
      <DialogTrigger asChild>
        {children ? (
          <div className="cursor-pointer">
            {children}
          </div>
        ) : (
          <button 
            className="w-full text-sm py-2 px-4 rounded border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none"
          >
            {localUseCase.implementationPlan && 
             Object.values(localUseCase.implementationPlan).some(value => value) 
              ? "View Implementation Plan" 
              : "Create Implementation Plan"}
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Implementation Plan: {localUseCase.name}</DialogTitle>
          <DialogDescription>
            How to implement this use case using Microsoft technologies
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {tools.map((tool) => (
            <TechnologySection
              key={tool.key}
              title={tool.title}
              icon={tool.icon}
              colorClass={tool.colorClass}
              value={getStringValue(localUseCase.implementationPlan?.[tool.key])}
              onValueChange={(value) => handlePlanUpdate(tool.key, value)}
              connections={getConnections(tool.key)}
              availableTargets={tools.filter(t => t.key !== tool.key).map(t => ({ key: t.key, title: t.title }))}
              onConnectionUpdate={(targetTool, description) => 
                handleConnectionUpdate(tool.key, targetTool, description)
              }
              detailedInstructions={getDetailedInstructions(tool.key)}
              onDetailedInstructionsChange={(instructions) => 
                handleDetailedInstructionsUpdate(tool.key, instructions)
              }
            />
          ))}
        </div>
        <DialogFooter>
          <PlanActionFooter 
            useCase={localUseCase} 
            onUseCaseUpdate={onUseCaseUpdate}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImplementationPlanDrawer;
