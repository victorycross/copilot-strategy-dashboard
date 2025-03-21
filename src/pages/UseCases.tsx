
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Database,
  FileText,
  PieChart,
  ShieldCheck,
  Zap,
  Users,
  DollarSign,
  Calendar,
  Search,
  Filter,
  Shield,
  CheckCircle,
  File,
  Folder,
  MessageSquare,
  AlertTriangle,
  Headset,
  TrendingUp,
  Globe,
  GraduationCap,
  Book,
  BarChart2,
  UserCheck,
  PackageCheck,
  ThumbsUp,
  EyeOff,
  Package,
  Clock,
  CheckSquare,
  UserPlus,
  BarChart,
  Settings,
  Workflow,
  AreaChart,
  Pencil,
  Briefcase,
  Timer,
  Share2,
  FileContract,
  GitMerge,
} from "lucide-react";

// Define our categories
const categories = [
  {
    id: "data-management",
    name: "Data Management",
    description: "Handling data analysis, integration, and visualization",
    icon: Database,
    color: "blue"
  },
  {
    id: "compliance",
    name: "Compliance & Risk",
    description: "Focused on regulatory and quality standards",
    icon: ShieldCheck,
    color: "red"
  },
  {
    id: "automation",
    name: "Operational Efficiency",
    description: "Streamlining repetitive tasks and workflows",
    icon: Zap,
    color: "green"
  },
  {
    id: "client-interaction",
    name: "Client Experience",
    description: "Managing customer relationships and feedback",
    icon: Users,
    color: "yellow"
  },
  {
    id: "financial",
    name: "Financial Management",
    description: "Overseeing budgeting, forecasting, and expense tracking",
    icon: DollarSign,
    color: "purple"
  },
  {
    id: "project-management",
    name: "Knowledge & Learning",
    description: "Coordinating timelines, resources, and events",
    icon: Calendar,
    color: "indigo"
  }
];

// Define service lines
const serviceLines = ["TAX", "ASR", "DEALS", "IFS"];

// Define priority levels
const priorities = [
  { value: "high", label: "High Priority", color: "green" },
  { value: "medium", label: "Medium Priority", color: "yellow" },
  { value: "strategic", label: "Strategic", color: "red" }
];

// Define phase mapping
const phaseMapping = {
  "high": "Phase 1",
  "medium": "Phase 2",
  "strategic": "Phase 3"
};

// Define use cases with categories, service line applicability, and priority
const useCases = [
  {
    id: 1,
    name: "Data Analysis Agent",
    description: "Processes and interprets large datasets to extract valuable insights and patterns.",
    category: "data-management",
    serviceLines: ["TAX", "ASR", "DEALS"],
    icon: Search,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "Improved decision-making through data-driven insights"
  },
  {
    id: 2,
    name: "Compliance Agent",
    description: "Ensures regulatory standards are met and maintains compliance documentation.",
    category: "compliance",
    serviceLines: ["TAX", "IFS"],
    icon: Shield,
    priority: "medium",
    phase: "Phase 2",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "Reduced compliance risks and penalties"
  },
  {
    id: 3,
    name: "Document Management Agent",
    description: "Handles document creation, organization, and retrieval efficiently.",
    category: "data-management",
    serviceLines: ["ASR", "IFS"],
    icon: Folder,
    priority: "high",
    phase: "Phase 1",
    complexity: "Low",
    crossServiceValue: "High",
    keyBenefit: "Centralized document storage and improved accessibility"
  },
  {
    id: 4,
    name: "Communication Agent",
    description: "Automates routine communications with clients and team members.",
    category: "client-interaction",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: MessageSquare,
    priority: "high",
    phase: "Phase 1",
    complexity: "Low",
    crossServiceValue: "High",
    keyBenefit: "Streamlined communication and reduced response times"
  },
  {
    id: 5,
    name: "Risk Assessment Agent",
    description: "Evaluates potential risks and provides mitigation strategies.",
    category: "compliance",
    serviceLines: ["ASR", "DEALS"],
    icon: AlertTriangle,
    priority: "medium",
    phase: "Phase 2",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "Proactive risk identification and management"
  },
  {
    id: 6,
    name: "Customer Service Agent",
    description: "Automates client interactions and responses to common inquiries.",
    category: "client-interaction",
    serviceLines: ["TAX", "IFS"],
    icon: Headset,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "Improved client satisfaction and efficiency"
  },
  {
    id: 7,
    name: "Workflow Automation Agent",
    description: "Streamlines repetitive tasks and automates business processes.",
    category: "automation",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Zap,
    priority: "high",
    phase: "Phase 1",
    complexity: "Low",
    crossServiceValue: "High",
    keyBenefit: "Significant time savings and reduced manual errors"
  },
  {
    id: 8,
    name: "Financial Modeling Agent",
    description: "Creates financial projections, models, and analyses.",
    category: "financial",
    serviceLines: ["DEALS", "ASR"],
    icon: TrendingUp,
    priority: "medium",
    phase: "Phase 2",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "More accurate financial forecasting and planning"
  },
  {
    id: 9,
    name: "Market Analysis Agent",
    description: "Gathers and interprets market data for strategic insights.",
    category: "data-management",
    serviceLines: ["DEALS", "TAX"],
    icon: Globe,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "Competitive advantage through market intelligence"
  },
  {
    id: 10,
    name: "Project Management Agent",
    description: "Manages timelines, resources, and project milestones.",
    category: "project-management",
    serviceLines: ["IFS", "ASR"],
    icon: Briefcase,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "More efficient project execution and delivery"
  },
  {
    id: 11,
    name: "Training and Compliance Agent",
    description: "Ensures employees are up-to-date with regulations and standards.",
    category: "compliance",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: GraduationCap,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "Reduced compliance risks and better-trained staff"
  },
  {
    id: 12,
    name: "Data Visualization Agent",
    description: "Converts complex data into understandable visual formats.",
    category: "data-management",
    serviceLines: ["ASR", "DEALS"],
    icon: PieChart,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "Improved data understanding and communication"
  },
  {
    id: 13,
    name: "Legal Compliance Agent",
    description: "Tracks legal changes and ensures compliance with regulations.",
    category: "compliance",
    serviceLines: ["TAX", "IFS"],
    icon: FileContract,
    priority: "medium",
    phase: "Phase 2",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "Reduced legal risks and improved compliance"
  },
  {
    id: 14,
    name: "Client Insights Agent",
    description: "Analyzes client data to provide actionable insights.",
    category: "client-interaction",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: UserCheck,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "Improved client relationships and targeted services"
  },
  {
    id: 15,
    name: "Expense Management Agent",
    description: "Tracks and manages expenses across the organization.",
    category: "financial",
    serviceLines: ["IFS", "TAX"],
    icon: DollarSign,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "Cost reduction and better financial control"
  },
  {
    id: 16,
    name: "Performance Analytics Agent",
    description: "Monitors and analyzes employee and operational performance.",
    category: "data-management",
    serviceLines: ["IFS"],
    icon: BarChart,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "Low",
    keyBenefit: "Data-driven performance improvements"
  },
  {
    id: 17,
    name: "Supply Chain Agent",
    description: "Optimizes supply chain processes and logistics.",
    category: "automation",
    serviceLines: ["TAX", "IFS"],
    icon: PackageCheck,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "Improved operational efficiency and cost savings"
  },
  {
    id: 18,
    name: "Customer Feedback Agent",
    description: "Collects and analyzes customer feedback to improve services.",
    category: "client-interaction",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: ThumbsUp,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Low",
    crossServiceValue: "High",
    keyBenefit: "Enhanced client satisfaction and service quality"
  },
  {
    id: 19,
    name: "Fraud Detection Agent",
    description: "Identifies potential fraud and security risks.",
    category: "compliance",
    serviceLines: ["ASR", "DEALS"],
    icon: EyeOff,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "Reduced financial losses and enhanced security"
  },
  {
    id: 20,
    name: "Inventory Management Agent",
    description: "Manages inventory levels and forecasts needs.",
    category: "automation",
    serviceLines: ["IFS", "DEALS"],
    icon: Package,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Low",
    keyBenefit: "Optimized inventory levels and reduced costs"
  },
  {
    id: 21,
    name: "Training Recommendation Agent",
    description: "Suggests training programs based on employee needs.",
    category: "project-management",
    serviceLines: ["IFS"],
    icon: Book,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "Medium",
    crossServiceValue: "Low",
    keyBenefit: "Improved employee skills and knowledge"
  },
  {
    id: 22,
    name: "Meeting Scheduling Agent",
    description: "Automates meeting scheduling and coordination.",
    category: "automation",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Clock,
    priority: "high",
    phase: "Phase 1",
    complexity: "Low",
    crossServiceValue: "High",
    keyBenefit: "Time savings and improved scheduling efficiency"
  },
  {
    id: 23,
    name: "Expense Tracking Agent",
    description: "Monitors and reports expenses in real-time.",
    category: "financial",
    serviceLines: ["IFS"],
    icon: DollarSign,
    priority: "high",
    phase: "Phase 1",
    complexity: "Low",
    crossServiceValue: "Medium",
    keyBenefit: "Better financial oversight and cost control"
  },
  {
    id: 24,
    name: "Quality Control Agent",
    description: "Ensures quality standards are met across all processes.",
    category: "compliance",
    serviceLines: ["ASR", "IFS"],
    icon: CheckSquare,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "Improved service quality and consistency"
  },
  {
    id: 25,
    name: "Client Onboarding Agent",
    description: "Streamlines client onboarding processes.",
    category: "client-interaction",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: UserPlus,
    priority: "high",
    phase: "Phase 1",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "Faster client acquisition and improved experience"
  },
  {
    id: 26,
    name: "Budgeting Agent",
    description: "Assists with budgeting and financial planning.",
    category: "financial",
    serviceLines: ["IFS", "TAX"],
    icon: DollarSign,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "More accurate financial planning and control"
  },
  {
    id: 27,
    name: "Process Optimization Agent",
    description: "Identifies inefficiencies and suggests improvements.",
    category: "automation",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Settings,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "High",
    keyBenefit: "Continuous improvement and operational excellence"
  },
  {
    id: 28,
    name: "Forecasting Agent",
    description: "Provides future predictions based on current data.",
    category: "data-management",
    serviceLines: ["ASR", "DEALS"],
    icon: AreaChart,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "More accurate projections and strategic planning"
  },
  {
    id: 29,
    name: "Task Automation Agent",
    description: "Automates routine tasks to enhance productivity.",
    category: "automation",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Zap,
    priority: "high",
    phase: "Phase 1",
    complexity: "Low",
    crossServiceValue: "High",
    keyBenefit: "Significant time savings and improved efficiency"
  },
  {
    id: 30,
    name: "CRM Agent",
    description: "Manages client interactions and data.",
    category: "client-interaction",
    serviceLines: ["TAX", "ASR"],
    icon: Users,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "Improved client relationships and data management"
  },
  {
    id: 31,
    name: "Knowledge Management Agent",
    description: "Organizes and retrieves organizational knowledge.",
    category: "project-management",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Database,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "Better knowledge sharing and retention"
  },
  {
    id: 32,
    name: "Time Tracking Agent",
    description: "Tracks time spent on tasks and projects.",
    category: "automation",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Timer,
    priority: "high",
    phase: "Phase 1",
    complexity: "Low",
    crossServiceValue: "High",
    keyBenefit: "Improved time management and billing accuracy"
  },
  {
    id: 33,
    name: "Social Media Management Agent",
    description: "Automates social media tasks and monitoring.",
    category: "client-interaction",
    serviceLines: ["IFS"],
    icon: Share2,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "Medium",
    crossServiceValue: "Low",
    keyBenefit: "Enhanced brand presence and client engagement"
  },
  {
    id: 34,
    name: "Contract Management Agent",
    description: "Manages contract lifecycles and compliance.",
    category: "compliance",
    serviceLines: ["DEALS", "IFS"],
    icon: FileText,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "Better contract oversight and reduced risks"
  },
  {
    id: 35,
    name: "Data Integration Agent",
    description: "Integrates data from multiple sources seamlessly.",
    category: "data-management",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: GitMerge,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "High",
    keyBenefit: "Unified data view and improved analytics capabilities"
  }
];

// Get the count of use cases by category
const getCategoryCounts = () => {
  const counts = {};
  categories.forEach(category => {
    counts[category.id] = useCases.filter(uc => uc.category === category.id).length;
  });
  return counts;
};

// Get use cases by phase
const getUseCasesByPhase = (phase) => {
  return useCases.filter(uc => uc.phase === phase);
};

// Get icon color by category
const getCategoryColor = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.color : "gray";
};

// Get priority badge class
const getPriorityBadgeClass = (priority) => {
  const priorityObj = priorities.find(p => p.value === priority);
  if (!priorityObj) return "bg-gray-100 text-gray-800";
  
  switch (priorityObj.color) {
    case "green":
      return "bg-green-light text-green";
    case "yellow":
      return "bg-yellow-light text-yellow";
    case "red":
      return "bg-red-light text-red";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const UseCasesPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePriority, setActivePriority] = useState("all");
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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Render use case card
  const renderUseCase = (useCase) => {
    const Icon = useCase.icon;
    const categoryColor = getCategoryColor(useCase.category);
    const priorityBadgeClass = getPriorityBadgeClass(useCase.priority);
    
    return (
      <motion.div 
        key={useCase.id}
        variants={itemVariants}
        className="data-card"
      >
        <Card className="h-full">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${categoryColor}-light mr-3`}>
                  <Icon className={`w-4 h-4 text-${categoryColor}`} />
                </div>
                <CardTitle className="text-base">{useCase.name}</CardTitle>
              </div>
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${priorityBadgeClass}`}>
                {useCase.phase}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-muted-foreground">Complexity</p>
                <p className="font-medium">{useCase.complexity}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Cross-Service Value</p>
                <p className="font-medium">{useCase.crossServiceValue}</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xs text-muted-foreground">Service Lines</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {useCase.serviceLines.map(sl => (
                  <span key={sl} className="inline-block px-2 py-0.5 bg-secondary text-xs rounded">
                    {sl}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xs text-muted-foreground">Key Benefit</p>
              <p className="text-sm font-medium">{useCase.keyBenefit}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
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

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <h2 className="text-xl font-semibold">
              {filteredUseCases.length} Use Cases
              {activeCategory !== "all" && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
              {activePriority !== "all" && ` with ${priorities.find(p => p.value === activePriority)?.label}`}
            </h2>
            
            <div className="flex flex-wrap gap-2">
              <select 
                className="bg-background border border-input rounded-md px-3 py-1 text-sm"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({categoryCounts[category.id]})
                  </option>
                ))}
              </select>
              
              <select 
                className="bg-background border border-input rounded-md px-3 py-1 text-sm"
                value={activePriority}
                onChange={(e) => setActivePriority(e.target.value)}
              >
                <option value="all">All Priorities</option>
                {priorities.map(priority => (
                  <option key={priority.value} value={priority.value}>
                    {priority.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Category quick filters */}
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={activeCategory === "all" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveCategory("all")}
              className="rounded-full"
            >
              All Categories
            </Button>
            
            {categories.map(category => (
              <Button 
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full ${activeCategory === category.id ? `bg-${category.color} hover:bg-${category.color}/90` : ""}`}
              >
                <category.icon className="w-4 h-4 mr-1" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <Tabs defaultValue="category" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="category">By Category</TabsTrigger>
            <TabsTrigger value="timeline">By Implementation Timeline</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
          </TabsList>
          
          {/* By Category Tab */}
          <TabsContent value="category">
            {categories.map(category => {
              const categoryUseCases = useCasesByCategory[category.id];
              if (categoryUseCases.length === 0) return null;
              
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
                      {categoryUseCases.length} agents
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {categoryUseCases.map(useCase => renderUseCase(useCase))}
                  </motion.div>
                  
                  <Separator className="mt-10" />
                </motion.div>
              );
            })}
          </TabsContent>
          
          {/* By Timeline Tab */}
          <TabsContent value="timeline">
            <div className="space-y-10">
              {/* Phase 1 */}
              {phase1Cases.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-light mr-3">
                      <span className="text-blue font-bold">1</span>
                    </div>
                    <h2 className="text-xl font-semibold">Phase 1: Foundation</h2>
                    <span className="ml-3 text-sm text-muted-foreground">
                      {phase1Cases.length} agents
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">0-3 Months: Core functionality to establish the foundation</p>
                  
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {phase1Cases.map(useCase => renderUseCase(useCase))}
                  </motion.div>
                  
                  <Separator className="mt-10" />
                </motion.div>
              )}
              
              {/* Phase 2 */}
              {phase2Cases.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-light mr-3">
                      <span className="text-green font-bold">2</span>
                    </div>
                    <h2 className="text-xl font-semibold">Phase 2: Expansion</h2>
                    <span className="ml-3 text-sm text-muted-foreground">
                      {phase2Cases.length} agents
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">4-6 Months: Extended capabilities to enhance service value</p>
                  
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {phase2Cases.map(useCase => renderUseCase(useCase))}
                  </motion.div>
                  
                  <Separator className="mt-10" />
                </motion.div>
              )}
              
              {/* Phase 3 */}
              {phase3Cases.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-light mr-3">
                      <span className="text-yellow font-bold">3</span>
                    </div>
                    <h2 className="text-xl font-semibold">Phase 3: Advanced Integration</h2>
                    <span className="ml-3 text-sm text-muted-foreground">
                      {phase3Cases.length} agents
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">7-9 Months: Sophisticated functionality for strategic advantage</p>
                  
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {phase3Cases.map(useCase => renderUseCase(useCase))}
                  </motion.div>
                </motion.div>
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
