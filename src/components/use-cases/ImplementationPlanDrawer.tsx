
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, FilePlus, LayoutDashboard, Map, Copy } from "lucide-react";
import { ReactNode, useState } from "react";
import { toast } from "sonner";
import EditableField from "./EditableField";

interface ImplementationPlanProps {
  useCase: {
    id: number;
    name: string;
    phase: string;
    complexity: string;
    crossServiceValue: string;
    priority: string;
    implementationPlan?: {
      msCopilot?: string;
      powerAutomate?: string;
      powerApps?: string;
      copilotStudio?: string;
      powerBI?: string;
    };
  };
  children?: ReactNode;
  onUseCaseUpdate?: (updatedUseCase: any) => void;
}

const ImplementationPlanDrawer = ({ useCase, children, onUseCaseUpdate }: ImplementationPlanProps) => {
  const [localUseCase, setLocalUseCase] = useState(useCase);
  
  if (!localUseCase.implementationPlan) {
    // Create a default implementation plan if it doesn't exist
    localUseCase.implementationPlan = {
      msCopilot: "",
      powerAutomate: "",
      powerApps: "",
      copilotStudio: "",
      powerBI: ""
    };
  }
  
  const handleDownload = () => {
    // Create content for the text file
    let content = `Implementation Plan: ${localUseCase.name}\n\n`;
    
    if (localUseCase.implementationPlan?.msCopilot) {
      content += `Microsoft Copilot:\n${localUseCase.implementationPlan.msCopilot}\n\n`;
    }
    
    if (localUseCase.implementationPlan?.powerAutomate) {
      content += `Power Automate:\n${localUseCase.implementationPlan.powerAutomate}\n\n`;
    }
    
    if (localUseCase.implementationPlan?.powerApps) {
      content += `Power Apps:\n${localUseCase.implementationPlan.powerApps}\n\n`;
    }
    
    if (localUseCase.implementationPlan?.copilotStudio) {
      content += `Copilot Studio:\n${localUseCase.implementationPlan.copilotStudio}\n\n`;
    }
    
    if (localUseCase.implementationPlan?.powerBI) {
      content += `Power BI:\n${localUseCase.implementationPlan.powerBI}\n\n`;
    }
    
    // Create a blob and download it
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${localUseCase.name.replace(/\s+/g, '-').toLowerCase()}-implementation-plan.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Implementation plan downloaded");
  };

  const handlePlanUpdate = (field: string, value: string) => {
    const updatedUseCase = { 
      ...localUseCase, 
      implementationPlan: { 
        ...localUseCase.implementationPlan, 
        [field]: value 
      } 
    };
    
    setLocalUseCase(updatedUseCase);
    if (onUseCaseUpdate) {
      onUseCaseUpdate(updatedUseCase);
    }
  };

  const handleCloneUseCase = () => {
    // Create a new use case based on the current one
    const newUseCase = {
      ...localUseCase,
      id: Date.now(), // Generate a unique ID
      name: `${localUseCase.name} (Copy)`,
    };
    
    if (onUseCaseUpdate) {
      onUseCaseUpdate({
        ...newUseCase,
        isNew: true // Flag to indicate this is a new use case to add to the list
      });
      toast.success("Use case cloned successfully");
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button variant="outline" size="sm" className="w-full">
            View Implementation Plan
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Implementation Plan: {localUseCase.name}</DialogTitle>
          <DialogDescription>
            How to implement this use case using Microsoft technologies
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Microsoft Copilot section */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold flex items-center gap-2 mb-2 text-blue-500">
              <MsCopilotIcon />
              Microsoft Copilot
            </h3>
            <EditableField 
              label="Implementation Steps"
              value={localUseCase.implementationPlan.msCopilot || ""}
              multiline={true}
              onValueChange={(value) => handlePlanUpdate('msCopilot', value)}
            />
          </div>
          
          {/* Power Automate section */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold flex items-center gap-2 mb-2 text-purple-500">
              <PowerAutomateIcon />
              Power Automate
            </h3>
            <EditableField 
              label="Implementation Steps"
              value={localUseCase.implementationPlan.powerAutomate || ""}
              multiline={true}
              onValueChange={(value) => handlePlanUpdate('powerAutomate', value)}
            />
          </div>
          
          {/* Power Apps section */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold flex items-center gap-2 mb-2 text-green-500">
              <PowerAppsIcon />
              Power Apps
            </h3>
            <EditableField 
              label="Implementation Steps"
              value={localUseCase.implementationPlan.powerApps || ""}
              multiline={true}
              onValueChange={(value) => handlePlanUpdate('powerApps', value)}
            />
          </div>
          
          {/* Copilot Studio section */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold flex items-center gap-2 mb-2 text-yellow-500">
              <CopilotStudioIcon />
              Copilot Studio
            </h3>
            <EditableField 
              label="Implementation Steps"
              value={localUseCase.implementationPlan.copilotStudio || ""}
              multiline={true}
              onValueChange={(value) => handlePlanUpdate('copilotStudio', value)}
            />
          </div>
          
          {/* Power BI section */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold flex items-center gap-2 mb-2 text-red-500">
              <PowerBIIcon />
              Power BI
            </h3>
            <EditableField 
              label="Implementation Steps"
              value={localUseCase.implementationPlan.powerBI || ""}
              multiline={true}
              onValueChange={(value) => handlePlanUpdate('powerBI', value)}
            />
          </div>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-3 justify-between">
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Technology component icons
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
