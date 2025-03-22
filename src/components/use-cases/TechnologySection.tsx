import React, { useState } from "react";
import EditableField from "./EditableField";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, Link, Plus, Trash2 } from "lucide-react";
import { ToolConnection } from "./data/types";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TechnologySectionProps {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  value: string;
  onValueChange: (value: string) => void;
  connections?: ToolConnection[];
  availableTargets?: { key: string; title: string }[];
  onConnectionUpdate?: (targetTool: string, description: string) => void;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({
  title,
  icon,
  colorClass,
  value,
  onValueChange,
  connections = [],
  availableTargets = [],
  onConnectionUpdate,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [newConnectionTarget, setNewConnectionTarget] = useState("");
  const [newConnectionDescription, setNewConnectionDescription] = useState("");

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleAddConnection = () => {
    if (newConnectionTarget && newConnectionDescription && onConnectionUpdate) {
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
    <div className={cn(
      "border rounded-lg p-4 transition-all duration-300",
      "hover:border-muted-foreground/20",
      !isExpanded && "bg-muted/5"
    )}>
      <div className="flex items-center justify-between">
        <h3 
          className={`font-semibold flex items-center gap-2 ${colorClass}`}
        >
          {icon}
          {title}
        </h3>
        <button 
          type="button"
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
          className="text-muted-foreground hover:text-foreground"
          onClick={toggleExpand}
        >
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-3 space-y-4">
          <EditableField 
            label="Implementation Steps"
            value={value || ""}
            multiline={true}
            onValueChange={onValueChange}
          />
          
          {availableTargets.length > 0 && (
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
                              <p className="text-sm font-medium">{getToolDisplayName(connection.targetTool)}</p>
                              <p className="text-sm text-muted-foreground">{connection.description}</p>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => onConnectionUpdate?.(connection.targetTool, "")}
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
                        Describe how this tool connects with {title} for this use case
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      )}
    </div>
  );
};

export default TechnologySection;
