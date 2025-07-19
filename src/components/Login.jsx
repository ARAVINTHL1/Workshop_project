import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("signupUser"));

    if (!storedUser) {
      toast.warning("⚠️ No user found. Please sign up first.");
      return;
    }

    if (email !== storedUser.email) {
      toast.error("❌ Invalid email.");
      return;
    }

    if (password !== storedUser.password) {
      toast.error("❌ Incorrect password.");
      return;
    }

    // ✅ If all okay
    toast.success("✅ Login successful! Redirecting...", {
      autoClose: 1500, // Show for 1.5 sec
    });

    localStorage.setItem("loggedInUser", JSON.stringify(storedUser));

    // ⏳ Wait before redirecting
    setTimeout(() => {
      navigate("/generate");
    }, 1600); // After toast closes
  };

  return (
    <div className="auth-wrapper login-bg">
      <div className="auth-container">
        <h2 className="auth-heading">🔐 Login</h2>
        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">➡️ Login</button>
        </form>
        <p style={{ marginTop: "1rem" }}>
          New here?{" "}
          <span onClick={() => navigate("/signup")} className="link-text">
            Signup now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
