import React from 'react';
import './Chatbot.css';

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <iframe
        src="https://copilotstudio.microsoft.com/environments/Default-6ffa26de-1846-4087-81e9-2a9ec717152f/bots/cr419_chatbot/webchat?__version__=2"
        frameBorder="0"
        className="chatbot-iframe"
        title="Chatbot"
      ></iframe>
    </div>
  );
};

export default Chatbot;
