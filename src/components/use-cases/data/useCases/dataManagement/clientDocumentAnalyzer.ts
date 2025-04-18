
import { FileText } from "lucide-react";
import { UseCase } from "../../types";

export const clientDocumentAnalyzer: UseCase = {
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
      detailedInstructions: `# Copilot Studio Agent Configuration

### Conversation Topics

1. **Document Submission**
   - Prompt: "I need to process a new client document"
   - Response: Guide user through document submission process
   - Actions: Trigger document upload flow, collect metadata

2. **Status Inquiry**
   - Prompt: "What's the status of the Smith Tax Return?"
   - Response: Provide current processing status and estimated completion time
   - Actions: Query SharePoint for document status, return processing stage

3. **Data Extraction**
   - Prompt: "Extract the total income from the Johnson tax return"
   - Response: Retrieve and present specific data points from processed documents
   - Actions: Query extracted data JSON, format and present results

4. **Error Handling**
   - Prompt: "The system couldn't process this invoice"
   - Response: Collect information about error, suggest solutions
   - Actions: Log error, route to human operator if needed

### Agent Actions

Sample action definition for document submission:
- Processes a new client document submission
- Handles parameters like documentType, clientName, serviceLine
- Executes upload actions and triggers document intake workflow
- Provides success/failure responses with appropriate details`,
      examples: [
        {
          title: "Document Processing Request",
          description: "User: 'I need to analyze a client tax return for Johnson Enterprises'",
          example: "Copilot: 'I can help with that. Please upload the tax return document and I'll guide you through the process. Would you like to specify any particular data points you're interested in extracting?'"
        },
        {
          title: "Data Extraction Query",
          description: "User: 'Can you extract the total revenue and expenses from the Q3 financial statement?'",
          example: "Copilot: 'I'll extract that information for you. Based on the Q3 financial statement, the total revenue is $2.45M and the total expenses are $1.87M, resulting in a profit of $580K for the quarter.'"
        }
      ],
      connections: [
        {
          tool: "Document Intelligence",
          description: "Utilizes Document Intelligence API to extract structured data from various document formats"
        },
        {
          targetTool: "powerAutomate",
          description: "Initiates document processing workflows when users submit new documents"
        }
      ]
    },
    powerAutomate: {
      summary: "Create workflows to route documents and trigger analysis",
      detailedInstructions: `## Power Automate Workflows

1. **Document Intake Flow**:
   - Triggered when document is uploaded to Incoming folder
   - Performs initial classification
   - Moves document to InProcess folder
   - Logs metadata to tracking system

2. **Document Analysis Flow**:
   - Extracts text and form data using Azure Document Intelligence
   - Identifies document type and relevant fields
   - Generates structured data JSON
   - Tags document with service line and document type

3. **Extraction Verification Flow**:
   - Routes document to human verifier when confidence score is below threshold
   - Captures feedback for model improvement

4. **Post-Processing Flow**:
   - Moves processed documents to appropriate service line folder
   - Notifies relevant team members
   - Updates tracking systems`,
      examples: [
        {
          title: "Document Intake Workflow",
          description: "Automated processing of new document uploads",
          example: "When a document is uploaded to SharePoint 'Incoming' folder → Identify document type using AI → Move to appropriate processing queue → Notify processing team"
        },
        {
          title: "Verification Workflow",
          description: "Human verification process for low-confidence extractions",
          example: "When extraction confidence < 80% → Create verification task → Assign to appropriate team → Collect feedback → Update AI model"
        }
      ],
      connections: [
        {
          tool: "SharePoint",
          description: "Monitors document libraries for new uploads and manages document movement between processing stages"
        },
        {
          targetTool: "powerApps",
          description: "Triggers notifications in the Power Apps interface when documents require human verification"
        }
      ]
    },
    powerApps: {
      summary: "Build a custom interface for document submission and review",
      detailedInstructions: `## Power Apps Interface

**User Roles**:
- Document Submitters
- Document Processors
- Service Line Reviewers
- Administrators

**Key Screens**:
- Document Upload Interface
- Processing Status Dashboard
- Verification Portal
- Analytics Dashboard
- Configuration Settings

The interface provides role-based access to document processing capabilities, with specialized views for different user types. The verification portal allows human reviewers to confirm AI extractions and provide feedback for continuous improvement.`,
      examples: [
        {
          title: "Document Processing Dashboard",
          description: "Central monitoring interface for processing team",
          example: "Interactive dashboard showing documents by stage (New, Processing, Verification Needed, Completed, Error) with ability to drill down into specific documents and view extraction results"
        },
        {
          title: "Verification Interface",
          description: "Tool for human verification of AI extractions",
          example: "Side-by-side view of original document and extracted data, with ability to correct errors, approve results, and provide feedback to improve the AI model"
        }
      ],
      connections: [
        {
          targetTool: "powerBI",
          description: "Embeds Power BI analytics dashboard for monitoring document processing metrics"
        },
        {
          targetTool: "sharePoint",
          description: "Accesses and manages documents stored in SharePoint document libraries"
        }
      ]
    },
    copilotStudio: {
      summary: "Design custom prompt flows for document analysis",
      detailedInstructions: `## Copilot Studio Integration

The Copilot agent serves as the primary interface for users to interact with the document analyzer system.

**Key Topics (Conversation Triggers)**:
- Document submission
- Document status inquiry
- Data extraction requests
- Report generation
- Error handling

**Primary Actions**:
- Initiate document processing workflows
- Update metadata for document categorization
- Generate reports based on extracted data
- Route documents to appropriate service lines

The agent uses natural language processing to understand user requests and guide them through the document analysis process, acting as a knowledgeable assistant for all document-related tasks.`,
      examples: [
        {
          title: "Guided Document Submission",
          description: "Conversational flow for document upload",
          example: "User: 'I have a new tax return to process'\nCopilot: 'Great, I can help with that. Is this for an individual or corporate client?'\nUser: 'Corporate, for Acme Inc.'\nCopilot: 'Thanks. Please upload the document, and I'll start processing it for the corporate tax team.'"
        },
        {
          title: "Data Extraction Dialog",
          description: "Interactive extraction of specific information",
          example: "User: 'I need the capital expenditures from the Smith financial statement'\nCopilot: 'I'll find that for you. According to the processed statement, capital expenditures were $425,000 for the period. Would you like me to extract any other financial data?'"
        }
      ],
      connections: [
        {
          targetTool: "msCopilot",
          description: "Leverages Microsoft Copilot capabilities for enhanced document understanding"
        },
        {
          tool: "Power Virtual Agents",
          description: "Builds on Power Virtual Agents framework for conversational interfaces"
        }
      ]
    },
    powerBI: {
      summary: "Visualize document processing metrics and extracted insights",
      detailedInstructions: `## Analytics and Reporting

The solution includes Power BI analytics capabilities to track:

1. Document processing volume by type and service line
2. Average processing time
3. Extraction confidence scores
4. Error rates and common error types
5. Cost savings and efficiency metrics

Dashboards provide real-time visibility into the document processing pipeline, helping managers identify bottlenecks and optimize the process. Historical trend analysis shows improvement over time as the AI models learn from human feedback.`,
      examples: [
        {
          title: "Processing Efficiency Dashboard",
          description: "Monitoring of key performance metrics",
          example: "Interactive dashboard showing processing time trends, volume by document type, confidence score distribution, and cost savings calculations based on manual vs. automated processing time"
        },
        {
          title: "Service Line Analytics",
          description: "Service-specific performance metrics",
          example: "Filtered views showing document volume, processing efficiency, and extraction accuracy specific to TAX and ASR service lines, with drill-down capability to identify specific document types or clients"
        }
      ],
      connections: [
        {
          tool: "Dataverse",
          description: "Uses Dataverse as the data source for analytics, combining document metadata with processing metrics"
        },
        {
          targetTool: "sharePoint",
          description: "Pulls document metadata from SharePoint for comprehensive reporting"
        }
      ]
    },
    sharePoint: {
      summary: "Manage document storage and classification structure",
      detailedInstructions: `## SharePoint Document Library Structure

\`\`\`
/ClientDocuments
  /Incoming          # New documents pending processing
  /InProcess         # Documents currently being analyzed
  /Processed         # Completed documents
    /TAX             # Tax-specific documents
    /ASR             # Advisory and Risk documents
  /Templates         # Document templates for recognition training
  /ExtractedData     # JSON files containing extracted data
\`\`\`

The SharePoint structure serves as the backbone of the document management system, with custom metadata fields to track:
- Document Type
- Service Line
- Processing Status
- Confidence Score
- Processed Date

Document libraries use content types and metadata-driven views to organize information effectively, with appropriate permissions at each level to ensure data security and compliance.`,
      examples: [
        {
          title: "Automated Document Organization",
          description: "Rules-based filing system",
          example: "Tax returns are automatically tagged with DocumentType='Tax Return' and ServiceLine='TAX', then moved to /Processed/TAX with appropriate retention policies applied"
        },
        {
          title: "Template Management",
          description: "Document pattern storage for AI training",
          example: "The Templates library contains annotated examples of common document types, which are used to improve AI recognition accuracy for specific document formats and structures"
        }
      ],
      connections: [
        {
          tool: "Microsoft Graph",
          description: "Uses Microsoft Graph API for programmatic access to document properties and content"
        },
        {
          targetTool: "powerAutomate",
          description: "Triggers Power Automate workflows when documents are added or modified"
        }
      ]
    }
  },
  detailedImplementationGuide: `# Client Document Analyzer: Agentic Framework Implementation

## Solution Overview

The Client Document Analyzer is a Phase 1, high priority solution that automatically extracts and categorizes data from client documents. It serves TAX and ASR service lines with medium complexity and high cross-service value, delivering a 60% reduction in document processing time.

## Technical Architecture

### Components

1. **Microsoft Copilot Studio**: Core AI-powered conversational agent
2. **SharePoint**: Document storage and organization
3. **Power Automate**: Workflow automation for document processing
4. **Power Apps**: Custom interface for document submission and review
5. **Azure Document Intelligence**: Extract data from various document types
6. **Microsoft Graph API**: Access to Microsoft 365 services

### Integration Flow

![Client Document Analyzer Flow](placeholder-for-diagram)

## Implementation Framework

### 1. Copilot Studio Agent Configuration

The Copilot agent will serve as the primary interface for users to interact with the document analyzer system.

**Key Topics (Conversation Triggers)**:
- Document submission
- Document status inquiry
- Data extraction requests
- Report generation
- Error handling

**Primary Actions**:
- Initiate document processing workflows
- Update metadata for document categorization
- Generate reports based on extracted data
- Route documents to appropriate service lines

### 2. SharePoint Document Library Structure

\`\`\`
/ClientDocuments
  /Incoming          # New documents pending processing
  /InProcess         # Documents currently being analyzed
  /Processed         # Completed documents
    /TAX             # Tax-specific documents
    /ASR             # Advisory and Risk documents
  /Templates         # Document templates for recognition training
  /ExtractedData     # JSON files containing extracted data
\`\`\`

### 3. Power Automate Workflows

1. **Document Intake Flow**:
   - Triggered when document is uploaded to Incoming folder
   - Performs initial classification
   - Moves document to InProcess folder
   - Logs metadata to tracking system

2. **Document Analysis Flow**:
   - Extracts text and form data using Azure Document Intelligence
   - Identifies document type and relevant fields
   - Generates structured data JSON
   - Tags document with service line and document type

3. **Extraction Verification Flow**:
   - Routes document to human verifier when confidence score is below threshold
   - Captures feedback for model improvement

4. **Post-Processing Flow**:
   - Moves processed documents to appropriate service line folder
   - Notifies relevant team members
   - Updates tracking systems

### 4. Power Apps Interface

**User Roles**:
- Document Submitters
- Document Processors
- Service Line Reviewers
- Administrators

**Key Screens**:
- Document Upload Interface
- Processing Status Dashboard
- Verification Portal
- Analytics Dashboard
- Configuration Settings

### 5. Microsoft Graph Integration

- User authentication and authorization
- Document access management
- Team collaboration features
- Notification services

## PowerShell Implementation Script

\`\`\`powershell
# Client Document Analyzer - Implementation Script
# This script sets up the required infrastructure for the Client Document Analyzer solution

# Parameters
param (
    [string]$tenantUrl = "https://contoso.sharepoint.com",
    [string]$siteName = "ClientDocumentAnalyzer",
    [string]$adminEmail = "admin@contoso.com"
)

# Connect to Microsoft 365 services
Connect-MgGraph -Scopes "Sites.ReadWrite.All", "Files.ReadWrite.All", "AppCatalog.ReadWrite.All"
Connect-PnPOnline -Url $tenantUrl -Interactive

# Create SharePoint site
Write-Host "Creating SharePoint site for document management..."
$site = New-PnPSite -Type TeamSite -Title "Client Document Analyzer" -Alias $siteName -Description "Automated document processing system for client documents"

# Create document libraries and folder structure
Write-Host "Setting up document libraries and folder structure..."
Connect-PnPOnline -Url $site.Url -Interactive

New-PnPList -Title "ClientDocuments" -Template DocumentLibrary
Add-PnPFolder -Name "Incoming" -Folder "ClientDocuments"
Add-PnPFolder -Name "InProcess" -Folder "ClientDocuments"
Add-PnPFolder -Name "Processed" -Folder "ClientDocuments"
Add-PnPFolder -Name "TAX" -Folder "ClientDocuments/Processed"
Add-PnPFolder -Name "ASR" -Folder "ClientDocuments/Processed"
Add-PnPFolder -Name "Templates" -Folder "ClientDocuments"
Add-PnPFolder -Name "ExtractedData" -Folder "ClientDocuments"

# Add custom metadata fields to document library
Write-Host "Adding metadata fields for document categorization..."
Add-PnPField -List "ClientDocuments" -DisplayName "Document Type" -InternalName "DocumentType" -Type Choice -Choices "Tax Return", "Financial Statement", "Receipt", "Invoice", "Contract", "Other"
Add-PnPField -List "ClientDocuments" -DisplayName "Service Line" -InternalName "ServiceLine" -Type Choice -Choices "TAX", "ASR"
Add-PnPField -List "ClientDocuments" -DisplayName "Processing Status" -InternalName "ProcessingStatus" -Type Choice -Choices "New", "Processing", "Verification Needed", "Completed", "Error"
Add-PnPField -List "ClientDocuments" -DisplayName "Confidence Score" -InternalName "ConfidenceScore" -Type Number
Add-PnPField -List "ClientDocuments" -DisplayName "Processed Date" -InternalName "ProcessedDate" -Type DateTime

# Register Azure Document Intelligence Service
Write-Host "Setting up Azure Document Intelligence..."
$documentIntelligenceParams = @{
    resourceGroupName = "RG-ClientDocAnalyzer"
    name = "docint-clientdocanalyzer"
    location = "eastus"
    sku = "S0"
}
New-AzCognitiveServicesAccount @documentIntelligenceParams

# Create Power App (Placeholder - would normally use Power Apps API)
Write-Host "Creating Power Apps solution..."
# This would normally use the Power Apps cmdlets to create the app
# For now, just creating a placeholder file with app specifications
$powerAppSpecs = @"
{
    "AppName": "Client Document Analyzer",
    "Description": "Interface for managing client document processing",
    "Screens": [
        "DocumentUpload",
        "ProcessingDashboard",
        "VerificationPortal",
        "Analytics"
    ]
}
"@
$powerAppSpecs | Out-File -FilePath "./PowerAppSpecs.json"

# Create Power Automate flows (Placeholder)
Write-Host "Setting up Power Automate flows..."
# This would normally use the Power Automate cmdlets to create flows
# For now, just creating placeholder files with flow specifications
$documentIntakeFlow = @"
{
    "FlowName": "Document Intake Process",
    "Trigger": "When a file is created in SharePoint",
    "Actions": [
        "Initialize variables",
        "Get file properties",
        "Create metadata entry", 
        "Move file to InProcess folder",
        "Start document analysis flow"
    ]
}
"@
$documentIntakeFlow | Out-File -FilePath "./DocumentIntakeFlow.json"

$documentAnalysisFlow = @"
{
    "FlowName": "Document Analysis Process",
    "Trigger": "Called by Document Intake Flow",
    "Actions": [
        "Get file content",
        "Call Azure Document Intelligence",
        "Parse results",
        "Generate structured data JSON",
        "Update metadata",
        "Determine if verification needed"
    ]
}
"@
$documentAnalysisFlow | Out-File -FilePath "./DocumentAnalysisFlow.json"

# Setup Copilot Studio bot
Write-Host "Creating Copilot Studio agent..."
# This would use the Copilot Studio API to create the bot
# For now, creating a placeholder with bot specifications
$copilotSpecs = @"
{
    "BotName": "Client Document Analyzer",
    "Description": "AI assistant for managing client document processing",
    "Topics": [
        "Document Submission",
        "Processing Status",
        "Data Extraction",
        "Report Generation"
    ],
    "Actions": [
        "InitiateDocumentProcessing",
        "CheckDocumentStatus",
        "ExtractSpecificData",
        "GenerateReport"
    ]
}
"@
$copilotSpecs | Out-File -FilePath "./CopilotSpecs.json"

# Set permissions
Write-Host "Setting up permissions..."
# This would set up appropriate permissions across the services
# Example permission setting for SharePoint site
Set-PnPGroup -Identity "Client Document Analyzer Members" -AddRole "Contribute"
New-PnPGroup -Title "Document Verifiers" -Description "Users who verify processed documents"
Add-PnPUserToGroup -LoginName $adminEmail -Identity "Document Verifiers"

Write-Host "Setup completed successfully!"
\`\`\`

## Copilot Studio Agent Configuration

### Conversation Topics

1. **Document Submission**
   - Prompt: "I need to process a new client document"
   - Response: Guide user through document submission process
   - Actions: Trigger document upload flow, collect metadata

2. **Status Inquiry**
   - Prompt: "What's the status of the Smith Tax Return?"
   - Response: Provide current processing status and estimated completion time
   - Actions: Query SharePoint for document status, return processing stage

3. **Data Extraction**
   - Prompt: "Extract the total income from the Johnson tax return"
   - Response: Retrieve and present specific data points from processed documents
   - Actions: Query extracted data JSON, format and present results

4. **Error Handling**
   - Prompt: "The system couldn't process this invoice"
   - Response: Collect information about error, suggest solutions
   - Actions: Log error, route to human operator if needed

### Agent Actions

\`\`\`yaml
# Sample action definition for document submission
name: SubmitNewDocument
description: Processes a new client document submission
parameters:
  - name: documentType
    description: Type of document being submitted
    type: string
    enum: ["Tax Return", "Financial Statement", "Receipt", "Invoice", "Contract", "Other"]
  - name: clientName
    description: Name of the client
    type: string
  - name: serviceLine
    description: Service line for routing
    type: string
    enum: ["TAX", "ASR"]
  - name: documentFile
    description: The document file to upload
    type: file
execution:
  - action: uploadDocument
    parameters:
      library: "ClientDocuments"
      folder: "Incoming"
      file: $documentFile
      metadata:
        DocumentType: $documentType
        ClientName: $clientName
        ServiceLine: $serviceLine
        ProcessingStatus: "New"
  - action: triggerFlow
    parameters:
      flowName: "Document Intake Process"
      documentId: $uploadResult.id
response:
  success: "Your $documentType for $clientName has been submitted and will be processed shortly. You can check status by asking 'What's the status of $clientName $documentType?'"
  failure: "There was an issue submitting your document. [Error details: $error]"
\`\`\`

## Analytics and Reporting

The solution includes analytics capabilities to track:

1. Document processing volume by type and service line
2. Average processing time
3. Extraction confidence scores
4. Error rates and common error types
5. Cost savings and efficiency metrics

## Training and Customization

The framework includes a feedback loop for continuous improvement:

1. Document templates are stored in the Templates library
2. Manual corrections are logged for model improvement
3. Service-line specific terminology and document types can be added
4. Custom extraction rules can be defined for unique document types

## Security and Compliance

- All documents are processed within the Microsoft ecosystem
- Data classification is applied based on document content
- Audit logs track all access and modifications
- Retention policies align with organizational requirements`,
  exampleScenarios: [
    {
      title: "Global Tax Document Processing",
      description: "A multinational corporation implemented the solution across their tax practice, automating the extraction of key data from tax returns, financial statements, and supporting documents across multiple jurisdictions. The system automatically identified document types, extracted relevant data, and organized documents by entity and tax year, reducing processing time by 60%."
    },
    {
      title: "Audit Documentation Analysis",
      description: "An audit team deployed the system to process client financial statements and supporting documentation. The analyzer extracted key financial metrics, identified discrepancies, and flagged areas requiring additional scrutiny, enabling auditors to focus on high-value analytical tasks instead of manual data extraction."
    }
  ],
  toolConnections: [
    {
      tool: "Azure Document Intelligence",
      description: "Core document processing engine for extracting structured data from unstructured documents"
    },
    {
      tool: "Microsoft Dataverse",
      description: "Central storage for extracted data and document metadata, enabling cross-system analytics"
    },
    {
      tool: "Microsoft Teams",
      description: "Integration enables document submission and processing updates directly within collaboration workspaces"
    }
  ]
};
