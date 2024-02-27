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
        into reality.
      <Overview/>
        </p>


        {/* Featured Listings Section */}
        <div className="featured-listings-container">
        <br />
        <h1>Featured investment opportunities </h1>
          <section>
        <p className='welcome-message'>Discover the latest and most exciting crowdfunding opportunities 
        on 2300 Frontier. From cutting-edge technology innovations to sustainable environmental solutions, 
        our platform hosts a variety of projects seeking your support. Dive into our curated selection of 
        opportunities and find the next big thing to invest in. <br /><br />
        <FeaturedListings minPrice={-1} maxPrice={-1} sortByRecent={false} propertyType={'none'}/>
        </p>

             {/* No props needed as they have been removed */}
          </section>
        </div>
      </main>
      {/* You can add other sections/components here as needed */}
    </div>
  );
}

export default HomePage;