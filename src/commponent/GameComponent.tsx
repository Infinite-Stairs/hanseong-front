declare global {
    interface Window {
        unityInstance: any;
    }
}

import useJoystickFocus from "./useJoystickFocus";

const GameComponent = () => {

    // ★ 조이스틱 포커스 활성화
    useJoystickFocus();

    const returnToGame = () => {

        console.log("🎮 returnToGame 실행됨!"); // ← 여기 console.log 추가

        if (window.unityInstance) {
            window.unityInstance.SendMessage(
                "ReceiverObject",
                "OnReturnToGame",
                ""
            );
        }
    };

    return (
        <>
            <button
                className="joystick-focus"
                tabIndex={0}
                onClick={returnToGame}
            >
                게임으로 돌아가기
            </button>
        </>
    );
};

export default GameComponent;
