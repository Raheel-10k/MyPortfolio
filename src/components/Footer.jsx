import React from 'react';
import DraggableItem from './DraggableItem';
import './Footer.css';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', display: 'inline-block', verticalAlign: 'middle' }}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
);

const Footer = () => {
  return (
    <div className="footer">
      <div className="marquee-container">
        <div className="marquee-content">
          RAHEEL KOTWAL · RAHEEL KOTWAL · RAHEEL KOTWAL · RAHEEL KOTWAL · RAHEEL KOTWAL · RAHEEL KOTWAL · 
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/raheel-kotwal-02b594291/" className="footer-link">LinkedIn <ArrowIcon /></a>
            <a href="https://github.com/Raheel-10k" className="footer-link">Github <ArrowIcon /></a>
            <a 
              href="#brain" 
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('brain')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            >
              Contact Me ↑
            </a>
          </div>
          <div className="copyright">
            2026 Raheel Kotwal
          </div>
        </div>
        
        <div className="footer-images">
           <DraggableItem initialPos={{ x: -80, y: 20 }} style={{ zIndex: 1 }}>
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400" alt="Rock formation" className="draggable-image" />
           </DraggableItem>
           
           <DraggableItem initialPos={{ x: 80, y: 100 }} style={{ zIndex: 3 }}>
              <img src="https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=400" alt="Empire State" className="draggable-image" />
           </DraggableItem>

           <DraggableItem initialPos={{ x: 260, y: -20 }} style={{ zIndex: 2 }}>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" alt="Portrait" className="draggable-image" style={{ width: '220px' }} />
           </DraggableItem>

           <DraggableItem initialPos={{ x: 480, y: 0 }} style={{ zIndex: 1 }}>
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400" alt="Food" className="draggable-image" style={{ width: '180px' }} />
           </DraggableItem>

           <DraggableItem initialPos={{ x: 620, y: 180 }} style={{ zIndex: 2 }}>
              <img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400" alt="Ocean waves" className="draggable-image" />
           </DraggableItem>
        </div>
      </div>
    </div>
  );
};

export default Footer;
