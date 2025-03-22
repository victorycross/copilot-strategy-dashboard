
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface EditableSelectProps {
  value: string;
  options: string[];
  label: string;
  onValueChange: (newValue: string) => void;
  onOpenChange: (open: boolean) => void;
}

const EditableSelect: React.FC<EditableSelectProps> = ({
  value,
  options,
  label,
  onValueChange,
  onOpenChange,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <Select 
        defaultValue={value} 
        onValueChange={onValueChange}
        onOpenChange={onOpenChange}
      >
        <SelectTrigger className={cn("w-full", isMobile ? "text-sm" : "")}>
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default EditableSelect;
