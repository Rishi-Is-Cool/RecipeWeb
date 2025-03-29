import React, { useState } from 'react';
import axios from 'axios';// API call
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';

const login = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/SignUp", formData);
      setMessage(response.data.message);
      alert("Sign Up Successful! Redirecting to Sign In page...");

      setTimeout(() => {
        navigate('/SignIn');
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form id="signupForm" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="signup-group">
            <label htmlFor="first_name">First Name</label>
            <div className="input-with-icon">
              <i className="fas fa-user"></i>
              <input type="text" id="first_name" name="first_name" placeholder="Enter first name" value={formData.first_name} onChange={handleChange} required />
            </div>
          </div>

          {/* Last Name */}
          <div className="signup-group">
            <label htmlFor="last_name">Last Name</label>
            <div className="input-with-icon">
              <i className="fas fa-user"></i>
              <input type="text" id="last_name" name="last_name" placeholder="Enter last name" value={formData.last_name} onChange={handleChange} required />
            </div>
          </div>

          {/* Email Address */}
          <div className="signup-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <i className="fas fa-envelope"></i>
              <input type="email" id="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} required />
            </div>
          </div>

          {/* Phone Number */}
          <div className="signup-group">
            <label htmlFor="phone_no">Phone Number</label>
            <div className="input-with-icon">
              <i className="fas fa-phone"></i>
              <input type="tel" id="phone_no" name="phone_no" placeholder="Enter phone number" value={formData.phone_no} onChange={handleChange} required />
            </div>
          </div>

          {/* Password */}
          <div className="signup-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <i className="fas fa-lock"></i>
              <input type="password" id="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
            </div>
          </div>

          {/* Sign Up and Sign In Buttons */}
          <div className="signup-submit">
            <button type="submit">Sign Up</button>
            <p>Already have an account? <a href="/SignIn">Sign In</a></p>
          </div>
        </form>

        {/* Display error/success message */}
        {message && <p style={{ color: message.includes("failed") ? "red" : "green" }}>{message}</p>}
      </div>
    </div>
  );
};

export default login;


