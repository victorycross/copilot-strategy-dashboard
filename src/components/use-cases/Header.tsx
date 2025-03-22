
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, Search, Plus, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Searching for "${searchQuery}" - Search functionality coming soon!`);
      // Future implementation: Actual search functionality
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-blue-dark to-primary rounded-2xl p-6 md:p-8 shadow-elegant mb-8 text-white"
    >
      <div className="flex flex-col space-y-4">
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
              <LayoutDashboard className="mr-2 h-4 w-4" />
              View Dashboard
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
              onClick={() => navigate('/implementation-plans')}
            >
              <FileText className="mr-2 h-4 w-4" />
              Implementation Plans
            </Button>
            <Button 
              variant="default" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => document.getElementById('create-use-case-trigger')?.click()}
            >
              <Plus className="mr-2 h-4 w-4" />
              New Use Case
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 pt-2">
          <form onSubmit={handleSearch} className="w-full md:w-1/2 lg:w-1/3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
              <input
                type="text"
                placeholder="Search use cases..."
                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Github className="h-4 w-4" />
            <span>Open source project • <a href="https://github.com/microsoft/copilot-agent-framework" className="underline hover:text-white" target="_blank" rel="noreferrer">Contribute</a></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
