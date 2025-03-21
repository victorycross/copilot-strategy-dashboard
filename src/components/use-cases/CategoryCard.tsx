
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
    color: string;
  };
  useCases: any[];
  renderUseCase: (useCase: any) => JSX.Element;
}

const CategoryCard = ({ category, useCases, renderUseCase }: CategoryCardProps) => {
  if (useCases.length === 0) return null;
  
  return (
    <motion.div 
      key={category.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center mb-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${category.color}-light mr-3`}>
          <category.icon className={`w-4 h-4 text-${category.color}`} />
        </div>
        <h2 className="text-xl font-semibold">{category.name}</h2>
        <span className="ml-3 text-sm text-muted-foreground">
          {useCases.length} agents
        </span>
      </div>
      
      <p className="text-muted-foreground mb-4">{category.description}</p>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {useCases.map(useCase => renderUseCase(useCase))}
      </motion.div>
      
      <Separator className="mt-10" />
    </motion.div>
  );
};

export default CategoryCard;
