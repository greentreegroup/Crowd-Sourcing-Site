import React, { useState } from 'react';
import Header from './components/Header';
import FAQSection from './components/FAQSection';
import './App.css';


function HelpCenter() {
  return (
    <div className="App">
      <main className="App-main">
      <Header/> {/* Pass onSignUpClick as a prop */}
      <FAQSection />
      
      </main>
      {/* Other components... */}
    </div>
  );
}

export default HelpCenter;