//import React from 'react';
import './Support.css';


function Chatbot() {
  return (
    <div style={{ width: '25%', height: '100%', position: 'absolute', bottom: '-2rem', right: '3rem' }}>
      <iframe
        className="chat"
        src=""//Update URL here
        frameBorder="5"
        style={{ width: '100%', height: '35rem' }}
      ></iframe>
    </div>
  );
}

export default Chatbot;
