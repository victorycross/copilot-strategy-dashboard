
// Import necessary icons
import { Bell } from "lucide-react";
import { UseCase } from "../../types";

// Data Breach focused use cases
export const dataBreach: UseCase[] = [
  {
    id: 109,
    name: "Data Breach Notification System",
    description: "Automates the preparation and delivery of data breach notifications",
    category: "compliance",
    serviceLines: ["ASR", "DEALS", "IFS"],
    icon: Bell,
    priority: "high",
    phase: "Phase 1",
    complexity: "Medium",
    crossServiceValue: "High",
    keyBenefit: "60% faster breach notification preparation",
    implementationPlan: {
      msCopilot: "Generate notification content and impact assessments",
      powerAutomate: "Create notification workflow with approval stages",
      powerApps: "Build breach documentation and reporting system",
      copilotStudio: "Develop a guided assistant for breach response",
      powerBI: "Track breach metrics and notification compliance"
    },
    detailedImplementationGuide: `# Data Breach Notification System Implementation Guide

## Overview
This solution automates the assessment, documentation, and notification processes required following a data breach. It ensures timely regulatory compliance, consistent communications, and comprehensive documentation of breach response activities.

## Step 1: Breach Assessment Wizard
1. Create structured intake for breach details:
   - Breach discovery information
   - Affected systems and data
   - Breach timeline
   - Containment status
   - Impact assessment
2. Implement breach severity scoring
3. Build regulatory requirement determination

## Step 2: Notification Requirement Analysis
1. Develop regulatory database:
   - Jurisdiction-specific requirements
   - Notification thresholds
   - Timing requirements
   - Content mandates
   - Authority contact details
2. Create notification determination logic
3. Build deadline calculation and tracking

## Step 3: Affected Data Analysis
1. Design data scope assessment:
   - Data types identification
   - Record count estimation
   - Special category flagging
   - Affected individual categorization
2. Implement impact severity evaluation
3. Create affected jurisdiction mapping

## Step 4: Notification Content Generator
1. Build template library for:
   - Regulatory authorities
   - Affected individuals
   - Data controllers (processor notifications)
   - Public statements
   - Internal communications
2. Create dynamic content generation
3. Implement multi-language support

## Step 5: Approval Workflow System
1. Design staged review process:
   - Technical accuracy review
   - Legal compliance verification
   - Executive approval
   - Delivery confirmation
2. Create collaborative editing capabilities
3. Build audit trail documentation

## Step 6: Notification Delivery System
1. Implement multi-channel communication:
   - Regulatory portal submissions
   - Email distribution
   - Website notices
   - Mail generation
   - Call center scripts
2. Create delivery tracking
3. Build evidence collection

## Step 7: Documentation Management
1. Design comprehensive breach record:
   - Incident details
   - Response timeline
   - Impact assessment
   - Notification evidence
   - Remediation actions
2. Implement document retention
3. Create regulatory evidence packages

## Step 8: Post-Breach Analysis
1. Build after-action reporting:
   - Response effectiveness evaluation
   - Timeline compliance analysis
   - Communication effectiveness
   - Remediation tracking
2. Create lessons learned documentation
3. Implement process improvement tracking

## Maintenance & Optimization
1. Regularly update regulatory requirements
2. Refine notification templates
3. Test system through breach simulations
4. Update contact information database

## Best Practices
- Ensure legal review of notification templates
- Maintain 24/7 system availability
- Create pre-approved notification language
- Document notification decisions thoroughly`,
    exampleScenarios: [
      {
        title: "Multi-State Data Breach Response",
        description: "A retail company experienced a breach affecting customers in 15 states. The system automatically determined notification requirements for each jurisdiction, generated appropriate notices, and tracked delivery, ensuring full compliance with varying state laws."
      },
      {
        title: "International Breach Coordination",
        description: "A global organization used the system to coordinate breach response across EU, UK, and APAC regions. The automated workflows ensured each regulatory authority received properly formatted notifications within required timeframes, despite varying requirements."
      }
    ],
    toolConnections: [
      {
        tool: "Microsoft Purview Data Map",
        description: "Connects with Microsoft Purview Data Map to identify affected data systems in breaches"
      },
      {
        tool: "Microsoft Defender for Cloud",
        description: "Integrates with Microsoft Defender for Cloud to gather technical breach details"
      },
      {
        tool: "Microsoft Sentinel",
        description: "Uses Microsoft Sentinel incident data to populate breach details automatically"
      }
    ]
  }
];
