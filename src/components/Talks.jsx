import React from 'react';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', display: 'inline-block', verticalAlign: 'middle' }}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
);

const Talks = () => {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-label">TALKS, INTERVIEWS & ARTICLES</div>
        <div className="section-meta">Featured</div>
      </div>
      <div className="section-content">
        <div className="section-left">
        </div>
        <div className="section-right">
          <table className="table">
            <tbody>
              <tr><td>YouTube Live (Product Makers)</td><td>The new role of the product designer in the vibe-coding era</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>LinkedIn Live (Interactius)</td><td>I monetized an experiment with Lovable</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>Panel (La Product Conf)</td><td>The art of strategic monetization</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>Talk (Lanzadera, ISDI, Tramontana)</td><td>Entrepreneurship from the product perspective</td><td>Visit <ArrowIcon /></td></tr>
              <tr><td>Interview</td><td>From UX Designer to Entrepreneur</td><td>Visit <ArrowIcon /></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Talks;
