import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://chat-app-backend.onrender.com");


const Chat = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  const joinChat = () => {
    if (username.trim()) {
      socket.emit("join_chat", username);
      setJoined(true);
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      const messageData = { username, message };
      socket.emit("send_message", messageData);
      setMessage("");
    }
  };

  return (
    <div>
      {!joined ? (
        <div>
          <h2>Enter your name to join the chat</h2>
          <input
            type="text"
            placeholder="Your name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={joinChat}>Join</button>
        </div>
      ) : (
        <div>
          <h2>Chat Room</h2>
          <div>
            {messages.map((msg, index) => (
              <p key={index}>
                <strong>{msg.username}:</strong> {msg.message}
              </p>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Chat;
