import React, { useState } from 'react';
import { motion } from "framer-motion";

import Focusflowtask from './assets/Focusflowtask.png';
import SimpleCalculator from './assets/SimpleCalculator.jpg';
import Booksky from './assets/Booksky.jpg';
import BlackjackGame from './assets/BlackjackGame.jpg';
import MiniMart from './assets/MiniMart.jpg';
import InstagramClone from './assets/InstagramClone.jpg';
import SafeRoute from './assets/SafeRoute.png';
import AmbulancePredictor from './assets/Ambulance demend.jpeg';
import MediConnect from './assets/Medi Connect.png';
import parking from './assets/parking dedection.jpg';
import Emotion from './assets/emotion dedection.jpeg';
import SpamShield from './assets/spam.jpg';
import AI_Potato from './assets/Potato leaf diesese.jpg';
import Smart_Agri_AI from './assets/Smart Agri AI.png';
import Nutrient_Deficiency from './assets/Nutrient Deficiency.avif';

function Project() {
  const [projects] = useState([
     {
      title: "Smart Agri AI",
      date: "2026",
      description: "Developed Smart Agri AI, an AI-powered agriculture system for remote farm monitoring using drone imagery and virtual sensor data. Built multimodal deep learning models to analyze crop health, detect nutrient deficiencies, identify growth stages, and predict irrigation and weather impact, delivering intelligent advisory and crop health insights for data-driven precision farming.",
      image: Smart_Agri_AI,
      tech: ['Multimodal AI','Python'],
      demo: "https://github.com/Avins-VR/Smart-Agri-AI",
      github: "https://github.com/Avins-VR/Smart-Agri-AI"
    },
    {
      title: "Multimodal Crop Diagnosis with NLP Chatbot ",
      date: "2026",
      description: "Built a multimodal AI system for crop nutrient diagnosis using leaf imagery, soil (pH, moisture, NPK), and weather data. Detects deficiency stages, provides recommendations with confidence, and integrates an NLP chatbot with self-learning feedback to improve accuracy and support precision agriculture for optimized fertilizer use and improved crop productivity.",
      image: Nutrient_Deficiency,
      tech: ['Multimodal AI', 'NLP'],
      demo: "https://github.com/Avins-VR/Multimodal-Crop-Diagnosis-with-NLP-Chatbot",
      github: "https://github.com/Avins-VR/Multimodal-Crop-Diagnosis-with-NLP-Chatbot"
    },
        {
      title:"AI-powered ambulance demand prediction",
      date:"2025",
      description: "AI-powered ambulance demand prediction is a Machine Learning project that forecasts ambulance demand using real-time data, enabling smarter resource allocation, faster emergency response, and improved public safety.",
      image: AmbulancePredictor,
      tech: ['Python', 'numpy','pandas'],
      demo: "https://github.com/Avins-VR/Ambulance-Demand-Predection/blob/main/Ambulance_demand/Ambulance%20Demand%20Predection.ipynb",
      github: "https://github.com/Avins-VR/Ambulance-Demand-Predection"
    },
    {
      title:"AI-powered Car Parking Spot Dedection ",
      date:"2025",
      description: "AI-powered Car Parking Spot Dedection  is a Computer Vision project using OpenCV to monitor parking spaces in real time, marking occupied and available spots to optimize parking efficiency, reduce traffic congestion, and improve urban mobility.",
      image:parking,
      tech: ['Python', 'OpenCV','NumPy'],
      demo: "https://github.com/Avins-VR/Car-Parking-spot-Dedection-Open-CV-",
      github: "https://github.com/Avins-VR/Car-Parking-spot-Dedection-Open-CV-"
    } ,
    {
      title: "AI-Based Potato Leaf Disease Classification",
      date: "2026",
      description: "Potato Leaf Disease Classification is an AI-powered system that identifies Early Blight, Late Blight, and Healthy potato leaves using a CNN-based deep learning model for early and accurate disease detection.",
      image: AI_Potato,
      tech: ['TensorFlow', 'Matplotlib','CNN'],
      demo: "https://github.com/Avins-VR/Potato-Disease-Classification/blob/main/Potato%20Disease%20Classification.ipynb",
      github: "https://github.com/Avins-VR/Potato-Disease-Classification"
    },
    {
      title: "SafeRoute",
      date: "2025",
      description: "SafeRoute is a personal safety app focused on smart travel, featuring area safety checks, live location sharing, and SOS alerts for safer journeys. It helps users assess surroundings using lighting, crowd density, and nearby emergency data.",
      image: SafeRoute,
      tech: ['Tailwind CSS', 'MERN Stack', 'API Integration'],
      demo: "https://saferoute-blze.onrender.com/",
      github: "https://github.com/Avins-VR/SafeRoute"
    },
    {
      title:"Medi Connect",
      date:"2025",
      description: "MediConnect is a healthcare app that streamlines patient–doctor interaction with easy appointments, medication tracking, and health record management. Doctors manage schedules, patient details, and weekly consultations effectively. Its clean interface ensures quick, organized medical access.",
      image:MediConnect,
      tech: ['Tailwind CSS', 'MERN Stack'],
      demo: "https://mediconnect-platform.netlify.app/",
      github: "https://github.com/Avins-VR/Medi-Connect"
    },
    {
      title:"Emotion Detector",
      date:"2025",
      description: "Emotion Detector is a Computer Vision and Machine Learning project that recognizes human emotions in real time using facial expression analysis, enabling applications in mental health, HCI, and customer experience.",
      image:Emotion,
      tech: ['Python', 'OpenCV','TensorFlow','FER'],
      demo: "https://github.com/Avins-VR/Emotion-Predection-Open-CV/blob/main/Emotion%20predection/emotion-detection%20.ipynb",
      github: "https://github.com/Avins-VR/Emotion-Predection-Open-CV"
    },
    {
      title:"SpamShield",
      date:"2025",
      description: "SpamShield is a Machine Learning based email classification system that filters unwanted messages by analyzing keywords and context, ensuring a safer, smarter, and cleaner inbox experience.",
      image:SpamShield,
      tech: ['Python', 'numpy','pandas'],
      demo: "https://github.com/Avins-VR/SpamShield-Spam-Email-Dedection-/blob/main/Naive%20bayes%20Email%20spam/Email%20Spam.ipynb",
      github: "https://github.com/Avins-VR/SpamShield-Spam-Email-Dedection-"
    },
    {
      title: "Focusflow Tasks",
      date: "2025",
      description: "Focusflow Tasks is a premium task manager that efficiently tracks daily progress, effortlessly organizes tasks by difficulty and category, and helps users stay focused with important due dates and priorities.",
      image: Focusflowtask,
      tech: ['HTML', 'CSS','JS','React'],
      demo: "https://todo-list-udtd.vercel.app/",
      github: "https://github.com/Avins-VR/Todo-List"
    },
    {
      title: "Instagram Clone",
      date: "2025",
      description: "Instagram Clone is an interactive project replicating key features and aesthetics of Instagram, with a clean UI, responsive layouts, and smooth user interactions for a social media-like experience.",
      image: InstagramClone,
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      demo: "https://insta-clone-three-cyan.vercel.app/",
      github: "https://github.com/Avins-VR/Insta-Clone"
    },
    {
      title: "Simple Calculator",
      date: "2024",
      description: "Simple Calculator is a clean project for basic arithmetic operations, featuring a minimal design and intuitive interface for quick, user-friendly calculations.",
      image: SimpleCalculator,
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: "https://avins-vr.github.io/Simple-Calculator/Calculator/calculator.html",
      github: "https://github.com/Avins-VR/Simple-Calculator/blob/main/Calculator/calculator.html"
    },
    {
      title: "Booksky",
      date: "2024",
      description: "Booksky is a modern digital platform to explore and organize books across genres, featuring a clean interface, seamless navigation, and an engaging reading experience.",
      image: Booksky,
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: "https://avins-vr.github.io/Booksky/Booksky/book.html",
      github: "https://github.com/Avins-VR/Booksky/tree/main/Booksky"
    },
    {
      title: "Blackjack Game",
      date: "2024",
      description: "Blackjack Game is an interactive project that recreates the classic casino card game with dynamic animations, real-time score tracking, and responsive gameplay for an engaging user experience.",
      image: BlackjackGame,
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: "https://avins-vr.github.io/Blackjack-game/Blackjack/Blackjack.html",
      github: "https://github.com/Avins-VR/Blackjack-game/tree/main/Blackjack"
    },
    {
      title: "Mini Mart",
      date: "2024",
      description: "Mini Mart is a modern online storefront with interactive product displays, smooth navigation, and features like light/dark mode and product modals, delivering an immersive grocery shopping experience.",
      image: MiniMart,
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: "https://avins-vr.github.io/Mini-Mart/Mini%20Mart/Minimart.html",
      github: "https://github.com/Avins-VR/Mini-Mart/tree/main/Mini%20Mart"
    }
  ]);
   const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 },
  };


  return (
    <section className="project-section" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Showcasing innovative solutions built with modern technologies and best
        practices
      </motion.p>

      {/* Project Grid */}
      <motion.div
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="project-card-body">
              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              />

              <h4>{project.title}</h4>

              <div className="project-date">
                <i className="bi bi-calendar2-check"></i>
                <span>{project.date}</span>
              </div>

              <p>{project.description}</p>

              {/* Tech Stack Tags */}
              <motion.div
                className="project-tech-stack"
                variants={containerVariants}
              >
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="tech-tag"
                    variants={tagVariants}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Buttons */}
              <div className="project-buttons">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="bi bi-github"></i> Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="bi bi-box-arrow-up-right"></i> Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Project;