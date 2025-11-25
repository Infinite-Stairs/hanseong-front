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

    // cross-origin이면 직접 접근 불가 -> postMessage 사용
    // same-origin이라면 iframe.contentWindow.unityInstance로 직접 호출도 가능 (아래 try/catch)
    try {
      const cw: any = iframe.contentWindow;
      if (cw?.unityInstance) {
        cw.unityInstance.SendMessage(target, method, value);
        console.log("direct SendMessage 성공 (same-origin)");
        return;
      }
    } catch (err) {
      // 접근 에러(크로스 오리진) 무시하고 postMessage로 보낼 것
    }

    // 안전하게 postMessage로 전송 (권장)
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
      <div style={{ marginTop: 8 }}>
        <span style={{ marginLeft: 12 }}>
          Unity ready: {unityReady ? "✅" : "⏳"}
        </span>
      </div>
    </div>
  );
}
