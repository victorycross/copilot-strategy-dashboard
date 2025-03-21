
import React, { useState } from "react";
import { Edit } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EditableFieldProps {
  label: string;
  value: string;
  options: string[];
  onValueChange: (newValue: string) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  options,
  onValueChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (newValue: string) => {
    onValueChange(newValue);
    setIsEditing(false);
  };

  return (
    <div className="relative">
      <p className="text-muted-foreground text-xs">{label}</p>
      <div className="flex items-center group">
        <p className="font-medium text-sm">
          {value}
        </p>
        <DropdownMenu open={isEditing} onOpenChange={setIsEditing}>
          <DropdownMenuTrigger asChild>
            <button
              className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
              aria-label={`Edit ${label}`}
            >
              <Edit className="h-3 w-3 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="p-0 bg-popover">
            <Select defaultValue={value} onValueChange={handleChange}>
              <SelectTrigger className="w-[180px]">
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default EditableField;
