import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  change?: number;
  changeType?: "increase" | "decrease" | "neutral";
  category?: "environmental" | "social" | "governance";
  target?: string | number;
  unit?: string;
}

export const MetricCard = ({
  title,
  value,
  description,
  change,
  changeType = "neutral",
  category,
  target,
  unit
}: MetricCardProps) => {
  const getTrendIcon = () => {
    switch (changeType) {
      case "increase":
        return <TrendingUp className="h-4 w-4" />;
      case "decrease":
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const getTrendColor = () => {
    switch (changeType) {
      case "increase":
        return "text-green-600";
      case "decrease":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "environmental":
        return "bg-green-50 text-green-700 border-green-200";
      case "social":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "governance":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {category && (
            <Badge variant="outline" className={getCategoryColor()}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            {value}
            {unit && <span className="text-sm text-gray-500 ml-1">{unit}</span>}
          </div>
          {change !== undefined && (
            <div className={cn("flex items-center space-x-1 text-xs", getTrendColor())}>
              {getTrendIcon()}
              <span>{Math.abs(change)}%</span>
            </div>
          )}
        </div>
        {description && (
          <CardDescription className="mt-1">{description}</CardDescription>
        )}
        {target && (
          <div className="mt-2 text-xs text-gray-500">
            目標: {target}{unit}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
