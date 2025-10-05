import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DocumentPage.css";  // import the styles

function DocumentPage() {
  const navigate = useNavigate();
  const [transportMode, setTransportMode] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [mobile, setMobile] = useState("");
  const [passport, setPassport] = useState(null);

  const handleContinue = () => {
    let amount = 0;
    if (transportMode === "flight") amount = 50000;
    else if (transportMode === "bus") amount = 4000;
    else if (transportMode === "train") amount = 6000;

    navigate("/payment", {
      state: { transportMode, aadhar, mobile, passport, amount },
    });
  };

  return (
    <div className="document-container">
      <h2>Enter Travel Details</h2>

      <div className="form-group">
        <label>Transport Mode</label>
        <select
          value={transportMode}
          onChange={(e) => setTransportMode(e.target.value)}
        >
          <option value="">Select</option>
          <option value="flight">Flight</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
        </select>
      </div>

      <div className="form-group">
        <label>Aadhar Number</label>
        <input
          type="text"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Mobile Number</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>

      {transportMode === "flight" && (
        <div className="form-group">
          <label>Upload Passport Copy</label>
          <input
            type="file"
            className="upload-field"
            onChange={(e) => setPassport(e.target.files[0])}
          />
        </div>
      )}

      <button className="continue-btn" onClick={handleContinue}>
        Continue to Payment
      </button>
    </div>
  );
}

export default DocumentPage;
