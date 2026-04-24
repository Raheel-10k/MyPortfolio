import React from 'react';

const Experience = () => {
  return (
    <div className="section" id="experience">
      <div className="section-header">
        <div className="section-label">EXPERIENCE</div>
        <div className="section-meta">Selected roles</div>
      </div>
      <div className="section-content">
        <div className="section-left">
          <p className="experience-text">
            I build like an <strong>engineer</strong>, think like a <strong>founder</strong>, and execute like an <strong>operator</strong>. Early in my career, I’ve focused on shipping <strong>real products</strong> across AI, automation, and scalable web systems. My sweet spot: turning <strong>ambitious ideas</strong> into fast, usable products people actually need.
          </p>
        </div>
        <div className="section-right">
          <table className="table">
            <tbody>
              <tr><td>LetsUpgrade</td><td>SDE Intern</td><td>Jul 2025 – Apr 2026</td></tr>
              <tr><td>LetsUpgrade</td><td>Marketing Intern</td><td>Dec 2023 – Feb 2024</td></tr>
              <tr><td>Independent / Personal Projects</td><td>AI & Full Stack Developer</td><td>2023 – Now</td></tr>
              <tr><td>Hackathons & Team Builds</td><td>Team Lead / Builder</td><td>2023 – Now</td></tr>
              <tr><td>Freelance / Experimental Work</td><td>Product Developer</td><td>Ongoing</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Experience;
