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
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "linear-gradient(to right, #1e3a8a, #1e293b)",
        color: "white",
        fontFamily: "Segoe UI, sans-serif",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          cursor: "pointer",
          color: "#facc15",
          textShadow: "1px 1px 2px #000",
        }}
      >
        🔐 ReactVault
      </div>

      {/* Links */}
      {!loggedInUser ? (
        <ul
          style={{
            display: "flex",
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li
            onClick={() => navigate("/login")}
            style={{
              cursor: "pointer",
              fontWeight: 500,
              padding: "6px 12px",
              borderRadius: "6px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#334155")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            🔑 Login
          </li>
          <li
            onClick={() => navigate("/signup")}
            style={{
              cursor: "pointer",
              fontWeight: 500,
              padding: "6px 12px",
              borderRadius: "6px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#334155")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            ✍️ Signup
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
              backgroundColor: "#0f172a",
              padding: "6px 12px",
              borderRadius: "8px",
              color: "#93c5fd",
              fontSize: "15px",
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
