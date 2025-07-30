import React from 'react';

// PUBLIC_INTERFACE
const NavigationBar = ({ activeTab, onTabChange }) => {
  /**
   * Navigation bar component for switching between All and Completed todos
   * Positioned at bottom with proper SVG icons
   * @param {string} activeTab - Currently active tab ('all' or 'completed')
   * @param {function} onTabChange - Callback for tab change
   */
  return (
    <div className="nav-bar">
      <div 
        className={`nav-item ${activeTab === 'all' ? 'active' : 'inactive'}`}
        onClick={() => onTabChange('all')}
      >
        <div className="nav-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" 
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="nav-text">All</div>
      </div>
      
      <div 
        className={`nav-item ${activeTab === 'completed' ? 'active' : 'inactive'}`}
        onClick={() => onTabChange('completed')}
      >
        <div className="nav-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" 
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="nav-text">Completed</div>
      </div>
    </div>
  );
};

export default NavigationBar;
