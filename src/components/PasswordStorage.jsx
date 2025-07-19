import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 🔗 Map app names to their logo URLs
const appLogos = {
  instagram: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  gmail: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
  twitter: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  linkedin: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  whatsapp: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  youtube: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  default: "https://cdn-icons-png.flaticon.com/512/561/561127.png", // 🔒 default lock icon
};

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

  // 🔎 Get logo URL based on app name
  const getLogo = (appName) => {
    if (!appName) return appLogos.default;
    const key = appName.toLowerCase().trim();
    return appLogos[key] || appLogos.default;
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
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src={getLogo(entry.appName)}
                  alt={entry.appName}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#0f172a" }}>
                    {entry.appName}
                  </h3>
                  <p style={{ margin: "4px 0", fontSize: "15px" }}>
                    👤 <strong>Username:</strong> {entry.username}
                  </p>
                  <p style={{ margin: "4px 0", fontSize: "15px" }}>
                    🔐 <strong>Password:</strong>{" "}
                    <span style={{ color: "#2563eb", wordBreak: "break-word" }}>
                      {entry.password}
                    </span>
                  </p>
                </div>
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
          <span onClick={() => navigate("/generate")} className="link-text">
            🔐 Save Page
          </span>
        </p>
      </div>
    </div>
  );
};

export default PasswordStorage;
