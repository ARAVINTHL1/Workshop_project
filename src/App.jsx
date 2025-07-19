import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordStorage from "./components/PasswordStorage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/generate" element={<PasswordGenerator />} />
        <Route path="/storage" element={<PasswordStorage />} />
      </Routes>
    </Router>
  );
}

export default App;
