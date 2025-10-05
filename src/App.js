import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import UserLoginPage from "./UserLoginPage";
import AdminLoginPage from "./AdminLoginPage";
import RegisterPage from "./RegisterPage";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import AddEventForm from "./AddEventForm";
import CartPage from "./CartPage";
import DocumentPage from "./DocumentPage";
import PaymentPage from "./PaymentPage";

function App() {
  const [users, setUsers] = useState([
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user1", password: "user123", role: "user" },
  ]);

  const [currentUser, setCurrentUser] = useState(null);

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved
      ? JSON.parse(saved)
      : [
          { trip: "Beach Escape", location: "Goa", date: "2025-10-15", price: 200 },
          { trip: "Mountain Adventure", location: "Himalayas", date: "2025-11-02", price: 500 },
          { trip: "City Lights Tour", location: "Mumbai", date: "2025-12-05", price: 150 },
        ];
  });

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Separate login routes */}
      <Route
        path="/userlogin"
        element={
          <UserLoginPage
            users={users}
            setUsers={setUsers}
            setCurrentUser={setCurrentUser}
          />
        }
      />

      <Route
        path="/adminlogin"
        element={
          <AdminLoginPage
            users={users}
            setUsers={setUsers}
            setCurrentUser={setCurrentUser}
          />
        }
      />

      <Route
        path="/register"
        element={<RegisterPage users={users} setUsers={setUsers} />}
      />

      <Route
        path="/user"
        element={
          currentUser?.role === "user" ? (
            <UserDashboard
              currentUser={currentUser}
              events={events}
              setEvents={setEvents}
            />
          ) : (
            <UserLoginPage
              users={users}
              setUsers={setUsers}
              setCurrentUser={setCurrentUser}
            />
          )
        }
      />

      <Route
        path="/admin"
        element={
          currentUser?.role === "admin" ? (
            <AdminDashboard
              currentUser={currentUser}
              events={events}
              setEvents={setEvents}
            />
          ) : (
            <AdminLoginPage
              users={users}
              setUsers={setUsers}
              setCurrentUser={setCurrentUser}
            />
          )
        }
      />

      <Route
        path="/addevent"
        element={<AddEventForm events={events} setEvents={setEvents} />}
      />

      <Route
        path="/cart"
        element={<CartPage events={events} setEvents={setEvents} />}
      />

      <Route path="/document" element={<DocumentPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;
