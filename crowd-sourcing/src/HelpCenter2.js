import React, { useState } from 'react';
import './HelpCenter2.css'; // Importing CSS file for styling

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      // Make HTTP request to trigger Power Automate flow with user input
      const response = await fetch(`https://prod-12.southeastasia.logic.azure.com/workflows/50f8655ca958412abb30e1d6dd3eb029/triggers/manual/paths/invoke/User_Input/${searchQuery}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mFG9aXLqApuvq7re_cdsk-iqERdGdiKlv6Q_JgvoNAQ`);
      const data = await response.json();
      setSearchResult(data.body); // Accessing the "body" property
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResult([{ "Category": "Error", "Questions": "", "Answers": "An error occurred while searching." }]);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="help-center-container">
      <h2 className='head-line'>Help Center</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for help..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      {searchResult.length > 0 && (
        <div className="search-results">
          {searchResult.map((result, index) => (
            <div key={index} className="search-result-card">
              <h3>{result.Category}</h3>
              <p><strong>Questions:</strong> {result.Questions}</p>
              <p><strong>Answers:</strong> {result.Answers}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HelpCenter;
