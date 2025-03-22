
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
\`\`\`
Analyze this financial statement and identify:
1. Key financial ratios
2. Year-over-year changes exceeding 10%
3. Potential tax implications
4. Summarize in 3-5 bullet points
\`\`\`

### Contract Analysis
\`\`\`
Extract from this contract:
1. Payment terms and deadlines
2. Service level agreements
3. Termination clauses
4. Tax implications
Create a table with these key points.
\`\`\`

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
      powerApps: {
        summary: "Build a custom interface for document submission and review",
        examples: [
          {
            title: "Document Upload Portal",
            description: "Create an interface for users to upload and categorize documents",
            example: "Design a form with document type selection, priority setting, and drag-and-drop upload area."
          },
          {
            title: "Document Review Dashboard",
            description: "Build a dashboard for reviewing extracted document data",
            example: "Create a table view showing document name, status, assigned reviewer, and key extracted information with filtering options."
          }
        ],
        connections: [
          {
            targetTool: "sharePoint",
            description: "Store uploaded documents and metadata in SharePoint lists"
          },
          {
            targetTool: "powerAutomate",
            description: "Trigger document processing flows when documents are uploaded"
          }
        ],
        detailedInstructions: `# Power Apps Implementation Guide for Document Management

## Prerequisites
1. Power Apps license (Premium recommended for full features)
2. Access to SharePoint document libraries and lists
3. Basic understanding of Power Apps interface

## Step 1: Plan Your App Structure
1. Define key screens needed:
   - Home/Dashboard
   - Document Upload
   - Document Search/Browse
   - Document Review/Detail
   - Settings/Preferences

2. Define user roles and permissions:
   - Standard Users (upload and view own documents)
   - Reviewers (process and tag documents)
   - Administrators (manage settings and users)

## Step 2: Create a New Canvas App
1. Open Power Apps Studio
2. Create a new canvas app (tablet layout recommended)
3. Name your app (e.g., "Document Management Portal")

## Step 3: Set Up Data Connections
1. Connect to SharePoint document libraries:
   - Create a connection to your SharePoint site
   - Add your document library as a data source
   - Add any metadata lists as data sources

2. Set up additional connections:
   - Microsoft 365 users (for user information)
   - Office 365 Outlook (for notifications)
   - Power Automate flows (for document processing)

## Step 4: Create the Document Upload Screen
1. Add a form with these components:
   - File upload control with image and instructions
   - Document type dropdown (connected to document types list)
   - Priority selection (radio buttons or dropdown)
   - Department/category selection
   - Description field
   - Submit button

2. Configure the submit button:
   - Create a flow that saves document to SharePoint
   - Pass metadata as parameters
   - Show success confirmation
   - Navigate back to dashboard

## Step 5: Build the Document Browser
1. Create a gallery control:
   - Connect to your document library
   - Configure to show document name, type, date, status
   - Add filter controls above gallery
   - Add sort options (newest, alphabetical, etc.)

2. Add search functionality:
   - Create search box that filters gallery
   - Add advanced search option with more filters

## Step 6: Create Document Detail View
1. Design detail screen that shows:
   - Document preview (if possible)
   - All metadata
   - Processing status
   - Extracted information
   - Action buttons (approve, reject, request changes)

2. Add commenting/annotation feature:
   - Allow users to highlight sections
   - Enable comments on specific parts
   - Save annotations to SharePoint

## Step 7: Build Dashboard
1. Add summary cards showing:
   - Documents pending review
   - Recently uploaded documents
   - Documents assigned to current user
   - Processing status metrics

2. Add charts visualizing:
   - Documents by type
   - Processing times
   - User activity

## Step 8: Testing and Deployment
1. Test with sample documents
2. Get feedback from potential users
3. Make refinements based on feedback
4. Create and test user guides
5. Deploy to test group before full rollout

## Maintenance and Updates
1. Monitor usage patterns
2. Schedule regular updates
3. Collect ongoing feedback
4. Add new features based on user needs

## Advanced Features
1. Implement version control for documents
2. Add document comparison tools
3. Integrate Microsoft Teams for collaboration
4. Add mobile app version for on-the-go access`
      },
      copilotStudio: {
        summary: "Design custom prompt flows for document analysis",
        examples: [
          {
            title: "Document Analysis Bot",
            description: "Create a bot that can analyze and extract key information from documents",
            example: "Build a bot that responds to 'Analyze this invoice' by extracting payment terms, amounts, and due dates."
          }
        ],
        connections: [
          {
            targetTool: "powerApps",
            description: "Embed the document analysis bot within the document management app"
          }
        ],
        detailedInstructions: `# Copilot Studio Implementation Guide for Document Analysis

## Prerequisites
1. Copilot Studio license
2. Access to organization's knowledge bases
3. Basic understanding of conversational design

## Step 1: Plan Your Bot's Capabilities
1. Define primary use cases:
   - Extracting specific information from documents
   - Answering questions about document content
   - Guiding users through document submission
   - Providing document status updates

2. Create conversation flows for each scenario:
   - Document upload guidance
   - Information extraction
   - Status inquiries
   - Processing instructions

## Step 2: Create Your Bot in Copilot Studio
1. Open Copilot Studio
2. Create a new bot:
   - Name your bot (e.g., "Document Analysis Assistant")
   - Select your language(s)
   - Choose a deployment environment

3. Define bot personality:
   - Professional and helpful
   - Concise but thorough
   - Expert in document processing terminology
   - Patient with follow-up questions

## Step 3: Build Core Conversation Topics
1. Create a greeting topic:
   - Welcome message introducing bot capabilities
   - Quick help options for common tasks
   - Clear instructions for document submission

2. Create document analysis topics:
   - "Extract information" topic for key data extraction
   - "Summarize document" topic for quick overviews
   - "Compare documents" topic for finding differences

3. Create guidance topics:
   - "How to prepare documents" with formatting tips
   - "Document requirements" explaining standards
   - "Processing timeline" explaining typical workflows

## Step 4: Implement Document Processing Capabilities
1. Set up document understanding:
   - Create document type classifier
   - Define extractors for different document types
   - Test with sample documents

2. Configure entity extraction:
   - Define entities (dates, amounts, parties, terms)
   - Train entity recognition models
   - Create entity validation rules

3. Build summarization capability:
   - Create prompts for different document types
   - Define output formats (bullet points, tables)
   - Test with various document lengths

## Step 5: Connect to Backend Systems
1. Create Power Automate flow connections:
   - Document library access
   - Processing status check
   - User assignment lookup

2. Set up authentication:
   - Configure SSO for seamless user experience
   - Set permission levels for different operations
   - Test with various user roles

## Step 6: Enhance with AI Capabilities
1. Implement prompt engineering:
   - Create effective prompts for different document types
   - Add context for better understanding
   - Implement follow-up question handling

2. Add knowledge bases:
   - Connect to document processing guidelines
   - Link to common document standards
   - Include FAQ about document requirements

## Step 7: Testing and Refinement
1. Conduct user testing:
   - Test with various document types
   - Collect feedback on accuracy and usability
   - Identify common failure points

2. Improve language understanding:
   - Add synonyms for key terms
   - Expand trigger phrases
   - Handle different ways users might ask for help

3. Optimize response generation:
   - Refine output formatting
   - Adjust detail level based on context
   - Ensure clear error messages

## Step 8: Deployment and Monitoring
1. Deploy to production:
   - Publish to Teams, SharePoint, or web
   - Create user guides and introduction materials
   - Schedule training sessions

2. Set up analytics:
   - Track usage patterns
   - Monitor success rates
   - Identify opportunities for improvement

3. Establish maintenance plan:
   - Regular review of conversation logs
   - Periodic retraining of AI models
   - Quarterly feature enhancement`
      },
      powerBI: {
        summary: "Visualize document processing metrics and extracted insights",
        examples: [
          {
            title: "Document Processing Dashboard",
            description: "Create visualizations of document processing efficiency",
            example: "Build a dashboard showing average processing time by document type, volume trends, and bottleneck identification."
          }
        ],
        connections: [
          {
            targetTool: "sharePoint",
            description: "Pull document metadata and processing logs from SharePoint for analysis"
          }
        ],
        detailedInstructions: `# Power BI Implementation Guide for Document Analytics

## Prerequisites
1. Power BI license (Pro or Premium)
2. Access to document processing data sources
3. Basic understanding of data modeling and visualization

## Step 1: Identify Key Metrics and Data Sources
1. Define critical metrics:
   - Document processing volume
   - Processing time (total and by stage)
   - Error/exception rates
   - User productivity
   - Document type distribution
   - Data extraction accuracy

2. Identify data sources:
   - SharePoint document libraries
   - Power Automate flow logs
   - Document metadata
   - User activity logs
   - Extraction results database

## Step 2: Set Up Data Connections
1. Open Power BI Desktop
2. Create connections to data sources:
   - Connect to SharePoint lists and libraries
   - Add SQL databases if applicable
   - Import Excel tracking sheets if used
   - Connect to Power Platform dataflows

3. Configure refresh settings:
   - Set up gateway for on-premises data
   - Configure scheduled refreshes
   - Set up incremental refresh for large datasets

## Step 3: Create Data Model
1. Define relationships between tables:
   - Documents to document types
   - Documents to processing stages
   - Documents to users
   - Extraction results to documents

2. Create calculated columns and measures:
   - Processing time calculation
   - SLA compliance percentage
   - Error rate calculation
   - Extraction accuracy metrics

3. Set up hierarchies:
   - Time hierarchy (year, quarter, month, day)
   - Document type hierarchy (category, type, subtype)
   - Organizational hierarchy (department, team, user)

## Step 4: Build Core Visualizations
1. Create executive summary page:
   - KPI cards for key metrics
   - Trend chart of processing volume
   - Gauge charts for SLA compliance
   - Alert indicators for problem areas

2. Create operational dashboard:
   - Document status breakdown
   - Processing queue length
   - Current bottlenecks
   - Staff workload distribution

3. Create performance analysis page:
   - Processing time by document type
   - Processing time trends
   - Comparison to baseline/targets
   - Exception rate analysis

## Step 5: Add Advanced Analytics
1. Implement time intelligence:
   - Month-over-month comparisons
   - Year-over-year growth
   - Rolling averages
   - Seasonal pattern detection

2. Add forecasting:
   - Predictive models for volume
   - Processing capacity planning
   - Exception prediction
   - Resource requirement forecasts

3. Implement anomaly detection:
   - Identify unusual processing patterns
   - Flag potential issues
   - Monitor for process degradation

## Step 6: Create User-Focused Views
1. Build team lead dashboard:
   - Team performance metrics
   - Individual productivity
   - Quality metrics
   - Workload balancing tools

2. Create processor dashboard:
   - Individual queue status
   - Performance against targets
   - Quality metrics
   - Upcoming work prediction

3. Build executive view:
   - Cost savings metrics
   - Process improvement tracking
   - Cross-department comparisons
   - Strategic goal progress

## Step 7: Deploy and Share
1. Publish to Power BI service:
   - Create workspace for document analytics
   - Set up row-level security if needed
   - Configure automatic refresh
   - Set alerting thresholds

2. Create and distribute apps:
   - Package reports into an app
   - Configure navigation experience
   - Add documentation and help
   - Share with appropriate users

3. Set up subscriptions and alerts:
   - Schedule email reports
   - Configure critical alerts
   - Set up mobile notifications

## Step 8: Continuous Improvement
1. Gather user feedback:
   - Conduct usage surveys
   - Track page popularity
   - Monitor question frequency

2. Refine and enhance:
   - Add new visualizations
   - Improve performance
   - Integrate new data sources
   - Update metrics as processes change

3. Knowledge sharing:
   - Document insights discovered
   - Create training for effective dashboard use
   - Develop best practices guide`
      },
      sharePoint: {
        summary: "Store and organize processed documents with metadata",
        examples: [
          {
            title: "Document Repository",
            description: "Create a structured document library with appropriate metadata",
            example: "Set up a document library with columns for document type, processing status, assigned reviewer, and key extracted data points."
          }
        ],
        connections: [
          {
            targetTool: "powerAutomate",
            description: "Trigger workflows when documents are added or modified in SharePoint"
          }
        ],
        detailedInstructions: `# SharePoint Implementation Guide for Document Management

## Prerequisites
1. SharePoint Online or SharePoint Server
2. Administrative access to create and configure sites
3. Understanding of document management requirements

## Step 1: Plan Your Document Management Structure
1. Define document organization:
   - Identify document categories
   - Determine logical groupings
   - Plan folder structure (if needed)
   - Define access requirements

2. Create metadata schema:
   - Document type (choice field)
   - Status (choice field)
   - Department/Team (choice field)
   - Priority (choice field)
   - Custom fields for extracted data

3. Plan workflows:
   - Document approval process
   - Routing rules
   - Notification requirements
   - Archiving policies

## Step 2: Create SharePoint Site
1. Create a dedicated site or use existing site:
   - Go to SharePoint admin center
   - Click "Create site"
   - Choose "Team site" or "Communication site"
   - Name your site (e.g., "Document Management Center")

2. Configure site settings:
   - Set appropriate site permissions
   - Enable required features
   - Configure navigation
   - Apply branding if needed

## Step 3: Set Up Document Libraries
1. Create main document library:
   - Go to site content
   - Click "New" > "Document library"
   - Name it (e.g., "Client Documents")

2. Create additional libraries as needed:
   - Templates library
   - Archive library
   - Department-specific libraries

3. Configure library settings:
   - Enable versioning
   - Set required check-out if needed
   - Configure item-level permissions if required

## Step 4: Create Metadata Columns
1. Add standard columns to libraries:
   - Document Type (choice field)
   - Status (choice field)
   - Priority (choice field)
   - Department (choice field)
   - Assigned To (person field)

2. Add document processing columns:
   - Processed Date (date field)
   - Processing Time (number field)
   - Extraction Confidence (number field)
   - Extracted Data columns (as needed)

3. Create additional calculated columns:
   - Days Since Submission
   - SLA Status
   - Age Category

## Step 5: Create Content Types
1. Define content types for different document categories:
   - Invoice
   - Contract
   - Tax Return
   - Financial Statement

2. Configure each content type:
   - Add appropriate columns
   - Set required fields
   - Configure document template if applicable

3. Apply content types to libraries:
   - Enable content type management in library settings
   - Add relevant content types to libraries

## Step 6: Set Up Views
1. Create status-based views:
   - New Documents
   - In Processing
   - Completed
   - Exception/Error

2. Create role-based views:
   - My Assigned Documents
   - My Department's Documents
   - High Priority Documents
   - SLA At Risk

3. Configure each view:
   - Select relevant columns
   - Set appropriate filtering
   - Define sorting (typically by date or priority)
   - Choose layout (list, tile, etc.)

## Step 7: Configure Document Sets
1. Create document sets for related documents:
   - Enable document sets feature
   - Create document set content types
   - Configure shared properties
   - Set up welcome page

2. Configure document set workflows:
   - Set up automatic routing
   - Configure approval processes
   - Create notification rules

## Step 8: Set Up Retention Policies
1. Define retention schedules:
   - Determine how long to keep documents
   - Set up different schedules based on document type
   - Configure deletion or archiving

2. Implement records management:
   - Declare certain documents as records
   - Set up in-place records management
   - Configure record restrictions

## Step 9: Implement Search Configuration
1. Customize search experience:
   - Create custom search pages
   - Configure refiners based on metadata
   - Create targeted search verticals

2. Set up metadata-driven search:
   - Ensure columns are searchable
   - Create managed properties if needed
   - Set up result types for document preview

## Step 10: Set Up Integration with Power Platform
1. Configure SharePoint as data source:
   - Create appropriate connections
   - Set up secure access
   - Test connectivity

2. Create integration points:
   - Document upload forms
   - Processing status dashboards
   - Document viewer webparts

3. Implement automated workflows:
   - Document upload notifications
   - Status change alerts
   - Approval process automations`
      }
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
