import { useState } from "react";
import "./App.css";
import RedPage from "./page/RedPage";
import BluePage from "./page/BluePage";
import UpDownButton from "./component/UpDownButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [isRedPage, setIsRedPage] = useState(true);

  const handleTogglePage = () => {
    setIsRedPage((prev) => !prev);
  };

  return (
    <>
      <Router>
        <div className="app-wrapper">
          <div
            key={isRedPage ? "red" : "blue"}
            className={`page-transition ${isRedPage ? "red" : "blue"}`}
          >
            {isRedPage ? <RedPage /> : <BluePage />}
          </div>
          <UpDownButton isRedPage={isRedPage} onToggle={handleTogglePage} />
        </div>
      </Router>
    </>
  );
};

export default App;