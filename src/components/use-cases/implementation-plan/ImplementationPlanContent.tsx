
import React, { useState } from "react";
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
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void;
}

const ImplementationPlanContent: React.FC<ImplementationPlanContentProps> = ({ 
  useCase, 
  onUseCaseUpdate 
}) => {
  const [localUseCase, setLocalUseCase] = useState(useCase);

  // Wrapper functions that update both local state and call the parent update callback
  const onPlanUpdate = (field: string, value: string) => {
    const updated = handlePlanUpdate(field, value, localUseCase, onUseCaseUpdate);
    setLocalUseCase(updated);
  };

  const onConnectionUpdate = (sourceToolKey: string, targetToolKey: string, description: string) => {
    const updated = handleConnectionUpdate(
      sourceToolKey, 
      targetToolKey, 
      description, 
      localUseCase, 
      onUseCaseUpdate
    );
    setLocalUseCase(updated);
  };

  const onDetailedInstructionsUpdate = (toolKey: string, instructions: string) => {
    const updated = handleDetailedInstructionsUpdate(
      toolKey, 
      instructions, 
      localUseCase, 
      onUseCaseUpdate
    );
    setLocalUseCase(updated);
  };

  return (
    <TechnologySectionList 
      useCase={localUseCase}
      tools={tools}
      onPlanUpdate={onPlanUpdate}
      onConnectionUpdate={onConnectionUpdate}
      onDetailedInstructionsUpdate={onDetailedInstructionsUpdate}
    />
  );
};

export default ImplementationPlanContent;
