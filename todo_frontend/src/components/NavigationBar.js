import React from 'react';

// PUBLIC_INTERFACE
const NavigationBar = ({ activeTab, onTabChange }) => {
  /**
   * Navigation bar component for switching between All and Completed todos
   * @param {string} activeTab - Currently active tab ('all' or 'completed')
   * @param {function} onTabChange - Callback for tab change
   */
  return (
    <div className="nav-bar">
      <div 
        className={`nav-item ${activeTab === 'all' ? 'active' : 'inactive'}`}
        onClick={() => onTabChange('all')}
      >
        <div className="nav-icon">📋</div>
        <div className="nav-text">All</div>
      </div>
      <div 
        className={`nav-item ${activeTab === 'completed' ? 'active' : 'inactive'}`}
        onClick={() => onTabChange('completed')}
      >
        <div className="nav-icon">✓</div>
        <div className="nav-text">Completed</div>
      </div>
    </div>
  );
};

export default NavigationBar;
