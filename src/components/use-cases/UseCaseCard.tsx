
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";

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
          <div className="mt-3">
            <p className="text-xs text-muted-foreground">Service Lines</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {useCase.serviceLines.map(sl => (
                <span key={sl} className="inline-block px-2 py-0.5 bg-secondary text-xs rounded">
                  {sl}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xs text-muted-foreground">Key Benefit</p>
            <p className="text-sm font-medium">{useCase.keyBenefit}</p>
          </div>
          
          {useCase.implementationPlan && (
            <div className="mt-4">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    View Implementation Plan
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-4xl">
                    <DrawerHeader>
                      <DrawerTitle>Implementation Plan: {useCase.name}</DrawerTitle>
                      <DrawerDescription>
                        How to implement this use case using Microsoft technologies
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <div className="space-y-6">
                        {useCase.implementationPlan.msCopilot && (
                          <div className="border rounded-lg p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M9 8h7.5a2.5 2.5 0 0 1 0 5H11v3"/>
                              </svg>
                              Microsoft Copilot
                            </h3>
                            <p>{useCase.implementationPlan.msCopilot}</p>
                          </div>
                        )}
                        
                        {useCase.implementationPlan.powerAutomate && (
                          <div className="border rounded-lg p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                              </svg>
                              Power Automate
                            </h3>
                            <p>{useCase.implementationPlan.powerAutomate}</p>
                          </div>
                        )}
                        
                        {useCase.implementationPlan.powerApps && (
                          <div className="border rounded-lg p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                                <line x1="3" x2="21" y1="9" y2="9"/>
                                <line x1="9" x2="9" y1="21" y2="9"/>
                              </svg>
                              Power Apps
                            </h3>
                            <p>{useCase.implementationPlan.powerApps}</p>
                          </div>
                        )}
                        
                        {useCase.implementationPlan.copilotStudio && (
                          <div className="border rounded-lg p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                                <rect width="6" height="14" x="4" y="5" rx="2"/>
                                <rect width="6" height="10" x="14" y="7" rx="2"/>
                                <path d="M4 2v20"/>
                                <path d="M14 2v20"/>
                              </svg>
                              Copilot Studio
                            </h3>
                            <p>{useCase.implementationPlan.copilotStudio}</p>
                          </div>
                        )}
                        
                        {useCase.implementationPlan.powerBI && (
                          <div className="border rounded-lg p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                                <path d="M3 3v18h18"/>
                                <path d="M18 12V8"/>
                                <path d="M12 18v-9"/>
                                <path d="M7 18v-5"/>
                              </svg>
                              Power BI
                            </h3>
                            <p>{useCase.implementationPlan.powerBI}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UseCaseCard;
