
import { ReactNode } from "react";
import { UseCase } from "../data/types";
import { DialogTrigger } from "@/components/ui/dialog";

interface ImplementationPlanTriggerProps {
  useCase: UseCase;
  children?: ReactNode;
  asChild?: boolean;
}

const ImplementationPlanTrigger = ({ useCase, children, asChild = true }: ImplementationPlanTriggerProps) => {
  const hasImplementationPlan = useCase.implementationPlan && 
    Object.values(useCase.implementationPlan).some(value => value);

  return (
    <DialogTrigger asChild={asChild}>
      {children ? (
        <div className="cursor-pointer">
          {children}
        </div>
      ) : (
        <button 
          className="w-full text-sm py-2 px-4 rounded border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none"
        >
          {hasImplementationPlan 
            ? "View Implementation Plan" 
            : "Create Implementation Plan"}
        </button>
      )}
    </DialogTrigger>
  );
};

export default ImplementationPlanTrigger;
