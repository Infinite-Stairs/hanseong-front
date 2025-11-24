import { useState } from "react";
import "./App.css";
import RedPage from "./page/RedPage";
import BluePage from "./page/BluePage";
import UpDownButton from "./commponent/UpDownButton";
import useJoystickNavigation from "../enjoystick";  // ← 경로 also fix

const App = () => {
  const [isBluePage, setIsBluePage] = useState(true);

  const handleTogglePage = () => {
    setIsBluePage((prev) => !prev);
  };

  // 여기서 패드 입력 받음
  useJoystickNavigation(() => {
    console.log("패드 입력 감지됨! (App.tsx)");
    handleTogglePage(); // ← 페이지 토글도 바로 연결 가능
  });

  return (
    <>
      <div className="app-wrapper">
        <div
          key={isBluePage ? "blue" : "red"}
          className={`page-transition ${isBluePage ? "blue" : "red"}`}
        >
          {isBluePage ? <BluePage /> : <RedPage />}
        </div>

        <UpDownButton isBluePage={isBluePage} onToggle={handleTogglePage} />
      </div>
    </>
  );
};

export default App;
