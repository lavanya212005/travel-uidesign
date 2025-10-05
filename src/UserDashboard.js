import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, User as UserIcon, Calendar, MapPin, Search } from "lucide-react";
import "./UserDashboard.css";

function UserDashboard({ currentUser, events, setEvents }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const filteredEvents = events.filter((event) => {
    const trip = event?.trip ?? "";
    const location = event?.location ?? "";
    const searchText = search.toLowerCase();
    return trip.toLowerCase().includes(searchText) || location.toLowerCase().includes(searchText);
  });

  const handleDelete = (index) => {
    const newEvents = events.filter((_, idx) => idx !== index);
    setEvents(newEvents);
  };

  const handleAddToCart = (event) => {
    // Save event details in localStorage or state for cart page
    localStorage.setItem("cartEvent", JSON.stringify(event));
    navigate("/cart"); // Navigate to Cart page
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h2 className="welcome-text">Welcome, {currentUser?.name || "User"}!</h2>
        <div className="header-icons">
          <Bell className="icon" />
          <UserIcon className="icon" />
        </div>
      </header>

      {/* Hero Image */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?fm=jpg&q=60&w=3000"
          alt="Travel"
          className="hero-image"
        />
      </div>

      {/* Events Section */}
      <section className="events-section">
        <div className="events-header">
          <h3>Recently Added Events</h3>
          <div className="search-add-container">
            <div className="search-bar">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search by trip name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              className="add-event-btn"
              onClick={() => navigate("/addevent")}
            >
              Add Event
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, idx) => (
              <div key={idx} className="event-card">
                <h4>{event.trip || "Unnamed Trip"}</h4>
                <p>
                  <MapPin size={16} /> {event.location || "Unknown location"}
                </p>
                <p>
                  <Calendar size={16} /> {event.date || "No date"}
                </p>

                {/* Card Buttons */}
                <div className="card-buttons">
                  <button
                    className="card-btn add"
                    onClick={() => handleAddToCart(event)}
                  >
                    Add
                  </button>
                  <button
                    className="card-btn delete"
                    onClick={() => handleDelete(idx)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-events">No events found</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        © {new Date().getFullYear()} My Travel Planner. All rights reserved.
      </footer>
    </div>
  );
}

export default UserDashboard;