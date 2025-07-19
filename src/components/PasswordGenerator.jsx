import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordGenerator = () => {
  const [appName, setAppName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const savePassword = () => {
    if (!appName || !username || !password) {
      alert("Fill all fields before saving.");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("passwords")) || [];
    stored.push({ appName, username, password });
    localStorage.setItem("passwords", JSON.stringify(stored));

    alert("Password saved!");
    setAppName("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="auth-wrapper login-bg">
      <div className="auth-container">
        <h2 className="auth-heading">🔐 Save New Credential</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="App Name (e.g. Instagram)"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={savePassword}>💾 Save</button>
        </form>
        <p style={{ marginTop: "1.5rem" }}>
          View saved?{" "}
          <span onClick={() => navigate("/storage")} className="link-text">
            📄 Go to Storage
          </span>
        </p>
      </div>
    </div>
  );
};

export default PasswordGenerator;
