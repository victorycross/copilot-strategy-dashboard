
import { Button } from "@/components/ui/button";
import { Download, Copy, Check } from "lucide-react";
import { downloadImplementationPlan, cloneUseCase } from "./utils/planUtils";
import { UseCase } from "./data/types";
import { useState } from "react";
import { toast } from "sonner";

interface PlanActionFooterProps {
  useCase: UseCase;
  onUseCaseUpdate?: (updatedUseCase: any) => void;
  onClose?: () => void;
}

const PlanActionFooter: React.FC<PlanActionFooterProps> = ({ 
  useCase, 
  onUseCaseUpdate,
  onClose
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate saving process
    setTimeout(() => {
      setIsSaving(false);
      if (onClose) {
        toast.success("Implementation plan saved");
        onClose();
      }
    }, 800);
  };

  const handleClone = () => {
    if (onUseCaseUpdate) {
      cloneUseCase(useCase, onUseCaseUpdate);
      toast.success("Use case cloned successfully");
    }
    if (onClose) onClose();
  };

  const handleDownload = () => {
    downloadImplementationPlan(useCase);
    toast.success("Implementation plan downloaded");
  };

  return (
    <div className="flex justify-between w-full">
      <div className="space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleDownload}
        >
          <Download className="mr-2 h-4 w-4" />
          Download Plan
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleClone}
        >
          <Copy className="mr-2 h-4 w-4" />
          Clone Use Case
        </Button>
      </div>
      
      <div className="space-x-2">
        {onClose && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onClose}
          >
            Cancel
          </Button>
        )}
        
        <Button 
          size="sm" 
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Saving...
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </div>
    </div>
  );
};

export default PlanActionFooter;
