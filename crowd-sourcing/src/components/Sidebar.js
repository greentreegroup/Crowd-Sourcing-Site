import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState('75px'); // Default narrow width

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    setSidebarWidth(isNavVisible ? '75px' : '250px'); // Toggle between narrow and wide width
  };

  const sidebarStyle = {
    width: sidebarWidth,
    // Add other styles if needed
  };

  return (
    <div className="sidebar" style={sidebarStyle}>
      <button className="nav-btn" onClick={toggleNav}>☰</button>
      {isNavVisible && (
        <ul className="sidebar-nav">
          <li className="nav-item">
            <a href="/dashboard" className="nav-link">
              <i className="icon-dashboard"></i> Homepage
            </a>
          </li>
          <li className="nav-item">
            <a href="/messages" className="nav-link">
              <i className="icon-messages"></i> Investment Listings
            </a>
          </li>
          <li className="nav-item">
            <a href="/settings" className="nav-link">
              <i className="icon-settings"></i> Help Center
            </a>
          </li>
          
        </ul>
      )}
    </div>
  );
};

export default Sidebar;