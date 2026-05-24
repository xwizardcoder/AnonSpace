import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("https://chat-app-backend-kvih.onrender.com");

const Chat = ({ username }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit("user_joined", username);

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [username]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      const data = { username, message };
      socket.emit("send_message", data);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="w-full h-[75vh] flex flex-col bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
      
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5">
        <div>
          <h2 className="text-white text-xl font-bold">
            Community Chat
          </h2>

          <p className="text-slate-300 text-sm">
            Connected as {username}
          </p>
        </div>

        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-5 space-y-4 bg-gradient-to-b from-slate-900/40 to-slate-950/60">
        
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-400 text-center">
            <p>
              No messages yet. <br />
              Start the conversation
            </p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.username === username
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] md:max-w-[70%] px-4 py-3 rounded-2xl shadow-lg ${
                  msg.username === username
                    ? "bg-cyan-500 text-slate-900 rounded-br-md"
                    : "bg-white/10 text-white rounded-bl-md border border-white/10"
                }`}
              >
                <p className="text-xs font-semibold mb-1 opacity-80">
                  {msg.username}
                </p>

                <p className="break-words text-sm md:text-base">
                  {msg.message}
                </p>
              </div>
            </div>
          ))
        )}

        <div ref={messagesEndRef}></div>
      </div>

      <div className="p-4 border-t border-white/10 bg-slate-900/70">
        <div className="flex items-center gap-3">
          
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-slate-600 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
          />

          <button
            onClick={sendMessage}
            className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            Send
          </button>

        </div>
      </div>
    </div>
  );
};

export default Chat;
