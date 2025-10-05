// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function LoginPage({ users, setCurrentUser, setUsers }) {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user");
//   const [forgot, setForgot] = useState(false);
//   const [newPassword, setNewPassword] = useState("");

//   const handleLogin = () => {
//     const user = users.find(
//       (u) => u.username === username && u.password === password && u.role === role
//     );
//     if (user) {
//       setCurrentUser(user);
//       if (role === "admin") navigate("/admin");
//       else navigate("/user");
//     } else {
//       alert("Successful");
//     }
//   };

//   const handleResetPassword = () => {
//     const userIndex = users.findIndex((u) => u.username === username && u.role === role);
//     if (userIndex === -1) {
//       alert("User not found!");
//       return;
//     }

//     const updatedUsers = [...users];
//     updatedUsers[userIndex].password = newPassword;
//     setUsers(updatedUsers);
//     alert("Password reset successful! Please login with new password.");
//     setForgot(false);
//     setPassword("");
//     setNewPassword("");
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         fontFamily: "Arial, sans-serif",
//         backgroundImage:
//           "url('https://www.bsr.org/images/heroes/bsr-travel-hero..jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div
//         style={{
//           background: "rgba(0, 0, 0, 0.4)", // darker transparent card for contrast
//           padding: "40px",
//           borderRadius: "16px",
//           width: "350px",
//           textAlign: "center",
//           boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
//           backdropFilter: "blur(8px)", // glass effect
//           border: "1px solid rgba(255, 255, 255, 0.2)",
//         }}
//       >
//         <h2 style={{ marginBottom: "10px", color: "#fff", textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}>
//           {role === "admin" ? "Admin Login" : "User Login"}
//         </h2>

//         {!forgot ? (
//           <>
//             <p style={{ marginBottom: "20px", color: "#fff", textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
//               Sign in to access your account
//             </p>

//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={{
//                 marginBottom: "15px",
//                 padding: "10px",
//                 width: "100%",
//                 borderRadius: "8px",
//                 border: "1px solid rgba(255,255,255,0.5)",
//                 background: "rgba(255,255,255,0.1)",
//                 color: "white",
//                 textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
//               }}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{
//                 marginBottom: "10px",
//                 padding: "10px",
//                 width: "100%",
//                 borderRadius: "8px",
//                 border: "1px solid rgba(255,255,255,0.5)",
//                 background: "rgba(255,255,255,0.1)",
//                 color: "white",
//                 textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
//               }}
//             />

//             <button
//               onClick={handleLogin}
//               style={{
//                 background: "rgba(139, 92, 246, 0.9)",
//                 color: "white",
//                 padding: "10px 0",
//                 width: "100%",
//                 borderRadius: "8px",
//                 border: "none",
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
//               }}
//             >
//               Sign In
//             </button>

//             <p style={{ marginTop: "10px", fontSize: "14px", color: "#fff" }}>
//               <span
//                 style={{ color: "#3b82f6", cursor: "pointer" }}
//                 onClick={() => setForgot(true)}
//               >
//                 Forgot Password?
//               </span>
//             </p>

//             <p style={{ marginTop: "15px", fontSize: "14px", color: "#fff" }}>
//               Don't have an account?{" "}
//               <span
//                 style={{ color: "#3b82f6", cursor: "pointer" }}
//                 onClick={() => navigate("/register")}
//               >
//                 Register here
//               </span>
//             </p>
//           </>
//         ) : (
//           <>
//             <p style={{ marginBottom: "15px", color: "#fff" }}>Reset your password</p>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={{
//                 marginBottom: "15px",
//                 padding: "10px",
//                 width: "100%",
//                 borderRadius: "8px",
//                 border: "1px solid rgba(255,255,255,0.5)",
//                 background: "rgba(255,255,255,0.1)",
//                 color: "white",
//                 textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
//               }}
//             />
//             <input
//               type="password"
//               placeholder="New Password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               style={{
//                 marginBottom: "15px",
//                 padding: "10px",
//                 width: "100%",
//                 borderRadius: "8px",
//                 border: "1px solid rgba(255,255,255,0.5)",
//                 background: "rgba(255,255,255,0.1)",
//                 color: "white",
//                 textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
//               }}
//             />
//             <button
//               onClick={handleResetPassword}
//               style={{
//                 background: "rgba(139, 92, 246, 0.9)",
//                 color: "white",
//                 padding: "10px 0",
//                 width: "100%",
//                 borderRadius: "8px",
//                 border: "none",
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
//               }}
//             >
//               Reset Password
//             </button>
//             <p style={{ marginTop: "10px", fontSize: "14px", color: "#fff" }}>
//               <span
//                 style={{ color: "#3b82f6", cursor: "pointer" }}
//                 onClick={() => setForgot(false)}
//               >
//                 Back to Login
//               </span>
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ users, setCurrentUser, setUsers }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [forgot, setForgot] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password && u.role === role
    );
    if (user) {
      setCurrentUser(user);
      if (role === "admin") navigate("/admin");
      else navigate("/user");
    } else {
      alert("Invalid credentials or role!");
    }
  };

  const handleResetPassword = () => {
    const userIndex = users.findIndex((u) => u.username === username && u.role === role);
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
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)", // semi-transparent card
          padding: "40px",
          borderRadius: "16px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>
          {role === "admin" ? "Admin Login" : "User Login"}
        </h2>

        {!forgot ? (
          <>
            <p style={{ marginBottom: "20px", color: "#555" }}>
              Sign in to access your account
            </p>

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
                marginBottom: "10px",
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
              }}
            />

            <button
              onClick={handleLogin}
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
              Sign In
            </button>

            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              <span
                style={{ color: "#3b82f6", cursor: "pointer" }}
                onClick={() => setForgot(true)}
              >
                Forgot Password?
              </span>
            </p>

            <p style={{ marginTop: "15px", fontSize: "14px" }}>
              Don't have an account?{" "}
              <span
                style={{ color: "#3b82f6", cursor: "pointer" }}
                onClick={() => navigate("/register")}
              >
                Register here
              </span>
            </p>
          </>
        ) : (
          <>
            <p style={{ marginBottom: "15px" }}>Reset your password</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ marginBottom: "15px", padding: "10px", width: "100%", borderRadius: "8px" }}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ marginBottom: "15px", padding: "10px", width: "100%", borderRadius: "8px" }}
            />
            <button
              onClick={handleResetPassword}
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
              Reset Password
            </button>
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

export default LoginPage;
