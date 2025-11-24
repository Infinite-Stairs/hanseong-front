import { useState } from "react";
import "./App.css";

import RedPage from "./page/RedPage";
import BluePage from "./page/BluePage";
import UpDownButton from "./commponent/UpDownButton";

import useJoystickNavigation from "../enjoystick";   // ✔ 수정된 경로

const App = () => {
  const [isBluePage, setIsBluePage] = useState(true);

  const handleTogglePage = () => {
    setIsBluePage((prev) => !prev);
  };

  // 여기서 방향키, A 버튼 입력 받음
  useJoystickNavigation({
    onLeft: () => {
      console.log("왼쪽!");
      setIsBluePage(true);
    },
    onRight: () => {
      console.log("오른쪽!");
      setIsBluePage(false);
    },
    onSelect: () => {
      console.log("A 버튼 눌림! (App.tsx)");
    }
  });

  return (
    <div className="app-wrapper">
      <div
        key={isBluePage ? "blue" : "red"}
        className={`page-transition ${isBluePage ? "blue" : "red"}`}
      >
        {isBluePage ? <BluePage /> : <RedPage />}
      </div>

      <UpDownButton isBluePage={isBluePage} onToggle={handleTogglePage} />
    </div>
  );
};

export default App;
