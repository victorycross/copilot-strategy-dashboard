
import React from "react";
import { UseCase } from "../data/types";
import { tools } from "./ToolMetadata";
import TechnologySectionList from "./TechnologySectionList";
import { ensureObjectFormat } from "./ConnectionUtils";

interface ImplementationPlanContentProps {
  useCase: UseCase;
  onUseCaseUpdate: (updatedUseCase: UseCase) => void;
}

const ImplementationPlanContent = ({
  useCase,
  onUseCaseUpdate
}: ImplementationPlanContentProps) => {
  console.log("ImplementationPlanContent rendering with useCase:", useCase.name);
  
  // Make sure implementation plan exists
  if (!useCase.implementationPlan) {
    console.error("Implementation plan is missing for useCase:", useCase.name);
    
    // Initialize the implementation plan if it doesn't exist
    const initializedUseCase = {
      ...useCase,
      implementationPlan: {
        msCopilot: {
          summary: "",
          connections: [],
          detailedInstructions: ""
        },
        powerAutomate: {
          summary: "",
          connections: [],
          detailedInstructions: ""
        },
        powerApps: {
          summary: "",
          connections: [],
          detailedInstructions: ""
        },
        copilotStudio: {
          summary: "",
          connections: [],
          detailedInstructions: ""
        },
        powerBI: {
          summary: "",
          connections: [],
          detailedInstructions: ""
        },
        sharePoint: {
          summary: "",
          connections: [],
          detailedInstructions: ""
        }
      }
    };
    
    console.log("Initialized implementation plan:", initializedUseCase.implementationPlan);
    onUseCaseUpdate(initializedUseCase);
    return null;
  }

  // Handle update for a specific tool's summary text
  const handlePlanUpdate = (toolKey: string, value: string) => {
    if (!useCase.implementationPlan) return;
    
    const toolImpl = ensureObjectFormat(toolKey, useCase.implementationPlan);
    
    const updatedToolImpl = {
      ...toolImpl,
      summary: value
    };
    
    const updatedImplementationPlan = {
      ...useCase.implementationPlan,
      [toolKey]: updatedToolImpl
    };
    
    const updatedUseCase = {
      ...useCase,
      implementationPlan: updatedImplementationPlan
    };
    
    onUseCaseUpdate(updatedUseCase);
  };

  // Handle update for connections between tools
  const handleConnectionUpdate = (sourceToolKey: string, targetToolKey: string, description: string) => {
    if (!useCase.implementationPlan) return;
    
    const sourceToolImpl = ensureObjectFormat(sourceToolKey, useCase.implementationPlan);
    
    // Find if connection already exists to update, otherwise create new
    const connections = sourceToolImpl.connections || [];
    const existingConnectionIndex = connections.findIndex(c => c.targetTool === targetToolKey);
    
    let updatedConnections;
    if (existingConnectionIndex >= 0) {
      updatedConnections = [...connections];
      updatedConnections[existingConnectionIndex] = {
        ...updatedConnections[existingConnectionIndex],
        description
      };
    } else {
      updatedConnections = [
        ...connections,
        { targetTool: targetToolKey, description }
      ];
    }
    
    const updatedToolImpl = {
      ...sourceToolImpl,
      connections: updatedConnections
    };
    
    const updatedImplementationPlan = {
      ...useCase.implementationPlan,
      [sourceToolKey]: updatedToolImpl
    };
    
    const updatedUseCase = {
      ...useCase,
      implementationPlan: updatedImplementationPlan
    };
    
    onUseCaseUpdate(updatedUseCase);
  };

  // Handle update for detailed instructions
  const handleDetailedInstructionsUpdate = (toolKey: string, instructions: string) => {
    if (!useCase.implementationPlan) return;
    
    const toolImpl = ensureObjectFormat(toolKey, useCase.implementationPlan);
    
    const updatedToolImpl = {
      ...toolImpl,
      detailedInstructions: instructions
    };
    
    const updatedImplementationPlan = {
      ...useCase.implementationPlan,
      [toolKey]: updatedToolImpl
    };
    
    const updatedUseCase = {
      ...useCase,
      implementationPlan: updatedImplementationPlan
    };
    
    onUseCaseUpdate(updatedUseCase);
  };

  return (
    <div className="space-y-6">
      <TechnologySectionList
        useCase={useCase}
        tools={tools}
        onPlanUpdate={handlePlanUpdate}
        onConnectionUpdate={handleConnectionUpdate}
        onDetailedInstructionsUpdate={handleDetailedInstructionsUpdate}
      />
    </div>
  );
};

export default ImplementationPlanContent;
