import { useState } from 'react'
import './App.css'
import Title from './layout/Title';
import RedPage from './page/RedPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<RedPage />} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App