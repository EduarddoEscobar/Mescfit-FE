import React from 'react';
import BusinessLogo from '../../../../img/BusinessLogo.png';

const TopSection = (props) => {
  return (
    <div className="coaching-top">
      <div className="coaching-title">
        <h1 data-testid="Coaching-Title">COACHING</h1>
        <img className="top-logo" src={BusinessLogo} alt="Business Card Logo" />
      </div>

      <iframe
        className="top-video"
        width="908"
        height="511"
        src="https://www.youtube.com/embed/kI0viSKCRCA"
        title="Kelpy G Smooth Jazz 1 Hour"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TopSection;
