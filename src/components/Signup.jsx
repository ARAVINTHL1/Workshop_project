import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    const userData = { username, email, password };
    localStorage.setItem("signupUser", JSON.stringify(userData));

    alert("Signup successful! Redirecting to login...");
    navigate("/login");
  };

  return (
    <div className="auth-wrapper signup-bg">
      <div className="auth-container">
        <h2 className="auth-heading">📝 Signup</h2>
        <form className="auth-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">🚀 Sign Up</button>
        </form>
        <p style={{ marginTop: "1rem" }}>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="link-text">
            Login here ➡️
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
