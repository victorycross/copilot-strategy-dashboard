
import React, { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  EditableSelect,
  EditableText,
  EditableTextarea,
  DisplayValue
} from "./editable-field";

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
    if (newValue !== value) {
      onValueChange(newValue);
      toast.success(`${label} updated`);
    }
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocalValue(e.target.value);
  };

  const handleInputBlur = () => {
    // Only trigger value change if there was an actual change
    if (localValue !== value) {
      onValueChange(localValue);
      toast.success(`${label} updated`);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      if (localValue !== value) {
        onValueChange(localValue);
        toast.success(`${label} updated`);
      }
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      setLocalValue(value); // Reset to original value
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setLocalValue(value);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (localValue !== value) {
      onValueChange(localValue);
      toast.success(`${label} updated`);
    }
    setIsEditing(false);
  };

  return (
    <div className="relative">
      <p className="text-muted-foreground text-xs mb-1">{label}</p>
      <div className={cn(
        "flex items-start group",
        multiline && "flex-col w-full gap-2"
      )}>
        {isEditing ? (
          options ? (
            <EditableSelect
              value={value}
              options={options}
              label={label}
              onValueChange={handleChange}
              onOpenChange={(open) => {
                if (!open) {
                  setIsEditing(false);
                }
              }}
            />
          ) : multiline ? (
            <EditableTextarea
              value={localValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onCancel={handleCancel}
              onSave={handleSave}
              label={label}
            />
          ) : (
            <EditableText
              value={localValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              label={label}
            />
          )
        ) : (
          <DisplayValue
            value={value}
            label={label}
            onEdit={() => setIsEditing(true)}
          />
        )}
      </div>
    </div>
  );
};

export default EditableField;
