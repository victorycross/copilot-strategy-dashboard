
import { useState, useEffect } from "react";
import { UseCase } from "../data/types";
import { isImplementationPlanInitialized } from "./ConnectionUtils";
import { toast } from "sonner";

export const useImplementationPlan = (
  useCase: UseCase,
  onUseCaseUpdate?: (updatedUseCase: UseCase) => void,
  open?: boolean
) => {
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
  };

  return {
    localUseCase,
    internalOpen,
    handleUseCaseUpdate,
    handleOpenChange
  };
};
