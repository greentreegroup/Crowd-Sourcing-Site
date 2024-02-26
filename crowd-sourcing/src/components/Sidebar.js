import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            {/* Use Link component for SPA behavior */}
            <Link to="/" className="nav-link">
               Home
            </Link>
          </li>
          {/* Adjust the paths as per your routing setup */}
          <li className="nav-item">
            <Link to="/listings" className="nav-link">
              Listings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/investment-details" className="nav-link">
              Investment Details
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/help-center" className="nav-link">
              Help Center
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/track-record" className="nav-link">
              Track Record
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;