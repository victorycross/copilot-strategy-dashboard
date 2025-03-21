
import { useState } from "react";
import { toast } from "sonner";
import { useCases as initialUseCases } from "@/components/use-cases/data";
import { categories } from "@/components/use-cases/data";

export const useUseCaseManager = () => {
  const [useCases, setUseCases] = useState(initialUseCases);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePriority, setActivePriority] = useState("all");

  // Filter use cases based on active filters
  const filteredUseCases = useCases.filter(uc => 
    (activeCategory === "all" || uc.category === activeCategory) &&
    (activePriority === "all" || uc.priority === activePriority)
  );

  // Group use cases by category
  const useCasesByCategory = {};
  categories.forEach(category => {
    useCasesByCategory[category.id] = filteredUseCases.filter(uc => 
      uc.category === category.id
    );
  });

  // Group use cases by phase
  const phase1Cases = filteredUseCases.filter(uc => uc.phase === "Phase 1");
  const phase2Cases = filteredUseCases.filter(uc => uc.phase === "Phase 2");
  const phase3Cases = filteredUseCases.filter(uc => uc.phase === "Phase 3");

  // Handle use case updates
  const handleUseCaseUpdate = (updatedUseCase) => {
    if (updatedUseCase.isNew) {
      // Add the new use case to the list
      const newUseCases = [...useCases, { ...updatedUseCase, isNew: undefined }];
      setUseCases(newUseCases);
      toast.success(`Created new use case: ${updatedUseCase.name}`);
    } else {
      // Update the use cases array with the modified use case
      const updatedUseCases = useCases.map(uc => 
        uc.id === updatedUseCase.id ? updatedUseCase : uc
      );
      
      setUseCases(updatedUseCases);
      toast.success(`Updated ${updatedUseCase.name}`);
    }
  };

  return {
    useCases,
    setUseCases,
    activeCategory,
    setActiveCategory,
    activePriority,
    setActivePriority,
    filteredUseCases,
    useCasesByCategory,
    phase1Cases,
    phase2Cases,
    phase3Cases,
    handleUseCaseUpdate
  };
};
