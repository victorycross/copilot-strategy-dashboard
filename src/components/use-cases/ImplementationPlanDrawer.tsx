
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import PlanActionFooter from "./PlanActionFooter";
import { UseCase } from "./data/types";
import ImplementationPlanContent from "./implementation-plan/ImplementationPlanContent";
import ImplementationPlanTrigger from "./implementation-plan/ImplementationPlanTrigger";

interface ImplementationPlanProps {
  useCase: UseCase;
  children?: ReactNode;
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void;
}

const ImplementationPlanDrawer = ({ useCase, children, onUseCaseUpdate }: ImplementationPlanProps) => {
  const [localUseCase, setLocalUseCase] = useState(useCase);
  
  if (!localUseCase.implementationPlan) {
    // Create a default implementation plan if it doesn't exist
    localUseCase.implementationPlan = {
      msCopilot: "",
      powerAutomate: "",
      powerApps: "",
      copilotStudio: "",
      powerBI: ""
    };
  }

  const handleUseCaseUpdate = (updatedUseCase: UseCase) => {
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
    }
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      // This will trigger when the dialog is closed
      console.log("Dialog closed");
    }
  };
  
  return (
    <Dialog onOpenChange={handleClose}>
      <ImplementationPlanTrigger useCase={localUseCase}>
        {children}
      </ImplementationPlanTrigger>

      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Implementation Plan: {localUseCase.name}</DialogTitle>
          <DialogDescription>
            How to implement this use case using Microsoft technologies
          </DialogDescription>
        </DialogHeader>
        
        <ImplementationPlanContent 
          useCase={localUseCase} 
          onUseCaseUpdate={handleUseCaseUpdate}
        />
        
        <DialogFooter>
          <PlanActionFooter 
            useCase={localUseCase} 
            onUseCaseUpdate={onUseCaseUpdate}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImplementationPlanDrawer;
