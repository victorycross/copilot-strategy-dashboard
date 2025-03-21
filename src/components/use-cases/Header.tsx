
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-blue-dark to-primary rounded-2xl p-6 md:p-8 shadow-elegant mb-8 text-white"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Copilot Agent Use Cases</h1>
          <p className="mt-2 text-blue-light/90 text-sm md:text-base">
            Comprehensive catalog of AI agent implementations across service lines
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <Button 
            variant="outline" 
            className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
            onClick={() => navigate('/dashboard')}
          >
            View Dashboard
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
