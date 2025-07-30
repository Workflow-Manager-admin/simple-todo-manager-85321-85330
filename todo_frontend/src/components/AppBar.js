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
          📅
        </button>
      )}
      {!showCalendar && !onBack && <div></div>}
    </div>
  );
};

export default AppBar;
