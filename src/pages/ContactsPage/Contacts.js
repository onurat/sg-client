import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with any questions or feedback:</p>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>Email: contact@example.com</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <span>Phone: +1 (123) 456-7890</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Address: 123 Main Street, City, Country</span>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
