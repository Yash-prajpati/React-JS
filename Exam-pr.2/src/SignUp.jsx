import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username.trim() && password.trim()) {
      // Save user details to localStorage (for simplicity)
      localStorage.setItem("user", JSON.stringify({ username, password }));
      // Redirect to Todo page
      navigate("/todos");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Sign Up</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
      </div>
      <button onClick={handleSignUp} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
