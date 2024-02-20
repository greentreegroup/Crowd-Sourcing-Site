//HomePage.js
import React, { useState } from 'react';
import InvestmentListings from './components/InvestmentListings';
import './HomePage.css';


function HomePage() {
  return (
    <div className="App">
      <main className="App-main">
       {/* Featured Listings Section */}
            <h1>Featured Listings</h1>
       <div className="featured-listings-container">
          <section>
            <InvestmentListings minPrice={-1} maxPrice={-1} sortByRecent={false} propertyType={'none'} />
          </section>
        </div>
      
      </main>
      {/* Other components... */}
    </div>
  );
}

export default HomePage;