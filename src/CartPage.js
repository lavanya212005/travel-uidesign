import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

function CartPage({ events, setEvents }) {
  const navigate = useNavigate();
  const [cartEvent, setCartEvent] = useState(events[0] || {});

  const handleUpdate = () => {
    if (!events) return;
    const updatedEvents = events.map((event) =>
      event.trip === cartEvent.trip ? cartEvent : event
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    alert("Event details updated!");
  };

  return (
    <div className="cart-container">
      <h2>Cart / Event Details</h2>

      <div className="cart-form">
        <label>Trip Name</label>
        <input
          type="text"
          value={cartEvent.trip || ""}
          onChange={(e) => setCartEvent({ ...cartEvent, trip: e.target.value })}
        />

        <label>Location</label>
        <input
          type="text"
          value={cartEvent.location || ""}
          onChange={(e) =>
            setCartEvent({ ...cartEvent, location: e.target.value })
          }
        />

        <label>Price</label>
        <input
          type="number"
          value={cartEvent.price || 0}
          onChange={(e) =>
            setCartEvent({ ...cartEvent, price: Number(e.target.value) })
          }
        />

        <div className="cart-buttons">
          <button className="update-btn" onClick={handleUpdate}>
            Update
          </button>
          <button
            className="continue-btn"
            onClick={() => navigate("/document")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
