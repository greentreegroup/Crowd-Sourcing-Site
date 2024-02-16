// This page displays a list of rental properties and allows you to filter the results.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InvestmentListings.css'; // Import CSS file

const InvestmentListings = ({ minPrice, maxPrice, sortByRecent, propertyType }) => {
  const [listings, setListings] = useState([]);
  const sampleListings = [
    {
      id: 1,
      photo: 'https://burst.shopifycdn.com/photos/one-storey-home-exterior.jpg?width=1000',
      name: 'Example Home 1',
      property_type: 'House',
      date_published: '2024-02-14',
      minimum_investment: 100000,
    },
    {
      id: 2,
      photo: 'https://burst.shopifycdn.com/photos/one-storey-home-exterior.jpg?width=1000',
      name: 'Example Home 2',
      property_type: 'Apartment',
      date_published: '2024-02-15',
      minimum_investment: 120000,
    },
    {
      id: 3,
      photo: 'https://burst.shopifycdn.com/photos/one-storey-home-exterior.jpg?width=1000',
      name: 'Example Home 2',
      property_type: 'Apartment',
      date_published: '2024-02-15',
      minimum_investment: 120000,
    },
    {
      id: 4,
      photo: 'https://burst.shopifycdn.com/photos/one-storey-home-exterior.jpg?width=1000',
      name: 'Example Home 2',
      property_type: 'Apartment',
      date_published: '2024-02-15',
      minimum_investment: 120000,
    }
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

  // Inside the InvestmentListings component
  return (
    <div className="homes">
      {listings.map(listing => (
        <div key={listing.id} className="home">
          <img src={listing.photo} alt={listing.name} className="home__img" />
          <h5 className="home__name">{listing.name}</h5>
          <div className="home__location">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>{listing.property_type}</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>{listing.date_published}</p>
          </div>
          <div className="home__area">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>{listing.minimum_investment}</p>
          </div>
          <div className="home__price">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>${listing.minimum_investment}</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
        </div>
      ))}
    </div>
  );
};

export default InvestmentListings;
