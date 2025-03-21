
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImplementationPlanDrawer from "./ImplementationPlanDrawer";

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
}

const UseCaseCard = ({ useCase, getCategoryColor, getPriorityBadgeClass }: UseCaseCardProps) => {
  const Icon = useCase.icon;
  const categoryColor = getCategoryColor(useCase.category);
  const priorityBadgeClass = getPriorityBadgeClass(useCase.priority);
  
  return (
    <motion.div 
      key={useCase.id}
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
              <CardTitle className="text-base">{useCase.name}</CardTitle>
            </div>
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${priorityBadgeClass}`}>
              {useCase.phase}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-muted-foreground">Complexity</p>
              <p className="font-medium">{useCase.complexity}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Cross-Service Value</p>
              <p className="font-medium">{useCase.crossServiceValue}</p>
            </div>
          </div>
          
          <ServiceLines serviceLines={useCase.serviceLines} />
          
          <div className="mt-3">
            <p className="text-xs text-muted-foreground">Key Benefit</p>
            <p className="text-sm font-medium">{useCase.keyBenefit}</p>
          </div>
          
          {useCase.implementationPlan && (
            <div className="mt-4">
              <ImplementationPlanDrawer useCase={useCase} />
            </div>
          )}
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
