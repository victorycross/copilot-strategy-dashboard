
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
import { Plus } from "lucide-react";
import { toast } from "sonner";

import UseCaseForm from "./create-use-case/UseCaseForm";
import { createEmptyUseCase, finalizeUseCase } from "./create-use-case/emptyUseCaseTemplate";

interface CreateUseCaseDialogProps {
  onUseCaseCreate: (useCase: any) => void;
}

const CreateUseCaseDialog = ({ onUseCaseCreate }: CreateUseCaseDialogProps) => {
  const [newUseCase, setNewUseCase] = useState(createEmptyUseCase());

  const handleCreateUseCase = () => {
    // Validate required fields
    if (!newUseCase.name || !newUseCase.description) {
      toast.error("Name and description are required");
      return;
    }
    
    // Create the use case with ID and icon
    const useCaseToCreate = finalizeUseCase(newUseCase);

    // Pass to parent with isNew flag
    onUseCaseCreate({...useCaseToCreate, isNew: true});
    
    // Reset the form fields
    setNewUseCase(createEmptyUseCase());
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
        
        <UseCaseForm newUseCase={newUseCase} setNewUseCase={setNewUseCase} />
        
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
