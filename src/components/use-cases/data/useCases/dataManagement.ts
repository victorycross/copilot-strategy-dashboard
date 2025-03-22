
import { FileText, Globe, Database } from "lucide-react";
import { UseCase } from "../types";

export const dataManagementUseCases: UseCase[] = [
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
      msCopilot: {
        summary: "Analyze data patterns and quality issues",
        examples: [
          {
            title: "Data Pattern Analysis",
            description: "Use Copilot to identify patterns in data that might indicate quality issues",
            example: "Analyze the last 3 months of customer data and identify any patterns that suggest data quality issues, such as inconsistent formatting or missing fields."
          },
          {
            title: "Quality Report Generation",
            description: "Generate weekly data quality reports",
            example: "Create a comprehensive report summarizing the data quality issues found this week, prioritized by severity and impact on business operations."
          }
        ],
        connections: [
          {
            targetTool: "powerAutomate",
            description: "Generate alerts when Copilot identifies critical data quality issues that require immediate attention"
          },
          {
            targetTool: "powerBI",
            description: "Send Copilot analysis results to Power BI for visualization of data quality metrics over time"
          }
        ]
      },
      powerAutomate: {
        summary: "Create automated data quality checks",
        examples: [
          {
            title: "Scheduled Data Validation",
            description: "Set up automatic validation of new data entries",
            example: "Create a flow that runs daily at midnight to validate all new data entries from the previous day, checking for duplicates, missing fields, and inconsistent formatting."
          }
        ],
        connections: [
          {
            targetTool: "sharePoint",
            description: "Trigger flows when new data is added to SharePoint lists to perform immediate validation"
          },
          {
            targetTool: "powerApps",
            description: "Receive notifications from Power Apps when users manually flag data quality issues"
          }
        ]
      },
      powerApps: {
        summary: "Build a data quality management dashboard",
        examples: [
          {
            title: "Quality Dashboard",
            description: "Create an interactive dashboard for monitoring data quality",
            example: "Design a dashboard showing real-time data quality metrics with filters for department, data source, and time period."
          }
        ],
        connections: [
          {
            targetTool: "sharePoint",
            description: "Connect to SharePoint lists to display and edit data directly within the app"
          }
        ]
      },
      copilotStudio: {
        summary: "Develop a data quality assistant",
        examples: [
          {
            title: "Quality Chatbot",
            description: "Create a conversational interface for data quality management",
            example: "Build a bot that can answer questions like 'What are the most common data quality issues in the customer database?' or 'Show me the trend of data quality issues over the past month.'"
          }
        ],
        connections: [
          {
            targetTool: "powerBI",
            description: "Access Power BI reports to answer questions about data quality metrics and trends"
          }
        ]
      },
      powerBI: {
        summary: "Track data quality metrics and improvement trends",
        examples: [
          {
            title: "Quality Metrics Dashboard",
            description: "Visualize key data quality metrics",
            example: "Create a dashboard with charts showing completeness, accuracy, consistency, and timeliness metrics for all critical data sources."
          }
        ],
        connections: [
          {
            targetTool: "sharePoint",
            description: "Pull data directly from SharePoint lists to generate real-time quality metrics"
          }
        ]
      },
      sharePoint: {
        summary: "Store and manage data quality documentation and standards",
        examples: [
          {
            title: "Documentation Repository",
            description: "Create a central repository for data quality standards",
            example: "Set up a SharePoint site with libraries for data quality policies, standards, and procedures, with version control and approval workflows."
          }
        ],
        connections: [
          {
            targetTool: "powerAutomate",
            description: "Trigger validation workflows when new data is added to SharePoint lists"
          }
        ]
      }
    }
  }
];
