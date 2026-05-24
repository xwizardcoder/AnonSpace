import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("https://chat-app-backend-kvih.onrender.com");

const Chat = ({ username }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("user_joined", username);

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [username]);

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
    <div className="w-full h-full flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
      
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        
        <div>
          <h2 className="text-white text-2xl font-bold tracking-wide">
            Community Chat
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Connected as @{username}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>

          <span className="text-slate-300 text-sm hidden sm:block">
            Online
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 md:px-6 py-6 space-y-5 bg-gradient-to-b from-slate-900/20 to-slate-950/40">
        
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            
            <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-5">
              <span className="text-4xl text-white font-bold">R</span>
            </div>

            <h3 className="text-white text-xl font-semibold mb-2">
              No Messages Yet
            </h3>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              Start the conversation and connect with people in the anonymous community.
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
                className={`relative max-w-[85%] md:max-w-[70%] px-5 py-4 rounded-3xl shadow-xl transition-all duration-300 ${
                  msg.username === username
                    ? "bg-cyan-500 text-slate-950 rounded-br-md"
                    : "bg-white/10 text-white rounded-bl-md border border-white/10 backdrop-blur-lg"
                }`}
              >
                <p
                  className={`text-xs font-semibold mb-2 ${
                    msg.username === username
                      ? "text-slate-800"
                      : "text-cyan-300"
                  }`}
                >
                  {msg.username}
                </p>

                <p className="break-words text-sm md:text-base leading-relaxed">
                  {msg.message}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 md:p-5 border-t border-white/10 bg-slate-950/40 backdrop-blur-xl">
        
        <div className="flex items-center gap-3">
          
          <input
            type="text"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 h-14 px-5 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300"
          />

          <button
            onClick={sendMessage}
            className="h-14 px-7 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Send
          </button>

        </div>
      </div>
    </div>
  );
};

export default Chat;