
import { useState, useEffect } from "react";
import { Download, FileText, Eye } from "lucide-react";
import { downloadImplementationPlan } from "@/components/use-cases/utils/planUtils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  getCategoryCounts,
  getCategoryColor,
  getPriorityBadgeClass,
} from "@/components/use-cases/data/utils";
import { categories } from "@/components/use-cases/data/categories";
import ImplementationPlanDetail from "@/components/use-cases/ImplementationPlanDetail";
import { UseCase } from "@/components/use-cases/data/types";
import { useUseCaseManager } from "@/hooks/useUseCaseManager";
import { useSearchParams } from "react-router-dom";

const ImplementationPlans = () => {
  const { useCases: allUseCases, handleUseCaseUpdate } = useUseCaseManager();
  const [searchParams] = useSearchParams();
  
  // Filter use cases that have implementation plans (including empty ones)
  const useCasesWithPlans = allUseCases.filter(
    (useCase) => useCase.implementationPlan !== undefined
  );

  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  // Set the selected use case based on URL parameter
  useEffect(() => {
    const useCaseId = searchParams.get("useCaseId");
    if (useCaseId) {
      const useCase = allUseCases.find(uc => uc.id.toString() === useCaseId);
      if (useCase) {
        setSelectedUseCase(useCase);
        setDetailOpen(true);
      }
    }
  }, [searchParams, allUseCases]);

  const handleViewPlan = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    setDetailOpen(true);
  };

  const handleUseCaseUpdateFromDetail = (updatedUseCase: UseCase) => {
    handleUseCaseUpdate(updatedUseCase);
    setSelectedUseCase(updatedUseCase);
  };

  return (
    <div className="container py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Implementation Plans</CardTitle>
          <CardDescription>
            Download implementation plans for all use cases across service lines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div>
              <span className="font-medium">{useCasesWithPlans.length}</span>{" "}
              implementation plans available
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Use Case</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Complexity</TableHead>
                  <TableHead>Phase</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {useCasesWithPlans.map((useCase) => {
                  // Find category name
                  const category = categories.find(
                    (c) => c.id === useCase.category
                  );
                  const categoryName = category ? category.name : useCase.category;
                  const isSelected = selectedUseCase?.id === useCase.id;

                  return (
                    <TableRow key={useCase.id} className={isSelected ? "bg-muted/50" : ""}>
                      <TableCell className="font-medium">
                        <span className="text-primary hover:text-primary/80 hover:underline cursor-pointer" 
                              onClick={() => handleViewPlan(useCase)}>
                          {useCase.name}
                        </span>
                      </TableCell>
                      <TableCell className="max-w-[300px] truncate">
                        {useCase.description}
                      </TableCell>
                      <TableCell>
                        <span
                          className="inline-block px-2 py-1 rounded text-xs font-medium"
                          style={{
                            backgroundColor: `${getCategoryColor(
                              useCase.category
                            )}20`,
                            color: getCategoryColor(useCase.category),
                          }}
                        >
                          {categoryName}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-medium ${getPriorityBadgeClass(
                            useCase.priority
                          )}`}
                        >
                          {useCase.priority}
                        </span>
                      </TableCell>
                      <TableCell>{useCase.complexity}</TableCell>
                      <TableCell>{useCase.phase}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handleViewPlan(useCase)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadImplementationPlan(useCase)}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {selectedUseCase && (
        <ImplementationPlanDetail
          useCase={selectedUseCase}
          open={detailOpen}
          onOpenChange={setDetailOpen}
          onUseCaseUpdate={handleUseCaseUpdateFromDetail}
        />
      )}
    </div>
  );
};

export default ImplementationPlans;
