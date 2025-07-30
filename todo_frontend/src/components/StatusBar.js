import React from 'react';

// PUBLIC_INTERFACE
const StatusBar = () => {
  /**
   * Status bar component showing time and status icons
   * Matches the mobile design from Figma assets with proper SVG icons
   */
  return (
    <div className="status-bar">
      <div className="time">9:41</div>
      <div className="status-icons">
        {/* WiFi Icon */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" className="status-icon">
          <path d="M7.5 0C11.64 0 15 2.46 15 5.5l-1.36 0c0-2.21-2.69-4-6-4s-6 1.79-6 4L0 5.5c0-3.04 3.36-5.5 7.5-5.5z" fill="white" opacity="0.6"/>
          <path d="M7.5 2C10.26 2 12.5 3.79 12.5 6l-1.36 0c0-1.66-1.58-3-3.64-3s-3.64 1.34-3.64 3L2.5 6c0-2.21 2.24-4 5-4z" fill="white" opacity="0.8"/>
          <circle cx="7.5" cy="8.5" r="1.5" fill="white"/>
        </svg>
        
        {/* Cellular Signal Icon */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="status-icon">
          <rect x="0" y="8" width="2" height="4" fill="white"/>
          <rect x="4" y="6" width="2" height="6" fill="white"/>
          <rect x="8" y="4" width="2" height="8" fill="white"/>
          <rect x="12" y="2" width="2" height="10" fill="white"/>
          <rect x="16" y="0" width="2" height="12" fill="white"/>
        </svg>
        
        {/* Battery Icon */}
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="status-icon">
          <rect x="1" y="2" width="20" height="8" rx="2" stroke="white" strokeWidth="1" opacity="0.35"/>
          <rect x="22" y="4" width="1.5" height="4" rx="0.5" fill="white" opacity="0.4"/>
          <rect x="2" y="3" width="18" height="6" rx="1" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default StatusBar;
