
import { BarChart, DollarSign, TrendingUp, PieChart } from "lucide-react";
import { UseCase } from "../types";

export const financialUseCases: UseCase[] = [
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
  }
];
