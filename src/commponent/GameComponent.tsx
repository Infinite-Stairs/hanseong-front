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
                className="joystick-focus"  // ★ 조이스틱 포커스 등록
                tabIndex={0}                // ★ 포커스 가능 요소로 변경
                onClick={returnToGame}      // ★ A 버튼 누르면 자동으로 실행됨
            >
                게임으로 돌아가기
            </button>
        </>
    );
};

export default GameComponent;
