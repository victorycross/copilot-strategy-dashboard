
import { UseCase } from "./data/types";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import ImplementationPlanContent from "./implementation-plan/ImplementationPlanContent";
import PlanActionFooter from "./PlanActionFooter";

interface ImplementationPlanDetailProps {
  useCase: UseCase;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImplementationPlanDetail = ({ 
  useCase, 
  open, 
  onOpenChange 
}: ImplementationPlanDetailProps) => {
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
            onUseCaseUpdate={(updatedUseCase) => {
              // This will be handled by the parent
            }}
          />
          
          <div className="mt-6">
            <PlanActionFooter 
              useCase={useCase}
              onClose={() => onOpenChange(false)}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ImplementationPlanDetail;
