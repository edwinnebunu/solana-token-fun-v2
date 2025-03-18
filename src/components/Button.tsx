
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  type?: "button" | "submit";
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className,
  isLoading = false,
  disabled = false,
  icon,
  type = "button",
}: ButtonProps) => {
  const variantStyles = {
    primary: "bg-flashmeme-green text-white hover:brightness-110 shadow-md",
    secondary: "bg-flashmeme-yellow text-flashmeme-dark hover:brightness-110 shadow-md",
    outline: "bg-transparent border border-flashmeme-green text-flashmeme-green hover:bg-flashmeme-green/10",
    ghost: "bg-transparent hover:bg-flashmeme-green/10 text-flashmeme-green",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "rounded-lg font-medium transition-all duration-200 ease-in-out flex items-center justify-center gap-2 focus-ring",
        variantStyles[variant],
        sizeStyles[size],
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
    >
      {isLoading ? (
        <Loader2 className="animate-spin h-4 w-4 mr-2" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
