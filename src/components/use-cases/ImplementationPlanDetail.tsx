
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UseCase, ToolImplementation } from "./data/types";
import {
  MsCopilotIcon,
  PowerAutomateIcon,
  PowerAppsIcon,
  CopilotStudioIcon,
  PowerBIIcon,
} from "./icons/TechnologyIcons";
import { Code, Link, FileText, BookOpen } from "lucide-react";

// Custom SharePoint icon
const SharePointIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-green-600"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
  </svg>
);

interface ImplementationPlanDetailProps {
  useCase: UseCase;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImplementationPlanDetail: React.FC<ImplementationPlanDetailProps> = ({
  useCase,
  open,
  onOpenChange,
}) => {
  const [activeTab, setActiveTab] = useState("msCopilot");
  const [viewMode, setViewMode] = useState<"summary" | "details">("summary");
  
  if (!useCase.implementationPlan) return null;

  // Helper function to render tool content
  const renderToolContent = (toolKey: string, toolData: string | ToolImplementation | undefined, icon: React.ReactNode) => {
    if (!toolData) return null;

    // Handle string format (for backward compatibility)
    if (typeof toolData === "string") {
      return (
        <Card className="mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              {icon}
              Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p>{toolData}</p>
          </CardContent>
        </Card>
      );
    }

    // Detailed instructions available?
    const hasDetailedInstructions = toolData.detailedInstructions && toolData.detailedInstructions.trim() !== "";

    // If in details mode but no details exist, fall back to summary
    const currentViewMode = hasDetailedInstructions ? viewMode : "summary";

    if (currentViewMode === "details" && hasDetailedInstructions) {
      return (
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Detailed Implementation Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap">{toolData.detailedInstructions}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    // Handle object format - summary view
    return (
      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              {icon}
              Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p>{toolData.summary}</p>
          </CardContent>
        </Card>

        {toolData.examples && toolData.examples.length > 0 && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Code className="w-4 h-4" />
                Examples
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {toolData.examples.map((example, idx) => (
                <div key={idx} className="border-b pb-4 last:border-0 last:pb-0">
                  <h4 className="font-medium text-sm">{example.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{example.description}</p>
                  <div className="bg-muted p-3 rounded-md text-xs font-mono whitespace-pre-wrap">
                    {example.example}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {toolData.connections && toolData.connections.length > 0 && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Link className="w-4 h-4" />
                Connections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {toolData.connections.map((connection, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <div>
                      <span className="font-medium">{connection.targetTool || connection.tool}:</span>{" "}
                      {connection.description}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  // Get current tool data
  const getCurrentToolData = () => {
    const data = useCase.implementationPlan?.[activeTab];
    if (!data) return null;
    
    // Check if detailed instructions are available
    if (typeof data === 'object' && data.detailedInstructions && data.detailedInstructions.trim() !== "") {
      return true;
    }
    return false;
  };

  // Determine if the current tool has detailed instructions
  const hasDetailedInstructions = getCurrentToolData();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{useCase.name} - Implementation Plan</DialogTitle>
          <DialogDescription>
            Detailed implementation steps across Microsoft technologies
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end mt-2 mb-4">
          {hasDetailedInstructions && (
            <div className="border rounded-md overflow-hidden flex">
              <Button 
                variant={viewMode === "summary" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setViewMode("summary")}
                className="rounded-none border-0"
              >
                Summary
              </Button>
              <Button 
                variant={viewMode === "details" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setViewMode("details")}
                className="rounded-none border-0 border-l"
              >
                Complete Guide
              </Button>
            </div>
          )}
        </div>

        <Tabs 
          defaultValue="msCopilot" 
          value={activeTab} 
          onValueChange={(value) => {
            setActiveTab(value);
          }} 
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
            <TabsTrigger value="msCopilot" className="text-xs">Microsoft Copilot</TabsTrigger>
            <TabsTrigger value="powerAutomate" className="text-xs">Power Automate</TabsTrigger>
            <TabsTrigger value="powerApps" className="text-xs">Power Apps</TabsTrigger>
            <TabsTrigger value="copilotStudio" className="text-xs">Copilot Studio</TabsTrigger>
            <TabsTrigger value="powerBI" className="text-xs">Power BI</TabsTrigger>
            <TabsTrigger value="sharePoint" className="text-xs">SharePoint</TabsTrigger>
          </TabsList>

          <TabsContent value="msCopilot" className="pt-2">
            {renderToolContent(
              "msCopilot",
              useCase.implementationPlan.msCopilot,
              <MsCopilotIcon />
            )}
          </TabsContent>
          
          <TabsContent value="powerAutomate" className="pt-2">
            {renderToolContent(
              "powerAutomate",
              useCase.implementationPlan.powerAutomate,
              <PowerAutomateIcon />
            )}
          </TabsContent>
          
          <TabsContent value="powerApps" className="pt-2">
            {renderToolContent(
              "powerApps",
              useCase.implementationPlan.powerApps,
              <PowerAppsIcon />
            )}
          </TabsContent>
          
          <TabsContent value="copilotStudio" className="pt-2">
            {renderToolContent(
              "copilotStudio",
              useCase.implementationPlan.copilotStudio,
              <CopilotStudioIcon />
            )}
          </TabsContent>
          
          <TabsContent value="powerBI" className="pt-2">
            {renderToolContent(
              "powerBI",
              useCase.implementationPlan.powerBI,
              <PowerBIIcon />
            )}
          </TabsContent>
          
          <TabsContent value="sharePoint" className="pt-2">
            {renderToolContent(
              "sharePoint",
              useCase.implementationPlan.sharePoint,
              <SharePointIcon />
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-4 flex items-center text-sm text-muted-foreground">
          <FileText className="w-4 h-4 mr-2" />
          <p>These implementation details can be used as a foundation for your project planning.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImplementationPlanDetail;
