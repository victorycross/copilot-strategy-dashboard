
import React, { useState, useEffect } from "react";
import { UseCase } from "../data/types";
import { tools } from "./ToolMetadata";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ensureObjectFormat } from "./ConnectionUtils";
import ToolSection from "./ToolSection";

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
      console.log("Implementation plan missing, initializing...");
      const initializedUseCase = {
        ...localUseCase,
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
      setLocalUseCase(initializedUseCase);
      onUseCaseUpdate(initializedUseCase);
      console.log("Initialized implementation plan:", initializedUseCase.implementationPlan);
    }
  }, [localUseCase, onUseCaseUpdate]);

  // Handle updating a specific tool
  const handleToolUpdate = (toolKey: string, value: any) => {
    if (!localUseCase.implementationPlan) {
      console.error("Implementation plan is missing");
      return;
    }
    
    try {
      const updatedImplementationPlan = {
        ...localUseCase.implementationPlan,
        [toolKey]: value
      };
      
      const updatedUseCase = {
        ...localUseCase,
        implementationPlan: updatedImplementationPlan
      };
      
      console.log(`Updated plan for ${toolKey}:`, updatedImplementationPlan[toolKey]);
      setLocalUseCase(updatedUseCase);
      onUseCaseUpdate(updatedUseCase);
    } catch (error) {
      console.error(`Error updating plan for ${toolKey}:`, error);
    }
  };

  // Safety check
  if (!localUseCase.implementationPlan) {
    console.warn("Implementation plan is still null in render");
    return <div>Loading implementation plan...</div>;
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="msCopilot" className="w-full">
        <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto">
          <TabsTrigger value="msCopilot" className="text-xs">Copilot for M365</TabsTrigger>
          <TabsTrigger value="powerAutomate" className="text-xs">Power Automate</TabsTrigger>
          <TabsTrigger value="powerApps" className="text-xs">Power Apps</TabsTrigger>
          <TabsTrigger value="copilotStudio" className="text-xs">Copilot Studio</TabsTrigger>
          <TabsTrigger value="powerBI" className="text-xs">Power BI</TabsTrigger>
          <TabsTrigger value="sharePoint" className="text-xs">SharePoint</TabsTrigger>
        </TabsList>
        
        <TabsContent value="msCopilot">
          <ToolSection
            toolKey="msCopilot"
            toolName="Copilot for M365"
            implementation={ensureObjectFormat("msCopilot", localUseCase.implementationPlan)}
            onUpdate={(value) => handleToolUpdate("msCopilot", value)}
          />
        </TabsContent>
        
        <TabsContent value="powerAutomate">
          <ToolSection
            toolKey="powerAutomate"
            toolName="Power Automate"
            implementation={ensureObjectFormat("powerAutomate", localUseCase.implementationPlan)}
            onUpdate={(value) => handleToolUpdate("powerAutomate", value)}
          />
        </TabsContent>
        
        <TabsContent value="powerApps">
          <ToolSection
            toolKey="powerApps"
            toolName="Power Apps"
            implementation={ensureObjectFormat("powerApps", localUseCase.implementationPlan)}
            onUpdate={(value) => handleToolUpdate("powerApps", value)}
          />
        </TabsContent>
        
        <TabsContent value="copilotStudio">
          <ToolSection
            toolKey="copilotStudio"
            toolName="Copilot Studio"
            implementation={ensureObjectFormat("copilotStudio", localUseCase.implementationPlan)}
            onUpdate={(value) => handleToolUpdate("copilotStudio", value)}
          />
        </TabsContent>
        
        <TabsContent value="powerBI">
          <ToolSection
            toolKey="powerBI"
            toolName="Power BI"
            implementation={ensureObjectFormat("powerBI", localUseCase.implementationPlan)}
            onUpdate={(value) => handleToolUpdate("powerBI", value)}
          />
        </TabsContent>
        
        <TabsContent value="sharePoint">
          <ToolSection
            toolKey="sharePoint"
            toolName="SharePoint"
            implementation={ensureObjectFormat("sharePoint", localUseCase.implementationPlan)}
            onUpdate={(value) => handleToolUpdate("sharePoint", value)}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ImplementationPlanContent;
