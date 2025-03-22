
import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { UseCase } from "../data/types";
import DialogContent from "./DialogContent";
import { useImplementationPlan } from "./useImplementationPlan";

interface ImplementationPlanDialogProps {
  useCase: UseCase;
  children?: React.ReactNode;
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ImplementationPlanDialog = ({
  useCase,
  children,
  onUseCaseUpdate,
  open,
  onOpenChange
}: ImplementationPlanDialogProps) => {
  const {
    localUseCase,
    internalOpen,
    handleUseCaseUpdate,
    handleOpenChange
  } = useImplementationPlan(useCase, onUseCaseUpdate, open);
  
  const handleOpenChangeWithCallback = (newOpen: boolean) => {
    handleOpenChange(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return (
    <Dialog open={internalOpen} onOpenChange={handleOpenChangeWithCallback}>
      {children && (
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
      )}
      
      <DialogContent
        useCase={localUseCase}
        onUseCaseUpdate={handleUseCaseUpdate}
        onOpenChange={handleOpenChangeWithCallback}
      />
    </Dialog>
  );
};

export default ImplementationPlanDialog;
