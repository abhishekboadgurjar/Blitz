import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact">
      <div className="left-contact">
        <h1>Register Now</h1>
        <p>Take the first step toward a better future.</p>
      </div>
      <div className="right-contact">
        <div className="registration-card">
          {!isSubmitted ? (
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input className="input-field" type="text" placeholder="Enter your name" id="name" />

              <label htmlFor="email">Email Address</label>
              <input className="input-field" type="email" placeholder="Enter your email" id="email" />

              <label htmlFor="phone">Phone Number</label>
              <input className="input-field" type="tel" placeholder="Enter your phone number" id="phone" />

              <button className="register-btn" type="submit">Register Now</button>
              <p className="terms">
                By registering, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms & Conditions</a>.
              </p>
            </form>
          ) : (
            <div className="submission-message">
              <h2>Thank you for registering!</h2>
              <p>Your registration has been successfully submitted.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
