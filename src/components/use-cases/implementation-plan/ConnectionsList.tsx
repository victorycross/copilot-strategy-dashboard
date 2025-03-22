
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToolConnection } from "../data/types";
import { PlusCircle, XCircle } from "lucide-react";

interface ConnectionsListProps {
  connections: ToolConnection[];
  onConnectionsUpdate: (connections: ToolConnection[]) => void;
}

const ConnectionsList = ({
  connections,
  onConnectionsUpdate
}: ConnectionsListProps) => {
  // Safe connections array
  const safeConnections = connections || [];
  
  // Add a new connection
  const handleAddConnection = () => {
    onConnectionsUpdate([
      ...safeConnections,
      { tool: "", targetTool: "", description: "" }
    ]);
  };
  
  // Remove a connection
  const handleRemoveConnection = (index: number) => {
    const updatedConnections = [...safeConnections];
    updatedConnections.splice(index, 1);
    onConnectionsUpdate(updatedConnections);
  };
  
  // Update a connection field
  const handleConnectionUpdate = (index: number, field: string, value: string) => {
    const updatedConnections = [...safeConnections];
    updatedConnections[index] = {
      ...updatedConnections[index],
      [field]: value
    };
    onConnectionsUpdate(updatedConnections);
  };

  return (
    <div className="space-y-3">
      {safeConnections.map((connection, index) => (
        <div key={index} className="flex items-start gap-2">
          <Select
            value={connection.targetTool || ""}
            onValueChange={(value) => handleConnectionUpdate(index, "targetTool", value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select tool" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="msCopilot">Copilot for M365</SelectItem>
              <SelectItem value="powerAutomate">Power Automate</SelectItem>
              <SelectItem value="powerApps">Power Apps</SelectItem>
              <SelectItem value="copilotStudio">Copilot Studio</SelectItem>
              <SelectItem value="powerBI">Power BI</SelectItem>
              <SelectItem value="sharePoint">SharePoint</SelectItem>
            </SelectContent>
          </Select>
          
          <Input
            value={connection.description}
            onChange={(e) => handleConnectionUpdate(index, "description", e.target.value)}
            placeholder="Describe the connection..."
            className="flex-1"
          />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleRemoveConnection(index)}
            className="h-10 w-10 text-destructive"
          >
            <XCircle className="h-4 w-4" />
          </Button>
        </div>
      ))}
      
      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={handleAddConnection}
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Connection
      </Button>
    </div>
  );
};

export default ConnectionsList;
