import React, { useState, useEffect, useRef } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { placeholder } from "../assets";
import '../css/Carousel.css';

export default function Carousel() {
  const [carousel, setCarousel] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoSlideRef = useRef();
  const touchPosition = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/restaurants');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setCarousel(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Cleanup on component unmount
  }, [carousel.length]);

  const startAutoSlide = () => {
    stopAutoSlide(); // Clear any existing intervals
    autoSlideRef.current = setInterval(goToNext, 3000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : carousel.length - 1);
    resetAutoSlide();
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    resetAutoSlide();
  };

  const handleTouchStart = (e) => {
    touchPosition.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchPosition.current === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition.current - currentTouch;

    if (diff > 5) {
      goToNext();
    } else if (diff < -5) {
      goToPrev();
    }

    touchPosition.current = null;
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <button className="carousel-button prev" onClick={goToPrev}><BsFillCaretLeftFill /></button>
      <div className="carousel-slide-container">
        {carousel.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <img src={item.thumbnail} alt={item.name} className="carousel-image" />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={goToNext}><BsFillCaretRightFill /></button>
      <div className="carousel-indicators">
        {carousel.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
