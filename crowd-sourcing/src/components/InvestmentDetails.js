//InvestmentDetails.js
import React, { useState } from 'react';
import './InvestmentDetails.css';
import Modal from './Modal'; // Import the Modal component if you have it in a separate file

const InvestmentDetails = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to change to the next picture
  const setImageIndex = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="investment-details">
      <h1>{property.address}</h1>
      <div className="investment-body">
        <div className="image-gallery">
          <div className="thumbnail-images">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setImageIndex(index)}
                className={currentImageIndex === index ? 'thumbnail active' : 'thumbnail'}
              />
            ))}
          </div>
          <div className="investment-image">
            <img
              src={property.images[currentImageIndex]}
              alt={property.address}
              onClick={toggleModal} // Open modal on click
            />
          </div>
        </div>
        <div className="investment-info">
          <p>{property.description}</p>
          <div className="property-details">
            <p>Price: {property.details.price}</p>
            <p>Area: {property.details.area}</p>
            <p>Bedrooms: {property.details.bedrooms}</p>
            <p>Bathrooms: {property.details.bathrooms}</p>
            <p>Year Built: {property.details.yearBuilt}</p>
            <p>Status: {property.investStatus}</p>
          </div>
          <div className="property-documents">
            {property.documents.map((doc, index) => (
              <button key={index} className="download-docs" onClick={() => window.open(doc.link, "_blank")}>
                Download {doc.name}
              </button>
            ))}
          </div>
          <button className="invest">Invest Now</button>
        </div>
      </div>

      {/* Modal for full-size image display */}
      <Modal showModal={showModal} onClose={toggleModal}>
        <img
          src={property.images[currentImageIndex]}
          alt={property.address}
          style={{ width: '100%' }} // Ensures the image fits within the modal
        />
      </Modal>
    </div>
  );
};

export default InvestmentDetails;
