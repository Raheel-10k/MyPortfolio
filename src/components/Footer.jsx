import React from 'react';
import DraggableItem from './DraggableItem';
import './Footer.css';
import MyImg2 from '../../public/assets/MyImg2.jpeg'
import stepFootImage from '../../public/assets/stepFootImage.jpeg'
import redBullF1Image from '../../public/assets/redBullF1.jpeg'


const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', display: 'inline-block', verticalAlign: 'middle' }}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
);

const Footer = () => {
  return (
    <div className="footer">
      <div className="marquee-container">
        <div className="marquee-content">
          RAHEEL KOTWAL · RAHEEL KOTWAL · RAHEEL KOTWAL ·  
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
           <DraggableItem initialPos={{ x: -128, y: 17 }} style={{ zIndex: 1 }}>
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400" alt="Rock formation" className="draggable-image" />
           </DraggableItem>
           
            <DraggableItem initialPos={{ x: 20, y: 110 }} style={{ zIndex: 3 }}>
              <img 
                src={redBullF1Image} 
                alt="Red Bull F1" 
                className="draggable-image" 
                style={{ width: '240px', height: '180px', objectFit: 'fill' }} 
              />
            </DraggableItem>

            <DraggableItem initialPos={{ x: 196, y: -21 }} style={{ zIndex: 10 }}>
              <img src={MyImg2} alt="Portrait" className="draggable-image" style={{ width: '220px' }} />
           </DraggableItem>

            <DraggableItem initialPos={{ x: 498, y: 14 }} style={{ zIndex: 1 }}>
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400" alt="Food" className="draggable-image" style={{ width: '180px' }} />
           </DraggableItem>

            <DraggableItem initialPos={{ x: 673, y: 84 }} style={{ zIndex: 2 }}>
              <img src={stepFootImage} alt="Ocean waves" className="draggable-image" />
           </DraggableItem>
        </div>
      </div>
    </div>
  );
};

export default Footer;
