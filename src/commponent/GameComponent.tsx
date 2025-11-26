import useJoystickFocus from "./useJoystickFocus";

const GameComponent = () => {
  useJoystickFocus();

  const returnToGame = () => {
    console.log("🎮 returnToGame 실행됨!");

    const frame: any = document.getElementById("unity-frame");
    if (!frame?.contentWindow) {
      console.warn("Unity iframe을 찾을 수 없음");
      return;
    }
    
    frame.contentWindow.postMessage(
      {
        type: "SEND_MESSAGE",
        target: "ReceiverObject",
        method: "OnReturnToGame",
        value: ""
      },
      "*" // 실제 배포시에는 '*' 대신 Unity 호스트 origin으로 바꿔주세요
    );
  };

  return (
    <>
      <button className="joystick-focus" tabIndex={0} onClick={returnToGame}>
        게임으로 돌아가기
      </button>
    </>
  );
};

export default GameComponent;
