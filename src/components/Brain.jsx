import React, { useState } from 'react';
import './Brain.css';

const Brain = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="brain-section" id="brain">
      <h3>Contact me</h3>
      <p>Leave your email below and I'll reach out to you as soon as possible.</p>
      <form className="search-box" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email address..." 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="search-btn">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>
      </form>
      <div className="search-hint">
        {showSuccess ? (
          <span style={{ color: '#10b981', fontWeight: 500 }}>Success! I'll get back to you soon.</span>
        ) : (
          <span>I typically reply within 24 hours.</span>
        )}
      </div>
    </div>
  );
};

export default Brain;
