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
  Passionate AI & Data Science student aspiring to become a Machine Learning Engineer, 
  with strong expertise in Machine Learning, Deep Learning, and Computer Vision. 
  I focus on developing intelligent systems and AI-driven solutions that solve 
  real-world problems using data-driven approaches and advanced models.
</p>

<p>
  With a solid foundation in Python, SQL, and modern AI frameworks, I specialize in 
  building and training machine learning and deep learning models for applications 
  such as prediction systems, computer vision solutions, and intelligent automation. 
  I also have working knowledge of full-stack development, which helps me integrate 
  AI models into scalable applications and deploy practical real-world solutions. 
  I continuously explore emerging technologies in AI to strengthen my expertise and 
  build innovative, impactful systems that address meaningful challenges.
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
  icon: "bi bi-cpu",
  title: "AI & MACHINE LEARNING",
  desc: "Developing intelligent systems using Machine Learning and data-driven models to solve real-world problems",
  tech: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
},
{
  icon: "bi bi-activity",
  title: "DEEP LEARNING",
  desc: "Designing and training deep neural networks for advanced AI applications",
  tech: ["TensorFlow", "Keras", "CNN", "Neural Networks"],
},
{
  icon: "bi bi-diagram-3",
  title: "MULTIMODAL AI",
  desc: "Developing multimodal AI systems by fusing visual and structured data to deliver accurate predictions and intelligent decision-making",
  tech: ["CNN", "Multimodal Fusion", "Data Fusion", "NLP"]
},
{
  icon: "bi bi-code-slash",
  title: "FULL-STACK DEVELOPMENT",
  desc: "Developing scalable web applications and integrating AI models into real-world systems",
  tech: ["React", "Node.js", "Express.js", "MongoDB"],
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
