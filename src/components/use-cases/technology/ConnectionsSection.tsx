
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, Plus, Trash2 } from "lucide-react";
import { ToolConnection } from "../data/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ConnectionsSectionProps {
  connections: ToolConnection[];
  availableTargets: { key: string; title: string }[];
  onConnectionUpdate: (targetTool: string, description: string) => void;
}

const ConnectionsSection: React.FC<ConnectionsSectionProps> = ({
  connections,
  availableTargets,
  onConnectionUpdate,
}) => {
  const [newConnectionTarget, setNewConnectionTarget] = useState("");
  const [newConnectionDescription, setNewConnectionDescription] = useState("");

  const handleAddConnection = () => {
    if (newConnectionTarget && newConnectionDescription) {
      onConnectionUpdate(newConnectionTarget, newConnectionDescription);
      setNewConnectionTarget("");
      setNewConnectionDescription("");
    }
  };

  const getToolDisplayName = (key: string): string => {
    const target = availableTargets.find(t => t.key === key);
    return target ? target.title : key;
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="connections">
        <AccordionTrigger className="text-sm font-medium flex items-center gap-2">
          <Link size={16} className="inline-block" />
          Connections to Other Tools
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 mt-2">
            {connections.length > 0 && (
              <div className="space-y-2">
                {connections.map((connection, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-muted/20 rounded-md">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{getToolDisplayName(connection.targetTool || '')}</p>
                      <p className="text-sm text-muted-foreground">{connection.description}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => onConnectionUpdate(connection.targetTool || '', "")}
                      title="Remove connection"
                    >
                      <Trash2 size={14} className="text-muted-foreground hover:text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Add Connection</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Select 
                  value={newConnectionTarget} 
                  onValueChange={setNewConnectionTarget}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Select tool" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTargets.map(target => (
                      <SelectItem key={target.key} value={target.key}>
                        {target.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <div className="flex-1 flex gap-2">
                  <Input
                    placeholder="How to connect with this tool"
                    value={newConnectionDescription}
                    onChange={(e) => setNewConnectionDescription(e.target.value)}
                  />
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={handleAddConnection}
                    disabled={!newConnectionTarget || !newConnectionDescription}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Describe how this tool connects with the other for this use case
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ConnectionsSection;
