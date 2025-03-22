
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Lightbulb, FileText } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Dashboard",
      description: "Get insights and metrics across all AI agent implementations",
      icon: <LayoutDashboard className="h-6 w-6" />,
      path: "/dashboard"
    },
    {
      title: "Use Cases",
      description: "Explore comprehensive catalog of AI agent implementations",
      icon: <Lightbulb className="h-6 w-6" />,
      path: "/use-cases"
    },
    {
      title: "Implementation Plans",
      description: "View detailed implementation roadmaps for all use cases",
      icon: <FileText className="h-6 w-6" />,
      path: "/implementation-plans"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl"
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
          className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Explore our comprehensive AI implementation strategy designed to maximize efficiency and value across service lines.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-to-r from-blue-dark to-primary text-white py-3 px-8 rounded-full font-medium transition-all"
            size="lg"
          >
            <LayoutDashboard className="mr-2 h-5 w-5" />
            View Dashboard
          </Button>
          
          <Button
            onClick={() => navigate('/use-cases')}
            variant="outline"
            size="lg"
            className="rounded-full px-8"
          >
            <Lightbulb className="mr-2 h-5 w-5" />
            Explore Use Cases
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
              className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
