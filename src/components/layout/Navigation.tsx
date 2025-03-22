
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { 
  Home, 
  LayoutDashboard, 
  Lightbulb, 
  FileText, 
  ChevronRight 
} from "lucide-react";
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const NavigationLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Define routes for our application
  const routes = [
    { path: "/", label: "Home", icon: <Home className="h-4 w-4 mr-2" /> },
    { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
    { path: "/use-cases", label: "Use Cases", icon: <Lightbulb className="h-4 w-4 mr-2" /> },
    { path: "/implementation-plans", label: "Implementation Plans", icon: <FileText className="h-4 w-4 mr-2" /> },
  ];

  // Get current page details for breadcrumb
  const currentPage = routes.find(route => route.path === currentPath) || { label: "Not Found", path: "/404" };
  
  // Function to determine if a route is active
  const isActive = (path: string) => currentPath === path;

  return (
    <div className="container mx-auto px-4 py-2">
      {/* Breadcrumb navigation */}
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Button variant="ghost" size="sm" className="pl-0" onClick={() => navigate("/")}>
                <Home className="h-3.5 w-3.5 mr-2" />Home
              </Button>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {currentPath !== "/" && (
            <>
              <BreadcrumbSeparator>
                <ChevronRight className="h-3 w-3" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {currentPage.label}
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      
      {/* Main navigation */}
      <NavigationMenu className="max-w-full w-full justify-start">
        <NavigationMenuList>
          {routes.map((route) => (
            <NavigationMenuItem key={route.path}>
              <Button 
                onClick={() => navigate(route.path)}
                variant={isActive(route.path) ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "flex items-center",
                  isActive(route.path) 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {route.icon}
                {route.label}
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavigationLinks;
