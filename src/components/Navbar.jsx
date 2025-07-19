import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) setLoggedInUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav
      className="main-navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#1e293b",
        color: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          cursor: "pointer",
          color: "#facc15",
          transition: "color 0.3s ease",
        }}
      >
        🔐 React Auth
      </div>

      {!loggedInUser ? (
        <ul
          className="nav-links"
          style={{
            display: "flex",
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li
            style={{
              cursor: "pointer",
              fontWeight: "500",
              transition: "color 0.3s",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </li>
          <li
            style={{
              cursor: "pointer",
              fontWeight: "500",
              transition: "color 0.3s",
            }}
            onClick={() => navigate("/signup")}
          >
            Signup
          </li>
        </ul>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontWeight: "600",
              color: "#a5f3fc",
              backgroundColor: "#0f172a",
              padding: "6px 12px",
              borderRadius: "8px",
            }}
          >
            👋 Welcome, {loggedInUser.username}
          </span>
          <button
            onClick={handleLogout}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#dc2626")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#ef4444")
            }
          >
            🔓 Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
