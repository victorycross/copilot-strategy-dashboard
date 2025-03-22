
import React, { useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface EditableTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onCancel: () => void;
  onSave: () => void;
  label: string;
}

const EditableTextarea: React.FC<EditableTextareaProps> = ({
  value,
  onChange,
  onKeyDown,
  onCancel,
  onSave,
  label,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <div className="w-full">
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="min-h-[100px] w-full text-sm transition-all focus-visible:ring-2"
        placeholder={`Enter ${label}`}
      />
      <div className="flex justify-end mt-2 gap-2">
        <Button 
          size="sm" 
          variant="outline" 
          onClick={onCancel}
          className="h-7 px-2 text-xs"
        >
          <X className="h-3 w-3 mr-1" />
          Cancel
        </Button>
        <Button 
          size="sm" 
          onClick={onSave}
          className="h-7 px-2 text-xs bg-green-500 hover:bg-green-600"
        >
          <Check className="h-3 w-3 mr-1" />
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditableTextarea;
