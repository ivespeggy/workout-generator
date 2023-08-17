// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from './component/NavbarComp'
import Home from './component/Home';
import Plan from './component/Plan';
import Muscles from "./component/Muscles"
function App() {
  return (
    <div className="App">
     
      <Router>
      <NavbarComp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/muscles" element={<Muscles/>}/>
          <Route path="/plan" element={<Plan />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

