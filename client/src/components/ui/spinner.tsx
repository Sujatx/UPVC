import { Loader2 } from "lucide-react";

export function Spinner({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <Loader2 
      className={`animate-spin text-primary ${className}`} 
      size={size} 
    />
  );
}

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <Spinner size={48} />
    </div>
  );
}
