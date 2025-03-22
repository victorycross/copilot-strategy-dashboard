
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ConnectionsList from "./ConnectionsList";
import { ToolImplementation } from "../data/types";
import { PlusCircle } from "lucide-react";

interface ToolSectionProps {
  toolKey: string;
  toolName: string;
  implementation: ToolImplementation;
  onUpdate: (value: ToolImplementation) => void;
}

const ToolSection = ({
  toolKey,
  toolName,
  implementation,
  onUpdate
}: ToolSectionProps) => {
  const [showConnections, setShowConnections] = useState(false);
  const [showDetailedInstructions, setShowDetailedInstructions] = useState(false);
  
  // Make sure implementation has the right structure
  const safeImplementation: ToolImplementation = {
    summary: implementation?.summary || "",
    connections: implementation?.connections || [],
    detailedInstructions: implementation?.detailedInstructions || ""
  };
  
  // Handle summary update
  const handleSummaryChange = (value: string) => {
    onUpdate({
      ...safeImplementation,
      summary: value
    });
  };
  
  // Handle detailed instructions update
  const handleDetailedInstructionsChange = (value: string) => {
    onUpdate({
      ...safeImplementation,
      detailedInstructions: value
    });
  };
  
  // Handle connections update
  const handleConnectionsUpdate = (updatedConnections: any[]) => {
    onUpdate({
      ...safeImplementation,
      connections: updatedConnections
    });
  };

  return (
    <div className="space-y-4 pt-4">
      <div>
        <h3 className="text-sm font-medium mb-2">How {toolName} will be used:</h3>
        <Textarea
          value={safeImplementation.summary}
          onChange={(e) => handleSummaryChange(e.target.value)}
          placeholder={`Describe how ${toolName} will be utilized in this use case...`}
          className="min-h-[100px]"
        />
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium">Connections with other tools:</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs h-6"
            onClick={() => setShowConnections(!showConnections)}
          >
            {showConnections ? "Hide" : "Show"}
          </Button>
        </div>
        
        {showConnections && (
          <ConnectionsList
            connections={safeImplementation.connections}
            onConnectionsUpdate={handleConnectionsUpdate}
          />
        )}
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium">Detailed implementation instructions:</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs h-6"
            onClick={() => setShowDetailedInstructions(!showDetailedInstructions)}
          >
            {showDetailedInstructions ? "Hide" : "Show"}
          </Button>
        </div>
        
        {showDetailedInstructions && (
          <Textarea
            value={safeImplementation.detailedInstructions}
            onChange={(e) => handleDetailedInstructionsChange(e.target.value)}
            placeholder="Add step-by-step implementation instructions here..."
            className="min-h-[200px]"
          />
        )}
      </div>
    </div>
  );
};

export default ToolSection;
