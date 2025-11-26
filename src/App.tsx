import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RedPage from "./page/RedPage";
import BluePage from "./page/BluePage";
import UpDownButton from "./commponent/UpDownButton";
import useJoystickNavigation from "../enjoystick";
import Balance_SolutionPage from "./page/Balance_SolutionPage";
import Cop_SolutionPage from "./page/Cop_SolutionPage";

const App = () => {
  const [isBluePage, setIsBluePage] = useState(true);
  const handleTogglePage = () => {
    setIsBluePage((prev) => !prev);
  };

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
        <Routes>
          <Route path="/Balance_SolutionPage" element={<Balance_SolutionPage />} />
          <Route path="/Cop_SolutionPage" element={<Cop_SolutionPage />} />
        </Routes>
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
