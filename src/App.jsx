import React, { useState, useEffect } from "react";
import socket from "./socket/socket";
import ChatBox from "./components/ChatBox.jsx";
import InputBox from "./components/InputBox.jsx";
import StatusBar from "./components/StatusBar.jsx";
import "./styles/style.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    socket.on("searching", () => {
      setStatus("searching");
      setMessages([]);
    });

    socket.on("connected", () => {
      setStatus("connected");
    });

    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, { text: msg, sender: "other" }]);
    });

    socket.on("partner_disconnected", () => {
      setStatus("searching");
      setMessages((prev) => [
        ...prev,
        { text: "Partner disconnected", sender: "system" },
      ]);
    });

    return () => {
      socket.off();
    };
  }, []);

  const startChat = () => {
    socket.emit("start");
  };

  const sendMessage = (msg) => {
    socket.emit("message", msg);
    setMessages((prev) => [...prev, { text: msg, sender: "me" }]);
  };

  const skipChat = () => {
    socket.emit("skip");
  };

  return (
    <div className="container">
      <h2>Anonymous Chat</h2>

      <StatusBar status={status} />

      {status === "idle" && (
        <button onClick={startChat}>Start Chat</button>
      )}

      {status !== "idle" && (
        <>
          <ChatBox messages={messages} />
          {status === "connected" && (
            <InputBox onSend={sendMessage} />
          )}
          <button onClick={skipChat}>Skip</button>
        </>
      )}
    </div>
  );
}

export default App;