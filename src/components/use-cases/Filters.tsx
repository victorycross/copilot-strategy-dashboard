
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activePriority: string;
  setActivePriority: (priority: string) => void;
  categories: {
    id: string;
    name: string;
    icon: LucideIcon;
    color: string;
    description: string;
  }[];
  categoryCounts: Record<string, number>;
  priorities: {
    value: string;
    label: string;
    color: string;
  }[];
  filteredUseCases: any[];
}

const Filters = ({
  activeCategory,
  setActiveCategory,
  activePriority,
  setActivePriority,
  categories,
  categoryCounts,
  priorities,
  filteredUseCases
}: FiltersProps) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold">
          {filteredUseCases.length} Use Cases
          {activeCategory !== "all" && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
          {activePriority !== "all" && ` with ${priorities.find(p => p.value === activePriority)?.label}`}
        </h2>
        
        <div className="flex flex-wrap gap-2">
          <select 
            className="bg-background border border-input rounded-md px-3 py-1 text-sm"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name} ({categoryCounts[category.id]})
              </option>
            ))}
          </select>
          
          <select 
            className="bg-background border border-input rounded-md px-3 py-1 text-sm"
            value={activePriority}
            onChange={(e) => setActivePriority(e.target.value)}
          >
            <option value="all">All Priorities</option>
            {priorities.map(priority => (
              <option key={priority.value} value={priority.value}>
                {priority.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Category quick filters */}
      <div className="flex flex-wrap gap-2">
        <Button 
          variant={activeCategory === "all" ? "default" : "outline"} 
          size="sm"
          onClick={() => setActiveCategory("all")}
          className="rounded-full"
        >
          All Categories
        </Button>
        
        {categories.map(category => (
          <Button 
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-full ${activeCategory === category.id ? `bg-${category.color} hover:bg-${category.color}/90` : ""}`}
          >
            <category.icon className="w-4 h-4 mr-1" />
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
