
import React, { useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface EditableTextProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  label: string;
}

const EditableText: React.FC<EditableTextProps> = ({
  value,
  onChange,
  onBlur,
  onKeyDown,
  label,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="w-full flex">
      <Input
        ref={inputRef}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={cn(
          "w-full transition-all focus-visible:ring-2",
          isMobile ? "text-sm" : ""
        )}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
};

export default EditableText;
