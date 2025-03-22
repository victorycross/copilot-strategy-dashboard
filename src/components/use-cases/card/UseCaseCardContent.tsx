
import React, { useState } from "react";
import { CardContent } from "@/components/ui/card";
import EditableField from "../EditableField";
import ServiceLines from "./ServiceLines";
import ImplementationPlanDrawer from "../ImplementationPlanDrawer";
import { UseCase } from "../data/types";
import { Button } from "@/components/ui/button";

interface UseCaseCardContentProps {
  useCase: UseCase;
  onFieldUpdate: (field: string, value: string) => void;
  onUseCaseUpdate: (updatedUseCase: any) => void;
}

const UseCaseCardContent = ({
  useCase,
  onFieldUpdate,
  onUseCaseUpdate
}: UseCaseCardContentProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  
  // Options for editable fields
  const complexityOptions = ["Low", "Medium", "High"];
  const valueOptions = ["Low", "Medium", "High"];
  const priorityOptions = ["low", "medium", "high", "strategic"];
  
  // Determine if the card has an implementation plan
  const hasImplementationPlan = !!useCase.implementationPlan;

  return (
    <CardContent>
      <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <EditableField 
          label="Complexity"
          value={useCase.complexity}
          options={complexityOptions}
          onValueChange={(value) => onFieldUpdate('complexity', value)}
        />
        <EditableField 
          label="Cross-Service Value"
          value={useCase.crossServiceValue}
          options={valueOptions}
          onValueChange={(value) => onFieldUpdate('crossServiceValue', value)}
        />
      </div>
      
      <ServiceLines serviceLines={useCase.serviceLines} />
      
      <div className="mt-3">
        <p className="text-xs text-muted-foreground">Key Benefit</p>
        <p className="text-sm font-medium">{useCase.keyBenefit}</p>
      </div>

      <div className="mt-3">
        <EditableField 
          label="Priority"
          value={useCase.priority}
          options={priorityOptions}
          onValueChange={(value) => onFieldUpdate('priority', value)}
        />
      </div>
      
      <div className="mt-4">
        <Button 
          variant="default" 
          className="w-full text-sm text-primary-foreground bg-primary hover:bg-primary/90"
          onClick={() => setOpenDrawer(true)}
        >
          {hasImplementationPlan ? "View Implementation Plan" : "Create Implementation Plan"}
        </Button>
        
        <ImplementationPlanDrawer 
          useCase={useCase}
          open={openDrawer}
          onOpenChange={setOpenDrawer}
          onUseCaseUpdate={onUseCaseUpdate}
        />
      </div>
    </CardContent>
  );
};

export default UseCaseCardContent;
