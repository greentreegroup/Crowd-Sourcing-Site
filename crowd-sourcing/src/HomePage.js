//HomePage.js
import React from 'react';
import FeaturedListings from './components/FeaturedListings'; 
import Overview from './components/Overview';  

import './HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <main className="App-main">
        {/* Featured Listings Section */}
        <br />
        <h1>Featured Listings</h1>
        <div className="featured-listings-container">
          <section>
            <FeaturedListings minPrice={-1} maxPrice={-1} sortByRecent={false} propertyType={'none'}/>
            <Overview/>

             {/* No props needed as they have been removed */}
          </section>
        </div>
      </main>
      {/* You can add other sections/components here as needed */}
    </div>
  );
}

export default HomePage;