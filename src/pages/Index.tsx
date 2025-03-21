
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
        >
          Copilot Agent Strategy
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-muted-foreground mb-10 max-w-2xl"
        >
          Explore our comprehensive AI implementation strategy designed to maximize efficiency and value across service lines.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.7, 
            duration: 0.6,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/dashboard')}
          className="bg-gradient-to-r from-blue-dark to-primary text-white py-3 px-8 rounded-full font-medium transition-all"
        >
          View Dashboard
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Index;
