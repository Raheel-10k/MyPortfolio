import React from 'react';
import { motion } from 'framer-motion';
import TopBar from './TopBar';
import DraggableItem from './DraggableItem';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <TopBar />
      {/* Position 1: "DAVID" top left roughly */}
      <DraggableItem initialPos={{ x: '18vw', y: '16vh' }}>
        <h1 className="name-part">RAHEEL</h1>
      </DraggableItem>
      
      {/* Position 2: "MARTÍN" right roughly, wait, there are only 2 words for Raheel Kotwal.
          I'll put KOTWAL at bottom right to match the SUAREZ position from Image 2. */}
      <DraggableItem initialPos={{ x: '56vw', y: '62vh' }}>
        <h1 className="name-part">KOTWAL</h1>
      </DraggableItem>

      <DraggableItem initialPos={{ x: '38vw', y: '39vh' }} className="hero-description">
        <p>Builder. Computer Science student shipping AI and full-stack products early. I turn ideas into usable systems through code, automation, and design. Focused on solving real problems fast, then scaling the cleanest solution.</p>
      </DraggableItem>

      <div className="scroll-down">
        <button 
          className="get-to-know-btn"
          onClick={() => {
            const section = document.getElementById('experience');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get to know me
        </button>
        <span className="scroll-text">Or scroll down ↓</span>
      </div>
    </div>
  );
};

export default Hero;
