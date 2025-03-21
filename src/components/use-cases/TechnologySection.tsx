
import React, { useState } from "react";
import EditableField from "./EditableField";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";

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

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={cn(
      "border rounded-lg p-4 transition-all duration-300",
      "hover:border-muted-foreground/20",
      !isExpanded && "bg-muted/5"
    )}>
      <div 
        className="flex items-center justify-between"
        onClick={toggleExpand}
      >
        <h3 className={`font-semibold flex items-center gap-2 ${colorClass} cursor-pointer`}>
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
