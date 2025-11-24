import { useEffect, useRef } from "react";

interface JoystickHandlers {
  onLeft?: () => void;
  onRight?: () => void;
  onSelect?: () => void;
}

export default function useJoystickNavigation(handlers: JoystickHandlers) {
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  useEffect(() => {
    const DEAD_ZONE = 0.4;
    let rafId: number | null = null;
    let gamepadIndex: number | null = null;
    let previousHorizontal = 0;
    let wasSelectPressed = false;

    const invokeHandler = (type: keyof JoystickHandlers) => {
      const fn = handlersRef.current?.[type];
      if (fn) fn();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        invokeHandler("onLeft");
      }
      if (e.key === "ArrowRight") {
        invokeHandler("onRight");
      }
      if (e.key === "Enter") {
        invokeHandler("onSelect");
      }
    };

    const pollGamepad = () => {
      if (typeof navigator === "undefined" || !navigator.getGamepads) {
        return;
      }

      const pads = navigator.getGamepads();
      const pad =
        (gamepadIndex !== null && pads?.[gamepadIndex]) ||
        Array.from(pads || []).find(Boolean) ||
        null;

      if (pad) {
        gamepadIndex = pad.index;
        const horizontal = pad.axes?.[0] ?? 0;
        const isSelectPressed =
          Boolean(pad.buttons?.[0]?.pressed) ||
          Boolean(pad.buttons?.[9]?.pressed);

        if (horizontal <= -DEAD_ZONE && previousHorizontal > -1) {
          previousHorizontal = -1;
          invokeHandler("onLeft");
        } else if (horizontal >= DEAD_ZONE && previousHorizontal < 1) {
          previousHorizontal = 1;
          invokeHandler("onRight");
        } else if (Math.abs(horizontal) < DEAD_ZONE && previousHorizontal !== 0) {
          previousHorizontal = 0;
        }

        if (isSelectPressed && !wasSelectPressed) {
          invokeHandler("onSelect");
        }
        wasSelectPressed = isSelectPressed;
      }

      rafId = requestAnimationFrame(pollGamepad);
    };

    const startPolling = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(pollGamepad);
      }
    };

    const stopPolling = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const handleGamepadConnected = (event: GamepadEvent) => {
      gamepadIndex = event.gamepad.index;
      previousHorizontal = 0;
      wasSelectPressed = false;
      startPolling();
    };

    const handleGamepadDisconnected = (event: GamepadEvent) => {
      if (event.gamepad.index === gamepadIndex) {
        gamepadIndex = null;
        previousHorizontal = 0;
        wasSelectPressed = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("gamepadconnected", handleGamepadConnected);
    window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);
    startPolling();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("gamepadconnected", handleGamepadConnected);
      window.removeEventListener("gamepaddisconnected", handleGamepadDisconnected);
      stopPolling();
    };
  }, []);
}
