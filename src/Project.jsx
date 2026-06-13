import React, { useState } from 'react';
import { motion } from "framer-motion";
import Focusflowtask from './assets/Focusflowtask.png';
import BlackjackGame from './assets/BlackjackGame.jpg';
import InstagramClone from './assets/InstagramClone.jpg';
import SafeRoute from './assets/SafeRoute.png';
import parking from './assets/parking dedection.jpg';
import Emotion from './assets/emotion dedection.jpeg';
import AI_Potato from './assets/Potato leaf diesese.jpg';
import Smart_Agri_AI from './assets/Smart Agri AI.png';
import RAG from './assets/RAG.jpg';
import Nutrient_Deficiency from './assets/Nutrient Deficiency.avif';

function Project() {
  const [projects] = useState([
     {
      title: "Smart Agri AI",
      date: "2026",
      description: "Engineered an AI-powered Smart Agriculture platform using real-time weather data (Open-Meteo API) and ML/DL models for soil moisture prediction, NPK estimation, pest detection, crop stage analysis, irrigation recommendations, and crop health evaluation. Developed a multi-user, multi-land management system with farm dashboards, AI-driven recommendations, and an agriculture-focused LLM chatbot. Designed an interactive dashboard for real-time monitoring, historical analytics, crop health insights, and location-based farm tracking for data-driven decisions.",
      image: Smart_Agri_AI,
      tech: ['EfficientNet-B0','API','Random Forest'],
      demo: "https://smart-agri-ai-farm.netlify.app/",
      github: "https://github.com/Avins-VR/Smart-Agri-AI"
    },
    {
      title: "Multimodal Nutri AI",
      date: "2026",
      description: "Formulated a multimodal AI system combining CNN-based leaf analysis with soil (pH, moisture, NPK) and weather data to detect nutrient deficiencies and severity. Introduced DSEE to capture spatial progression patterns, enhancing feature representation. Built a hybrid data-fusion model delivering high-confidence predictions with fertilizer recommendations, and integrated an LLM-based chatbot to enhance user interaction and decision support, improving usability and practical adoption in real-world farming scenarios.",
      image: Nutrient_Deficiency,
      tech: ['Multimodal AI', 'Mistral LLM','DSEE'],
      demo: "https://multimodal-nutriai.streamlit.app/",
      github: "https://github.com/Avins-VR/Multimodal-NutriAI"
    },
    {
      title: "RAG Learn AI",
      date: "2026",
      description: "Developed an RAG-based Intelligent PDF Learning Assistant enabling students to upload PDFs and receive structured explanations (What, Why, How, simplified terms, diagram flow) grounded document content. Implemented RAG pipeline with text extraction, chunking, embedding generation, and FAISS-based semantic retrieval for accurate context matching. Integrated LLM (Groq–LLaMA 3) to generate context-aware responses high relevance and reduced hallucination. Built for real-time queries and fast document retrieval.",
      image: RAG,
      tech: ['Groq LLaMA 3', 'FAISS'],
      demo: "https://rag-learn-ai.streamlit.app/",
      github: "https://github.com/Avins-VR/RAG-Learn-AI"
    },
    {
      title:"AI-powered Car Parking Spot Dedection ",
      date:"2025",
      description: "Smart Parking System is a computer vision-based solution that detects parking occupancy from images and video using mask-based classification, enabling real-time space identification, reducing search time, and minimizing congestion.",
      image:parking,
      tech: ['OpenCV','SVM','YOLO'],
      demo: "https://github.com/Avins-VR/Car-Parking-spot-Dedection-Open-CV-",
      github: "https://github.com/Avins-VR/Car-Parking-spot-Dedection-Open-CV-"
    } ,
    {
      title: "SafeRoute",
      date: "2025",
      description: "SafeRoute is a personal safety app focused on smart travel, featuring area safety checks, live location sharing, and SOS alerts for safer journeys. It helps users assess surroundings using lighting, crowd density, and nearby emergency data, providing safer route suggestions and real-time decision-making.",
      image: SafeRoute,
      tech: ['Tailwind CSS', 'MERN Stack', 'API Integration'],
      demo: "https://saferoute-blze.onrender.com/",
      github: "https://github.com/Avins-VR/SafeRoute"
    },
    {
      title:"EmotiSense",
      date:"2025",
      description: "EmotiSense - AI Emotion Intelligence is a Computer Vision and Machine Learning project that recognizes human emotions in real time using facial expression analysis, enabling applications in mental health, HCI, and customer experience, supporting real-time feedback and improved human–computer interaction.",
      image:Emotion,
      tech: ['Python', 'OpenCV','TensorFlow','FER'],
      demo: "https://ai-emotisense.streamlit.app/",
      github: "https://github.com/Avins-VR/EmotiSense"
    },
    {
      title: "AI-Based Potato Leaf Disease Classification",
      date: "2026",
      description: "Potato Leaf Disease Classification is an AI-powered system that identifies Early Blight, Late Blight, and Healthy potato leaves using CNN-based deep learning model for early and accurate detection ,enabling timely intervention and improved crop management decisions.",
      image: AI_Potato,
      tech: ['TensorFlow', 'Matplotlib','CNN'],
      demo: "https://github.com/Avins-VR/Potato-Disease-Classification/blob/main/Potato%20Disease%20Classification.ipynb",
      github: "https://github.com/Avins-VR/Potato-Disease-Classification"
    },
    {
      title: "Focusflow Tasks",
      date: "2025",
      description: "Focusflow Tasks is a premium task manager that tracks daily progress, organizes tasks by difficulty and category, and helps users stay focused with due dates and priorities. It improves productivity through a clean user experience and seamless task management workflow.",
      image: Focusflowtask,
      tech: ['HTML', 'CSS','JS','React'],
      demo: "https://todo-list-udtd.vercel.app/",
      github: "https://github.com/Avins-VR/Todo-List"
    },
    {
      title: "Instagram Clone",
      date: "2025",
      description: "Instagram Clone is an interactive frontend social media project that replicates the core features and experience of Instagram with a modern desktop-focused interface. It includes stories, explore, reels, messages, notifications, and dynamic post layouts with smooth user interactions.",
      image: InstagramClone,
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      demo: "https://insta-clone-three-cyan.vercel.app/",
      github: "https://github.com/Avins-VR/Insta-Clone"
    },
    {
      title: "Blackjack Game",
      date: "2024",
      description: "Blackjack Game is an interactive project that recreates the classic casino card game with dynamic animations, real-time score tracking, and responsive gameplay for an engaging user experience.",
      image: BlackjackGame,
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: "https://avins-vr.github.io/Blackjack-game/Blackjack/Blackjack.html",
      github: "https://github.com/Avins-VR/Blackjack-game/tree/main/Blackjack"
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