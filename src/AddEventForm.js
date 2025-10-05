import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEventForm.css";

function AddEventForm({ events, setEvents, currentUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    trip: "",
    location: "",
    date: "",
    time: "",
    status: "Pending",
    description: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    const updatedEvents = [...events, formData];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    // Navigate based on user role
    if (currentUser?.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="form-container">
      <div className="form-left">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?fm=jpg&q=60&w=1200"
          alt="Travel"
          className="form-image"
        />
      </div>
      <div className="form-right">
        <h2>Add New Event</h2>
        <input
          type="text"
          name="trip"
          placeholder="Trip Name"
          value={formData.trip}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={formData.status}
          readOnly
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
        />
        <button className="add-btn" onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
    </div>
  );
}

export default AddEventForm;
