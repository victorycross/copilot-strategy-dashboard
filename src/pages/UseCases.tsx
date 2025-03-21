
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UseCaseCard from "@/components/use-cases/UseCaseCard";
import CategoryCard from "@/components/use-cases/CategoryCard";
import PhaseCard from "@/components/use-cases/PhaseCard";
import Filters from "@/components/use-cases/Filters";
import Header from "@/components/use-cases/Header";
import { toast } from "sonner";

import {
  categories,
  priorities,
  useCases as initialUseCases,
  getCategoryCounts,
  getCategoryColor,
  getPriorityBadgeClass
} from "@/components/use-cases/data";

const UseCasesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePriority, setActivePriority] = useState("all");
  const [useCases, setUseCases] = useState(initialUseCases);
  
  const categoryCounts = getCategoryCounts();
  
  // Filter use cases based on active filters
  const filteredUseCases = useCases.filter(uc => 
    (activeCategory === "all" || uc.category === activeCategory) &&
    (activePriority === "all" || uc.priority === activePriority)
  );

  // Group use cases by category for the "By Category" view
  const useCasesByCategory = {};
  categories.forEach(category => {
    useCasesByCategory[category.id] = filteredUseCases.filter(uc => 
      uc.category === category.id
    );
  });

  // Group use cases by phase for the "By Timeline" view
  const phase1Cases = filteredUseCases.filter(uc => uc.phase === "Phase 1");
  const phase2Cases = filteredUseCases.filter(uc => uc.phase === "Phase 2");
  const phase3Cases = filteredUseCases.filter(uc => uc.phase === "Phase 3");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  // Transform priorities to match the expected format in Filters component
  const formattedPriorities = priorities.map(priority => ({
    value: priority.id,
    label: priority.name,
    color: priority.color
  }));

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

  // Render use case card
  const renderUseCase = (useCase) => {
    return (
      <UseCaseCard 
        key={useCase.id}
        useCase={useCase}
        getCategoryColor={getCategoryColor}
        getPriorityBadgeClass={getPriorityBadgeClass}
        onUseCaseUpdate={handleUseCaseUpdate}
      />
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <Header />

        {/* Filters */}
        <Filters 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activePriority={activePriority}
          setActivePriority={setActivePriority}
          categories={categories}
          categoryCounts={categoryCounts}
          priorities={formattedPriorities}
          filteredUseCases={filteredUseCases}
        />

        {/* Main content */}
        <Tabs defaultValue="category" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="category">By Category</TabsTrigger>
            <TabsTrigger value="timeline">By Implementation Timeline</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
          </TabsList>
          
          {/* By Category Tab */}
          <TabsContent value="category">
            {categories.map(category => (
              <CategoryCard 
                key={category.id}
                category={category}
                useCases={useCasesByCategory[category.id]}
                renderUseCase={renderUseCase}
              />
            ))}
          </TabsContent>
          
          {/* By Timeline Tab */}
          <TabsContent value="timeline">
            <div className="space-y-10">
              {/* Phase 1 */}
              {phase1Cases.length > 0 && (
                <PhaseCard 
                  phase="Phase 1: Foundation"
                  number="1"
                  description="0-3 Months: Core functionality to establish the foundation"
                  color="blue"
                  useCases={phase1Cases}
                  renderUseCase={renderUseCase}
                />
              )}
              
              {/* Phase 2 */}
              {phase2Cases.length > 0 && (
                <PhaseCard 
                  phase="Phase 2: Expansion"
                  number="2"
                  description="4-6 Months: Extended capabilities to enhance service value"
                  color="green"
                  useCases={phase2Cases}
                  renderUseCase={renderUseCase}
                  delayAnimation={0.1}
                />
              )}
              
              {/* Phase 3 */}
              {phase3Cases.length > 0 && (
                <PhaseCard 
                  phase="Phase 3: Advanced Integration"
                  number="3"
                  description="7-9 Months: Sophisticated functionality for strategic advantage"
                  color="yellow"
                  useCases={phase3Cases}
                  renderUseCase={renderUseCase}
                  delayAnimation={0.2}
                />
              )}
            </div>
          </TabsContent>
          
          {/* Grid View Tab */}
          <TabsContent value="grid">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredUseCases.map(useCase => renderUseCase(useCase))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UseCasesPage;
