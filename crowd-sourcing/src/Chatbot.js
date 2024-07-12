import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const chatbotRef = useRef(null);

  const toggleChatbot = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      const minHeight = 400; // Minimum height of the chatbot
      const maxHeight = 600; // Default maximum height of the chatbot
      const dynamicHeight = Math.min(Math.max(vh * 100 - 40, minHeight), maxHeight); // Adjust for button height

      if (chatbotRef.current) {
        chatbotRef.current.style.height = `${dynamicHeight}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={chatbotRef} className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        {isMinimized ? 'Open Chat' : 'Close Chat'}
      </button>
      {!isMinimized && (
        <iframe
          src="https://copilotstudio.microsoft.com/environments/Default-6ffa26de-1846-4087-81e9-2a9ec717152f/bots/cr419_chatbot/webchat?__version__=2"
          frameBorder="0"
          className="chatbot-iframe"
          title="Chatbot"
        ></iframe>
      )}
    </div>
  );
};

export default Chatbot;
