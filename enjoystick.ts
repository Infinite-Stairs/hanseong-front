import { useEffect } from "react";

interface JoystickHandlers {
  onLeft?: () => void;
  onRight?: () => void;
  onSelect?: () => void;
}

export default function useJoystickNavigation(handlers: JoystickHandlers) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlers.onLeft && handlers.onLeft();
      }
      if (e.key === "ArrowRight") {
        handlers.onRight && handlers.onRight();
      }
      if (e.key === "Enter") {
        handlers.onSelect && handlers.onSelect();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlers]);
}
