
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileText } from "lucide-react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface InstructionsDialogProps {
  title: string;
  icon: React.ReactNode;
  detailedInstructions: string;
  onDetailedInstructionsChange?: (value: string) => void;
}

const InstructionsDialog: React.FC<InstructionsDialogProps> = ({
  title,
  icon,
  detailedInstructions,
  onDetailedInstructionsChange,
}) => {
  const [isEditingInstructions, setIsEditingInstructions] = useState(false);
  const [localInstructions, setLocalInstructions] = useState(detailedInstructions);

  const handleSaveInstructions = () => {
    if (onDetailedInstructionsChange) {
      onDetailedInstructionsChange(localInstructions);
      setIsEditingInstructions(false);
      toast.success(`Detailed instructions for ${title} updated`);
    }
  };

  return (
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          {icon}
          <span>{title} Implementation Guide</span>
        </DialogTitle>
        <DialogDescription>
          Detailed step-by-step instructions for implementing this technology
        </DialogDescription>
      </DialogHeader>
      
      {isEditingInstructions ? (
        <div className="space-y-4 mt-4">
          <Textarea 
            value={localInstructions} 
            onChange={(e) => setLocalInstructions(e.target.value)}
            placeholder={`Write detailed step-by-step instructions for implementing ${title} for this use case...`}
            className="min-h-[300px]"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditingInstructions(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveInstructions}>
              Save Instructions
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4 mt-4">
          <div className="border rounded-lg p-4 bg-muted/5">
            {detailedInstructions ? (
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap">{detailedInstructions}</div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="mx-auto h-8 w-8 mb-2" />
                <p>No detailed instructions available yet.</p>
                <p className="text-xs mt-1">Click the button below to add step-by-step instructions.</p>
              </div>
            )}
          </div>
          {onDetailedInstructionsChange && (
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setIsEditingInstructions(true)}>
                {detailedInstructions ? "Edit Instructions" : "Add Detailed Instructions"}
              </Button>
            </div>
          )}
        </div>
      )}
    </DialogContent>
  );
};

export default InstructionsDialog;
