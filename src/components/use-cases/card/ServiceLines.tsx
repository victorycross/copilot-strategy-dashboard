
import React from "react";

interface ServiceLinesProps {
  serviceLines: string[];
}

const ServiceLines = ({ serviceLines }: ServiceLinesProps) => (
  <div className="mt-3">
    <p className="text-xs text-muted-foreground">Service Lines</p>
    <div className="flex flex-wrap gap-1 mt-1">
      {serviceLines.map(sl => (
        <span key={sl} className="inline-block px-2 py-0.5 bg-secondary text-xs rounded">
          {sl}
        </span>
      ))}
    </div>
  </div>
);

export default ServiceLines;
