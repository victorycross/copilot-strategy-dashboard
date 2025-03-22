
import { UseCase } from "./data/types";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import ImplementationPlanContent from "./implementation-plan/ImplementationPlanContent";
import PlanActionFooter from "./PlanActionFooter";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface ImplementationPlanDetailProps {
  useCase: UseCase;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void;
}

const ImplementationPlanDetail = ({ 
  useCase, 
  open, 
  onOpenChange,
  onUseCaseUpdate
}: ImplementationPlanDetailProps) => {
  const [localUseCase, setLocalUseCase] = useState(useCase);

  // Update local state when the prop changes
  useEffect(() => {
    setLocalUseCase(useCase);
  }, [useCase]);
  
  // Initialize implementation plan if it doesn't exist
  useEffect(() => {
    if (!localUseCase.implementationPlan) {
      setLocalUseCase(prev => ({
        ...prev,
        implementationPlan: {
          msCopilot: "",
          powerAutomate: "",
          powerApps: "",
          copilotStudio: "",
          powerBI: "",
          sharePoint: ""
        }
      }));
    }
  }, [localUseCase]);

  const handleUseCaseUpdate = (updatedUseCase: UseCase) => {
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
      toast.success("Implementation plan updated");
    }
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        <div className="mx-auto w-full max-w-[800px] p-6">
          <h2 className="text-xl font-semibold mb-2 text-primary">Implementation Plan: {localUseCase.name}</h2>
          <p className="text-muted-foreground mb-6">
            How to implement this use case using Microsoft technologies
          </p>
          
          <ImplementationPlanContent 
            useCase={localUseCase} 
            onUseCaseUpdate={handleUseCaseUpdate}
          />
          
          <div className="mt-6">
            <PlanActionFooter 
              useCase={localUseCase}
              onUseCaseUpdate={onUseCaseUpdate}
              onClose={handleClose}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ImplementationPlanDetail;
