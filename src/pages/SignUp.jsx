import React from 'react'
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form id="signupForm">
          {/* First Name */}
          <div className="signup-group">
            <label htmlFor="firstName">First Name</label>
            <div className="input-with-icon">
              <i className="fas fa-user"></i>
              <input type="text" id="firstName" name="firstName" placeholder="Enter first name" required />
            </div>
          </div>

          {/* Last Name */}
          <div className="signup-group">
            <label htmlFor="lastName">Last Name</label>
            <div className="input-with-icon">
              <i className="fas fa-user"></i>
              <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required />
            </div>
          </div>

          {/* Email Address */}
          <div className="signup-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <i className="fas fa-envelope"></i>
              <input type="email" id="email" name="email" placeholder="Enter email address" required />
            </div>
          </div>

          {/* Password */}
          <div className="signup-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <i className="fas fa-lock"></i>
              <input type="password" id="password" name="password" placeholder="Enter password" required />
            </div>
          </div>

          {/* Phone Number */}
          <div className="signup-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-with-icon">
              <i className="fas fa-phone"></i>
              <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required />
            </div>
          </div>

          {/* Sign Up and Sign In Buttons */}
          <div className="signup-submit">
            <button type="submit">Sign Up</button>
            <p>Already have an account? <a href="/login">Sign In</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
