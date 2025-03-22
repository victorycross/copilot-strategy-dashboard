
import { useState } from "react";
import { Download, FileText, Eye } from "lucide-react";
import { useCases } from "@/components/use-cases/data";
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

const ImplementationPlans = () => {
  // Filter use cases that have implementation plans
  const useCasesWithPlans = useCases.filter(
    (useCase) =>
      useCase.implementationPlan &&
      Object.values(useCase.implementationPlan).some((value) => value)
  );

  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const handleViewPlan = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    setDetailOpen(true);
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

                  return (
                    <TableRow key={useCase.id}>
                      <TableCell className="font-medium">
                        {useCase.name}
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
                          variant="outline"
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
        />
      )}
    </div>
  );
};

export default ImplementationPlans;
