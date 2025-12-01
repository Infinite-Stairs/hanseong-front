import { useEffect, useState, useRef, useCallback } from "react";
import useJoystickNavigation from "../../enjoystick";

export default function useJoystickFocus() {
  const [focusIndex, setFocusIndex] = useState(0);
  const focusableRef = useRef<HTMLElement[]>([]);
  const initializedRef = useRef(false);
  const lastClickTimeRef = useRef<number>(0);
  const CLICK_DEBOUNCE_MS = 300; // 300ms 이내 중복 클릭 방지

  const collectFocusableElements = useCallback(() => {
    if (typeof document === "undefined") {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".joystick-focus")
    );

    elements.forEach((element) => {
      if (element.tabIndex < 0) {
        element.tabIndex = 0; // 포커스 가능한 상태로 강제
      }
    });

    focusableRef.current = elements;

    if (elements.length === 0) {
      initializedRef.current = false;
      setFocusIndex(0);
      return;
    }

    if (!initializedRef.current) {
      elements[0].focus();
      initializedRef.current = true;
    }

    setFocusIndex((prev) => {
      if (prev >= elements.length) {
        return 0;
      }
      return prev;
    });
  }, []);

  // DOM 변경 감지하여 포커스 가능한 요소 목록을 항상 최신으로 유지
  useEffect(() => {
    if (typeof window === "undefined" || !document.body) {
      return;
    }

    collectFocusableElements();

    const observer = new MutationObserver(() => {
      collectFocusableElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "tabindex"],
    });

    return () => observer.disconnect();
  }, [collectFocusableElements]);

  // 조이스틱 방향 처리
  useJoystickNavigation({
    onLeft: () => {
      setFocusIndex((prev) => {
        const total = focusableRef.current.length;
        if (total === 0) {
          return 0;
        }
        const next = prev === 0 ? total - 1 : prev - 1;
        return next;
      });
    },
    onRight: () => {
      setFocusIndex((prev) => {
        const total = focusableRef.current.length;
        if (total === 0) {
          return 0;
        }
        const next = prev === total - 1 ? 0 : prev + 1;
        return next;
      });
    },
    onSelect: () => {
      const now = Date.now();
      // 300ms 이내 중복 클릭 방지
      if (now - lastClickTimeRef.current < CLICK_DEBOUNCE_MS) {
        return;
      }
      lastClickTimeRef.current = now;
      
      const target = focusableRef.current[focusIndex];
      if (target instanceof HTMLElement) {
        target.click(); // 현재 포커스된 요소 클릭 실행
      }
    },
  });

  // 포커스 적용
  useEffect(() => {
    const target = focusableRef.current[focusIndex];
    if (target instanceof HTMLElement) {
      target.focus();
    }
  }, [focusIndex]);
}
