
import React from "react";
import TechnologySection from "../technology/TechnologySection";
import { UseCase } from "../data/types";
import { Tool } from "./ToolMetadata";
import { 
  getStringValue,
  getConnections,
  getDetailedInstructions
} from "./ConnectionUtils";

interface TechnologySectionListProps {
  useCase: UseCase;
  tools: Tool[];
  onPlanUpdate: (field: string, value: string) => void;
  onConnectionUpdate: (sourceToolKey: string, targetToolKey: string, description: string) => void;
  onDetailedInstructionsUpdate: (toolKey: string, instructions: string) => void;
}

const TechnologySectionList: React.FC<TechnologySectionListProps> = ({
  useCase,
  tools,
  onPlanUpdate,
  onConnectionUpdate,
  onDetailedInstructionsUpdate
}) => {
  return (
    <div className="space-y-6 py-4">
      {tools.map((tool) => (
        <TechnologySection
          key={tool.key}
          title={tool.title}
          icon={tool.icon}
          colorClass={tool.colorClass}
          value={getStringValue(useCase.implementationPlan?.[tool.key])}
          onValueChange={(value) => onPlanUpdate(tool.key, value)}
          connections={getConnections(tool.key, useCase.implementationPlan)}
          availableTargets={tools.filter(t => t.key !== tool.key).map(t => ({ key: t.key, title: t.title }))}
          onConnectionUpdate={(targetTool, description) => 
            onConnectionUpdate(tool.key, targetTool, description)
          }
          detailedInstructions={getDetailedInstructions(tool.key, useCase.implementationPlan)}
          onDetailedInstructionsChange={(instructions) => 
            onDetailedInstructionsUpdate(tool.key, instructions)
          }
        />
      ))}
    </div>
  );
};

export default TechnologySectionList;
