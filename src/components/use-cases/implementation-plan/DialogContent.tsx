
import React from "react";
import { DialogContent as ShadcnDialogContent, DialogFooter } from "@/components/ui/dialog";
import { UseCase } from "../data/types";
import ImplementationPlanContent from "./ImplementationPlanContent";
import PlanActionFooter from "../PlanActionFooter";
import DialogHeader from "./DialogHeader";

interface DialogContentProps {
  useCase: UseCase;
  onUseCaseUpdate: (updatedUseCase: UseCase) => void;
  onOpenChange: (open: boolean) => void;
}

const DialogContent: React.FC<DialogContentProps> = ({
  useCase,
  onUseCaseUpdate,
  onOpenChange
}) => {
  const handleClose = () => onOpenChange(false);
  
  return (
    <ShadcnDialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader title={useCase.name} />

      <div className="py-4">
        <ImplementationPlanContent
          useCase={useCase}
          onUseCaseUpdate={onUseCaseUpdate}
        />
      </div>

      <DialogFooter>
        <PlanActionFooter
          useCase={useCase}
          onUseCaseUpdate={onUseCaseUpdate}
          onClose={handleClose}
        />
      </DialogFooter>
    </ShadcnDialogContent>
  );
};

export default DialogContent;
