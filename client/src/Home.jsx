import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Techstack from "./Techstack.jsx";
import Project from "./Project.jsx";
import Experience from "./Experience.jsx";
import Certificate from "./Certificate.jsx";
import Contact from "./Contact.jsx";
import ProfileImage from "./assets/Avins.jpg";
import Footer from "./Footer.jsx";
import Loading from "./Loading.jsx"; // ✅ Import the Loading component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {/* Show Loading until finished */}
      {isLoading ? (
        <Loading onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <div className="app-wrapper">
            <div className="background-shapes">
              <div className="shape circle-1"></div>
              <div className="shape circle-2"></div>
              <div className="shape triangle-1"></div>
              <div className="shape square-1"></div>
              <div className="shape square-2"></div>
              <div className="shape circle-3"></div>
              <div className="shape circle-4"></div>
              <div className="shape circle-5"></div>
              <div className="shape circle-6"></div>
              <div className="shape circle-7"></div>
              <div className="shape triangle-2"></div>
            </div>

            <div className="app-container">
              <motion.div
                className="text-section"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1>
                  👋 <span>Hi, I'm Avins</span>
                </h1>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Software Engineer
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Passionate Artificial Intelligence & Data Science student with
                  expertise in Machine Learning, Deep Learning, Computer
                  Vision, Full Stack Development and UI/UX design. I create intelligent, scalable
                  applications that solve real-world problems, drive innovation,
                  and deliver exceptional user experiences.
                </motion.p>
              </motion.div>

              <motion.div
                className="image-section"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <motion.img
                  src={ProfileImage}
                  alt="Avins VR"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            <motion.div
              className="buttons"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.button
                className="primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#projects">Explore My Projects ➔</a>
              </motion.button>

              <motion.button
                className="secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://drive.google.com/file/d/1ZJDVWx4D1riEirS2Uv2hcsVBTQIjWw5-/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download My Resume{" "}
                  <i className="bi bi-file-earmark-person-fill"></i>
                </a>
              </motion.button>
            </motion.div>

            <motion.div
              className="social-icons"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/avinsvr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <i className="bi bi-linkedin"></i>
              </motion.a>
              <motion.a
                href="https://github.com/Avins-VR"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <i className="bi bi-github"></i>
              </motion.a>
              <motion.a
                href="mailto:avins2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <i className="bi bi-envelope"></i>
              </motion.a>
            </motion.div>
          </div>

          <div>
            <About />
            <Techstack />
            <Project />
            <Experience />
            <Certificate />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
