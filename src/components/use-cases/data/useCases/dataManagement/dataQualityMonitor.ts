
import { Database } from "lucide-react";
import { UseCase } from "../../types";

export const dataQualityMonitor: UseCase = {
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
      detailedInstructions: `# Copilot for M365 Implementation

The Copilot agent serves as the primary interface for users to interact with the data quality monitoring system.

## Key Topics (Conversation Triggers)

1. **Data Quality Status**
   - Prompt: "What's our current data quality score?"
   - Response: Provide overall and service-line specific quality metrics
   - Actions: Query metrics database, generate summary, offer drill-down options

2. **Issue Investigation**
   - Prompt: "Show me duplicate customer records"
   - Response: List detected duplicates with confidence scores and fields
   - Actions: Query issues database with filters, provide resolution options

3. **Rule Management**
   - Prompt: "Update the email validation rule"
   - Response: Display current rule, collect modifications, implement changes
   - Actions: Retrieve, modify, and save validation rules

4. **Report Generation**
   - Prompt: "Generate March data quality report for IFS"
   - Response: Create and deliver structured report
   - Actions: Compile metrics, create document, share with stakeholders

## Implementation Approach

Copilot for M365 will be configured to:
- Connect to data quality metrics database for real-time insights
- Access data quality rule definitions for explanations and management
- Generate natural language summaries of complex quality issues
- Provide guided workflows for issue resolution
- Draft data quality reports based on current metrics`,
      connections: [
        {
          targetTool: "powerBI",
          description: "Retrieves data quality metrics from Power BI datasets for reporting and analysis"
        },
        {
          targetTool: "powerAutomate",
          description: "Triggers data quality checks and remediation workflows when issues are identified"
        }
      ]
    },
    powerAutomate: {
      summary: "Create automated data quality checks",
      detailedInstructions: `# Power Automate Workflows

## 1. Data Validation Flow
- Runs on schedule or triggered manually
- Executes validation rules against target datasets
- Logs results to quality monitoring database
- Creates issues for detected problems

## 2. Issue Triage Flow
- Classifies detected issues by severity and type
- Routes issues to appropriate owners
- Creates resolution tasks in task management system
- Updates tracking in SharePoint

## 3. Remediation Tracking Flow
- Monitors issue resolution progress
- Validates fixes when applied
- Updates quality metrics
- Provides feedback for rule refinement

## 4. Alert Notification Flow
- Sends notifications based on severity and subscription
- Escalates unaddressed critical issues
- Provides summary reports to stakeholders

## Sample Rule Execution

A scheduled Power Automate flow executes each configured rule and processes the results:

1. Retrieve active rules from Rules list
2. For each rule:
   - Execute against target data source
   - Parse results
   - Create issues for new problems
   - Update metrics database
3. Generate summary report
4. Notify appropriate stakeholders`,
      connections: [
        {
          targetTool: "sharePoint",
          description: "Stores data quality rules and tracks issue resolution status"
        },
        {
          targetTool: "powerApps",
          description: "Triggers notifications in the data quality management application when issues are detected"
        }
      ]
    },
    powerApps: {
      summary: "Build a data quality management dashboard",
      detailedInstructions: `# Power Apps Interface

The Data Quality Monitor Power App provides role-based interfaces for managing data quality:

## User Roles
- Data Quality Managers
- Data Stewards
- Data Analysts
- Service Line Leaders
- IT Support

## Key Screens
1. **Quality Dashboard**
   - Overall quality score by service line
   - Critical issues requiring attention
   - Trend analysis charts
   - Quick navigation to specific issues

2. **Issue Management**
   - List of current issues with filtering
   - Issue details and history
   - Assignment and status tracking
   - Resolution workflow

3. **Rule Configuration**
   - Rule creation and management
   - Testing interface for new rules
   - Rule effectiveness metrics
   - Version history

4. **Report Generation**
   - Report template selection
   - Parameter configuration
   - Scheduling options
   - Distribution management

5. **Settings**
   - User preferences
   - Notification configuration
   - Role-based permissions
   - Connection management`,
      connections: [
        {
          targetTool: "powerBI",
          description: "Embeds Power BI reports for real-time data quality metrics visualization"
        },
        {
          targetTool: "copilotStudio",
          description: "Integrates with the data quality assistant to provide guided issue resolution"
        }
      ]
    },
    copilotStudio: {
      summary: "Develop a data quality assistant",
      detailedInstructions: `# Copilot Studio Implementation

The Data Quality Assistant built in Copilot Studio provides conversational access to data quality information and guided resolution of issues.

## Conversation Topics

1. **Data Quality Status**
   - Prompt: "What's our current data quality score?"
   - Response: Provide overall metrics with drill-down options
   - Actions: Query metrics API, generate visualizations

2. **Issue Investigation**
   - Prompt: "Show me duplicate customer records"
   - Response: Present issue details with recommended actions
   - Actions: Search issue database, provide resolution guidance

3. **Rule Management**
   - Prompt: "Update the email validation rule"
   - Response: Guide through rule modification process
   - Actions: Retrieve, update and test validation rules

4. **Report Generation**
   - Prompt: "Generate March data quality report for IFS"
   - Response: Create and deliver custom reports
   - Actions: Query metrics, format report, distribute

## Sample Action Definition

\`\`\`yaml
# Sample action definition for issue investigation
name: InvestigateIssue
description: Investigates data quality issues based on specified criteria
parameters:
  - name: issueType
    description: Type of issue to investigate
    type: string
    enum: ["Missing Data", "Invalid Format", "Inconsistent Value", "Duplicate Record", "Reference Violation", "Business Rule Violation"]
  - name: dataSource
    description: Data source to investigate
    type: string
  - name: serviceLine
    description: Service line for filtering
    type: string
    enum: ["ASR", "IFS", "All"]
  - name: timeFrame
    description: Time period for investigation
    type: string
    enum: ["Today", "This Week", "This Month", "Last 30 Days", "Custom"]
execution:
  - action: queryDatabase
    parameters:
      query: "SELECT * FROM Issues WHERE IssueType = '$issueType' AND DataSource = '$dataSource' AND ServiceLine = '$serviceLine'"
  - action: formatResults
    parameters:
      groupBy: "Severity"
      sortBy: "DetectionDate DESC"
response:
  success: "Found $resultCount $issueType issues in $dataSource for $serviceLine. Here's a breakdown by severity: $formattedResults"
  failure: "I couldn't find any matching issues with the criteria you provided. Would you like to broaden your search?"
\`\`\``,
      connections: [
        {
          targetTool: "powerAutomate",
          description: "Triggers remediation workflows when users request action on quality issues"
        },
        {
          targetTool: "sharePoint",
          description: "Accesses issue tracking and rule documentation stored in SharePoint"
        }
      ]
    },
    powerBI: {
      summary: "Track data quality metrics and improvement trends",
      detailedInstructions: `# Power BI Implementation

The solution includes comprehensive analytics dashboards in Power BI:

## 1. Executive Dashboard
- Overall quality score trend
- Critical issues by service line
- Top problematic data sources
- Resolution performance

## 2. Operational Dashboard
- Detailed issue breakdown
- Rule effectiveness metrics
- Data source health indicators
- Team performance metrics

## 3. Technical Dashboard
- Rule execution statistics
- System performance metrics
- Integration status
- Error logs and diagnostics

## Key Data Models

1. **Issues Model**
   - Issue tracking with full history
   - Resolution time analysis
   - Assignment and ownership metrics
   - Recurrence patterns

2. **Data Sources Model**
   - Source-specific quality metrics
   - Historical quality trends
   - Issue distribution analysis
   - Field-level quality heatmaps

3. **Rules Model**
   - Rule effectiveness metrics
   - False positive/negative rates
   - Execution performance
   - Coverage analysis

## Row-Level Security

Dashboard access is secured using role-based permissions:
- Service line leaders see only their service line's data
- Data stewards see their assigned data domains
- IT support sees system performance metrics
- Executives see summary-level metrics across all areas`,
      connections: [
        {
          targetTool: "sharePoint",
          description: "Pulls data quality metrics and issue tracking information from SharePoint lists"
        },
        {
          tool: "Azure SQL Database",
          description: "Connects directly to the data quality rules engine and metrics database"
        }
      ]
    },
    sharePoint: {
      summary: "Manage data quality documentation and issue tracking",
      detailedInstructions: `# SharePoint Implementation

SharePoint serves as the central repository for data quality documentation and issue tracking.

## SharePoint Structure

\`\`\`
/DataQualityMonitor
  /Issues                # Issues list for tracking
  /Rules                 # Data quality rules list
  /DataSources           # Data source documentation
  /Documentation         # General documentation
    /Policies            # Data quality policies
    /Procedures          # Operational procedures
    /TrainingMaterials   # User training content
  /Reports               # Generated reports
    /Daily               # Daily quality summaries
    /Monthly             # Monthly quality reports
    /Quarterly           # Quarterly trend analysis
  /ReferenceData         # Reference data for validation
\`\`\`

## Issues List Configuration

**Key Fields:**
- Issue ID
- Data Source
- Issue Type (Choice: Missing Data, Invalid Format, etc.)
- Severity (Choice: Critical, High, Medium, Low)
- Status (Choice: New, Investigating, In Progress, Resolved, Closed)
- Assigned To (Person)
- Detection Date
- Resolution Date
- Resolution Notes
- Service Line (Choice: ASR, IFS)

## Rules List Configuration

**Key Fields:**
- Rule ID
- Rule Name
- Description
- Rule Type (Choice: Completeness, Accuracy, etc.)
- SQL Query
- Service Line (Choice: ASR, IFS, Both)
- Active (Yes/No)
- Created By
- Last Modified

## Views Configuration

Custom views are configured for different stakeholders:
- My Assigned Issues
- Critical Issues by Service Line
- Recently Resolved Issues
- Rules by Data Source
- Inactive Rules`,
      connections: [
        {
          targetTool: "powerAutomate",
          description: "Triggers workflows when new issues are created or updated in SharePoint lists"
        },
        {
          targetTool: "powerApps",
          description: "Provides data storage for the data quality management application"
        }
      ]
    }
  },
  detailedImplementationGuide: `# Data Quality Monitor: Agentic Framework Implementation

## Solution Overview

The Data Quality Monitor is a Phase 2, medium priority solution that continuously checks data integrity and identifies issues. It serves ASR and IFS service lines with medium complexity and high cross-service value, delivering an 85% reduction in data quality issues.

## Technical Architecture

### Components

1. **Microsoft Copilot Studio**: Intelligent agent for monitoring and reporting
2. **Power BI**: Data visualization and dashboard reporting
3. **Power Automate**: Workflow automation for issue detection and resolution
4. **Azure SQL Database**: Primary data storage and validation rules engine
5. **SharePoint**: Documentation and resolution tracking
6. **Azure Logic Apps**: Advanced integration for data source connections
7. **Microsoft Purview**: Data governance and quality management

### Integration Flow

![Data Quality Monitor Integration Flow](placeholder-for-diagram)

## Implementation Framework

### 1. Data Quality Rule Engine

The core of the solution is a rule engine that defines data quality standards and validation criteria.

**Rule Categories**:
- Completeness: Identify missing values
- Accuracy: Validate against reference data
- Consistency: Check for logical contradictions
- Timeliness: Verify data freshness
- Uniqueness: Detect duplicates
- Validity: Confirm format and range compliance

**Rule Configuration Storage**:
\`\`\`
/DataQualityRules
  /BusinessRules      # Domain-specific rules
    /ASR              # Advisory and Risk rules
    /IFS              # Integrated Financial Systems rules
  /TechnicalRules     # System-level rules (formats, ranges, etc.)
  /ValidationMappings # Maps fields to validation types
  /ReferenceData      # Comparison datasets for validation
\`\`\`

### 2. Copilot Studio Agent Configuration

The Copilot agent serves as the primary interface for users to interact with the data quality monitoring system.

**Key Topics (Conversation Triggers)**:
- Data quality status inquiries
- Issue investigation requests
- Rule configuration management
- Report generation
- Alert configurations

**Primary Actions**:
- Query data quality metrics
- Investigate specific issues
- Update or create validation rules
- Generate quality reports
- Configure alerting thresholds

### 3. Power Automate Workflows

1. **Data Validation Flow**:
   - Runs on schedule or triggered manually
   - Executes validation rules against target datasets
   - Logs results to quality monitoring database
   - Creates issues for detected problems

2. **Issue Triage Flow**:
   - Classifies detected issues by severity and type
   - Routes issues to appropriate owners
   - Creates resolution tasks in task management system
   - Updates tracking in SharePoint

3. **Remediation Tracking Flow**:
   - Monitors issue resolution progress
   - Validates fixes when applied
   - Updates quality metrics
   - Provides feedback for rule refinement

4. **Alert Notification Flow**:
   - Sends notifications based on severity and subscription
   - Escalates unaddressed critical issues
   - Provides summary reports to stakeholders

### 4. Power BI Dashboard

**Key Metrics and Visualizations**:
- Overall data quality score by service line
- Issue trends over time
- Top issue categories
- Resolution performance
- Impact analysis
- Compliance status

**User-specific Views**:
- Executive Summary
- Service Line Manager
- Data Steward
- Data Quality Analyst
- IT Support

### 5. Microsoft Purview Integration

- Automated data scanning and classification
- Data lineage tracking
- Quality metrics integration
- Compliance reporting
- Governance policy enforcement`,
  exampleScenarios: [
    {
      title: "Financial Data Quality Management",
      description: "A financial services firm implemented the Data Quality Monitor to ensure accuracy of client financial data. The system automatically detected inconsistencies in transaction records, missing account details, and duplicate customer entries, reducing data quality issues by 85% and significantly improving reporting accuracy."
    },
    {
      title: "Supply Chain Data Integrity",
      description: "A manufacturing company used the solution to monitor their supply chain data quality. The system identified inventory discrepancies, procurement data errors, and supplier information gaps, enabling proactive correction before these issues impacted operations or financial reporting."
    }
  ],
  toolConnections: [
    {
      tool: "Microsoft Purview",
      description: "Integrates with Microsoft Purview for enhanced data governance and classification capabilities"
    },
    {
      tool: "Azure SQL Database",
      description: "Uses Azure SQL Database as the primary storage for validation rules and quality metrics"
    },
    {
      tool: "Microsoft Teams",
      description: "Delivers data quality alerts and reports directly to relevant teams in Microsoft Teams"
    }
  ]
};
