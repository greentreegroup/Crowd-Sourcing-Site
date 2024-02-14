import React, { useState } from 'react';
import Header from './components/Header';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Sidebar from './components/Sidebar';
import FAQSection from './components/FAQSection';
import InvestmentDetails from './components/InvestmentDetails';
import HistoricalPerformance from './components/HistoricalPerformance';
import './App.css';

function App() {
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


   // Dummy data for the Historical Performance component, replace with real data

  const performanceData = {
    completedDeals: 120,
    moneyDistributed: 5000000,
    totalInvested: 7000000,
    assetClasses: ['Real Estate', 'Stocks', 'Bonds'],
    investmentOverview: {
      labels: ['2020', '2021', '2022'],
      data: [2000000, 2500000, 2500000],
    },
  };
   // Dummy data for the InvestmentDetails component, replace with real data
   const propertyDetails = {
    address: '2406 Sycamore Fork Road',
    description: 'Sample text : A stunning property located in the heart of Springfield. This charming home offers a spacious layout, modern amenities, and a beautifully landscaped backyard. Perfect for families or as a lucrative investment opportunity.',
    images: [
      '/img/gal-1.jpeg',
      '/img/gal-2.jpeg',
      '/img/gal-3.jpeg',
    ],
    details: {
      price: '$650,000',
      area: '2,500 sqft',
      bedrooms: 4,
      bathrooms: 2,
      yearBuilt: 1995,
    },
    documents: [
      {
        name: 'Property Brochure',
        link: '/documents/property1-brochure.pdf',
      },
      {
        name: 'Investment Analysis',
        link: '/documents/property1-analysis.pdf',
      }
    ],
    investStatus: 'Open for Investment'
  };

  return (
    <div className="App">
       <Sidebar />
      
      {showSignIn && <SignInForm onClose={closeForms} />}
      {showSignUp && <SignUpForm onClose={closeForms} />}

      <main className="App-main">
        {/* Other main content */}
      <Header onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} /> {/* Pass onSignUpClick as a prop */}
      <InvestmentDetails property={propertyDetails} /> 
      <HistoricalPerformance performanceData={performanceData}/> 
      <FAQSection />

      </main>
      {/* Other components... */}
    </div>
  );
}

export default App;