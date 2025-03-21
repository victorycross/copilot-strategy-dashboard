
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import PhaseCard from "./PhaseCard";

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

interface UseCaseTabsProps {
  categories: any[];
  useCasesByCategory: Record<string, any[]>;
  phase1Cases: any[];
  phase2Cases: any[];
  phase3Cases: any[];
  filteredUseCases: any[];
  renderUseCase: (useCase: any) => JSX.Element;
}

const UseCaseTabs = ({ 
  categories, 
  useCasesByCategory, 
  phase1Cases, 
  phase2Cases, 
  phase3Cases, 
  filteredUseCases,
  renderUseCase 
}: UseCaseTabsProps) => {
  return (
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
  );
};

export default UseCaseTabs;
