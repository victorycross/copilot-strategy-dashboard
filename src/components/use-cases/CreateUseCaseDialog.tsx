
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { categories } from "./data";

interface CreateUseCaseDialogProps {
  onUseCaseCreate: (useCase: any) => void;
}

const CreateUseCaseDialog = ({ onUseCaseCreate }: CreateUseCaseDialogProps) => {
  const [newUseCase, setNewUseCase] = useState({
    name: "",
    description: "",
    category: "productive-knowledge-work",
    phase: "Phase 1",
    complexity: "Medium",
    crossServiceValue: "Medium",
    priority: "medium",
    serviceLines: ["Digital & App Innovation"],
    keyBenefit: "",
  });

  const handleCreateUseCase = () => {
    // Validate required fields
    if (!newUseCase.name || !newUseCase.description) {
      toast.error("Name and description are required");
      return;
    }
    
    const useCaseToCreate = {
      ...newUseCase,
      id: Date.now(), // Generate a unique ID based on timestamp
      icon: categories.find(c => c.id === newUseCase.category)?.icon || categories[0].icon
    };

    onUseCaseCreate({...useCaseToCreate, isNew: true});
    
    // Reset the form fields
    setNewUseCase({
      name: "",
      description: "",
      category: "productive-knowledge-work",
      phase: "Phase 1",
      complexity: "Medium",
      crossServiceValue: "Medium",
      priority: "medium",
      serviceLines: ["Digital & App Innovation"],
      keyBenefit: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-auto">
          <Plus className="mr-2 h-4 w-4" />
          Create Use Case
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Use Case</DialogTitle>
          <DialogDescription>
            Enter the details for the new use case.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input
              id="name"
              value={newUseCase.name}
              onChange={(e) => setNewUseCase({...newUseCase, name: e.target.value})}
              placeholder="Enter use case name"
            />
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium">Description</label>
            <textarea
              id="description"
              className="p-2 border rounded-md min-h-[80px]"
              value={newUseCase.description}
              onChange={(e) => setNewUseCase({...newUseCase, description: e.target.value})}
              placeholder="Enter use case description"
            />
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="category" className="text-sm font-medium">Category</label>
            <select
              id="category"
              className="p-2 border rounded-md"
              value={newUseCase.category}
              onChange={(e) => setNewUseCase({...newUseCase, category: e.target.value})}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="keyBenefit" className="text-sm font-medium">Key Benefit</label>
            <Input
              id="keyBenefit"
              value={newUseCase.keyBenefit}
              onChange={(e) => setNewUseCase({...newUseCase, keyBenefit: e.target.value})}
              placeholder="Enter key benefit"
            />
          </div>
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleCreateUseCase} disabled={!newUseCase.name || !newUseCase.description}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUseCaseDialog;
