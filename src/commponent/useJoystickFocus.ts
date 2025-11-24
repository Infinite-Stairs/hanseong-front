import { useEffect, useState, useRef } from "react";
import useJoystickNavigation from "../../enjoystick";

export default function useJoystickFocus() {
  const [focusIndex, setFocusIndex] = useState(0);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  // 페이지 로드될 때 .joystick-focus 요소 전부 수집
  useEffect(() => {
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".joystick-focus")
    );
    buttonsRef.current = buttons;
    if (buttons.length > 0) {
      buttons[0].focus();
    }
  }, []);

  // 조이스틱 방향 처리
  useJoystickNavigation({
    onLeft: () => {
      setFocusIndex((prev) => {
        const next = prev === 0 ? buttonsRef.current.length - 1 : prev - 1;
        return next;
      });
    },
    onRight: () => {
      setFocusIndex((prev) => {
        const next =
          prev === buttonsRef.current.length - 1 ? 0 : prev + 1;
        return next;
      });
    },
    onSelect: () => {
      const btn = buttonsRef.current[focusIndex];
      if (btn) btn.click(); // 현재 포커스된 버튼 클릭 실행
    },
  });

  // 포커스 적용
  useEffect(() => {
    const btn = buttonsRef.current[focusIndex];
    if (btn) btn.focus();
  }, [focusIndex]);
}
