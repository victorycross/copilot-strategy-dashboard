
import { motion } from "framer-motion";
import { useUseCaseManager } from "@/hooks/useUseCaseManager";
import { 
  categories,
  priorities,
  getCategoryCounts,
  getCategoryColor,
  getPriorityBadgeClass
} from "@/components/use-cases/data";
import Header from "@/components/use-cases/Header";
import Filters from "@/components/use-cases/Filters";
import UseCaseTabs from "@/components/use-cases/UseCaseTabs";
import UseCaseCard from "@/components/use-cases/UseCaseCard";
import CreateUseCaseDialog from "@/components/use-cases/CreateUseCaseDialog";

const UseCasesPage = () => {
  // Use the custom hook for use case management
  const {
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
  } = useUseCaseManager();
  
  // Get category counts
  const categoryCounts = getCategoryCounts();
  
  // Transform priorities to match the expected format in Filters component
  const formattedPriorities = priorities.map(priority => ({
    value: priority.id,
    label: priority.name,
    color: priority.color
  }));

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

        <div className="flex justify-between items-center mb-6">
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

          {/* Create New Use Case Button */}
          <CreateUseCaseDialog onUseCaseCreate={handleUseCaseUpdate} />
        </div>

        {/* Main content */}
        <UseCaseTabs 
          categories={categories}
          useCasesByCategory={useCasesByCategory}
          phase1Cases={phase1Cases}
          phase2Cases={phase2Cases}
          phase3Cases={phase3Cases}
          filteredUseCases={filteredUseCases}
          renderUseCase={renderUseCase}
        />
      </div>
    </div>
  );
};

export default UseCasesPage;
