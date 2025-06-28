import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  useEffect(() => {
    const checkBreakpoint = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setBreakpoint("mobile");
      } else if (window.matchMedia("(max-width: 1280px)").matches) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return breakpoint;
};