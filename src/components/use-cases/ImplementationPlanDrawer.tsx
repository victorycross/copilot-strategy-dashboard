
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
import { UseCase } from "./data/types";
import { toast } from "sonner";
import { tools } from "./implementation-plan/ToolMetadata";
import { 
  getStringValue, 
  getConnections, 
  getDetailedInstructions, 
  ensureObjectFormat 
} from "./implementation-plan/ConnectionUtils";

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

  const handlePlanUpdate = (field: string, value: string) => {
    // Convert to object format if it's not already
    const updatedImplementation = ensureObjectFormat(field, localUseCase.implementationPlan);
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
    const implementation = ensureObjectFormat(sourceToolKey, localUseCase.implementationPlan);
    
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
    const implementation = ensureObjectFormat(toolKey, localUseCase.implementationPlan);
    
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
              connections={getConnections(tool.key, localUseCase.implementationPlan)}
              availableTargets={tools.filter(t => t.key !== tool.key).map(t => ({ key: t.key, title: t.title }))}
              onConnectionUpdate={(targetTool, description) => 
                handleConnectionUpdate(tool.key, targetTool, description)
              }
              detailedInstructions={getDetailedInstructions(tool.key, localUseCase.implementationPlan)}
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
