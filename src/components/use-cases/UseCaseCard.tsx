
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImplementationPlanDrawer from "./ImplementationPlanDrawer";
import EditableField from "./EditableField";
import { useState } from "react";

// Animation variants for the card
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

interface UseCaseCardProps {
  useCase: {
    id: number;
    name: string;
    description: string;
    category: string;
    serviceLines: string[];
    icon: LucideIcon;
    priority: string;
    phase: string;
    complexity: string;
    crossServiceValue: string;
    keyBenefit: string;
    implementationPlan?: {
      msCopilot?: string;
      powerAutomate?: string;
      powerApps?: string;
      copilotStudio?: string;
      powerBI?: string;
    };
  };
  getCategoryColor: (categoryId: string) => string;
  getPriorityBadgeClass: (priority: string) => string;
  onUseCaseUpdate?: (updatedUseCase: any) => void;
}

const UseCaseCard = ({ 
  useCase, 
  getCategoryColor, 
  getPriorityBadgeClass,
  onUseCaseUpdate = () => {} // Default no-op function if not provided
}: UseCaseCardProps) => {
  const Icon = useCase.icon;
  const categoryColor = getCategoryColor(useCase.category);
  const priorityBadgeClass = getPriorityBadgeClass(useCase.priority);
  
  // Determine if the card has an implementation plan
  const hasImplementationPlan = !!useCase.implementationPlan;
  
  // Local state for the use case data
  const [localUseCase, setLocalUseCase] = useState(useCase);

  // Handle field updates
  const handleFieldUpdate = (field: string, value: string) => {
    const updatedUseCase = { ...localUseCase, [field]: value };
    setLocalUseCase(updatedUseCase);
    onUseCaseUpdate(updatedUseCase);
  };

  // Options for editable fields
  const phaseOptions = ["Phase 1", "Phase 2", "Phase 3"];
  const complexityOptions = ["Low", "Medium", "High"];
  const valueOptions = ["Low", "Medium", "High"];
  const priorityOptions = ["low", "medium", "high", "strategic"];
  
  return (
    <motion.div 
      key={localUseCase.id}
      variants={itemVariants}
      className="data-card"
    >
      <Card className="h-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${categoryColor}-light mr-3`}>
                <Icon className={`w-4 h-4 text-${categoryColor}`} />
              </div>
              {hasImplementationPlan ? (
                <ImplementationPlanDrawer 
                  useCase={localUseCase}
                  onUseCaseUpdate={onUseCaseUpdate}
                >
                  <CardTitle className="text-base cursor-pointer hover:text-primary hover:underline">
                    {localUseCase.name}
                  </CardTitle>
                </ImplementationPlanDrawer>
              ) : (
                <CardTitle className="text-base">{localUseCase.name}</CardTitle>
              )}
            </div>
            <EditableField 
              label="Phase"
              value={localUseCase.phase}
              options={phaseOptions}
              onValueChange={(value) => handleFieldUpdate('phase', value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">{localUseCase.description}</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <EditableField 
              label="Complexity"
              value={localUseCase.complexity}
              options={complexityOptions}
              onValueChange={(value) => handleFieldUpdate('complexity', value)}
            />
            <EditableField 
              label="Cross-Service Value"
              value={localUseCase.crossServiceValue}
              options={valueOptions}
              onValueChange={(value) => handleFieldUpdate('crossServiceValue', value)}
            />
          </div>
          
          <ServiceLines serviceLines={localUseCase.serviceLines} />
          
          <div className="mt-3">
            <p className="text-xs text-muted-foreground">Key Benefit</p>
            <p className="text-sm font-medium">{localUseCase.keyBenefit}</p>
          </div>

          <div className="mt-3">
            <EditableField 
              label="Priority"
              value={localUseCase.priority}
              options={priorityOptions}
              onValueChange={(value) => handleFieldUpdate('priority', value)}
            />
          </div>
          
          <div className="mt-4">
            <ImplementationPlanDrawer 
              useCase={localUseCase}
              onUseCaseUpdate={onUseCaseUpdate}
            >
              <button className="w-full text-sm py-2 px-4 rounded border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none">
                {hasImplementationPlan ? "View Implementation Plan" : "Create Implementation Plan"}
              </button>
            </ImplementationPlanDrawer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Simple component for service lines section
interface ServiceLinesProps {
  serviceLines: string[];
}

const ServiceLines = ({ serviceLines }: ServiceLinesProps) => (
  <div className="mt-3">
    <p className="text-xs text-muted-foreground">Service Lines</p>
    <div className="flex flex-wrap gap-1 mt-1">
      {serviceLines.map(sl => (
        <span key={sl} className="inline-block px-2 py-0.5 bg-secondary text-xs rounded">
          {sl}
        </span>
      ))}
    </div>
  </div>
);

export default UseCaseCard;
