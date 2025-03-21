
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import TechnologySection from "./TechnologySection";
import PlanActionFooter from "./PlanActionFooter";
import { UseCase } from "./utils/planUtils";
import {
  MsCopilotIcon,
  PowerAutomateIcon,
  PowerAppsIcon,
  CopilotStudioIcon,
  PowerBIIcon
} from "./icons/TechnologyIcons";
import { toast } from "sonner";
import { X } from "lucide-react";

interface ImplementationPlanProps {
  useCase: UseCase;
  children?: ReactNode;
  onUseCaseUpdate?: (updatedUseCase: any) => void;
}

const ImplementationPlanDrawer = ({ useCase, children, onUseCaseUpdate }: ImplementationPlanProps) => {
  const [localUseCase, setLocalUseCase] = useState(useCase);
  const [isOpen, setIsOpen] = useState(false);
  
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

  const handlePlanUpdate = (field: string, value: string) => {
    const updatedUseCase = { 
      ...localUseCase, 
      implementationPlan: { 
        ...localUseCase.implementationPlan, 
        [field]: value 
      } 
    };
    
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
    }
    toast.success(`Updated ${field} implementation details`);
  };

  const handleOpen = () => {
    console.log("Opening dialog");
    setIsOpen(true);
  };
  
  const handleClose = () => {
    console.log("Closing dialog");
    setIsOpen(false);
  };
  
  // We need to handle clicks with stopPropagation to prevent event bubbling issues
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleOpen();
  };
  
  return (
    <>
      {children ? (
        <div 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleOpen();
          }}
          className="cursor-pointer"
        >
          {children}
        </div>
      ) : (
        <button 
          className="w-full text-sm py-2 px-4 rounded border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none"
          onClick={handleButtonClick}
        >
          {localUseCase.implementationPlan && 
           Object.values(localUseCase.implementationPlan).some(value => value) 
            ? "View Implementation Plan" 
            : "Create Implementation Plan"}
        </button>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Implementation Plan: {localUseCase.name}</DialogTitle>
            <DialogDescription>
              How to implement this use case using Microsoft technologies
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <div className="space-y-6 py-4">
            {/* Microsoft Copilot section */}
            <TechnologySection
              title="Microsoft Copilot"
              icon={<MsCopilotIcon />}
              colorClass="text-blue-500"
              value={localUseCase.implementationPlan.msCopilot || ""}
              onValueChange={(value) => handlePlanUpdate('msCopilot', value)}
            />
            
            {/* Power Automate section */}
            <TechnologySection
              title="Power Automate"
              icon={<PowerAutomateIcon />}
              colorClass="text-purple-500"
              value={localUseCase.implementationPlan.powerAutomate || ""}
              onValueChange={(value) => handlePlanUpdate('powerAutomate', value)}
            />
            
            {/* Power Apps section */}
            <TechnologySection
              title="Power Apps"
              icon={<PowerAppsIcon />}
              colorClass="text-green-500"
              value={localUseCase.implementationPlan.powerApps || ""}
              onValueChange={(value) => handlePlanUpdate('powerApps', value)}
            />
            
            {/* Copilot Studio section */}
            <TechnologySection
              title="Copilot Studio"
              icon={<CopilotStudioIcon />}
              colorClass="text-yellow-500"
              value={localUseCase.implementationPlan.copilotStudio || ""}
              onValueChange={(value) => handlePlanUpdate('copilotStudio', value)}
            />
            
            {/* Power BI section */}
            <TechnologySection
              title="Power BI"
              icon={<PowerBIIcon />}
              colorClass="text-red-500"
              value={localUseCase.implementationPlan.powerBI || ""}
              onValueChange={(value) => handlePlanUpdate('powerBI', value)}
            />
          </div>
          <DialogFooter>
            <PlanActionFooter 
              useCase={localUseCase} 
              onUseCaseUpdate={onUseCaseUpdate}
              onClose={handleClose}
            />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImplementationPlanDrawer;
