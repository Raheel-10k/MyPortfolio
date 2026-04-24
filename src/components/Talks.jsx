import React from 'react';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', display: 'inline-block', verticalAlign: 'middle' }}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
);

const Talks = () => {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-label">RECOGNITION & SELECTED WORK</div>
        <div className="section-meta">Notable</div>
      </div>
      <div className="section-content">
        <div className="section-left">
        </div>
        <div className="section-right">
          <table className="table">
            <tbody>
              <tr><td>Hackathon Runner-Up</td><td>Ace Of Hack – Finalist / Runner Up</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>Hackathon Runner-Up</td><td>Buildathon – Runner Up</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>National Competition</td><td>SIH Internal Round Selection</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>Technical Work</td><td>Benchmarking Open Source Models on H100 GPUs</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>Internship Experience</td><td>Building AI Automations at LetsUpgrade</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>Project Showcase</td><td>DeepFake Detector using CNN + YOLO</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>Project Showcase</td><td>DSA Visualizer with Gemini API</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>Certification</td><td>AWS Cloud Practitioner Badge</td><td>Visit <ArrowIcon /></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Talks;
