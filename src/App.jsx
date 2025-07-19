import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordStorage from "./components/PasswordStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/generate" element={<PasswordGenerator />} />
        <Route path="/storage" element={<PasswordStorage />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={1500} theme="colored" />
    </Router>
  );
}

export default App;
