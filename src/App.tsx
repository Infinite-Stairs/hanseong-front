import { useState } from "react";
import "./App.css";
import RedPage from "./page/RedPage";
import BluePage from "./page/BluePage";
import UpDownButton from "./commponent/UpDownButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [isBluePage, setIsBluePage] = useState(true);

  const handleTogglePage = () => {
    setIsBluePage((prev) => !prev);
  };

  return (
    <>
      <Router>
        <div className="app-wrapper">
          <div
            key={isBluePage ? "blue" : "red"}
            className={`page-transition ${isBluePage ? "blue" : "red"}`}
          >
            {isBluePage ? <BluePage /> : <RedPage />}
          </div>
          <UpDownButton isBluePage={isBluePage} onToggle={handleTogglePage} />
        </div>
      </Router>
    </>
  );
};

export default App;