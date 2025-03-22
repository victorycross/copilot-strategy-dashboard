
import React from "react";
import { Input } from "@/components/ui/input";
import { categories } from "../data";

interface UseCaseFormProps {
  newUseCase: any;
  setNewUseCase: (useCase: any) => void;
}

const UseCaseForm: React.FC<UseCaseFormProps> = ({ newUseCase, setNewUseCase }) => {
  return (
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
  );
};

export default UseCaseForm;
