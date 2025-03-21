import React from 'react'
import "../styles/home.css";
const footer = () => {
  return (
    <div>
      <footer className="footer">
      {/* Quick Links Section */}
      <div className="footer-nav footer-section">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
          <li><a href="#"><i className="fas fa-utensils"></i> Recipes</a></li>
          <li><a href="#"><i className="fas fa-blog"></i> Blog</a></li>
          <li><a href="#"><i className="fas fa-info-circle"></i> About Us</a></li>
          <li><a href="#"><i className="fas fa-envelope"></i> Contact</a></li>
        </ul>
      </div>

      {/* About Section */}
      <div className="footer-info footer-section">
        <h2>About Us</h2>
        <p className="quote">Delicious recipes and culinary tips for food lovers.</p>
        <p className="contact-info"><i className="fas fa-map-marker-alt"></i> Mumbai, India</p>
        <p className="contact-info"><i className="fas fa-envelope"></i> support@cookingdelight.com</p>
        <p className="contact-info"><i className="fas fa-phone"></i> +91 XXXXX XXXXX</p>
      </div>

      {/* Contact Form Section */}
      <div className="footer-form footer-section">
        <h2>Get In Touch</h2>
        <form id="contactForm">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-with-icon">
              <i className="fas fa-user"></i>
              <input type="text" id="name" name="name" placeholder="Your full name" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <i className="fas fa-envelope"></i>
              <input type="email" id="email" name="email" placeholder="Your email address" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject">
              <option value="">-- Select a topic --</option>
              <option value="general">General Inquiry</option>
              <option value="recipe">Recipe Suggestion</option>
              <option value="feedback">Website Feedback</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Tell us what you're thinking..." required></textarea>
          </div>

          <div className="form-check">
            <input type="checkbox" id="newsletter" name="newsletter" />
            <label htmlFor="newsletter">Subscribe to our recipe newsletter</label>
          </div>

          <div className="form-submit">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-pinterest"></i></a>
        <div className="copyright">
          &copy; 2025 Recipe. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  )
}

export default footer
