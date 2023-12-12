import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Lunch.css";
const Lunch = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [noButtonPos, setNoButtonPos] = useState({ x: 20, y: 60 });

  function handleNoHover() {
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

    setNoButtonPos({
      x: Math.random() * maxX,
      y: Math.max(0, Math.min(Math.random() * maxY, maxY - 50)),
    });
  }

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="app-container" onClick={() => setIsVideoPlaying(true)}>
      {isVideoPlaying ? (
        <ReactPlayer
          url="/video/video.mp4"
          playing
          onEnded={handleVideoEnd}
          width="100vw"
          height="100%"
        />
      ) : (
        <div className="background-image">
          <div class="card">
            <div class="card-content">
              <p class="card-title">How About a Lunch ? </p>
              <button>Yes</button>
            </div>
          </div>

          <button
            className="no-button"
            style={{
              position: "absolute",
              left: noButtonPos.x,
              top: noButtonPos.y,
            }}
            onMouseEnter={handleNoHover}
          >
            No
          </button>
        </div>
      )}
      {/* Your other components/content goes here */}
    </div>
  );
};

export default Lunch;
