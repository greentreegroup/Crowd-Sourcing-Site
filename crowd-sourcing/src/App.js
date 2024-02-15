import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Sidebar from './components/Sidebar';
import HelpCenter from './HelpCenter'; // Make sure this path is correct
import InvestmentDetails_1 from './InvestmentDetails_1'; // Adjust the path as necessary
import TrackRecord from './TrackRecord';

import './App.css';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const closeForms = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };
  
 return (
    <Router>
      <div className="App">
        <Sidebar />
        {showSignIn && <SignInForm onClose={closeForms} />}
        {showSignUp && <SignUpForm onClose={closeForms} />}
        <main className="App-main">
          <Routes>
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/investment-details" element={<InvestmentDetails_1 />} />
            <Route path="/track-record" element={<TrackRecord />} />
            {/* Other routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;