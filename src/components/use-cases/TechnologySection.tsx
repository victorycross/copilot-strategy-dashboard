
import React from "react";
import EditableField from "./EditableField";

interface TechnologySectionProps {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  value: string;
  onValueChange: (value: string) => void;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({
  title,
  icon,
  colorClass,
  value,
  onValueChange,
}) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className={`font-semibold flex items-center gap-2 mb-2 ${colorClass}`}>
        {icon}
        {title}
      </h3>
      <EditableField 
        label="Implementation Steps"
        value={value || ""}
        multiline={true}
        onValueChange={onValueChange}
      />
    </div>
  );
};

export default TechnologySection;
