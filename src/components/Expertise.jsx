import React from 'react';
import DraggableItem from './DraggableItem';
import './Expertise.css';

const Expertise = () => {
  return (
    <div className="section" style={{ minHeight: '600px' }}>
      <div className="section-header">
        <div className="section-label">EXPERTISE</div>
        <div className="section-meta"></div>
      </div>
      <div className="section-content">
        <div className="section-left">
          <h2 className="expertise-large-text">
            I blend product thinking, design craft, vibe coding speed, and AI workflows <span>to ship better work, faster.</span>
          </h2>
        </div>
        <div className="section-right" style={{ position: 'relative' }}>
           <DraggableItem initialPos={{ x: 20, y: 0 }} className="expertise-card">
              <div className="icon">◈</div>
              <h4>Product Innovation</h4>
              <p>I turn fuzzy inputs into clear product direction, smart experiments, and shippable increments.</p>
           </DraggableItem>
           <DraggableItem initialPos={{ x: 360, y: 0 }} className="expertise-card">
              <div className="icon">✦</div>
              <h4>Product Design</h4>
              <p>I craft simple flows and crisp UI, balancing usability, accessibility, and visual polish.</p>
           </DraggableItem>
           <DraggableItem initialPos={{ x: 40, y: 220 }} className="expertise-card">
              <div className="icon">☰</div>
              <h4>Vibe Coding</h4>
              <p>I use AI assisted building to explore, validate, and iterate quickly without sacrificing taste.</p>
           </DraggableItem>
           <DraggableItem initialPos={{ x: 320, y: 240 }} className="expertise-card">
              <div className="icon">▨</div>
              <h4>AI Workflows</h4>
              <p>I apply the right tools across research, ideation, copy, design, and delivery to amplify output.</p>
           </DraggableItem>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
