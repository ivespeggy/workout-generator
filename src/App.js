import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DefaultNavbar from "./component/DefaultNavbar";
import Home from "./component/Home";
import Plan from "./component/Plan";
import Muscles from "./component/Muscles";
import Login from "./component/Login";
import Register from "./component/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <DefaultNavbar />
        <Routes>
          <Route
            className="material-symbols-outlined"
            path="/"
            element={<Home />}
          />
          <Route path="/muscles" element={<Muscles />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
