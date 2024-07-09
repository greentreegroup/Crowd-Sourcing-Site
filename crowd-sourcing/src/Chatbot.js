import React from 'react';

const Chatbot = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src="https://copilotstudio.microsoft.com/environments/Default-6ffa26de-1846-4087-81e9-2a9ec717152f/bots/cr419_chatbot/webchat?__version__=2"
        frameBorder="0"
        style={{ width: '100%', height: '100%' }}
        title="Copilot Chatbot"
      ></iframe>
    </div>
  );
};

export default Chatbot;
