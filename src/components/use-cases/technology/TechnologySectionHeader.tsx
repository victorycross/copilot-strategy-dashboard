
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, HelpCircle } from "lucide-react";
import { DialogTrigger } from "@/components/ui/dialog";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface TechnologySectionHeaderProps {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  isExpanded: boolean;
  toggleExpand: (e: React.MouseEvent) => void;
}

const TechnologySectionHeader: React.FC<TechnologySectionHeaderProps> = ({
  title,
  icon,
  colorClass,
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div className="flex items-center justify-between">
      <h3 
        className={cn("font-semibold flex items-center gap-2", colorClass)}
      >
        {icon}
        {title}
      </h3>
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <DialogTrigger asChild>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-6 w-6"
                >
                  <HelpCircle size={14} className="text-muted-foreground" />
                </Button>
              </TooltipTrigger>
            </DialogTrigger>
            <TooltipContent>
              <p>View detailed "{title}" implementation instructions</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <button 
          type="button"
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
          className="text-muted-foreground hover:text-foreground"
          onClick={toggleExpand}
        >
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
    </div>
  );
};

export default TechnologySectionHeader;
