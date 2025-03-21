
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
  GitMerge,
} from "lucide-react";

// Import use cases at the top of the file to avoid reference errors
import { useCases } from './useCasesData';

// Define our categories
export const categories = [
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
export const serviceLines = ["TAX", "ASR", "DEALS", "IFS"];

// Define priority levels
export const priorities = [
  { value: "high", label: "High Priority", color: "green" },
  { value: "medium", label: "Medium Priority", color: "yellow" },
  { value: "strategic", label: "Strategic", color: "red" }
];

// Define phase mapping
export const phaseMapping = {
  "high": "Phase 1",
  "medium": "Phase 2",
  "strategic": "Phase 3"
};

// Get the count of use cases by category
export const getCategoryCounts = () => {
  const counts = {};
  categories.forEach(category => {
    counts[category.id] = useCases.filter(uc => uc.category === category.id).length;
  });
  return counts;
};

// Get use cases by phase
export const getUseCasesByPhase = (phase) => {
  return useCases.filter(uc => uc.phase === phase);
};

// Get icon color by category
export const getCategoryColor = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.color : "gray";
};

// Get priority badge class
export const getPriorityBadgeClass = (priority) => {
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

// Export useCases for use in other components
export { useCases };
