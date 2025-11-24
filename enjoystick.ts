import { useEffect } from "react";

export default function useJoystickNavigation(onToggle: () => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Enter / ArrowUp / ArrowDown 버튼으로 페이지 토글
      if (e.key === "Enter" || e.key === "ArrowUp" || e.key === "ArrowDown") {
        onToggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onToggle]);
}
