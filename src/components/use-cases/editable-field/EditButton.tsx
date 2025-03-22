
import React from "react";
import { Edit } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditButtonProps {
  onClick: () => void;
  label: string;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick, label }) => {
  return (
    <button
      className={cn(
        "ml-1 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100",
        "hover:bg-accent rounded-full p-1"
      )}
      aria-label={`Edit ${label}`}
      onClick={onClick}
    >
      <Edit className="h-3.5 w-3.5 text-muted-foreground" />
    </button>
  );
};

export default EditButton;
