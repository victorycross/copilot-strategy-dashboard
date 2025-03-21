
import React, { useState } from "react";
import EditableField from "./EditableField";
import { cn } from "@/lib/utils";

interface TechnologySectionProps {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  value: string;
  onValueChange: (value: string) => void;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({
  title,
  icon,
  colorClass,
  value,
  onValueChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={cn(
      "border rounded-lg p-4 transition-all duration-300",
      "hover:border-muted-foreground/20"
    )}>
      <div 
        className="cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className={`font-semibold flex items-center gap-2 ${colorClass}`}>
          {icon}
          {title}
        </h3>
        <button 
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
          className="text-muted-foreground hover:text-foreground"
        >
          {isExpanded ? "−" : "+"}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-3">
          <EditableField 
            label="Implementation Steps"
            value={value || ""}
            multiline={true}
            onValueChange={onValueChange}
          />
        </div>
      )}
    </div>
  );
};

export default TechnologySection;
