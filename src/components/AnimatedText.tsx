
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "slide-up" | "slide-down" | "zoom";
  delay?: number;
  once?: boolean;
}

const AnimatedText = ({
  children,
  className,
  variant = "fade",
  delay = 0,
  once = true,
}: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const variantStyles = {
    fade: "opacity-0 transition-opacity duration-700",
    "slide-up": "opacity-0 translate-y-8 transition-all duration-700",
    "slide-down": "opacity-0 -translate-y-8 transition-all duration-700",
    zoom: "opacity-0 scale-95 transition-all duration-700",
  };

  const activeStyles = {
    fade: "opacity-100",
    "slide-up": "opacity-100 translate-y-0",
    "slide-down": "opacity-100 translate-y-0",
    zoom: "opacity-100 scale-100",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        variantStyles[variant],
        isVisible && activeStyles[variant],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedText;
