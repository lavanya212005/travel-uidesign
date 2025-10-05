import React from "react";
import { useLocation } from "react-router-dom";

function PaymentPage() {
  const location = useLocation();
  const { transportMode, aadhar, mobile, passport, amount } = location.state || {};

  const handlePayment = () => {
    alert("✅ Payment Successful!");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Confirm Your Details</h2>

      <p><strong>Transport Mode:</strong> {transportMode || "Not Selected"}</p>
      <p><strong>Aadhar Number:</strong> {aadhar}</p>
      <p><strong>Mobile Number:</strong> {mobile}</p>
      {transportMode === "flight" && (
        <p><strong>Passport:</strong> {passport ? "Uploaded ✅" : "Not Uploaded ❌"}</p>
      )}
      <p><strong>Amount:</strong> ₹{amount}</p>

      <button
        style={{
          padding: "12px 35px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          marginTop: "20px",
        }}
        onClick={handlePayment}
      >
        Confirm & Pay
      </button>
    </div>
  );
}

export default PaymentPage;
