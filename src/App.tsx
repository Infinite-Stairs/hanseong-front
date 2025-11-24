import { useState } from "react";
import "./App.css";
import RedPage from "./page/RedPage";
import BluePage from "./page/BluePage";
import UpDownButton from "./commponent/UpDownButton";
import enjoystick from "../enjoystick";

const App = () => {
  const [isBluePage, setIsBluePage] = useState(true);

  const handleTogglePage = () => {
    setIsBluePage((prev) => !prev);
  };
  // 조이스틱으로 페이지 전환하는 훅
  enjoystick(handleTogglePage);

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
