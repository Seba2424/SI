import React, { useState } from 'react';

function ContactCustomer() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div>
      <h1>Contactar al Cliente</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}

export default ContactCustomer;
