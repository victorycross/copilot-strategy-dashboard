
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode, useState } from "react";
import PlanActionFooter from "./PlanActionFooter";
import { UseCase } from "./data/types";
import ImplementationPlanContent from "./implementation-plan/ImplementationPlanContent";

interface ImplementationPlanSheetProps {
  useCase: UseCase;
  children?: ReactNode;
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ImplementationPlanSheet = ({ 
  useCase, 
  children, 
  onUseCaseUpdate,
  open,
  onOpenChange 
}: ImplementationPlanSheetProps) => {
  const [localUseCase, setLocalUseCase] = useState(useCase);
  
  if (!localUseCase.implementationPlan) {
    // Create a default implementation plan if it doesn't exist
    localUseCase.implementationPlan = {
      msCopilot: "",
      powerAutomate: "",
      powerApps: "",
      copilotStudio: "",
      powerBI: "",
      sharePoint: ""
    };
  }

  const handleUseCaseUpdate = (updatedUseCase: UseCase) => {
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
    }
  };

  const handleClose = () => {
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  const isControlled = open !== undefined && onOpenChange !== undefined;
  
  return (
    <Sheet 
      open={isControlled ? open : undefined} 
      onOpenChange={isControlled ? onOpenChange : undefined}
    >
      {children && (
        <SheetTrigger asChild>
          {children}
        </SheetTrigger>
      )}

      <SheetContent className="w-full sm:max-w-[800px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Implementation Plan: {localUseCase.name}</SheetTitle>
          <SheetDescription>
            How to implement this use case using Microsoft technologies
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-4">
          <ImplementationPlanContent 
            useCase={localUseCase} 
            onUseCaseUpdate={handleUseCaseUpdate}
          />
        </div>
        
        <SheetFooter>
          <PlanActionFooter 
            useCase={localUseCase} 
            onUseCaseUpdate={onUseCaseUpdate}
            onClose={handleClose}
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ImplementationPlanSheet;
