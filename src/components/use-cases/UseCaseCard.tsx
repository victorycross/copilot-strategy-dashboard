
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { UseCase } from "./data/types";
import { UseCaseCardHeader, UseCaseCardContent } from "./card";
import { itemVariants } from "./card/animations";
import { toast } from "sonner";

interface UseCaseCardProps {
  useCase: UseCase;
  getCategoryColor: (categoryId: string) => string;
  getPriorityBadgeClass: (priority: string) => string;
  onUseCaseUpdate: (updatedUseCase: UseCase) => void;
}

const UseCaseCard = ({ 
  useCase, 
  getCategoryColor, 
  getPriorityBadgeClass,
  onUseCaseUpdate
}: UseCaseCardProps) => {
  const categoryColor = getCategoryColor(useCase.category);
  const priorityBadgeClass = getPriorityBadgeClass(useCase.priority);
  
  // Local state for the use case data
  const [localUseCase, setLocalUseCase] = useState<UseCase>(useCase);
  // State for drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  // Update local state when props change
  useEffect(() => {
    setLocalUseCase(useCase);
  }, [useCase]);

  // Handle field updates
  const handleFieldUpdate = (field: string, value: string) => {
    const updatedUseCase = { ...localUseCase, [field]: value };
    setLocalUseCase(updatedUseCase);
    onUseCaseUpdate(updatedUseCase);
  };
  
  // Handle opening the drawer
  const handleOpenDrawer = () => {
    // Initialize implementation plan if it doesn't exist
    if (!localUseCase.implementationPlan) {
      const updatedUseCase = {
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
      setLocalUseCase(updatedUseCase);
      onUseCaseUpdate(updatedUseCase);
    }
    setOpenDrawer(true);
  };

  // Handle updating the use case from the implementation plan
  const handleUseCaseUpdate = (updatedUseCase: UseCase) => {
    setLocalUseCase(updatedUseCase);
    onUseCaseUpdate(updatedUseCase);
    toast.success(`Updated implementation plan for ${updatedUseCase.name}`);
  };
  
  return (
    <motion.div 
      key={localUseCase.id}
      variants={itemVariants}
      className="data-card"
    >
      <Card className="h-full">
        <UseCaseCardHeader 
          useCase={localUseCase}
          categoryColor={categoryColor}
          onFieldUpdate={handleFieldUpdate}
        />
        <UseCaseCardContent 
          useCase={localUseCase}
          onFieldUpdate={handleFieldUpdate}
          onUseCaseUpdate={handleUseCaseUpdate}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          handleOpenDrawer={handleOpenDrawer}
          priorityBadgeClass={priorityBadgeClass}
        />
      </Card>
    </motion.div>
  );
};

export default UseCaseCard;
