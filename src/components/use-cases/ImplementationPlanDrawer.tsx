
import { 
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
      // This will trigger when the drawer is closed
      console.log("Drawer closed");
    }
  };
  
  return (
    <Drawer onOpenChange={handleClose}>
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
          <h2 className="text-xl font-semibold mb-2">Implementation Plan: {localUseCase.name}</h2>
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
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ImplementationPlanDrawer;
