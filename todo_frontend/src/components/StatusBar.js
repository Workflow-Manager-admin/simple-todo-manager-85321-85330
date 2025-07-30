import React from 'react';

// PUBLIC_INTERFACE
const StatusBar = () => {
  /**
   * Status bar component showing time and status icons
   * Matches the mobile design from Figma assets
   */
  return (
    <div className="status-bar">
      <div className="time">9:41</div>
      <div className="status-icons">
        <span>📶</span>
        <span>📶</span>
        <span>🔋</span>
      </div>
    </div>
  );
};

export default StatusBar;
