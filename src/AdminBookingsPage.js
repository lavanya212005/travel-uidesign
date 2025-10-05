import React, { useEffect, useState } from "react";

function AdminBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        User Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                {booking.eventName}
              </h2>
              <p className="text-gray-700 mb-1">
                <strong>User:</strong> {booking.username}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Tickets:</strong> {booking.ticketCount}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Total Price:</strong> ₹{booking.totalPrice}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Payment:</strong> {booking.paymentStatus}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Date:</strong> {booking.date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminBookingsPage;
