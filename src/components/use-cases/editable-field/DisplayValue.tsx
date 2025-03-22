
import React from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import EditButton from "./EditButton";

interface DisplayValueProps {
  value: string;
  label: string;
  onEdit: () => void;
}

const DisplayValue: React.FC<DisplayValueProps> = ({ value, label, onEdit }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center justify-between w-full group">
      <p className={cn(
        "font-medium transition-colors",
        isMobile ? "text-xs" : "text-sm",
        !value && "text-muted-foreground italic"
      )}>
        {value || `No ${label.toLowerCase()} set`}
      </p>
      <EditButton onClick={onEdit} label={label} />
    </div>
  );
};

export default DisplayValue;
