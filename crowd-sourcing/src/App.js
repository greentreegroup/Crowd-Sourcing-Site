//App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import HelpCenter from './HelpCenter'; // Make sure this path is correct
import TrackRecord from './TrackRecord';
import InvestmentListings from './components/InvestmentListings';
import InvestmentDetails from './components/InvestmentDetails';
import HomePage from './HomePage';
import HelpCenter2 from './HelpCenter2';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/HelpCenter2" element={<HelpCenter2 />} />
            <Route path="/track-record" element={<TrackRecord />} />
            <Route path="/listings" element={<InvestmentListings minPrice={-1} maxPrice={-1} sortByRecent={false} propertyType={'none'} />} />
            <Route path="/listings/:listingId" element={<InvestmentDetails />} /> {/* Route for listing details page */}
            {/* Other routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;