import { useCallback, useState } from "react";
import { useWindowEvent } from "./use-window-event";

interface ViewportSize {
  height: number;
  width: number;
}

export const useViewportSize = (): ViewportSize => {
  const [windowSize, setWindowSize] = useState<ViewportSize>({
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  const handleSize = useCallback(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    }
  }, []);

  useWindowEvent("resize", handleSize);

  return windowSize;
};
