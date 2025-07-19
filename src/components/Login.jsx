// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // global styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login successful for: ${email}`);
  };

  return (
    <div className="auth-wrapper login-bg">
      <div className="auth-container">
        <h2 className="auth-heading">Login</h2>
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")} className="link-text">
            Signup here ➡️
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
