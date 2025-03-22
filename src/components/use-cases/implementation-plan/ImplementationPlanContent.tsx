
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ToolSection from "./ToolSection";
import { UseCase } from "../data/types";
import { ensureObjectFormat } from "../ConnectionUtils";

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

  // Handle updating a specific tool
  const handleToolUpdate = (toolKey: string, value: any) => {
    if (!useCase.implementationPlan) return;
    
    console.log(`Updating tool ${toolKey} with:`, value);
    
    const updatedImplementationPlan = {
      ...useCase.implementationPlan,
      [toolKey]: value
    };
    
    const updatedUseCase = {
      ...useCase,
      implementationPlan: updatedImplementationPlan
    };
    
    onUseCaseUpdate(updatedUseCase);
  };

  return (
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
          implementation={ensureObjectFormat("msCopilot", useCase.implementationPlan)}
          onUpdate={(value) => handleToolUpdate("msCopilot", value)}
        />
      </TabsContent>
      
      <TabsContent value="powerAutomate">
        <ToolSection
          toolKey="powerAutomate"
          toolName="Power Automate"
          implementation={ensureObjectFormat("powerAutomate", useCase.implementationPlan)}
          onUpdate={(value) => handleToolUpdate("powerAutomate", value)}
        />
      </TabsContent>
      
      <TabsContent value="powerApps">
        <ToolSection
          toolKey="powerApps"
          toolName="Power Apps"
          implementation={ensureObjectFormat("powerApps", useCase.implementationPlan)}
          onUpdate={(value) => handleToolUpdate("powerApps", value)}
        />
      </TabsContent>
      
      <TabsContent value="copilotStudio">
        <ToolSection
          toolKey="copilotStudio"
          toolName="Copilot Studio"
          implementation={ensureObjectFormat("copilotStudio", useCase.implementationPlan)}
          onUpdate={(value) => handleToolUpdate("copilotStudio", value)}
        />
      </TabsContent>
      
      <TabsContent value="powerBI">
        <ToolSection
          toolKey="powerBI"
          toolName="Power BI"
          implementation={ensureObjectFormat("powerBI", useCase.implementationPlan)}
          onUpdate={(value) => handleToolUpdate("powerBI", value)}
        />
      </TabsContent>
      
      <TabsContent value="sharePoint">
        <ToolSection
          toolKey="sharePoint"
          toolName="SharePoint"
          implementation={ensureObjectFormat("sharePoint", useCase.implementationPlan)}
          onUpdate={(value) => handleToolUpdate("sharePoint", value)}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ImplementationPlanContent;
