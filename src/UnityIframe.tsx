// UnityIframe.tsx
import { useEffect, useRef, useState } from "react";

const UNITY_URL = "https://your-unity-host.com/Build/index.html"; // → 실제 URL로 교체
const UNITY_ORIGIN = "https://your-unity-host.com"; // 보안을 위해 명시하세요

export default function UnityIframe() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [unityReady, setUnityReady] = useState(false);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      // 보안: 실제 배포 때는 e.origin 체크 필수
      // if (e.origin !== UNITY_ORIGIN) return;

      const msg = e.data;
      if (msg?.type === "UNITY_READY") {
        setUnityReady(true);
        console.log("✅ UNITY_READY 수신");
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  // Unity에게 명령 보내는 함수
  const sendToUnity = (target: string, method: string, value: string = "") => {
    const iframe = iframeRef.current;
    if (!iframe) {
      console.warn("iframe 없음");
      return;
    }

    try {
      const cw: any = iframe.contentWindow;
      if (cw?.unityInstance) {
        cw.unityInstance.SendMessage(target, method, value);
        console.log("direct SendMessage 성공 (same-origin)");
        return;
      }
    } catch (err) {
      // 접근 에러는 무시하고 postMessage로 보냄
    }

    const msg = { type: "SEND_MESSAGE", target, method, value };
    iframe.contentWindow?.postMessage(msg, UNITY_ORIGIN /* 또는 '*' */);
    console.log("postMessage로 전송됨", msg);
  };

  return (
    <div style={{ width: "100%", height: "700px" }}>
      <iframe
        ref={iframeRef}
        id="unity-frame"
        src={UNITY_URL}
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Unity"
      />

      {/* ---- 테스트 버튼 추가 (sendToUnity 사용처) ---- */}
      <div style={{ marginTop: 8 }}>
        <button
          onClick={() => sendToUnity("Player", "Move", "1")}
          style={{
            padding: "6px 12px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "1px solid #aaa",
            background: "#eee",
          }}
        >
          Unity로 테스트 메시지 보내기
        </button>

        <span style={{ marginLeft: 12 }}>
          Unity ready: {unityReady ? "✅" : "⏳"}
        </span>
      </div>
    </div>
  );
}
