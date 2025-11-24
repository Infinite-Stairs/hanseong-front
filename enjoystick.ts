import { useEffect, useRef } from "react";

interface JoystickHandlers {
  onLeft?: () => void;
  onRight?: () => void;
  onSelect?: () => void; // A 버튼
}

export default function useJoystickNavigation({
  onLeft,
  onRight,
  onSelect,
}: JoystickHandlers) {
  const prev = useRef<boolean[]>([]);

  useEffect(() => {
    const loop = () => {
      const gp = navigator.getGamepads()[0];
      if (!gp) return;

      const cur = gp.buttons.map((b) => b.pressed);

      const LEFT = 14;   // 방향키 LEFT
      const RIGHT = 15;  // 방향키 RIGHT
      const A = 0;       // A 버튼

      if (cur[LEFT] && !prev.current[LEFT]) {
        onLeft && onLeft();
      }

      if (cur[RIGHT] && !prev.current[RIGHT]) {
        onRight && onRight();
      }

      if (cur[A] && !prev.current[A]) {
        onSelect && onSelect();
      }

      prev.current = cur;
    };

    const id = setInterval(loop, 50);
    return () => clearInterval(id);
  }, [onLeft, onRight, onSelect]);
}
