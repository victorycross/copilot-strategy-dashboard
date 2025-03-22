
import React, { useState, useEffect } from "react";
import { UseCase } from "../data/types";
import { tools } from "./ToolMetadata";
import TechnologySectionList from "./TechnologySectionList";
import { 
  handlePlanUpdate,
  handleConnectionUpdate,
  handleDetailedInstructionsUpdate
} from "./PlanUpdateHandlers";

interface ImplementationPlanContentProps {
  useCase: UseCase;
  onUseCaseUpdate: (updatedUseCase: UseCase) => void;
}

const ImplementationPlanContent: React.FC<ImplementationPlanContentProps> = ({ 
  useCase, 
  onUseCaseUpdate 
}) => {
  const [localUseCase, setLocalUseCase] = useState<UseCase>(useCase);
  
  // Update local state when props change
  useEffect(() => {
    setLocalUseCase(useCase);
  }, [useCase]);

  // Initialize implementation plan if it doesn't exist
  useEffect(() => {
    if (!localUseCase.implementationPlan) {
      const initializedUseCase = {
        ...localUseCase,
        implementationPlan: {
          msCopilot: "",
          powerAutomate: "",
          powerApps: "",
          copilotStudio: "",
          powerBI: "",
          sharePoint: ""
        }
      };
      setLocalUseCase(initializedUseCase);
      onUseCaseUpdate(initializedUseCase);
      console.log("Initialized implementation plan:", initializedUseCase.implementationPlan);
    }
  }, [localUseCase, onUseCaseUpdate]);

  // Wrapper functions that update both local state and call the parent update callback
  const onPlanUpdate = (field: string, value: string) => {
    try {
      const updated = handlePlanUpdate(field, value, localUseCase);
      console.log(`Updated plan for ${field}:`, updated.implementationPlan);
      setLocalUseCase(updated);
      onUseCaseUpdate(updated);
    } catch (error) {
      console.error(`Error updating plan for ${field}:`, error);
    }
  };

  const onConnectionUpdate = (sourceToolKey: string, targetToolKey: string, description: string) => {
    try {
      const updated = handleConnectionUpdate(
        sourceToolKey, 
        targetToolKey, 
        description, 
        localUseCase
      );
      console.log(`Updated connection from ${sourceToolKey} to ${targetToolKey}:`, updated.implementationPlan);
      setLocalUseCase(updated);
      onUseCaseUpdate(updated);
    } catch (error) {
      console.error(`Error updating connection from ${sourceToolKey} to ${targetToolKey}:`, error);
    }
  };

  const onDetailedInstructionsUpdate = (toolKey: string, instructions: string) => {
    try {
      const updated = handleDetailedInstructionsUpdate(
        toolKey, 
        instructions, 
        localUseCase
      );
      console.log(`Updated instructions for ${toolKey}:`, updated.implementationPlan);
      setLocalUseCase(updated);
      onUseCaseUpdate(updated);
    } catch (error) {
      console.error(`Error updating detailed instructions for ${toolKey}:`, error);
    }
  };

  return (
    <div className="space-y-6">
      <TechnologySectionList 
        useCase={localUseCase}
        tools={tools}
        onPlanUpdate={onPlanUpdate}
        onConnectionUpdate={onConnectionUpdate}
        onDetailedInstructionsUpdate={onDetailedInstructionsUpdate}
      />
    </div>
  );
};

export default ImplementationPlanContent;
