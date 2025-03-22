
import React from "react";
import { CardHeader, CardTitle } from "@/components/ui/card";
import ImplementationPlanDrawer from "../ImplementationPlanDrawer";
import EditableField from "../EditableField";
import { UseCase } from "../data/types";

interface UseCaseCardHeaderProps {
  useCase: UseCase;
  categoryColor: string;
  onFieldUpdate: (field: string, value: string) => void;
}

const UseCaseCardHeader = ({ 
  useCase, 
  categoryColor, 
  onFieldUpdate 
}: UseCaseCardHeaderProps) => {
  const Icon = useCase.icon;
  const hasImplementationPlan = !!useCase.implementationPlan;
  const phaseOptions = ["Phase 1", "Phase 2", "Phase 3"];

  return (
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${categoryColor}-light mr-3`}>
            <Icon className={`w-4 h-4 text-${categoryColor}`} />
          </div>
          {hasImplementationPlan ? (
            <ImplementationPlanDrawer 
              useCase={useCase}
              onUseCaseUpdate={(updatedUseCase) => {
                // Pass updates up to parent
                Object.keys(updatedUseCase).forEach(key => {
                  if (key !== 'implementationPlan' && useCase[key] !== updatedUseCase[key]) {
                    onFieldUpdate(key, updatedUseCase[key]);
                  }
                });
              }}
            >
              <CardTitle className="text-base cursor-pointer hover:text-primary hover:underline">
                {useCase.name}
              </CardTitle>
            </ImplementationPlanDrawer>
          ) : (
            <CardTitle className="text-base">{useCase.name}</CardTitle>
          )}
        </div>
        <EditableField 
          label="Phase"
          value={useCase.phase}
          options={phaseOptions}
          onValueChange={(value) => onFieldUpdate('phase', value)}
        />
      </div>
    </CardHeader>
  );
};

export default UseCaseCardHeader;
