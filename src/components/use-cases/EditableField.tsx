
import React, { useState, useRef, useEffect } from "react";
import { Edit, Check, X } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const isMobile = useIsMobile();

  // Focus the input element when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

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
            <div className="w-full">
              <Select 
                defaultValue={value} 
                onValueChange={handleChange}
                onOpenChange={(open) => {
                  if (!open) {
                    setIsEditing(false);
                  }
                }}
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
          ) : multiline ? (
            <div className="w-full">
              <Textarea
                ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                value={localValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="min-h-[100px] w-full text-sm transition-all focus-visible:ring-2"
                placeholder={`Enter ${label}`}
              />
              <div className="flex justify-end mt-2 gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={handleCancel}
                  className="h-7 px-2 text-xs"
                >
                  <X className="h-3 w-3 mr-1" />
                  Cancel
                </Button>
                <Button 
                  size="sm" 
                  onClick={handleSave}
                  className="h-7 px-2 text-xs bg-green-500 hover:bg-green-600"
                >
                  <Check className="h-3 w-3 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full flex">
              <Input
                ref={inputRef as React.RefObject<HTMLInputElement>}
                value={localValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                className={cn(
                  "w-full transition-all focus-visible:ring-2",
                  isMobile ? "text-sm" : ""
                )}
                placeholder={`Enter ${label}`}
              />
            </div>
          )
        ) : (
          <div className="flex items-center justify-between w-full group">
            <p className={cn(
              "font-medium transition-colors",
              isMobile ? "text-xs" : "text-sm",
              !value && "text-muted-foreground italic"
            )}>
              {value || `No ${label.toLowerCase()} set`}
            </p>
            <button
              className={cn(
                "ml-1 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100",
                "hover:bg-accent rounded-full p-1"
              )}
              aria-label={`Edit ${label}`}
              onClick={() => setIsEditing(true)}
            >
              <Edit className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditableField;
