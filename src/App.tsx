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
  enjoystick(() => {
    console.log("패드 입력 감지됨! (App.tsx)");
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
