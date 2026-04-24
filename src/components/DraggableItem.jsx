import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './DraggableItem.css';

const DraggableItem = ({ children, className, style, initialPos }) => {
  const [isActive, setIsActive] = useState(false);
  
  // Set position using top/left so Framer Motion's transform x/y starts cleanly from 0.
  // This prevents jumpy behavior when dragging elements that initially used vw/vh in transform.
  const positionalStyle = initialPos ? { 
    left: initialPos.x, 
    top: initialPos.y 
  } : {};

  return (
    <motion.div
      drag
      dragMomentum={false}
      className={`selectable ${isActive ? 'active' : ''} ${className || ''}`}
      style={{ ...positionalStyle, ...style }}
      onPointerDown={() => setIsActive(true)}
      // We listen to window pointer up to reliably deactivate, but for simplicity:
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      onDragStart={() => setIsActive(true)}
      onDragEnd={() => setIsActive(false)}
    >
      {children}
      <div className="handles">
        <div className="handle tl"></div>
        <div className="handle tr"></div>
        <div className="handle bl"></div>
        <div className="handle br"></div>
        <div className="handle tc"></div>
        <div className="handle bc"></div>
      </div>
    </motion.div>
  );
};

export default DraggableItem;
