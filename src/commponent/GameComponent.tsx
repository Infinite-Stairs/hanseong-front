declare global {
    interface Window {
        unityInstance: any;
    }
}

const GameComponent = () => {
    const returnToGame = () => {
        
        if (window.unityInstance) {
            window.unityInstance.SendMessage(
                "ReceiverObject",  // Unity 오브젝트 이름
                "OnReturnToGame",  // Unity에 존재하는 public 메서드
                ""                 // 값 전달
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
