
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
  console.log("ImplementationPlanDetail rendering for:", useCase.name, "open:", open);
  const [localUseCase, setLocalUseCase] = useState(useCase);

  // Update local state when the prop changes
  useEffect(() => {
    console.log("ImplementationPlanDetail useCase prop changed:", useCase.name);
    setLocalUseCase(useCase);
  }, [useCase]);
  
  // Initialize implementation plan if it doesn't exist
  useEffect(() => {
    if (!localUseCase.implementationPlan) {
      console.log("Initializing empty implementation plan in detail component");
      const updatedUseCase = {
        ...localUseCase,
        implementationPlan: {
          msCopilot: {
            summary: "",
            connections: [],
            detailedInstructions: ""
          },
          powerAutomate: {
            summary: "",
            connections: [],
            detailedInstructions: ""
          },
          powerApps: {
            summary: "",
            connections: [],
            detailedInstructions: ""
          },
          copilotStudio: {
            summary: "",
            connections: [],
            detailedInstructions: ""
          },
          powerBI: {
            summary: "",
            connections: [],
            detailedInstructions: ""
          },
          sharePoint: {
            summary: "",
            connections: [],
            detailedInstructions: ""
          }
        }
      };
      setLocalUseCase(updatedUseCase);
      
      if (onUseCaseUpdate) {
        console.log("Updating use case with initialized implementation plan");
        onUseCaseUpdate(updatedUseCase);
      }
    }
  }, [localUseCase, onUseCaseUpdate]);

  const handleUseCaseUpdate = (updatedUseCase: UseCase) => {
    console.log("ImplementationPlanDetail handleUseCaseUpdate:", updatedUseCase.name);
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
      toast.success("Implementation plan updated");
    }
  };

  const handleClose = () => {
    console.log("ImplementationPlanDetail closing");
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
