import React from 'react';

// PUBLIC_INTERFACE
const AppBar = ({ title, onBack, showCalendar, onCalendar }) => {
  /**
   * App bar component with title, back button, and optional calendar icon
   * @param {string} title - The title to display
   * @param {function} onBack - Callback for back button click
   * @param {boolean} showCalendar - Whether to show calendar icon
   * @param {function} onCalendar - Callback for calendar button click
   */
  return (
    <div className="app-bar">
      {onBack && (
        <button className="back-button" onClick={onBack} aria-label="Go back">
        </button>
      )}
      <div className="app-title">{title}</div>
      {showCalendar && (
        <button className="calendar-icon" onClick={onCalendar} aria-label="Calendar">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="6" width="24" height="20" rx="2" stroke="white" strokeWidth="2"/>
            <path d="M10 2v4M22 2v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12h24" stroke="white" strokeWidth="2"/>
            <rect x="8" y="16" width="2" height="2" fill="white"/>
            <rect x="12" y="16" width="2" height="2" fill="white"/>
            <rect x="16" y="16" width="2" height="2" fill="white"/>
            <rect x="8" y="20" width="2" height="2" fill="white"/>
            <rect x="12" y="20" width="2" height="2" fill="white"/>
            <rect x="16" y="20" width="2" height="2" fill="white"/>
          </svg>
        </button>
      )}
      {!showCalendar && !onBack && <div></div>}
    </div>
  );
};

export default AppBar;
