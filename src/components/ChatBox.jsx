import React from "react";

function ChatBox({ messages }) {
  return (
    <div className="chat-box">
      {messages.map((msg, index) => (
        <div key={index} className={`msg ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default ChatBox;