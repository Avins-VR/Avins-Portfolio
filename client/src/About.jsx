import React from "react";
import { motion } from "framer-motion";
import coder from "./assets/coder.webp";
import "./index.css";

function About() {
  return (
    <div className="about-container" id="about">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Crafting digital experiences with passion, precision, and cutting-edge technology
      </motion.p>

      <div className="about-content">
        {/* Left Section */}
        <motion.div
          className="about-left-section"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="about-image">
            <motion.img
              src={coder}
              alt="Coder Illustration"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="available-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Available for Work
            </motion.div>
          </div>

          <motion.div
            className="my-story"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2>MY STORY</h2>
            <p>
              Passionate AI & Data Science student with expertise in Machine Learning, Computer Vision,
              Full Stack Development, and user-centered UI/UX design. I build intelligent and scalable 
              applications that solve real-world problems and enhance digital experiences.
            </p>
            <p>
              With a strong foundation in Python, SQL, and modern development frameworks, I specialize in 
              combining AI integration with full-stack solutions to create impactful, innovative, and user-focused applications.
              I am continuously exploring emerging technologies to stay ahead in the fast-evolving tech landscape, strengthening 
              my ability to deliver future-ready solutions. My goal is to leverage AI and development expertise to drive innovation,
              solve meaningful challenges, and make technology more accessible.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="what-i-do-section"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>WHAT I DO</h2>
          <p>Specialized skills and technologies I work with</p>

          <motion.div
            className="skills-grid"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "bi bi-code-square",
                title: "FRONTEND DEVELOPMENT",
                desc: "Building responsive and interactive user interfaces",
                tech: ["React", "JavaScript", "Tailwind CSS"],
              },
              {
                icon: "bi bi-hdd-rack",
                title: "BACKEND DEVELOPMENT",
                desc: "Designing scalable and efficient server-side applications",
                tech: ["Node.js", "Express.js", "FastAPI", "MongoDB"],
              },
              {
                icon: "bi bi-palette",
                title: "UI/UX DESIGN",
                desc: "Designing intuitive and beautiful user experiences",
                tech: ["Figma", "Prototyping"],
              },
              {
                icon: "bi bi-cpu",
                title: "ML & CV",
                desc: "Building solutions with ML algorithms and computer vision techniques",
                tech: ["Scikit-learn", "TensorFlow", "OpenCV"],
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="skill-card"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-header">
                  <i className={skill.icon}></i>
                  <h3>{skill.title}</h3>
                </div>
                <p>{skill.desc}</p>
                <div className="tech-stack">
                  {skill.tech.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
