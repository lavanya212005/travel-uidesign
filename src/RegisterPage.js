import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage({ users, setUsers }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [terms, setTerms] = useState(false);

  const handleRegister = () => {
    if (!username || !password || !name || !dob || !email || !mobile || !terms) {
      alert("Please fill all fields and accept the terms!");
      return;
    }

    const exists = users.find(u => u.username === username);
    if (exists) {
      alert("Username already exists!");
      return;
    }

    const newUser = {
      username,
      password,
      role: "user",
      name,
      dob,
      gender,
      email,
      mobile,
    };

    setUsers([...users, newUser]);
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundImage: "url('https://www.bsr.org/images/heroes/bsr-travel-hero..jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          padding: "40px",
          borderRadius: "16px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", width: "100%", borderRadius: "8px" }}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", width: "100%", borderRadius: "8px" }}
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", width: "100%", borderRadius: "8px" }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", width: "100%", borderRadius: "8px" }}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", width: "100%", borderRadius: "8px" }}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", width: "100%", borderRadius: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", width: "100%", borderRadius: "8px" }}
        />

        <div style={{ textAlign: "left", marginBottom: "15px" }}>
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            id="terms"
          />
          <label htmlFor="terms" style={{ marginLeft: "8px" }}>
            I accept the Terms and Conditions
          </label>
        </div>

        <button
          onClick={handleRegister}
          style={{
            background: "#8b5cf6",
            color: "white",
            padding: "10px 0",
            width: "100%",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Register
        </button>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#3b82f6", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
