import React, { useState, useEffect } from 'react';

const ParallaxZoom = ({ backgroundImage }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const newZoomLevel = Math.min(scrollY / 500 + 1, 1.5); // Zooms up to 1.5 times
      const newOpacity = Math.min(scrollY / 500, 1); // Fades in up to 1 (fully visible)
      setZoomLevel(newZoomLevel);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${100 * zoomLevel}%`, // Zoom effect
    height: '100vh', // Full height of the viewport
    width: '100%', // Full width of the viewport
    transition: 'background-size 0.5s ease',
    position: 'fixed', // Fixed position
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)',
    opacity: opacity, // Fade-in effect
    transition: 'opacity 0.5s ease',
    color: '#ffffff', // Change as needed
    textAlign: 'center',
    zIndex: 2,
  };

  return (
    <div>
      <div style={backgroundStyle} />
      <div style={contentStyle}>
        <h1>Explore Our Cuisine</h1>
        <p>Discover the flavors that make us unique.</p>
      </div>
    </div>
  );
};

export default ParallaxZoom;
