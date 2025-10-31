import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#techstack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      {/* This logo is for the desktop view, as it's not present when the mobile menu is open */}
      <motion.div
        className="logo_text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        <h2>Avins VR</h2>
      </motion.div>
      <nav className="desktop-nav">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Icon (Top Right) */}
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        <i className="bi bi-list"></i>
      </div>

      {/* Mobile Menu (Top Drawer) */}
      <motion.div
        className={`mobile-menu ${menuOpen ? "active" : ""}`}
        initial={{ y: "-100%" }}
        animate={{ y: menuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {/* Header for mobile menu (Logo and Close button) */}
        <div className="mobile-menu-header">
          <div className="logo_text">
            <h2>Avins VR</h2>
          </div>
          {/* Close button inside mobile menu */}
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            <i className="bi bi-x"></i>
          </div>
        </div>

        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}

export default Navbar;