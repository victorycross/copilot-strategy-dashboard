
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
import { isImplementationPlanInitialized } from "./ConnectionUtils";

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
  const [internalOpen, setInternalOpen] = useState<boolean>(open || false);
  
  // Update local state when props change
  useEffect(() => {
    setLocalUseCase(useCase);
  }, [useCase]);
  
  // Update internal open state when prop changes
  useEffect(() => {
    if (open !== undefined) {
      console.log("Dialog open state changed to:", open);
      setInternalOpen(open);
    }
  }, [open]);
  
  // Initialize implementation plan if it doesn't exist
  useEffect(() => {
    if (!isImplementationPlanInitialized(localUseCase.implementationPlan)) {
      console.log("Initializing implementation plan for:", localUseCase.name);
      const initializedUseCase = {
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
      setLocalUseCase(initializedUseCase);
      if (onUseCaseUpdate) {
        onUseCaseUpdate(initializedUseCase);
      }
    }
  }, [localUseCase, onUseCaseUpdate]);

  const handleUseCaseUpdate = (updatedUseCase: UseCase) => {
    console.log("Updating use case in dialog:", updatedUseCase.name);
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
      toast.success("Implementation plan updated");
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    console.log("Dialog open state changing to:", newOpen);
    setInternalOpen(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return (
    <Dialog open={internalOpen} onOpenChange={handleOpenChange}>
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
            onClose={() => handleOpenChange(false)}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImplementationPlanDialog;
