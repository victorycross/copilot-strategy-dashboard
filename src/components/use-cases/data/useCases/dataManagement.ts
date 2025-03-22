
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
      msCopilot: {
        summary: "Extract and summarize key information from documents",
        examples: [
          {
            title: "Document Summary",
            description: "Use Copilot to create concise summaries of lengthy documents",
            example: "Summarize the main points from this 30-page contract focusing on payment terms and deliverables."
          }
        ],
        connections: [
          {
            targetTool: "powerAutomate",
            description: "Generate summaries that trigger Power Automate flows for further processing"
          }
        ],
        detailedInstructions: `# Microsoft Copilot Implementation Guide for Document Analysis

## Prerequisites
1. Microsoft 365 account with Copilot license
2. Access to organization's document repository
3. Basic understanding of natural language prompting

## Step 1: Set Up Document Access
1. Ensure your Microsoft Copilot has access to your document libraries
   - Open Microsoft 365 admin center
   - Navigate to Settings > Org Settings > Copilot
   - Verify document sources are correctly connected

## Step 2: Create Effective Prompts
For tax and financial document analysis, use these template prompts:

### Financial Statement Analysis
```
Analyze this financial statement and identify:
1. Key financial ratios
2. Year-over-year changes exceeding 10%
3. Potential tax implications
4. Summarize in 3-5 bullet points
```

### Contract Analysis
```
Extract from this contract:
1. Payment terms and deadlines
2. Service level agreements
3. Termination clauses
4. Tax implications
Create a table with these key points.
```

## Step 3: Train Users
1. Schedule 1-hour training sessions for team members
2. Create a prompt library document in SharePoint with effective examples
3. Develop best practices guide for document analysis scenarios

## Step 4: Integration Strategy
1. Use browser plugin for easy access to Copilot during document review
2. Train users to save Copilot responses in standardized format
3. Develop workflow for sharing insights with team members

## Step 5: Measuring Success
1. Track time spent on document analysis before and after implementation
2. Survey users on quality of extracted information
3. Compare extraction accuracy with previous manual processes

## Common Issues and Solutions
1. **Problem**: Copilot misses specific tax terminology
   **Solution**: Include specific instructions to focus on tax-relevant terms

2. **Problem**: Long documents exceed context window
   **Solution**: Split document analysis into sections with focused prompts

3. **Problem**: Inconsistent formatting of outputs
   **Solution**: Use structured prompts that specify output format (tables, bullet points)`
      },
      powerAutomate: {
        summary: "Create workflows to route documents and trigger analysis",
        detailedInstructions: `# Power Automate Implementation Guide for Document Processing

## Prerequisites
1. Power Automate license (Premium recommended for AI Builder features)
2. Access to SharePoint document libraries
3. Administrative access to create connections

## Step 1: Set Up Document Storage
1. Create a structured SharePoint document library
   - Create separate folders for incoming, processing, and completed documents
   - Set up appropriate permissions for team access

2. Create document metadata columns
   - Document Type (Tax Return, Financial Statement, Invoice, etc.)
   - Processing Status (New, In Progress, Completed)
   - Priority (High, Medium, Low)
   - Assigned To (Person responsible)

## Step 2: Create Automated Document Processing Flow
1. Open Power Automate and select "Create new flow"
2. Choose "Automated - from blank"
3. Name your flow (e.g., "Client Document Processing")
4. Select trigger: "When a file is created in a folder" (SharePoint connector)
5. Configure the trigger to monitor your incoming documents folder

## Step 3: Add Document Classification Step
1. Add an AI Builder action: "Extract information from documents"
2. Configure the model to extract relevant fields based on document type
3. Add a condition to route documents based on type:
   - Tax documents → Tax processing subfolder
   - Financial statements → Financial analysis subfolder
   - Invoices → Accounting subfolder

## Step 4: Add Notification and Assignment Actions
1. Add action: "Create a task" (Planner connector)
   - Assign to appropriate team member based on document type
   - Set due date (e.g., 2 business days from upload)
   - Include link to document

2. Add action: "Send an email notification" (Outlook connector)
   - Notify assigned person
   - Include document metadata and link
   - Add priority flag for high-priority documents

## Step 5: Create Status Update Flow
1. Create a separate flow triggered when document status changes
2. Add conditions for different status values:
   - "In Progress" → Send status update to client
   - "Completed" → Move to completed folder and notify team

## Step 6: Testing and Optimization
1. Upload test documents of each type
2. Verify correct routing and task assignment
3. Check notification delivery
4. Measure processing time and look for bottlenecks

## Step 7: Error Handling
1. Add "Configure run after" settings to handle failures
2. Create a dedicated error handling flow that:
   - Logs errors to a SharePoint list
   - Notifies administrators
   - Attempts to restart failed flows when appropriate

## Advanced Features
1. Implement approval workflows for sensitive documents
2. Create weekly summary reports of document processing metrics
3. Set up automated follow-ups for stalled documents

## Maintenance Plan
1. Review flow run history weekly
2. Update document extraction models quarterly
3. Conduct user feedback sessions monthly`
      },
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
