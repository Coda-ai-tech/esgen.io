import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "excellent" | "good" | "fair" | "poor" | "critical";
  label: string;
  description?: string;
}

export const StatusIndicator = ({ status, label, description }: StatusIndicatorProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "excellent":
        return "text-green-600";
      case "good":
        return "text-green-500";
      case "fair":
        return "text-yellow-600";
      case "poor":
        return "text-orange-600";
      case "critical":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  const getStatusBg = () => {
    switch (status) {
      case "excellent":
        return "bg-green-50";
      case "good":
        return "bg-green-50";
      case "fair":
        return "bg-yellow-50";
      case "poor":
        return "bg-orange-50";
      case "critical":
        return "bg-red-50";
      default:
        return "bg-gray-50";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "excellent":
        return "優秀";
      case "good":
        return "良好";
      case "fair":
        return "一般";
      case "poor":
        return "待改進";
      case "critical":
        return "緊急";
      default:
        return status;
    }
  };

  return (
    <div className={cn("flex items-center space-x-2 p-2 rounded-lg", getStatusBg())}>
      <Circle className={cn("h-3 w-3 fill-current", getStatusColor())} />
      <div className="flex-1">
        <div className="text-sm font-medium">{label}</div>
        {description && (
          <div className="text-xs text-gray-600">{description}</div>
        )}
      </div>
      <div className={cn("text-xs font-medium", getStatusColor())}>
        {getStatusLabel()}
      </div>
    </div>
  );
};
