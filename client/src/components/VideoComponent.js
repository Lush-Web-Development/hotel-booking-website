// VideoComponent.js
import React from 'react';

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video width="100%" height="auto" autoPlay muted loop playsInline>
        <source src="luxury.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
