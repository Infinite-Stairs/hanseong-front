import { useEffect, useRef } from "react";

export default function useJoystickNavigation(onToggle: () => void) {
  const prev = useRef<boolean[]>([]);

  useEffect(() => {
    const loop = () => {
      const gamepads = navigator.getGamepads();
      const gp = gamepads[0];
      if (!gp) return;

      const cur = gp.buttons.map(b => b.pressed);

      // A(0), B(1), UP(12), DOWN(13)
      const toggleButtons = [0, 1, 12, 13];

      toggleButtons.forEach(i => {
        if (cur[i] && !prev.current[i]) {
          onToggle();
        }
      });

      prev.current = cur;
    };

    const id = setInterval(loop, 50);
    return () => clearInterval(id);
  }, [onToggle]);
}
