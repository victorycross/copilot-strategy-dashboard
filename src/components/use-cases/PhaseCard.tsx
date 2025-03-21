
import { motion } from "framer-motion";
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

interface PhaseCardProps {
  phase: string;
  number: string;
  description: string;
  color: string;
  useCases: any[];
  renderUseCase: (useCase: any) => JSX.Element;
  delayAnimation?: number;
}

const PhaseCard = ({ 
  phase, 
  number, 
  description, 
  color, 
  useCases, 
  renderUseCase,
  delayAnimation = 0 
}: PhaseCardProps) => {
  if (useCases.length === 0) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delayAnimation }}
    >
      <div className="flex items-center mb-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${color}-light mr-3`}>
          <span className={`text-${color} font-bold`}>{number}</span>
        </div>
        <h2 className="text-xl font-semibold">{phase}</h2>
        <span className="ml-3 text-sm text-muted-foreground">
          {useCases.length} agents
        </span>
      </div>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
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

export default PhaseCard;
