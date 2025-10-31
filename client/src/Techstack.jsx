import React, { useState } from "react";
import { motion } from "framer-motion";

import Python from "./assets/Python.png";
import JS from "./assets/JS.png";
import HTML from "./assets/HTML.png";
import CSS from "./assets/CSS.png";
import ReactLogo from "./assets/React.png";
import nodejs from "./assets/Nodejs.png";
import Express from "./assets/express-js.png";
import sql from "./assets/sql.png";
import mongodb from "./assets/Mongodb.png";
import ml from "./assets/ml.jpeg";
import cv from "./assets/cv.png";
import Git from "./assets/git.png";
import GitHub from "./assets/github.png";
import Figma from "./assets/Figma.png";
import ThunderClient from "./assets/thunder client.png";
function Techstack() {
  const [frontend] = useState([
    { name: "HTML", image: HTML, alt: "HTML" },
    { name: "CSS", image: CSS, alt: "CSS" },
    { name: "JavaScript", image: JS, alt: "JavaScript" },
    { name: "React", image: ReactLogo, alt: "React" },
  ]);
  const [backend] = useState([
    { name: "Python", image: Python, alt: "Python" },
    { name: "Node.js", image: nodejs, alt: "Node.js" },
    { name: "Express", image: Express, alt: "Express" },
  ]);
  const [database] = useState([
    { name: "MongoDB", image: mongodb, alt: "MongoDB" },
    { name: "SQL", image: sql, alt: "SQL" },
  ]);
  const [ai] = useState([
    { name: "Machine Learning", image: ml, alt: "Machine Learning" },
    { name: "Computer Vision", image: cv, alt: "Computer Vision" },
  ]);
  const [tools] = useState([
    { name: "Git", image: Git, alt: "Git" },
    { name: "GitHub", image: GitHub, alt: "GitHub" },
    { name: "Figma", image: Figma, alt: "Figma" },
    {name:"Thunder Client", image:ThunderClient, alt:"Thunder Client" }
  ]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="techstack-container" id="techstack">
      {/* Title & Description */}
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h1>

      <motion.p
        className="description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Proficient in full-stack development and AI, with hands-on experience in
        modern technologies and advanced tools.
      </motion.p>

      {/* Tech Sections */}
      <div className="tech-sections">
        {/* Left */}
        <motion.div
          className="tech-group-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Frontend */}
          <motion.div
            className="tech-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>Frontend Development</h2>
            <div className="tech-grid">
              {frontend.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-card"
                  variants={cardVariants}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <img src={tech.image} alt={tech.alt} />
                  <p>{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Database */}
          <motion.div
            className="tech-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>Database</h2>
            <div className="tech-grid">
              {database.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-card"
                  variants={cardVariants}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <img src={tech.image} alt={tech.alt} />
                  <p>{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="tech-group-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Backend */}
          <motion.div
            className="tech-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>Backend Development</h2>
            <div className="tech-grid">
              {backend.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-card"
                  variants={cardVariants}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <img src={tech.image} alt={tech.alt} />
                  <p>{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI */}
          <motion.div
            className="tech-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>Artificial Intelligence</h2>
            <div className="tech-grid">
              {ai.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-card"
                  variants={cardVariants}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <img src={tech.image} alt={tech.alt} />
                  <p>{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tools */}
      <motion.div
        className="tech-category"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2>Tools</h2>
        <div className="tech-grid">
          {tools.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card"
              variants={cardVariants}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.08 }}
            >
              <img src={tech.image} alt={tech.alt} />
              <p>{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Techstack;
