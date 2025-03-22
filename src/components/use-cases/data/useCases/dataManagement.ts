import { FileText, Database } from "lucide-react";
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
            title: "Document Analysis Prompt",
            description: "Use this prompt to analyze financial statements",
            example: "Analyze this financial statement and extract key metrics including revenue, EBITDA, net profit, and year-over-year changes. Format the output as a JSON object."
          },
          {
            title: "Information Extraction Prompt",
            description: "Use this prompt to extract client information",
            example: "Extract all client contact information from this document including company name, address, key personnel, and contact details. Organize this information in a structured format."
          }
        ],
        connections: [
          {
            targetTool: "Power Automate",
            description: "Use Copilot outputs as triggers for document routing workflows"
          },
          {
            targetTool: "SharePoint",
            description: "Process documents stored in SharePoint libraries"
          }
        ]
      },
      powerAutomate: {
        summary: "Create workflows to route documents and trigger analysis",
        examples: [
          {
            title: "Document Processing Flow",
            description: "Workflow to process incoming documents",
            example: "Trigger: When a new document is uploaded to SharePoint\nActions:\n1. Convert document to text (if needed)\n2. Call Microsoft Copilot for analysis\n3. Extract metadata\n4. Update SharePoint metadata\n5. Notify relevant team members\n6. Move document to appropriate folder based on type"
          }
        ],
        connections: [
          {
            targetTool: "SharePoint",
            description: "Monitor document libraries for new files and update metadata"
          },
          {
            targetTool: "Power Apps",
            description: "Trigger flows from the document submission interface"
          }
        ]
      },
      powerApps: {
        summary: "Build a custom interface for document submission and review",
        examples: [
          {
            title: "Document Uploader Screen",
            description: "Main document submission interface",
            example: "Screen includes:\n- File upload control with drag & drop\n- Document type dropdown\n- Client selection field\n- Urgency indicator\n- Submit button that triggers Power Automate flow\n- Progress indicator for processing status"
          }
        ],
        connections: [
          {
            targetTool: "Power Automate",
            description: "Trigger document processing workflows on submission"
          },
          {
            targetTool: "SharePoint",
            description: "Read and write documents and metadata to SharePoint libraries"
          }
        ]
      },
      copilotStudio: {
        summary: "Design custom prompt flows for document analysis",
        examples: [
          {
            title: "Tax Document Analyzer",
            description: "Custom plugin for tax document processing",
            example: "Plugin configuration:\n- Input: PDF document\n- Processing steps:\n  1. Extract header information\n  2. Identify document type\n  3. Extract tax identifiers\n  4. Determine tax year\n  5. Extract key financial figures\n- Output: Structured JSON with extracted data"
          }
        ],
        connections: [
          {
            targetTool: "Power Automate",
            description: "Integrate with document processing flows"
          },
          {
            targetTool: "Power BI",
            description: "Feed extracted data into analytics dashboards"
          }
        ]
      },
      powerBI: {
        summary: "Visualize document processing metrics and extracted insights",
        examples: [
          {
            title: "Document Processing Dashboard",
            description: "Monitor document processing efficiency",
            example: "Dashboard components:\n- Processing time by document type (bar chart)\n- Volume of documents processed over time (line chart)\n- Documents by status (pie chart)\n- Processing bottlenecks (heat map)\n- Team member performance metrics\n- Client document submission patterns"
          }
        ],
        connections: [
          {
            targetTool: "SharePoint",
            description: "Pull document metadata from SharePoint lists"
          },
          {
            targetTool: "Power Automate",
            description: "Refresh reports when new documents are processed"
          }
        ]
      },
      sharePoint: {
        summary: "Organize and store documents with enhanced metadata",
        examples: [
          {
            title: "Document Library Setup",
            description: "SharePoint library configuration for document analysis",
            example: "Library structure:\n- Custom content types for different document categories\n- Additional metadata fields:\n  - Document type\n  - Client ID\n  - Processing status\n  - Extracted data summary\n  - Confidence score\n  - Last processed date\n- Views filtered by document type and processing status\n- Retention policies based on document type"
          }
        ],
        connections: [
          {
            targetTool: "Power Automate",
            description: "Trigger workflows when documents are added or modified"
          },
          {
            targetTool: "Power Apps",
            description: "Provide document library access through custom interfaces"
          }
        ]
      }
    }
  },
  {
    id: 7,
    name: "Market Research Digest",
    description: "Summarizes industry trends and competitor activities",
    category: "data-management",
    serviceLines: ["DEALS", "IFS"],
    icon: Database,
    priority: "medium",
    phase: "Phase 2",
    complexity: "Medium",
    crossServiceValue: "Medium",
    keyBenefit: "25% improved market intelligence",
    implementationPlan: {
      msCopilot: {
        summary: "Analyze and summarize market research reports",
        examples: [
          {
            title: "Market Trend Analysis",
            description: "Extract key trends from research reports",
            example: "Analyze this market research report and extract the top 5 industry trends, their potential impact on our clients, and recommended actions. Include relevant statistics and a confidence level for each trend."
          },
          {
            title: "Competitor Analysis",
            description: "Compare competitors in the market",
            example: "Create a competitive analysis table from this report comparing these companies: [Company A, Company B, Company C] across the following dimensions: market share, product offerings, pricing strategy, strengths, and weaknesses."
          }
        ],
        connections: [
          {
            targetTool: "Power BI",
            description: "Visualize extracted market trends in dashboards"
          },
          {
            targetTool: "SharePoint",
            description: "Process market research documents stored in SharePoint"
          }
        ]
      },
      powerAutomate: {
        summary: "Schedule regular market data collection",
        examples: [
          {
            title: "Weekly Research Collection",
            description: "Automated collection of market research",
            example: "Trigger: Scheduled weekly\nActions:\n1. Query market research API services\n2. Download new reports from subscribed sources\n3. Save reports to SharePoint\n4. Process reports with Microsoft Copilot\n5. Update market intelligence database\n6. Send digest email to stakeholders"
          }
        ],
        connections: [
          {
            targetTool: "SharePoint",
            description: "Store and organize collected research documents"
          },
          {
            targetTool: "Power BI",
            description: "Trigger dashboard refreshes with new data"
          }
        ]
      },
      powerApps: {
        summary: "Create a market intelligence hub",
        examples: [
          {
            title: "Market Intelligence Dashboard",
            description: "Main interface for accessing market insights",
            example: "App screens:\n- Home: Overview with latest insights and filters\n- Trends: Industry trends with filtering by sector\n- Competitors: Detailed competitor analysis\n- Reports: Access to full research reports\n- Alerts: Setup custom alerts for specific market changes\n- Search: Advanced search across all market intelligence"
          }
        ],
        connections: [
          {
            targetTool: "SharePoint",
            description: "Retrieve and display documents from research library"
          },
          {
            targetTool: "Power BI",
            description: "Embed market intelligence visualizations"
          }
        ]
      },
      copilotStudio: {
        summary: "Build a market trends Q&A bot",
        examples: [
          {
            title: "Market Intelligence Bot",
            description: "Conversational interface for market research",
            example: "Bot capabilities:\n- Answer questions about market trends\n- Provide competitor information\n- Summarize recent industry developments\n- Compare market segments\n- Provide statistics and forecasts\n- Generate quick research briefs\n\nSample dialog:\nUser: \"What are the top trends in renewable energy this quarter?\"\nBot: [Provides concise summary with key statistics and source links]"
          }
        ],
        connections: [
          {
            targetTool: "Power Apps",
            description: "Embed bot in the market intelligence app"
          },
          {
            targetTool: "SharePoint",
            description: "Access research documents to provide answers"
          }
        ]
      },
      powerBI: {
        summary: "Visualize market trends and competitive positioning",
        examples: [
          {
            title: "Market Intelligence Dashboard",
            description: "Visual representation of market data",
            example: "Dashboard pages:\n1. Market Overview:\n   - Market size and growth by sector (bubble chart)\n   - Trend indicators with forecasts (line charts)\n2. Competitive Landscape:\n   - Market share analysis (treemap)\n   - Competitor positioning (scatter plot)\n3. Industry Trends:\n   - Trend impact assessment (heat map)\n   - Technology adoption curves\n4. Geographic Insights:\n   - Regional market penetration (maps)\n   - Growth opportunities by region"
          }
        ],
        connections: [
          {
            targetTool: "SharePoint",
            description: "Source data from research document metadata"
          },
          {
            targetTool: "Power Apps",
            description: "Embed visualizations in market intelligence app"
          }
        ]
      },
      sharePoint: {
        summary: "Organize and store market research documents",
        examples: [
          {
            title: "Research Library Structure",
            description: "Organization of market research content",
            example: "Site structure:\n- Industry Reports Library\n  - Organized by industry, year, and source\n  - Custom metadata: report type, key findings, sectors covered\n- Competitor Analysis Library\n  - Organized by competitor name and analysis type\n- Market News Library\n  - Daily market updates with tagging\n- Insight Archive\n  - Processed insights from reports\n  - Connected to Power BI for visualization"
          }
        ],
        connections: [
          {
            targetTool: "Power Automate",
            description: "Process new documents as they're added to libraries"
          },
          {
            targetTool: "Microsoft Copilot",
            description: "Analyze documents stored in SharePoint libraries"
          }
        ]
      }
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
            title: "Data Anomaly Detection",
            description: "Identify unusual patterns in datasets",
            example: "Analyze this dataset for anomalies in sales figures, identifying any outliers that deviate significantly from historical trends. Provide a summary of potential causes for these anomalies."
          },
          {
            title: "Data Consistency Check",
            description: "Verify consistency across multiple data sources",
            example: "Compare customer data from our CRM and billing systems to identify inconsistencies in contact information, addresses, and purchase history. Highlight any discrepancies that need investigation."
          }
        ],
        connections: [
          {
            targetTool: "Power Automate",
            description: "Trigger alerts for data quality issues"
          },
          {
            targetTool: "Power BI",
            description: "Visualize data quality metrics"
          }
        ]
      },
      powerAutomate: {
        summary: "Create automated data quality checks",
        examples: [
          {
            title: "Daily Data Validation",
            description: "Automated data quality checks",
            example: "Trigger: Scheduled daily\nActions:\n1. Extract data from source systems\n2. Run data quality checks using Copilot\n3. Log any data quality issues\n4. Notify data stewards\n5. Generate data quality report"
          }
        ],
        connections: [
          {
            targetTool: "Power BI",
            description: "Update data quality dashboards"
          },
          {
            targetTool: "Power Apps",
            description: "Allow users to review and correct data issues"
          }
        ]
      },
      powerApps: {
        summary: "Build a data quality management dashboard",
        examples: [
          {
            title: "Data Quality Dashboard",
            description: "Interface for monitoring data quality",
            example: "App screens:\n- Overview: Summary of data quality metrics\n- Issues: List of data quality issues with details\n- Rules: Data quality rules and their status\n- History: Trend of data quality over time\n- Correction: Interface for correcting data issues"
          }
        ],
        connections: [
          {
            targetTool: "Power Automate",
            description: "Trigger data quality checks"
          },
          {
            targetTool: "Power BI",
            description: "Embed data quality visualizations"
          }
        ]
      },
      copilotStudio: {
        summary: "Develop a data quality assistant",
        examples: [
          {
            title: "Data Quality Bot",
            description: "Conversational interface for data quality",
            example: "Bot capabilities:\n- Answer questions about data quality\n- Provide details on data quality issues\n- Guide users through data correction process\n- Explain data quality rules\n\nSample dialog:\nUser: \"What is the data quality score for customer data?\"\nBot: [Provides score and details on issues]"
          }
        ],
        connections: [
          {
            targetTool: "Power Apps",
            description: "Embed bot in the data quality app"
          },
          {
            targetTool: "Power BI",
            description: "Access data quality metrics for analysis"
          }
        ]
      },
      powerBI: {
        summary: "Track data quality metrics and improvement trends",
        examples: [
          {
            title: "Data Quality Dashboard",
            description: "Visual representation of data quality",
            example: "Dashboard pages:\n1. Data Quality Score:\n   - Overall data quality score (gauge chart)\n   - Score by data domain (bar chart)\n2. Data Quality Issues:\n   - Number of issues by type (pie chart)\n   - Trend of issues over time (line chart)\n3. Data Quality Rules:\n   - Status of each rule (table)\n   - Compliance rate (bar chart)"
          }
        ],
        connections: [
          {
            targetTool: "Power Automate",
            description: "Refresh reports with new data quality results"
          },
          {
            targetTool: "SharePoint",
            description: "Source data from data quality logs"
          }
        ]
      },
      sharePoint: {
        summary: "Store data quality logs and reports",
        examples: [
          {
            title: "Data Quality Library",
            description: "Organization of data quality content",
            example: "Site structure:\n- Data Quality Logs Library\n  - Organized by date and data domain\n  - Custom metadata: issue type, severity, resolution status\n- Data Quality Reports Library\n  - Organized by report type and date\n- Data Quality Rules Library\n  - List of data quality rules with details"
          }
        ],
        connections: [
          {
            targetTool: "Power Automate",
            description: "Process new data quality logs"
          },
          {
            targetTool: "Microsoft Copilot",
            description: "Analyze data quality logs"
          }
        ]
      }
    }
  }
];
