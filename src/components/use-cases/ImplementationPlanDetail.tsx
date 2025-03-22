
import { UseCase } from "./data/types";
import ImplementationPlanSheet from "./ImplementationPlanSheet";

interface ImplementationPlanDetailProps {
  useCase: UseCase;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImplementationPlanDetail = ({ 
  useCase, 
  open, 
  onOpenChange 
}: ImplementationPlanDetailProps) => {
  return (
    <ImplementationPlanSheet
      useCase={useCase}
      open={open}
      onOpenChange={onOpenChange}
    />
  );
};

export default ImplementationPlanDetail;
