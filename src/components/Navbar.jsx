import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="main-navbar">
      <div className="logo" onClick={() => navigate("/")}>🔐 React Auth</div>
      <ul className="nav-links">
        <li onClick={() => navigate("/")}>Login</li>
        <li onClick={() => navigate("/signup")}>Signup</li>
        <li onClick={() => navigate("/generate")}>Generate</li>
        <li onClick={() => navigate("/storage")}>Storage</li>
      </ul>
    </nav>
  );
};

export default Navbar;
