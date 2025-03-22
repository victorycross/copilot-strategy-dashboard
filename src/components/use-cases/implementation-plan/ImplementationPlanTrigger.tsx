
import { ReactNode } from "react";
import { UseCase } from "../data/types";

interface ImplementationPlanTriggerProps {
  useCase: UseCase;
  children?: ReactNode;
  onClick: () => void;
  asChild?: boolean;
}

const ImplementationPlanTrigger = ({ useCase, children, onClick, asChild = true }: ImplementationPlanTriggerProps) => {
  const hasImplementationPlan = useCase.implementationPlan && 
    Object.values(useCase.implementationPlan).some(value => value);

  return (
    <div onClick={onClick} className="cursor-pointer">
      {children ? (
        children
      ) : (
        <button 
          className="w-full text-sm py-2 px-4 rounded border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none"
        >
          {hasImplementationPlan 
            ? "View Implementation Plan" 
            : "Create Implementation Plan"}
        </button>
      )}
    </div>
  );
};

export default ImplementationPlanTrigger;
