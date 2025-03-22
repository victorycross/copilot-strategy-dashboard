
import { 
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode, useState } from "react";
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
  const [localOpen, setLocalOpen] = useState(false);
  
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

  const handleClose = (isOpen: boolean) => {
    // Update local state if we're not using controlled props
    if (onOpenChange === undefined) {
      setLocalOpen(isOpen);
    } else {
      onOpenChange(isOpen);
    }
    
    if (!isOpen) {
      // This will trigger when the drawer is closed
      console.log("Drawer closed");
    }
  };

  // Determine if we're using controlled or uncontrolled open state
  const isControlled = open !== undefined && onOpenChange !== undefined;
  const drawerOpen = isControlled ? open : localOpen;
  
  return (
    <Drawer open={drawerOpen} onOpenChange={handleClose}>
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
