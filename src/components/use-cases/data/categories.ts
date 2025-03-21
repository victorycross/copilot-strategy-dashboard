
import {
  FileText,
  Database,
  ShieldCheck,
  Users,
  DollarSign,
  Settings,
  CheckSquare
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
