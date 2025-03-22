
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { UseCase } from "./data/types";
import { UseCaseCardHeader, UseCaseCardContent } from "./card";
import { itemVariants } from "./card/animations";

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
  
  // State for implementation plan drawer
  const [implementationPlanOpen, setImplementationPlanOpen] = useState(false);

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
  
  // Handle opening the implementation plan dialog
  const handleOpenImplementationPlan = () => {
    console.log("Opening implementation plan dialog for:", localUseCase.name);
    setImplementationPlanOpen(true);
  };
  
  // Handle updating the use case from the implementation plan
  const handleUseCaseUpdate = (updatedUseCase: UseCase) => {
    console.log("Updating use case from implementation plan:", updatedUseCase.name);
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
          priorityBadgeClass={priorityBadgeClass}
          implementationPlanOpen={implementationPlanOpen}
          setImplementationPlanOpen={setImplementationPlanOpen}
          onOpenImplementationPlan={handleOpenImplementationPlan}
        />
      </Card>
    </motion.div>
  );
};

export default UseCaseCard;
