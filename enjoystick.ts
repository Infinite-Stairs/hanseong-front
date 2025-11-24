import { useEffect, useRef } from "react";

interface JoystickHandlers {
  onLeft?: () => void;
  onRight?: () => void;
  onSelect?: () => void;
}

export default function useJoystickNavigation(handlers: JoystickHandlers) {
  const prev = useRef<boolean[]>([]);

  useEffect(() => {
    let frameId = 0;

    const loop = () => {
      const gp = navigator.getGamepads()[0];
      if (gp) {
        const cur = gp.buttons.map((b) => b.pressed);

        const LEFT = 14;
        const RIGHT = 15;
        const A = 0;

        if (cur[LEFT] && !prev.current[LEFT]) handlers.onLeft?.();
        if (cur[RIGHT] && !prev.current[RIGHT]) handlers.onRight?.();
        if (cur[A] && !prev.current[A]) handlers.onSelect?.();

        prev.current = cur;
      }

      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frameId);
  }, [handlers]);
}
