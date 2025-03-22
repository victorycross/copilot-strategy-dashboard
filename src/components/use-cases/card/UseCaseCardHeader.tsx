
import React from "react";
import { CardHeader, CardTitle } from "@/components/ui/card";
import EditableField from "../EditableField";
import { UseCase } from "../data/types";

interface UseCaseCardHeaderProps {
  useCase: UseCase;
  categoryColor: string;
  onFieldUpdate: (field: string, value: string) => void;
}

const UseCaseCardHeader = ({ 
  useCase, 
  categoryColor, 
  onFieldUpdate 
}: UseCaseCardHeaderProps) => {
  const Icon = useCase.icon;
  const phaseOptions = ["Phase 1", "Phase 2", "Phase 3"];

  // Get background color class based on category color
  const getBgColorClass = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-100';
      case 'green': return 'bg-green-100';
      case 'red': return 'bg-red-100';
      case 'yellow': return 'bg-yellow-100';
      case 'purple': return 'bg-purple-100';
      case 'indigo': return 'bg-indigo-100';
      case 'pink': return 'bg-pink-100';
      case 'orange': return 'bg-orange-100';
      default: return 'bg-gray-100';
    }
  };
  
  // Get text color class based on category color
  const getTextColorClass = (color: string) => {
    switch(color) {
      case 'blue': return 'text-blue-600';
      case 'green': return 'text-green-600';
      case 'red': return 'text-red-600';
      case 'yellow': return 'text-yellow-600';
      case 'purple': return 'text-purple-600';
      case 'indigo': return 'text-indigo-600';
      case 'pink': return 'text-pink-600';
      case 'orange': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getBgColorClass(categoryColor)} mr-3`}>
            <Icon className={`w-4 h-4 ${getTextColorClass(categoryColor)}`} />
          </div>
          
          <CardTitle className="text-base">
            {useCase.name}
          </CardTitle>
        </div>
        <EditableField 
          label="Phase"
          value={useCase.phase}
          options={phaseOptions}
          onValueChange={(value) => onFieldUpdate('phase', value)}
        />
      </div>
    </CardHeader>
  );
};

export default UseCaseCardHeader;
