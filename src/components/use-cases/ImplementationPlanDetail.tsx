
import { UseCase } from "./data/types";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import ImplementationPlanContent from "./implementation-plan/ImplementationPlanContent";
import PlanActionFooter from "./PlanActionFooter";
import { toast } from "sonner";

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

  const handleUseCaseUpdate = (updatedUseCase: UseCase) => {
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
      toast.success("Implementation plan updated");
    }
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        <div className="mx-auto w-full max-w-[800px] p-6">
          <h2 className="text-xl font-semibold mb-2 text-primary">Implementation Plan: {useCase.name}</h2>
          <p className="text-muted-foreground mb-6">
            How to implement this use case using Microsoft technologies
          </p>
          
          <ImplementationPlanContent 
            useCase={useCase} 
            onUseCaseUpdate={handleUseCaseUpdate}
          />
          
          <div className="mt-6">
            <PlanActionFooter 
              useCase={useCase}
              onUseCaseUpdate={onUseCaseUpdate}
              onClose={() => onOpenChange(false)}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ImplementationPlanDetail;
