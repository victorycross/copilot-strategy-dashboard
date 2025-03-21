
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Copy, LayoutDashboard, Map } from "lucide-react";
import { downloadImplementationPlan, cloneUseCase, UseCase } from "./utils/planUtils";

interface PlanActionFooterProps {
  useCase: UseCase;
  onUseCaseUpdate?: (updatedUseCase: any) => void;
}

const PlanActionFooter: React.FC<PlanActionFooterProps> = ({ 
  useCase, 
  onUseCaseUpdate 
}) => {
  const handleDownload = () => {
    downloadImplementationPlan(useCase);
  };

  const handleCloneUseCase = () => {
    cloneUseCase(useCase, onUseCaseUpdate);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-between">
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleCloneUseCase} variant="outline" className="flex items-center gap-2">
          <Copy className="h-4 w-4" />
          Clone Use Case
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <LayoutDashboard className="h-4 w-4" />
          Add to Dashboard
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Map className="h-4 w-4" />
          Add to Roadmap
        </Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Plan
        </Button>
      </div>
    </div>
  );
};

export default PlanActionFooter;
