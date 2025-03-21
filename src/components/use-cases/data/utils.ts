
import { categories } from './categories';
import { useCases } from './useCases';

// Helper functions
export const getCategoryCounts = () => {
  const counts = {};
  
  categories.forEach(category => {
    counts[category.id] = useCases.filter(uc => uc.category === category.id).length;
  });
  
  return counts;
};

export const getCategoryColor = (categoryId) => {
  const category = categories.find(c => c.id === categoryId);
  return category ? category.color : "gray";
};

export const getPriorityBadgeClass = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "strategic":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
