import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RedPage from "./page/RedPage";
import BluePage from "./page/BluePage";
import UpDownButton from "./commponent/UpDownButton";
import Balance_SolutionPage from "./page/Balance_SolutionPage";
import Cop_SolutionPage from "./page/Cop_SolutionPage";

const App = () => {
  const [isBluePage, setIsBluePage] = useState(true);

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={
          <div
            key={isBluePage ? "blue" : "red"}
            className={`page-transition ${isBluePage ? "blue" : "red"}`}
          >
            {isBluePage ? <BluePage /> : <RedPage />}
            <UpDownButton
              isBluePage={isBluePage}
              onToggle={() => setIsBluePage((p) => !p)}
            />
          </div>
        }/>

        <Route path="/balance" element={<Balance_SolutionPage />} />
        <Route path="/cop" element={<Cop_SolutionPage />} />
      </Routes>
    </div>
  );
};

export default App;
