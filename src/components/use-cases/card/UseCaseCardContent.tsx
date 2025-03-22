
import React from "react";
import { CardContent } from "@/components/ui/card";
import EditableField from "../EditableField";
import ServiceLines from "./ServiceLines";
import { UseCase } from "../data/types";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import ImplementationPlanContent from "../implementation-plan/ImplementationPlanContent";
import PlanActionFooter from "../PlanActionFooter";

interface UseCaseCardContentProps {
  useCase: UseCase;
  onFieldUpdate: (field: string, value: string) => void;
  onUseCaseUpdate: (updatedUseCase: UseCase) => void;
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
  handleOpenDrawer: () => void;
  priorityBadgeClass: string;
}

const UseCaseCardContent = ({
  useCase,
  onFieldUpdate,
  onUseCaseUpdate,
  openDrawer,
  setOpenDrawer,
  handleOpenDrawer,
  priorityBadgeClass
}: UseCaseCardContentProps) => {
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
          className="w-full text-sm bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleOpenDrawer}
        >
          {hasImplementationPlan ? "View Implementation Plan" : "Create Implementation Plan"}
        </Button>
      </div>
      
      {/* Implementation Plan Drawer */}
      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerContent className="max-h-[85vh]">
          <div className="mx-auto w-full max-w-[800px] p-6">
            <h2 className="text-xl font-semibold mb-2 text-primary">Implementation Plan: {useCase.name}</h2>
            <p className="text-muted-foreground mb-6">
              How to implement this use case using Microsoft technologies
            </p>
            
            <ImplementationPlanContent 
              useCase={useCase} 
              onUseCaseUpdate={onUseCaseUpdate}
            />
            
            <div className="mt-6">
              <PlanActionFooter 
                useCase={useCase}
                onUseCaseUpdate={onUseCaseUpdate}
                onClose={() => setOpenDrawer(false)}
              />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </CardContent>
  );
};

export default UseCaseCardContent;
