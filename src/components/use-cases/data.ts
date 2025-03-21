
import {
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
  Database
} from "lucide-react";

export const categories = [
  {
    id: "data-management",
    name: "Data Management",
    description: "Solutions for managing, analyzing, and extracting insights from data",
    icon: Database,
    color: "blue"
  },
  {
    id: "compliance",
    name: "Compliance & Risk",
    description: "Tools to ensure regulatory compliance and manage risk",
    icon: ShieldCheck,
    color: "red"
  },
  {
    id: "client-interaction",
    name: "Client Interaction",
    description: "Improve and automate client communications and services",
    icon: Users,
    color: "green"
  },
  {
    id: "financial",
    name: "Financial Management",
    description: "Solutions for financial analysis, reporting, and optimization",
    icon: DollarSign,
    color: "yellow"
  },
  {
    id: "automation",
    name: "Workflow Automation",
    description: "Automate repetitive tasks and streamline business processes",
    icon: Settings,
    color: "purple"
  },
  {
    id: "project-management",
    name: "Project Management",
    description: "Tools for team collaboration and project coordination",
    icon: CheckSquare,
    color: "orange"
  }
];

export const priorities = [
  {
    id: "high",
    name: "High Priority",
    description: "Critical use cases with immediate impact",
    color: "red"
  },
  {
    id: "medium",
    name: "Medium Priority",
    description: "Important use cases with moderate timeline",
    color: "yellow"
  },
  {
    id: "strategic",
    name: "Strategic",
    description: "Long-term strategic value with extended timeline",
    color: "blue"
  }
];

export const useCases = [
  {
    id: 1,
    name: "Client Document Analyzer",
    description: "Automatically extracts and categorizes data from client documents",
    category: "data-management",
    serviceLines: ["TAX", "ASR"],
    icon: FileText,
    priority: "high",
    phase: "Phase 1",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "60% reduction in document processing time",
    implementationPlan: {
      msCopilot: "Extract and summarize key information from documents",
      powerAutomate: "Create workflows to route documents and trigger analysis",
      powerApps: "Build a custom interface for document submission and review",
      copilotStudio: "Design custom prompt flows for document analysis",
      powerBI: "Visualize document processing metrics and extracted insights"
    }
  },
  {
    id: 2,
    name: "Regulatory Compliance Monitor",
    description: "Tracks and alerts on compliance requirements and deadlines",
    category: "compliance",
    serviceLines: ["TAX", "ASR", "IFS"],
    icon: ShieldCheck,
    priority: "high",
    phase: "Phase 1",
    complexity: "High",
    crossServiceValue: "High",
    keyBenefit: "90% decrease in compliance violations",
    implementationPlan: {
      msCopilot: "Stay updated on regulatory changes and requirements",
      powerAutomate: "Automate deadline reminders and compliance checks",
      powerApps: "Develop a compliance dashboard with alert management",
      copilotStudio: "Create a compliance assistant to answer regulatory questions",
      powerBI: "Monitor compliance metrics across service lines"
    }
  },
  {
    id: 3,
    name: "Client Onboarding Assistant",
    description: "Streamlines client intake process and data collection",
    category: "client-interaction",
    serviceLines: ["DEALS", "IFS"],
    icon: UserPlus,
    priority: "high",
    phase: "Phase 1",
    complexity: "Low",
    crossServiceValue: "Medium",
    keyBenefit: "45% faster client onboarding",
    implementationPlan: {
      msCopilot: "Generate personalized onboarding materials",
      powerAutomate: "Coordinate sequential onboarding steps and approvals",
      powerApps: "Create a client-facing onboarding portal",
      copilotStudio: "Build a conversational onboarding assistant",
      powerBI: "Track onboarding efficiency and bottlenecks"
    }
  },
  {
    id: 4,
    name: "Financial Data Analyzer",
    description: "Identifies trends and anomalies in financial statements",
    category: "financial",
    serviceLines: ["ASR", "DEALS"],
    icon: BarChart,
    priority: "medium",
    phase: "Phase 2",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "30% improvement in financial insight accuracy",
    implementationPlan: {
      msCopilot: "Analyze financial statements and generate insights",
      powerAutomate: "Process and standardize financial data inputs",
      powerApps: "Build interactive financial analysis tools",
      copilotStudio: "Design a financial advisor bot for quick insights",
      powerBI: "Create financial dashboards with anomaly detection"
    }
  },
  {
    id: 5,
    name: "Process Automation Assistant",
    description: "Automates routine workflows and approval processes",
    category: "automation",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Settings,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "75% reduction in manual processing time",
    implementationPlan: {
      msCopilot: "Suggest process improvements and documentation",
      powerAutomate: "Build flexible approval workflows and notifications",
      powerApps: "Create process management and monitoring interfaces",
      copilotStudio: "Develop a process assistant to guide users",
      powerBI: "Visualize process efficiency and automation impact"
    }
  },
  {
    id: 6,
    name: "Training Content Generator",
    description: "Creates personalized learning materials for staff",
    category: "project-management",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: GraduationCap,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "40% increase in knowledge retention",
    implementationPlan: {
      msCopilot: "Generate tailored training content and exercises",
      powerAutomate: "Schedule training delivery and track completion",
      powerApps: "Build a learning management platform",
      copilotStudio: "Create an interactive training assistant",
      powerBI: "Analyze training effectiveness and skill development"
    }
  },
  {
    id: 7,
    name: "Market Research Digest",
    description: "Summarizes industry trends and competitor activities",
    category: "data-management",
    serviceLines: ["DEALS", "IFS"],
    icon: Globe,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "25% improved market intelligence",
    implementationPlan: {
      msCopilot: "Analyze and summarize market research reports",
      powerAutomate: "Schedule regular market data collection",
      powerApps: "Create a market intelligence hub",
      copilotStudio: "Build a market trends Q&A bot",
      powerBI: "Visualize market trends and competitive positioning"
    }
  },
  {
    id: 8,
    name: "Client Feedback Analyzer",
    description: "Analyzes sentiment and identifies improvement areas",
    category: "client-interaction",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: MessageSquare,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Low",
    crossServiceValue: "High",
    keyBenefit: "35% increase in client satisfaction scores",
    implementationPlan: {
      msCopilot: "Analyze feedback sentiment and recommend actions",
      powerAutomate: "Trigger alerts for negative feedback",
      powerApps: "Build a feedback collection and response system",
      copilotStudio: "Create a conversational feedback collection bot",
      powerBI: "Track satisfaction trends and improvement initiatives"
    }
  },
  {
    id: 9,
    name: "Risk Assessment Tool",
    description: "Evaluates and quantifies project and client risks",
    category: "compliance",
    serviceLines: ["DEALS", "IFS"],
    icon: AlertTriangle,
    priority: "high",
    phase: "Phase 1",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "50% reduction in unforeseen project risks",
    implementationPlan: {
      msCopilot: "Identify potential risks and mitigation strategies",
      powerAutomate: "Create risk assessment workflows and escalations",
      powerApps: "Develop a risk management dashboard",
      copilotStudio: "Build a risk assessment assistant",
      powerBI: "Visualize risk profiles and mitigation effectiveness"
    }
  },
  {
    id: 10,
    name: "Client Support Agent",
    description: "Provides 24/7 automated responses to common client inquiries",
    category: "client-interaction",
    serviceLines: ["TAX", "ASR"],
    icon: Headset,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Low",
    keyBenefit: "80% of basic inquiries resolved without staff",
    implementationPlan: {
      msCopilot: "Generate responses to complex client questions",
      powerAutomate: "Route inquiries based on complexity and type",
      powerApps: "Create a client support portal",
      copilotStudio: "Build a comprehensive client support bot",
      powerBI: "Track support metrics and knowledge gaps"
    }
  },
  {
    id: 11,
    name: "Revenue Forecasting Model",
    description: "Predicts future revenue based on historical data and trends",
    category: "financial",
    serviceLines: ["DEALS"],
    icon: TrendingUp,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "20% improvement in forecast accuracy",
    implementationPlan: {
      msCopilot: "Generate forecast narratives and recommendations",
      powerAutomate: "Schedule regular forecast updates",
      powerApps: "Build forecast adjustment and scenario tools",
      copilotStudio: "Create a forecasting assistant for what-if scenarios",
      powerBI: "Develop interactive forecast dashboards with trends"
    }
  },
  {
    id: 12,
    name: "Knowledge Base Assistant",
    description: "Provides instant access to organizational knowledge",
    category: "project-management",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Book,
    priority: "high",
    phase: "Phase 1",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "65% reduction in time spent searching for information",
    implementationPlan: {
      msCopilot: "Generate answers from organizational knowledge",
      powerAutomate: "Update knowledge base with new information",
      powerApps: "Create a knowledge portal with powerful search",
      copilotStudio: "Build a knowledge base bot with multimedia support",
      powerBI: "Track knowledge usage and information gaps"
    }
  },
  {
    id: 13,
    name: "Tax Planning Optimizer",
    description: "Analyzes tax scenarios to identify optimal strategies",
    category: "financial",
    serviceLines: ["TAX"],
    icon: DollarSign,
    priority: "high",
    phase: "Phase 1",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "15% average tax savings identified",
    implementationPlan: {
      msCopilot: "Generate tax planning strategies and explanations",
      powerAutomate: "Automate tax scenario comparisons",
      powerApps: "Build a tax planning scenario tool",
      copilotStudio: "Create a tax strategy advisor bot",
      powerBI: "Visualize tax savings opportunities"
    }
  },
  {
    id: 14,
    name: "Data Quality Monitor",
    description: "Continuously checks data integrity and identifies issues",
    category: "data-management",
    serviceLines: ["ASR", "IFS"],
    icon: Database,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "85% reduction in data quality issues",
    implementationPlan: {
      msCopilot: "Analyze data patterns and quality issues",
      powerAutomate: "Create automated data quality checks",
      powerApps: "Build a data quality management dashboard",
      copilotStudio: "Develop a data quality assistant",
      powerBI: "Track data quality metrics and improvement trends"
    }
  },
  {
    id: 15,
    name: "Meeting Summarizer",
    description: "Automatically creates concise summaries of client meetings",
    category: "client-interaction",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: FileText,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Low",
    crossServiceValue: "High",
    keyBenefit: "70% reduction in note-taking time",
    implementationPlan: {
      msCopilot: "Generate meeting summaries and action items",
      powerAutomate: "Distribute summaries and track action items",
      powerApps: "Build a meeting notes repository and search tool",
      copilotStudio: "Create a meeting assistant for real-time notes",
      powerBI: "Analyze meeting trends and action item completion"
    }
  },
  {
    id: 16,
    name: "Contract Analysis Tool",
    description: "Extracts key terms and flags potential issues in contracts",
    category: "compliance",
    serviceLines: ["DEALS", "IFS"],
    icon: File,
    priority: "high",
    phase: "Phase 1",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "55% faster contract review process",
    implementationPlan: {
      msCopilot: "Analyze contract language and identify issues",
      powerAutomate: "Route contracts for review based on findings",
      powerApps: "Build a contract management and review platform",
      copilotStudio: "Create a contract analysis assistant",
      powerBI: "Track contract review metrics and risk profiles"
    }
  },
  {
    id: 17,
    name: "Project Resource Allocator",
    description: "Optimizes staff allocation based on skills and availability",
    category: "automation",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Users,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "High",
    keyBenefit: "25% improvement in resource utilization",
    implementationPlan: {
      msCopilot: "Generate staffing recommendations and optimizations",
      powerAutomate: "Coordinate resource allocation approvals",
      powerApps: "Create a resource management and planning tool",
      copilotStudio: "Build a resource planning assistant",
      powerBI: "Visualize resource utilization and availability"
    }
  },
  {
    id: 18,
    name: "Industry Compliance Tracker",
    description: "Monitors industry-specific regulatory changes",
    category: "compliance",
    serviceLines: ["TAX", "ASR", "IFS"],
    icon: Shield,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "100% compliance with regulatory updates",
    implementationPlan: {
      msCopilot: "Track and summarize regulatory changes",
      powerAutomate: "Send alerts for relevant regulatory updates",
      powerApps: "Build a compliance management dashboard",
      copilotStudio: "Create a regulatory change assistant",
      powerBI: "Monitor compliance status across regulations"
    }
  },
  {
    id: 19,
    name: "Client Portfolio Analyzer",
    description: "Provides insights on client portfolios and recommends opportunities",
    category: "financial",
    serviceLines: ["DEALS", "IFS"],
    icon: PieChart,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "High",
    crossServiceValue: "Medium",
    keyBenefit: "30% increase in cross-selling opportunities identified",
    implementationPlan: {
      msCopilot: "Identify cross-selling opportunities and insights",
      powerAutomate: "Schedule portfolio reviews and opportunity alerts",
      powerApps: "Build a client portfolio management platform",
      copilotStudio: "Create a portfolio advisor bot",
      powerBI: "Develop portfolio visualization and opportunity dashboards"
    }
  },
  {
    id: 20,
    name: "Knowledge Sharing Platform",
    description: "Facilitates organization-wide expertise sharing and collaboration",
    category: "project-management",
    serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
    icon: Share2,
    priority: "strategic",
    phase: "Phase 3",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "40% increase in internal knowledge sharing",
    implementationPlan: {
      msCopilot: "Generate knowledge summaries and recommendations",
      powerAutomate: "Facilitate knowledge sharing workflows",
      powerApps: "Build a collaborative knowledge platform",
      copilotStudio: "Create a knowledge discovery assistant",
      powerBI: "Track knowledge sharing metrics and impact"
    }
  }
];

// Helper functions
export const getCategoryCounts = () => {
  const counts = {};
  
  categories.forEach(category => {
    counts[category.id] = useCases.filter(uc => uc.category === category.id).length;
  });
  
  return counts;
};

export const getCategoryColor = (categoryId) => {
  const category = categories.find(c => c.id === categoryId);
  return category ? category.color : "gray";
};

export const getPriorityBadgeClass = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "strategic":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
