
import { ReactNode } from "react";
import { UseCase } from "../data/types";
import { Button } from "@/components/ui/button";

interface ImplementationPlanTriggerProps {
  useCase: UseCase;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  asChild?: boolean;
}

const ImplementationPlanTrigger = ({ 
  useCase, 
  children, 
  onClick, 
  className = "",
  asChild = true 
}: ImplementationPlanTriggerProps) => {
  const hasImplementationPlan = useCase.implementationPlan && 
    Object.values(useCase.implementationPlan).some(value => value);

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div onClick={handleClick} className="w-full cursor-pointer">
      {children ? (
        children
      ) : (
        <Button 
          className={`w-full text-sm py-2 px-4 rounded ${className}`}
          variant="default"
        >
          {hasImplementationPlan 
            ? "View Implementation Plan" 
            : "Create Implementation Plan"}
        </Button>
      )}
    </div>
  );
};

export default ImplementationPlanTrigger;
