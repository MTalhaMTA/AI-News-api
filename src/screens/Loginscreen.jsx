// src/screens/LoginScreen.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import HumanCycle from "../assets/HumanCycle.png";
import NavBar from "../components/NavBar";
import "./LoginScreen.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  // ✅ Login Function (async)
  const handleLogin = async () => {
    const enteredEmail = email.trim().toLowerCase();

    if (!enteredEmail || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      // ✅ Call backend API
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("authToken", data.token);
        navigate("/user-form");
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server not reachable. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <h2 className="brand">AI Today – Smarter News for a Smarter World</h2>
        <h3 className="title">
          Stay updated with the latest breakthroughs in Artificial Intelligence.
          Discover Trends, Tools, and Insights Shaping the Future.
        </h3>
        <p className="subtitle">Welcome back! Please login to your account.</p>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="ali@digital.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
          />
        </div>

        <div className="options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="/" className="forgot">
            Forgot Password?
          </a>
        </div>

        <div className="btn-group">
          <button className="btn login-btn" onClick={handleLogin}>
            Login
          </button>
          <button
            className="btn signup-btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>

        {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}
      </div>

      {/* Right Section */}
      <div className="login-right">
        <NavBar />
        <img src={HumanCycle} alt="Human Cycle" className="illustration" />
      </div>
    </div>
  );
};

export default LoginScreen;
