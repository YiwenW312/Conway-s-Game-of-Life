import React from 'react';
import './CreditsPage.css';

function CreditsPage() {
  return (
    <div className="credits-container">
      <p>This site is developed by Yiwen Wang as a project for course CS5610.</p>
      <a href="https://github.com/YiwenW312/Conway_s_Game_of_Life" target="_blank" rel="noopener noreferrer" className="credits-link">GitHub Link</a>
    </div>
  );
}

export default CreditsPage;

