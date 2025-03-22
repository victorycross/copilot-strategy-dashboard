
import { ReactNode } from "react";
import {
  MsCopilotIcon,
  PowerAutomateIcon,
  PowerAppsIcon,
  CopilotStudioIcon,
  PowerBIIcon
} from "../icons/TechnologyIcons";

// Tool metadata for rendering
export const tools = [
  { key: 'msCopilot', title: 'Microsoft Copilot', icon: <MsCopilotIcon />, colorClass: 'text-blue-500' },
  { key: 'powerAutomate', title: 'Power Automate', icon: <PowerAutomateIcon />, colorClass: 'text-purple-500' },
  { key: 'powerApps', title: 'Power Apps', icon: <PowerAppsIcon />, colorClass: 'text-green-500' },
  { key: 'copilotStudio', title: 'Copilot Studio', icon: <CopilotStudioIcon />, colorClass: 'text-yellow-500' },
  { key: 'powerBI', title: 'Power BI', icon: <PowerBIIcon />, colorClass: 'text-red-500' },
  { key: 'sharePoint', title: 'SharePoint', icon: null, colorClass: 'text-green-600' }
];

export type Tool = {
  key: string;
  title: string;
  icon: ReactNode | null;
  colorClass: string;
};
