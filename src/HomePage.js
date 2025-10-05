import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Users } from "lucide-react"; // icons

function HomePage() {
  const navigate = useNavigate();

  const cardStyle = {
    background: "white",
    color: "black",
    padding: "25px",
    borderRadius: "16px",
    margin: "20px 0",
    width: "500px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        color: "white",
        backgroundImage:
          "url(https://www.state.gov/wp-content/uploads/2020/11/shutterstock_186964970-scaled.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Centered Header */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
          ✈️ Travel Itinerary Planner
        </h1>
        <p style={{ marginBottom: "40px", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
          Plan your perfect journey
        </p>
      </div>

      {/* Left-aligned Cards */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: "100px",
        }}
      >
        {/* User Login */}
        <div
          style={cardStyle}
          onClick={() => navigate("/user")}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <User size={40} color="#4f46e5" />
          <div style={{ textAlign: "left" }}>
            <h3>User Login</h3>
            <p>Access your travel itineraries and bookings</p>
          </div>
        </div>

        {/* Admin Login */}
        <div
          style={cardStyle}
          onClick={() => navigate("/admin")}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Users size={40} color="#a855f7" />
          <div style={{ textAlign: "left" }}>
            <h3>Admin Login</h3>
            <p>Manage system and user activities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
