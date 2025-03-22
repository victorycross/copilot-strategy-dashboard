
import { UseCase } from "../data/types";
import TechnologySection from "../TechnologySection";
import { tools } from "./ToolMetadata";
import { 
  getStringValue, 
  getConnections, 
  getDetailedInstructions, 
  ensureObjectFormat 
} from "./ConnectionUtils";
import { toast } from "sonner";

interface ImplementationPlanContentProps {
  useCase: UseCase;
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void;
}

const ImplementationPlanContent = ({ 
  useCase, 
  onUseCaseUpdate 
}: ImplementationPlanContentProps) => {
  // Handle plan updates for specific technology sections
  const handlePlanUpdate = (field: string, value: string) => {
    // Convert to object format if it's not already
    const updatedImplementation = ensureObjectFormat(field, useCase.implementationPlan);
    updatedImplementation.summary = value;
    
    const updatedUseCase = { 
      ...useCase, 
      implementationPlan: { 
        ...useCase.implementationPlan, 
        [field]: updatedImplementation 
      } 
    };
    
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
    }
    toast.success(`Updated ${field} implementation details`);
  };

  // Handle connection updates between technologies
  const handleConnectionUpdate = (sourceToolKey: string, targetToolKey: string, description: string) => {
    // Get current implementation in object format
    const implementation = ensureObjectFormat(sourceToolKey, useCase.implementationPlan);
    
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
        ...useCase.implementationPlan,
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
  };

  // Handle detailed instructions updates
  const handleDetailedInstructionsUpdate = (toolKey: string, instructions: string) => {
    // Get current implementation in object format
    const implementation = ensureObjectFormat(toolKey, useCase.implementationPlan);
    
    // Update detailed instructions
    implementation.detailedInstructions = instructions;
    
    // Update use case with new implementation
    const updatedUseCase = {
      ...useCase,
      implementationPlan: {
        ...useCase.implementationPlan,
        [toolKey]: implementation
      }
    };
    
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
    }
  };

  return (
    <div className="space-y-6 py-4">
      {tools.map((tool) => (
        <TechnologySection
          key={tool.key}
          title={tool.title}
          icon={tool.icon}
          colorClass={tool.colorClass}
          value={getStringValue(useCase.implementationPlan?.[tool.key])}
          onValueChange={(value) => handlePlanUpdate(tool.key, value)}
          connections={getConnections(tool.key, useCase.implementationPlan)}
          availableTargets={tools.filter(t => t.key !== tool.key).map(t => ({ key: t.key, title: t.title }))}
          onConnectionUpdate={(targetTool, description) => 
            handleConnectionUpdate(tool.key, targetTool, description)
          }
          detailedInstructions={getDetailedInstructions(tool.key, useCase.implementationPlan)}
          onDetailedInstructionsChange={(instructions) => 
            handleDetailedInstructionsUpdate(tool.key, instructions)
          }
        />
      ))}
    </div>
  );
};

export default ImplementationPlanContent;
