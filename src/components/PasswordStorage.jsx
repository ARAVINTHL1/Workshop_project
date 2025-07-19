import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PasswordStorage = () => {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("passwords")) || [];
    setPasswords(stored);
  }, []);

  const deletePassword = (indexToDelete) => {
    const updated = passwords.filter((_, index) => index !== indexToDelete);
    setPasswords(updated);
    localStorage.setItem("passwords", JSON.stringify(updated));
  };

  const clearPasswords = () => {
    localStorage.removeItem("passwords");
    setPasswords([]);
  };

  return (
    <div className="auth-wrapper signup-bg">
      <div className="auth-container">
        <h2 className="auth-heading">📄 Stored Credentials</h2>

        {passwords.length === 0 ? (
          <p>No credentials saved yet.</p>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxHeight: "350px",
              overflowY: "auto",
            }}
          >
            {passwords.map((entry, index) => (
              <div
                key={index}
                style={{
                  background: "#f8fafc",
                  padding: "1rem",
                  borderRadius: "10px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
                  textAlign: "left",
                  position: "relative",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "18px",
                    color: "#0f172a",
                  }}
                >
                  📱 {entry.appName}
                </h3>
                <p style={{ margin: "6px 0", fontSize: "15px" }}>
                  👤 <strong>Username:</strong> {entry.username}
                </p>
                <p style={{ margin: "6px 0", fontSize: "15px" }}>
                  🔐 <strong>Password:</strong>{" "}
                  <span style={{ color: "#2563eb", wordBreak: "break-word" }}>
                    {entry.password}
                  </span>
                </p>
                <button
                  onClick={() => deletePassword(index)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    padding: "4px 10px",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {passwords.length > 0 && (
          <button
            onClick={clearPasswords}
            style={{
              marginTop: "1rem",
              backgroundColor: "#dc2626",
              color: "white",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            🧹 Clear All
          </button>
        )}

        <p style={{ marginTop: "1.5rem" }}>
          Back to{" "}
          <span onClick={() => navigate("/")} className="link-text">
            🔐 Save Page
          </span>
        </p>
      </div>
    </div>
  );
};

export default PasswordStorage;
