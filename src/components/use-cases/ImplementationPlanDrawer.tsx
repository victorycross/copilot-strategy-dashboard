
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
}

const ImplementationPlanDrawer = ({ useCase, children, onUseCaseUpdate }: ImplementationPlanProps) => {
  const [localUseCase, setLocalUseCase] = useState(useCase);
  const [open, setOpen] = useState(false);
  
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
    setOpen(isOpen);
    if (!isOpen) {
      // This will trigger when the drawer is closed
      console.log("Drawer closed");
    }
  };
  
  return (
    <Drawer open={open} onOpenChange={handleClose}>
      <DrawerTrigger asChild>
        {children ? (
          <div className="cursor-pointer">
            {children}
          </div>
        ) : (
          <button className="w-full text-sm py-2 px-4 rounded border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none">
            {localUseCase.implementationPlan && Object.values(localUseCase.implementationPlan).some(value => value) 
              ? "View Implementation Plan" 
              : "Create Implementation Plan"}
          </button>
        )}
      </DrawerTrigger>

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
