import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function UserLoginPage({ users, setCurrentUser, setUsers }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgot, setForgot] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  // Normal Login
  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password && u.role === "user"
    );
    if (user) {
      setCurrentUser(user);
      navigate("/user");
    } else {
      alert("Invalid username or password!");
    }
  };

  // Reset Password
  const handleResetPassword = () => {
    const userIndex = users.findIndex(
      (u) => u.username === username && u.role === "user"
    );
    if (userIndex === -1) {
      alert("User not found!");
      return;
    }

    const updatedUsers = [...users];
    updatedUsers[userIndex].password = newPassword;
    setUsers(updatedUsers);
    alert("Password reset successful! Please login with new password.");
    setForgot(false);
    setPassword("");
    setNewPassword("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundImage:
          "url('https://www.bsr.org/images/heroes/bsr-travel-hero..jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          padding: "40px",
          borderRadius: "16px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <h2>User Login</h2>

        {!forgot ? (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                marginBottom: "15px",
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                marginBottom: "15px",
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
              }}
            />
            <button
              onClick={handleLogin}
              style={{
                background: "#a855f7",
                color: "white",
                padding: "10px 0",
                width: "100%",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Sign In
            </button>

            {/* Forgot Password */}
            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              <span
                style={{ color: "#3b82f6", cursor: "pointer" }}
                onClick={() => setForgot(true)}
              >
                Forgot Password?
              </span>
            </p>

            {/* Register link */}
            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              Don’t have an account?{" "}
              <Link
                to="/register"
                style={{ color: "#3b82f6", textDecoration: "underline" }}
              >
                Register here
              </Link>
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                marginBottom: "15px",
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
              }}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{
                marginBottom: "15px",
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
              }}
            />
            <button
              onClick={handleResetPassword}
              style={{
                background: "#a855f7",
                color: "white",
                padding: "10px 0",
                width: "100%",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Reset Password
            </button>

            {/* Back to login */}
            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              <span
                style={{ color: "#3b82f6", cursor: "pointer" }}
                onClick={() => setForgot(false)}
              >
                Back to Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default UserLoginPage;
