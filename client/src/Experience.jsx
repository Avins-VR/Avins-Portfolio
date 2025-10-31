import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InternImage from './assets/Intern.png';
import SkyAstrall from './assets/SkyAstrall Intern.png';

function Experience() {
  const [experiences] = useState([
    {
      Role: "UI/UX Intern → Srishti Innovative",
      duration: "1-week Internship",
      description:
        "Gained hands-on experience in user interface and user experience design by working on real-world layouts and interactive prototypes. I worked primarily with Figma, focusing on creating clean, user-friendly interfaces with strong attention to usability, visual hierarchy, and design consistency. This experience helped me understand practical design workflows and sharpened my skills in wireframing and user-centered design.",
      image: InternImage,
      Month: "December 2024",
    },
    {
      Role: "Frontend Developer Intern → SkyAstrall",
      duration: "1-Month Internship",
      description:
        "Frontend Developer internship utilizing React, Tailwind CSS, and JavaScript. Actively contributed to multiple real-time client projects, developing responsive and dynamic user interfaces. Gained strong practical web development experience while working in a collaborative team environment. Enhanced teamwork, communication, and problem-solving skills. Applied modern frontend development practices to deliver high-quality project outcomes.",
      image: SkyAstrall,
      Month: "July 2025 - Aug 2025",
    }
  ]);

  return (
    <section className="experience-wrapper" id="experience">
      {/* Heading */}
      <motion.h2
        className="experience-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Experience
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="experience-subtext"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        The roles and projects that shaped my journey, showcasing hands-on learning and real-world impact.
      </motion.p>

      {/* Experience Cards */}
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="experience-container"
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Image */}
          <motion.div
            className="experience-image"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={experience.image} alt={experience.Role} />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="experience-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>{experience.Role}</h4>
            <i>{experience.duration}</i>
            <p>{experience.description}</p>
            <motion.span
              className="month-pill"
              whileHover={{ scale: 1.1, backgroundColor: "#6c63ff", color: "#fff" }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {experience.Month}
            </motion.span>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}

export default Experience;
