declare global {
    interface Window {
        unityInstance: any;
    }
}

const GameComponent = () => {
    
    const returnToGame = () => {
        // Unity WebGL 인스턴스에 메시지 보내기
        // unityInstance는 WebGL 템플릿에서 window 전역에 올라온다고 가정
        if (window.unityInstance) {
            window.unityInstance.SendMessage(
                "ReceiverObject", // Unity 오브젝트 이름
                "OnReturnToGame", // Unity 메서드 이름
                ""                // 전달할 값 (string)
            );
        }
    };
    return (
        <>
            <button onClick={returnToGame}>게임으로 돌아가기</button>
        </>
    );
};

export default GameComponent;