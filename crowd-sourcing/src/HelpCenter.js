import React, { useState } from 'react';
import Header from './components/Header';
import FAQSection from './components/FAQSection';
import './App.css';

function HelpCenter() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {  // Define the onSignUpClick function
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const closeForms = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <div className="App">

      <main className="App-main">
        {/* Other main content */}
      <Header onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} /> {/* Pass onSignUpClick as a prop */}
      <FAQSection />

      </main>
      {/* Other components... */}
    </div>
  );
}

export default HelpCenter;