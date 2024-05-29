import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import RegistrationForm from "./components/RegistrationForm";
import NavBar from "./components/NavBar";
export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="nav">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route
              path="/registrationform"
              element={<RegistrationForm />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
