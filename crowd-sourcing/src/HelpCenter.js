//HelpCenter.js
import React, { useState } from 'react';
import FAQSection from './components/FAQSection';
import './App.css';


function HelpCenter() {
  return (
    <div className="App">
      <main className="App-main">
      <FAQSection />
      
      </main>
      {/* Other components... */}
    </div>
  );
}

export default HelpCenter;