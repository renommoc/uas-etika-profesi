import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsActive(true);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      className={cn(
        "w-full transition-all duration-500 ease-in-out",
        isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      )}
    >
      {children}
    </div>
  );
};
