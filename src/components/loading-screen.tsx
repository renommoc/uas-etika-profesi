import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsFadeOut(true);
        setTimeout(() => setIsVisible(false), 600);
      }, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-60 flex flex-col items-center justify-center gap-8 bg-background opacity-100 transition-all duration-600 ease-in-out",
        isFadeOut && "invisible opacity-0",
      )}
    >
      <div className="shimmer-block h-14 w-14 rounded-md" />

      <div className="flex w-70 flex-col gap-3">
        <div className="shimmer-block h-3.5 w-[55%] rounded-md" />
        <div className="shimmer-block h-2.5 w-[80%] rounded-md" />
        <div className="shimmer-block h-2.5 w-[65%] rounded-md" />
        <div className="mt-1 flex gap-2">
          <div className="shimmer-block h-8 flex-1 rounded-[0.5rem]" />
          <div className="shimmer-block h-8 flex-1 rounded-[0.5rem]" />
        </div>
      </div>

      <div className="h-0.5 w-70 overflow-hidden rounded-full bg-[#27272a]">
        <div className="progress-fill h-full w-0 rounded-full bg-[#52525b]" />
      </div>
    </div>
  );
};
