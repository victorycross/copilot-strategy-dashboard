
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import EditableField from "../EditableField";
import TechnologySectionHeader from "./TechnologySectionHeader";
import ConnectionsSection from "./ConnectionsSection";
import InstructionsDialog from "./InstructionsDialog";
import { ToolConnection } from "../data/types";

interface TechnologySectionProps {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  value: string;
  onValueChange: (value: string) => void;
  connections?: ToolConnection[];
  availableTargets?: { key: string; title: string }[];
  onConnectionUpdate?: (targetTool: string, description: string) => void;
  detailedInstructions?: string;
  onDetailedInstructionsChange?: (value: string) => void;
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
  detailedInstructions = "",
  onDetailedInstructionsChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <Dialog>
      <div className={cn(
        "border rounded-lg p-4 transition-all duration-300",
        "hover:border-muted-foreground/20",
        !isExpanded && "bg-muted/5"
      )}>
        <TechnologySectionHeader
          title={title}
          icon={icon}
          colorClass={colorClass}
          isExpanded={isExpanded}
          toggleExpand={toggleExpand}
        />
        
        {isExpanded && (
          <div className="mt-3 space-y-4">
            <EditableField 
              label="Implementation Steps"
              value={value || ""}
              multiline={true}
              onValueChange={onValueChange}
            />
            
            {availableTargets.length > 0 && (
              <ConnectionsSection
                connections={connections}
                availableTargets={availableTargets}
                onConnectionUpdate={onConnectionUpdate || (() => {})}
              />
            )}
          </div>
        )}

        <InstructionsDialog
          title={title}
          icon={icon}
          detailedInstructions={detailedInstructions}
          onDetailedInstructionsChange={onDetailedInstructionsChange}
        />
      </div>
    </Dialog>
  );
};

export default TechnologySection;
