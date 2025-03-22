
import { 
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode, useState, useEffect } from "react";
import PlanActionFooter from "./PlanActionFooter";
import { UseCase } from "./data/types";
import ImplementationPlanContent from "./implementation-plan/ImplementationPlanContent";

interface ImplementationPlanProps {
  useCase: UseCase;
  children?: ReactNode;
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ImplementationPlanDrawer = ({ 
  useCase, 
  children, 
  onUseCaseUpdate,
  open,
  onOpenChange 
}: ImplementationPlanProps) => {
  const [localUseCase, setLocalUseCase] = useState(useCase);
  
  // Update local use case when the prop changes
  useEffect(() => {
    setLocalUseCase(useCase);
  }, [useCase]);
  
  // Initialize implementation plan if it doesn't exist
  if (!localUseCase.implementationPlan) {
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

  const handleClose = (isOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(isOpen);
    }
    
    if (!isOpen) {
      console.log("Drawer closed");
    }
  };

  return (
    <Drawer open={open} onOpenChange={handleClose}>
      {children && (
        <DrawerTrigger asChild>
          <div className="cursor-pointer">
            {children}
          </div>
        </DrawerTrigger>
      )}

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
              onClose={() => handleClose(false)}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ImplementationPlanDrawer;
