
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UseCase } from "../data/types";
import ImplementationPlanContent from "./ImplementationPlanContent";
import PlanActionFooter from "../PlanActionFooter";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
  const [localUseCase, setLocalUseCase] = useState<UseCase>(useCase);
  
  // Update local state when props change
  useEffect(() => {
    setLocalUseCase(useCase);
  }, [useCase]);
  
  // Initialize implementation plan if it doesn't exist
  useEffect(() => {
    if (!localUseCase.implementationPlan) {
      const initializedUseCase = {
        ...localUseCase,
        implementationPlan: {
          msCopilot: "",
          powerAutomate: "",
          powerApps: "",
          copilotStudio: "",
          powerBI: "",
          sharePoint: ""
        }
      };
      setLocalUseCase(initializedUseCase);
      if (onUseCaseUpdate) {
        onUseCaseUpdate(initializedUseCase);
      }
    }
  }, [localUseCase, onUseCaseUpdate]);

  const handleUseCaseUpdate = (updatedUseCase: UseCase) => {
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
      toast.success("Implementation plan updated");
    }
  };

  const handleClose = () => {
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && (
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
      )}
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Implementation Plan: {localUseCase.name}</DialogTitle>
          <DialogDescription>
            How to implement this use case using Microsoft technologies
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <ImplementationPlanContent
            useCase={localUseCase}
            onUseCaseUpdate={handleUseCaseUpdate}
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
  );
};

export default ImplementationPlanDialog;
