import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./App.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("⏳ Sending...");

  try {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    await axios.post(`${API_URL}/send-message`, formData);

    setStatus("✅ Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error(error);
    setStatus("❌ Failed to send message! Please try again.");
  }
};

  return (
    <section className="Contact" id="contact">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ready to transform your business with cutting-edge technology?
        Let’s discuss your project and bring your vision to life.
      </motion.p>

      <div className="contact-container">
        <motion.div
          className="left-column"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form className="contact-form-container" onSubmit={handleSubmit}>
            <motion.div
              className="form-field"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div
              className="form-field"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </motion.div>

            <motion.label htmlFor="message">Message:</motion.label>
            <motion.textarea
              name="message"
              rows="4"
              placeholder="Tell about your Project goals"
              required
              value={formData.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: "#6c63ff" }}
              transition={{ duration: 0.3 }}
            ></motion.textarea>

            <motion.button
              className="send-button"
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: "#6c63ff" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <i className="bi bi-send"></i> Send Message
            </motion.button>

            {status && (
              <p style={{ marginTop: "10px", color: "#d8d6ffff" }}>{status}</p>
            )}
          </form>
        </motion.div>

        {/* Right Section — Contact Info (unchanged) */}
        <motion.div
          className="right-column"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="contact-details-container">
            <motion.div className="contact-info-item" whileHover={{ scale: 1.05 }}>
              <div className="contact-info-icon-wrapper email-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="contact-info-text">
                <p>Email</p>
                <span>
                  <a href="mailto:avins2005@gmail.com">avins2005@gmail.com</a>
                </span>
              </div>
            </motion.div>

            <motion.div className="contact-info-item" whileHover={{ scale: 1.05 }}>
              <div className="contact-info-icon-wrapper call-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="contact-info-text">
                <p>Phone</p>
                <span>
                  <a href="tel:+919488715046">9488715046</a>
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="connect-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="connect-info-item">
              <i className="bi bi-globe"></i> <span>Connect With Me</span>
            </h3>
            <div className="connect-buttons">
              <motion.a href="https://www.linkedin.com/in/avinsvr" whileHover={{ scale: 1.1 }}>
                <button className="linkedin">🤝 Linkedin</button>
              </motion.a>
              <motion.a href="tel:+919488715046" whileHover={{ scale: 1.1 }}>
                <button className="phone">📞 Phone</button>
              </motion.a>
              <motion.a href="https://github.com/Avins-VR" whileHover={{ scale: 1.1 }}>
                <button className="github">📂 Github</button>
              </motion.a>
              <motion.a href="https://www.google.com/maps/place/St+Joseph's+Institute+Of+Technology+Boys+Hostel" whileHover={{ scale: 1.1 }}>
                <button className="location">📌 Location</button>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="availability-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4><i className="bi bi-circle-fill"></i> Available for Projects</h4>
            <p>
              Currently accepting new clients and exciting collaborations.
              Let's build something incredible together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
