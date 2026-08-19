import React from 'react';

const Projects = () => {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-label">SIDE, FUN PROJECTS</div>
        <div className="section-meta">Selected work</div>
      </div>
      <div className="section-content">
        <div className="section-left">
          <p className="experience-text" style={{ fontSize: '13px' }}>
            Side projects are where I test ideas fast, learn new tools, and build without limits. They help me sharpen engineering instincts, experiment with AI, and turn curiosity into products people can use.
          </p>
        </div>
        <div className="section-right">
          <table className="table">
            <tbody>
              <tr><td>BuildFast AI</td><td>AI tools and automations shipped fast for real workflows.</td><td></td></tr>
              <tr><td>CodeCanvas</td><td>Visual DSA learning with code + interaction.</td><td></td></tr>
              <tr><td>VisionMind</td><td>Face intelligence & recognition experiments.</td><td></td></tr>
              <tr><td>TruthLens</td><td>Deepfake detection for media authenticity.</td><td></td></tr>
              <tr><td>ModelArena</td><td>Benchmarking open models on enterprise GPUs.</td><td></td></tr>
              <tr><td>LaunchStack</td><td>Full-stack MVP experiments from idea to deploy.</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;
