
import { FileText } from "lucide-react";
import { UseCase } from "../../types";

export const meetingSummarizerUseCase: UseCase = {
  id: 15,
  name: "Meeting Summarizer",
  description: "Automatically creates concise summaries of client meetings",
  category: "client-interaction",
  serviceLines: ["TAX", "ASR", "DEALS", "IFS"],
  icon: FileText,
  priority: "medium",
  phase: "Phase 2",
  complexity: "Low",
  crossServiceValue: "High",
  keyBenefit: "70% reduction in note-taking time",
  implementationPlan: {
    msCopilot: {
      summary: "Generate meeting summaries and action items",
      connections: [],
      detailedInstructions: "Configure Microsoft Copilot to automatically process meeting transcripts and generate comprehensive summaries that highlight key discussion points, decisions, and action items."
    },
    powerAutomate: {
      summary: "Distribute summaries and track action items",
      connections: [],
      detailedInstructions: "Create flows that automatically distribute meeting summaries to all participants and track the status of action items, sending reminders as deadlines approach."
    },
    powerApps: {
      summary: "Build a meeting notes repository and search tool",
      connections: [],
      detailedInstructions: "Develop an application where users can access all meeting summaries, search for specific topics across multiple meetings, and track the progress of action items."
    },
    copilotStudio: {
      summary: "Create a meeting assistant for real-time notes",
      connections: [],
      detailedInstructions: "Design a conversational bot that can join meetings, take notes in real-time, and respond to prompts for clarification or to highlight specific points during the meeting."
    },
    powerBI: {
      summary: "Analyze meeting trends and action item completion",
      connections: [],
      detailedInstructions: "Create dashboards to visualize meeting trends, action item completion rates, and identify topics that frequently arise in client meetings to proactively address recurring concerns."
    }
  }
};
