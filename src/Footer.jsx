"use client"; // if using Next.js app directory
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  // Container animation for footer
  const footerContainer = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      },
    },
  };

  // Child animations for left section & icons
  const footerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Hover animation for icons
  const iconHover = {
    scale: 1.2,
    rotate: 10,
    color: "#00acee",
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <motion.footer
      className="footer bg-black text-gray-400 px-8 md:px-20 py-10"
      variants={footerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="footer-top flex flex-col md:flex-row items-start md:items-center justify-between" variants={footerItem}>
        {/* Left Section */}
        <motion.div className="footer-left mb-6 md:mb-0" variants={footerItem}>
          <h2 className="footer-logo text-2xl font-bold text-gray-200 mb-2">Avins VR</h2>
          <p className="footer-rights text-gray-400">
            © {new Date().getFullYear()} Avins VR. All rights reserved.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="footer-icons flex gap-6" variants={footerItem}>
          <motion.a 
            href="https://github.com/Avins-VR" 
            target="_blank" 
            rel="noreferrer"
            whileHover={iconHover}
          >
            <i className="bi bi-github text-2xl"></i>
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/avinsvr" 
            target="_blank" 
            rel="noreferrer"
            whileHover={iconHover}
          >
            <i className="bi bi-linkedin text-2xl"></i>
          </motion.a>
          <motion.a 
            href="http://twitter.com/" 
            target="_blank" 
            rel="noreferrer"
            whileHover={iconHover}
          >
            <i className="bi bi-twitter text-2xl"></i>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Animated Divider */}
      <motion.hr 
        className="footer-divider border-gray-700 my-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Bottom Section */}
      <motion.div className="footer-bottom text-gray-400 text-center md:text-left" variants={footerItem}>
        <p>
          Built with Frontend & Backend Technologies • Designed with passion in Chennai, India
        </p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
