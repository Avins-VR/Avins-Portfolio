import React, { useEffect, useState } from "react";
import bgVideo from "./assets/loading bg.mp4";
import "./Loading.css";

const Loading = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starArray = Array.from({ length: 40 }, () => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 3 + 1,
    }));
    setStars(starArray);

    let interval;
    let startTime = Date.now();

    interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / 5000) * 100, 100);
      setProgress(Math.floor(percentage));

      if (percentage >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onFinish();
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loading-container">
      {/* Background Video */}
      <video autoPlay muted loop className="loading-bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="loading-overlay"></div>

      {/* Stars */}
      {stars.map((star, i) => (
        <span
          key={i}
          className="loading-star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        ></span>
      ))}

      {/* Corner Accents */}
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>

      {/* Loader Content */}
      <div className="loading-content">
        <h1 className="loading-title">Loading Portfolio</h1>
        <p className="loading-subtitle">CRAFTING DIGITAL EXPERIENCE</p>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            <span>Initializing...</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p className="loading-assets">Loading assets...</p>
      </div>
    </div>
  );
};

export default Loading;
