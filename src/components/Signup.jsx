// src/components/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // global styles

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signup successful for: ${username}`);
    navigate("/");
  };

  return (
    <div className="auth-wrapper signup-bg">
      <div className="auth-container">
        <h2 className="auth-heading">Signup</h2>
        <form onSubmit={handleSignup} className="auth-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/")} className="link-text">
            Login here ⬅️
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
