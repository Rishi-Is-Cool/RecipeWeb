import React, { useState } from "react";
import axios from "axios";
import "../styles/Footer.css";
const footer = () => {

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
    subscribed: false,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData, [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/subscribe", formData);
      setMessage(response.data.message);
      setFormData({ full_name: "", email: "", subject: "", message: "", subscribed: false });
    } catch (error) {
      setMessage(error.response?.data?.error || "Subscription failed");
    } finally {
      setLoading(false);
    }
  };

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
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-with-icon">
                <i className="fas fa-user"></i>
                <input type="text" id="full_name" name="full_name" placeholder="Your full name" value={formData.full_name} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <i className="fas fa-envelope"></i>
                <input type="email" id="email" name="email" placeholder="Your email address" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required >
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
              <textarea id="message" name="message" placeholder="Tell us what you're thinking..." value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <div className="form-check">
              <input type="checkbox" id="subscribed" name="subscribed" checked={formData.subscribed} onChange={handleChange} />
              <label htmlFor="newsletter">Subscribe to our recipe newsletter</label>
            </div>

            <div className="form-submit">
              <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Send Message"}</button>
            </div>
            {message && <p className="response-message">{message}</p>}
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
