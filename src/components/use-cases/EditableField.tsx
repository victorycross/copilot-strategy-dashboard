
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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface EditableFieldProps {
  label: string;
  value: string;
  options?: string[];
  multiline?: boolean;
  onValueChange: (newValue: string) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  options,
  multiline = false,
  onValueChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (newValue: string) => {
    onValueChange(newValue);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocalValue(e.target.value);
  };

  const handleInputBlur = () => {
    onValueChange(localValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      onValueChange(localValue);
      setIsEditing(false);
    }
  };

  return (
    <div className="relative">
      <p className="text-muted-foreground text-xs">{label}</p>
      <div className="flex items-center group">
        {isEditing ? (
          options ? (
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
          ) : multiline ? (
            <Textarea
              value={localValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className="min-h-[100px] w-full"
              placeholder={`Enter ${label}`}
            />
          ) : (
            <Input
              value={localValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              className="w-full"
              placeholder={`Enter ${label}`}
            />
          )
        ) : (
          <>
            <p className="font-medium text-sm">
              {value}
            </p>
            <button
              className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
              aria-label={`Edit ${label}`}
              onClick={() => setIsEditing(true)}
            >
              <Edit className="h-3 w-3 text-muted-foreground" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditableField;
