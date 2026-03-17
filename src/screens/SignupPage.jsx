
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../screens/SignupPage.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  
  const handleSignup = async () => {
    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Account created successfully! 🎉");
        setError("");
        setEmail("");
        setPassword("");
        // navigate to login page after 2 seconds
        setTimeout(() => navigate("/"), 2000);
      } else {
        setError(data.message || "Signup failed. Try again.");
        setSuccess("");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Server not reachable. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-box">
        <h2>Create Account</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create a password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>

        {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: 10 }}>{success}</p>}

        <p className="back-to-login">
          Already have an account?{" "}
          <span onClick={() => navigate("/")} className="login-link">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
