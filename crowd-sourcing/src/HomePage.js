//HomePage.js
import React from 'react';
import FeaturedListings from './components/FeaturedListings'; 
import Overview from './components/Overview';  

import './HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <main className="App-main">
      <br />
      <h1>Overview</h1>
      <p className='welcome-message'>Welcome to 2300 Frontier, where innovative ideas meet passionate investors. 
        Our platform bridges the gap between groundbreaking projects and the funding 
        they need to come to life. Whether you're an entrepreneur ready to launch your 
        next big idea or an investor looking to diversify your portfolio with exciting 
        new ventures, 2300 Frontier is your gateway to the future of funding. Explore a 
        world of opportunities with us and be part of the journey that transforms dreams 
        into reality.</p>
      <Overview/>


        {/* Featured Listings Section */}
        <div className="featured-listings-container">
          <section>
        <br />
        <h1>Featured Listings</h1>
            <FeaturedListings minPrice={-1} maxPrice={-1} sortByRecent={false} propertyType={'none'}/>

             {/* No props needed as they have been removed */}
          </section>
        </div>
      </main>
      {/* You can add other sections/components here as needed */}
    </div>
  );
}

export default HomePage;