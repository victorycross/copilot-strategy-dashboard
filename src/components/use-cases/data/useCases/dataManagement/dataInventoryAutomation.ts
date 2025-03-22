
import { Database } from "lucide-react";
import { UseCase } from "../../types";

export const dataInventoryAutomation: UseCase = {
  id: 112,
  name: "Data Inventory Automation",
  description: "Automatically discovers, catalogs, and maps data assets across the organization",
  category: "data-management",
  serviceLines: ["ASR", "IFS"],
  icon: Database,
  priority: "high",
  phase: "Phase 1",
  complexity: "High",
  crossServiceValue: "High",
  keyBenefit: "95% reduction in manual data mapping efforts",
  implementationPlan: {
    msCopilot: "Generate comprehensive data asset documentation",
    powerAutomate: "Create workflows for inventory validation and updates",
    powerApps: "Build a data inventory management and search portal",
    copilotStudio: "Develop a conversational data discovery assistant",
    powerBI: "Visualize data landscape with ownership and sensitivity metrics"
  },
  detailedImplementationGuide: `# Data Inventory Automation Implementation Guide

## Overview
This solution automates the discovery, cataloging, and ongoing maintenance of a comprehensive data inventory. It provides visibility into what data exists, where it's stored, how it's used, and who's responsible for it, enabling effective governance and compliance.

## Step 1: Discovery Configuration
1. Set up scanning capabilities across:
   - Structured databases
   - File servers and storage systems
   - Cloud applications and storage
   - Email and collaboration platforms
   - Local endpoint repositories
2. Configure scanning parameters:
   - Scope and exclusions
   - Depth and sampling rates
   - Performance impact limitations
3. Create incremental scanning schedules

## Step 2: Metadata Collection
1. Design comprehensive metadata schema:
   - Technical attributes (size, format, location)
   - Business context (purpose, owner, usage)
   - Governance details (classification, retention)
   - Compliance factors (regulations, controls)
2. Implement automated metadata extraction
3. Build manual enrichment workflows

## Step 3: Data Classification Integration
1. Connect to classification systems for:
   - Sensitivity labeling
   - PII identification
   - Confidentiality marking
   - Value assessment
2. Implement automated classification suggestion
3. Create classification verification workflows

## Step 4: Data Relationship Mapping
1. Develop relationship discovery for:
   - Parent-child relationships
   - Source-copy relationships
   - Reference relationships
   - Logical data groups
   - Processing dependencies
2. Create visual relationship mapping
3. Build lineage tracking capabilities

## Step 5: Governance Attribution
1. Implement automated assignment of:
   - Data owners
   - Stewards and custodians
   - Access control groups
   - Applicable policies
   - Retention requirements
2. Create ownership confirmation workflows
3. Build governance gap identification

## Step 6: Search and Discovery Interface
1. Design intuitive search experience:
   - Natural language search
   - Faceted filtering
   - Visual browsing
   - Relationship exploration
   - Context-aware results
2. Implement role-based access controls
3. Create personalized views and saved searches

## Step 7: Maintenance Automation
1. Build continuous update capabilities:
   - Change detection
   - New asset discovery
   - Decommissioning tracking
   - Attribute updates
   - Relationship changes
2. Implement attestation workflows
3. Create validation reporting

## Step 8: Compliance Reporting
1. Design regulation-specific views:
   - GDPR Article 30 reports
   - CCPA disclosure reports
   - HIPAA inventory requirements
   - Industry-specific documentation
2. Create customizable reporting
3. Build evidence package generation

## Maintenance & Optimization
1. Regularly update scanning patterns
2. Refine classification integration
3. Optimize discovery performance
4. Expand coverage to new data sources

## Best Practices
- Prioritize critical data systems for initial inventory
- Balance scanning depth with performance impact
- Involve business stakeholders in governance attribution
- Establish regular attestation cadence`,
  exampleScenarios: [
    {
      title: "Regulatory Compliance Program",
      description: "A regulated financial institution implemented the solution to create a GDPR Article 30 record of processing activities. The automated inventory identified several previously undocumented data processing systems, allowing the compliance team to properly document them before a regulatory audit."
    },
    {
      title: "Data Migration Project",
      description: "An organization undergoing a major system migration used the tool to discover and catalog legacy data. The automated inventory found over 200 undocumented databases and file shares, preventing critical data from being left behind in the migration."
    }
  ],
  toolConnections: [
    {
      tool: "Microsoft Purview Data Catalog",
      description: "Integrates with Microsoft Purview Data Catalog for enhanced metadata management and data discovery"
    },
    {
      tool: "Microsoft Information Protection",
      description: "Connects with Microsoft Information Protection to incorporate sensitivity labeling into the inventory"
    },
    {
      tool: "Microsoft Syntex",
      description: "Uses Microsoft Syntex for intelligent document understanding and metadata extraction"
    }
  ]
};
