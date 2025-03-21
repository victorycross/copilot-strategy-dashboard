
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
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ReactNode } from "react";

interface ImplementationPlanProps {
  useCase: {
    name: string;
    implementationPlan?: {
      msCopilot?: string;
      powerAutomate?: string;
      powerApps?: string;
      copilotStudio?: string;
      powerBI?: string;
    };
  };
  children?: ReactNode;
}

const ImplementationPlanDrawer = ({ useCase, children }: ImplementationPlanProps) => {
  if (!useCase.implementationPlan) return null;
  
  const handleDownload = () => {
    // Create content for the text file
    let content = `Implementation Plan: ${useCase.name}\n\n`;
    
    if (useCase.implementationPlan.msCopilot) {
      content += `Microsoft Copilot:\n${useCase.implementationPlan.msCopilot}\n\n`;
    }
    
    if (useCase.implementationPlan.powerAutomate) {
      content += `Power Automate:\n${useCase.implementationPlan.powerAutomate}\n\n`;
    }
    
    if (useCase.implementationPlan.powerApps) {
      content += `Power Apps:\n${useCase.implementationPlan.powerApps}\n\n`;
    }
    
    if (useCase.implementationPlan.copilotStudio) {
      content += `Copilot Studio:\n${useCase.implementationPlan.copilotStudio}\n\n`;
    }
    
    if (useCase.implementationPlan.powerBI) {
      content += `Power BI:\n${useCase.implementationPlan.powerBI}\n\n`;
    }
    
    // Create a blob and download it
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${useCase.name.replace(/\s+/g, '-').toLowerCase()}-implementation-plan.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children ? (
          children
        ) : (
          <Button variant="outline" size="sm" className="w-full">
            View Implementation Plan
          </Button>
        )}
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
                <ImplementationTechnology 
                  title="Microsoft Copilot"
                  content={useCase.implementationPlan.msCopilot}
                  iconColor="text-blue-500"
                  icon={<MsCopilotIcon />}
                />
              )}
              
              {useCase.implementationPlan.powerAutomate && (
                <ImplementationTechnology 
                  title="Power Automate"
                  content={useCase.implementationPlan.powerAutomate}
                  iconColor="text-purple-500"
                  icon={<PowerAutomateIcon />}
                />
              )}
              
              {useCase.implementationPlan.powerApps && (
                <ImplementationTechnology 
                  title="Power Apps"
                  content={useCase.implementationPlan.powerApps}
                  iconColor="text-green-500"
                  icon={<PowerAppsIcon />}
                />
              )}
              
              {useCase.implementationPlan.copilotStudio && (
                <ImplementationTechnology 
                  title="Copilot Studio"
                  content={useCase.implementationPlan.copilotStudio}
                  iconColor="text-yellow-500"
                  icon={<CopilotStudioIcon />}
                />
              )}
              
              {useCase.implementationPlan.powerBI && (
                <ImplementationTechnology 
                  title="Power BI"
                  content={useCase.implementationPlan.powerBI}
                  iconColor="text-red-500"
                  icon={<PowerBIIcon />}
                />
              )}
            </div>
          </div>
          <DrawerFooter className="flex-row gap-3 justify-between sm:justify-end">
            <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Plan
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

// Technology component for each implementation section
interface ImplementationTechnologyProps {
  title: string;
  content: string;
  iconColor: string;
  icon: React.ReactNode;
}

const ImplementationTechnology = ({ title, content, iconColor, icon }: ImplementationTechnologyProps) => (
  <div className="border rounded-lg p-4">
    <h3 className={`font-semibold flex items-center gap-2 mb-2`}>
      <span className={iconColor}>{icon}</span>
      {title}
    </h3>
    <p>{content}</p>
  </div>
);

// Icons for each technology
const MsCopilotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 8h7.5a2.5 2.5 0 0 1 0 5H11v3"/>
  </svg>
);

const PowerAutomateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const PowerAppsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <line x1="3" x2="21" y1="9" y2="9"/>
    <line x1="9" x2="9" y1="21" y2="9"/>
  </svg>
);

const CopilotStudioIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="6" height="14" x="4" y="5" rx="2"/>
    <rect width="6" height="10" x="14" y="7" rx="2"/>
    <path d="M4 2v20"/>
    <path d="M14 2v20"/>
  </svg>
);

const PowerBIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="M18 12V8"/>
    <path d="M12 18v-9"/>
    <path d="M7 18v-5"/>
  </svg>
);

export default ImplementationPlanDrawer;
