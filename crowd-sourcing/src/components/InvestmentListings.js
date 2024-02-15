// This page displays a list of rental properties and allows you to filter the results.
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvestmentListings = ({ minPrice, maxPrice, sortByRecent, propertyType }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://prod-44.southeastasia.logic.azure.com/workflows/2dd568592654417e8216e170db743a61/triggers/manual/paths/invoke/min_price/${minPrice}/max_price/${maxPrice}/sort_by_recent/${sortByRecent}/property_type/${propertyType}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xqoE7trIuqQ2NkKl4zVVv3kijiPo2GZqT6MqFZuiIsw`
        );
        setListings(response.data.body);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchData();
  }, [minPrice, maxPrice, sortByRecent, propertyType]);

  return (
    <div>
      <h1>Listings</h1>
      <div>
        {listings.map(listing => (
          <div key={listing.id}>
            <h3>{listing.name}</h3>
            <p>Property Type: {listing.property_type}</p>
            <p>Date Published: {listing.date_published}</p>
            <p>Minimum Investment: {listing.minimum_investment}</p>
            <div>
              Photos:
              {listing.photos.split('\n').map((photo, index) => {
                return (
                  <img key={index} src={photo} alt={`Photo ${index}`} style={{ maxWidth: '200px', maxHeight: '200px', margin: '5px' }} />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentListings;
