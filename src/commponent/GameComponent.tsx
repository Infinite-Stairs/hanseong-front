const GameComponent = () => {
  const returnToGame = () => {
    window.open("https://eunseo-unity.vercel.app/", "_blank");
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
