import { Outlet, useLocation } from "react-router";
import { Aurora } from "@/components/aurora";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { cn } from "@/lib/utils";

export const Layout = ({ className }: { className?: string }) => {
  const location = useLocation();
  return (
    <>
      <LoadingScreen />
      <div className="relative min-h-svh w-full overflow-hidden sm:min-h-screen">
        <div className="absolute inset-0 z-0 max-h-screen">
          <Aurora colorStops={["#483AA0", "#7965C1", "#948979"]} amplitude={1} blend={0.5} />
        </div>
        <Navbar />
        <main className={cn("relative z-10 w-full", className)}>
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </main>
      </div>
    </>
  );
};
