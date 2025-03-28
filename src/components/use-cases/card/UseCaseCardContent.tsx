
import React from "react";
import { CardContent } from "@/components/ui/card";
import EditableField from "../EditableField";
import ServiceLines from "./ServiceLines";
import { UseCase } from "../data/types";
import { Button } from "@/components/ui/button";
import { ImplementationPlanDialog } from "../implementation-plan";

interface UseCaseCardContentProps {
  useCase: UseCase;
  onFieldUpdate: (field: string, value: string) => void;
  onUseCaseUpdate: (updatedUseCase: UseCase) => void;
  priorityBadgeClass: string;
}

const UseCaseCardContent = ({
  useCase,
  onFieldUpdate,
  onUseCaseUpdate,
  priorityBadgeClass,
}: UseCaseCardContentProps) => {
  // Options for editable fields
  const complexityOptions = ["Low", "Medium", "High"];
  const valueOptions = ["Low", "Medium", "High"];
  const priorityOptions = ["low", "medium", "high", "strategic"];
  
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
        <ImplementationPlanDialog 
          useCase={useCase}
          onUseCaseUpdate={onUseCaseUpdate}
        >
          <Button 
            variant="default" 
            className="w-full text-sm bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {useCase.implementationPlan ? "View Implementation Plan" : "Create Implementation Plan"}
          </Button>
        </ImplementationPlanDialog>
      </div>
    </CardContent>
  );
};

export default UseCaseCardContent;
