import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FeaturedListings.css'; // Import CSS file

const FeaturedListings = ({ minPrice, maxPrice, sortByRecent, propertyType }) => {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const sampleListings = [
    {
      id: 1,
      photos: '[\"https://burst.shopifycdn.com/photos/one-storey-home-exterior.jpg?width=1000\"]',
      name: 'Greenfield Estates',
      date_published: '2024-02-14',
      minimum_investment: 100000,
      location: 'Aspen, CO',
      target_hold_period: '5 years',
      interest_rate: 0.035,
      developer: 'Summit Real Estate'
    },
    {
      id: 2,
      photos: '[\"https://cf.bstatic.com/xdata/images/hotel/max1280x900/273527557.jpg?k=634eb52c2bd61d1a793e85e9eaf3113291bbb4a7e39f87a3bc798743b4126811&o=&hp=1\"]',
      name: 'Urban Haven Inn',
      date_published: '2024-02-15',
      minimum_investment: 120000,
      location: 'Savannah, GA',
      target_hold_period: '30 months',
      interest_rate: 0.042,
      developer: 'Keystone Ventures'
    },
    {
      id: 3,
      photos: '[\"https://images1.apartments.com/i2/VdJ9tdWRQpevTg2t3YmsQpwVIqrciFcOyDXWkmgcO5E/111/central-city-condominium-atlanta-ga-primary-photo.jpg\"]',
      name: 'Horizon Heights',
      date_published: '2024-01-15',
      minimum_investment: 145000,
      location: 'Napa Valley, CA',
      target_hold_period: '2 years',
      interest_rate: 0.051,
      developer: 'MetroStar Properties'
    },

    // Add more sample listings as needed
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        /*
        const response = await axios.get(
          `https://prod-44.southeastasia.logic.azure.com/workflows/2dd568592654417e8216e170db743a61/triggers/manual/paths/invoke/min_price/${minPrice}/max_price/${maxPrice}/sort_by_recent/${sortByRecent}/property_type/${propertyType}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xqoE7trIuqQ2NkKl4zVVv3kijiPo2GZqT6MqFZuiIsw`
        );

        setListings(response.data.body);

        */
        setListings(sampleListings);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchData();
  }, [minPrice, maxPrice, sortByRecent, propertyType]);

  const handleViewOffering = async (listingId) => {
    navigate(`/listings/${listingId}`);
  };

  const reformatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Inside the InvestmentListings component
  return (
    <div className="featured-listings">
      {listings.map(listing => (
        <div key={listing.id} className="listing">
          <img src={JSON.parse(listing.photos)[0]} alt={listing.name} className="listing__img" />
          <h5 className="listing__name">{listing.name}</h5>
          <div className="featured-listing__top">
            <p className="listing__developer">{listing.developer}</p>
          </div>
          <div className="listing__detail">
            <p>Location</p>
            <p className="listing__value">{listing.location}</p>
          </div>
          <div className="listing__detail">
            <p>Date Published</p>
            <p className="listing__value">{reformatDate(listing.date_published)}</p>
          </div>
          <div className="listing__detail">
            <p>Target Hold Period</p>
            <p className="listing__value">{listing.target_hold_period}</p>
          </div>
          <div className="listing__detail">
            <p>Interest Rate</p>
            <p className="listing__value">{(listing.interest_rate * 100).toFixed(1)}%</p>
          </div>
          <div className="listing__detail listing__bottom">
            <p>Minimum Investment</p>
            <p className="listing__value">${numberWithCommas(listing.minimum_investment)}</p>
          </div>
          <button className="listing-btn" onClick={() => handleViewOffering(listing.id)}>View Offering</button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedListings;