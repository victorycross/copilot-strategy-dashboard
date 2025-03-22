
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { UseCase } from "./data/types";
import { UseCaseCardHeader, UseCaseCardContent } from "./card";
import { itemVariants } from "./card/animations";

interface UseCaseCardProps {
  useCase: UseCase;
  getCategoryColor: (categoryId: string) => string;
  getPriorityBadgeClass: (priority: string) => string;
  onUseCaseUpdate?: (updatedUseCase: any) => void;
}

const UseCaseCard = ({ 
  useCase, 
  getCategoryColor, 
  getPriorityBadgeClass,
  onUseCaseUpdate = () => {} // Default no-op function if not provided
}: UseCaseCardProps) => {
  const categoryColor = getCategoryColor(useCase.category);
  const priorityBadgeClass = getPriorityBadgeClass(useCase.priority);
  
  // Local state for the use case data
  const [localUseCase, setLocalUseCase] = useState(useCase);
  // State for drawer
  const [openDrawer, setOpenDrawer] = useState(false);

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
        />
      </Card>
    </motion.div>
  );
};

export default UseCaseCard;
